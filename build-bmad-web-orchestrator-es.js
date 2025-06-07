#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// Check if the --bundle flag is present in the arguments.
const createBundle = process.argv.includes('--bundle');

const configFilePath = "./build-agent-cfg-es.js";
let config;
try {
  config = require(configFilePath);
} catch (error) {
  console.error(
    `Error loading configuration file '${configFilePath}': ${error.message}`
  );
  if (error.code === "MODULE_NOT_FOUND") {
    console.error(
      `Ensure '${path.resolve(
        __dirname,
        configFilePath
      )}' exists and is a valid JavaScript module.`
    );
  }
  process.exit(1);
}

function getBaseFilename(filePath) {
  const filenameWithExt = path.basename(filePath);
  const lastExt = path.extname(filenameWithExt);
  if (lastExt) {
    return filenameWithExt.slice(0, -lastExt.length);
  }
  return filenameWithExt;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function main() {
  console.log(
    `Loading configuration from: ${path.resolve(__dirname, configFilePath)}`
  );

  if (
    !config ||
    !config.asset_root ||
    !config.build_dir ||
    !config.orchestrator_agent_prompt ||
    !config.agent_cfg
  ) {
    console.error(
      "Error: Missing required fields (asset_root, build_dir, orchestrator_agent_prompt, agent_cfg) in configuration file."
    );
    process.exit(1);
  }

  const assetFolderRoot = path.resolve(__dirname, config.asset_root);
  if (!fs.existsSync(assetFolderRoot) || !fs.statSync(assetFolderRoot).isDirectory()) {
    console.error(`Error: Asset folder root '${assetFolderRoot}' not found or not a directory.`);
    process.exit(1);
  }
  console.log(`Using resolved asset folder root: ${assetFolderRoot}`);

  const buildDir = path.resolve(__dirname, config.build_dir);
  ensureDirectoryExists(buildDir);
  console.log(`Build directory is: ${buildDir}`);

  if (createBundle) {
    console.log("-> --bundle flag detected. A single prompt bundle file will be generated at the end.");
  }

  const buildDirNameOnly = path.basename(buildDir);

  const orchestratorPromptPath = path.resolve(__dirname, config.orchestrator_agent_prompt);
  if (!fs.existsSync(orchestratorPromptPath) || !fs.statSync(orchestratorPromptPath).isFile()) {
    console.error(`Error: Orchestrator agent prompt file '${orchestratorPromptPath}' not found or not a file.`);
    process.exit(1);
  }

  const agentPromptOutputPath = path.join(buildDir, "agent-prompt.txt");
  const promptContent = fs.readFileSync(orchestratorPromptPath, "utf8");
  fs.writeFileSync(agentPromptOutputPath, promptContent);
  console.log(`\nSuccessfully generated '${agentPromptOutputPath}'`);

  console.log(`\nDiscovering source directories in '${assetFolderRoot}' (excluding '${buildDirNameOnly}')...`);
  const sourceSubdirNames = fs
    .readdirSync(assetFolderRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== buildDirNameOnly)
    .map((dirent) => dirent.name);

  if (sourceSubdirNames.length === 0) {
    console.warn(`Warning: No source subdirectories found in '${assetFolderRoot}'. No asset bundles will be created.`);
  } else {
    console.log(`Found source directories to process: ${sourceSubdirNames.join(", ")}`);
  }

  const agentConfigPath = path.resolve(__dirname, config.agent_cfg);
  if (!fs.existsSync(agentConfigPath) || !fs.statSync(agentConfigPath).isFile()) {
    console.error(`Error: Agent config file '${agentConfigPath}' not found or not a file.`);
    process.exit(1);
  }

  const agentConfigOutputPath = path.join(buildDir, "agent-config.txt");
  const configContent = fs.readFileSync(agentConfigPath, "utf8");
  fs.writeFileSync(agentConfigOutputPath, configContent);
  console.log(`\nSuccessfully copied agent configuration to '${agentConfigOutputPath}'`);

  for (const subdirName of sourceSubdirNames) {
    const sourceSubdirPath = path.join(assetFolderRoot, subdirName);
    const outputFilename = `${subdirName}.txt`;
    const targetFile = path.join(buildDir, outputFilename);

    console.log(`\nProcessing '${subdirName}' directory into '${targetFile}'`);

    if (fs.existsSync(targetFile)) {
      fs.unlinkSync(targetFile);
    }
    fs.writeFileSync(targetFile, "");

    const files = fs.readdirSync(sourceSubdirPath);
    if (files.length === 0) {
      console.warn(`Warning: Source directory '${sourceSubdirPath}' is empty. '${targetFile}' will remain empty.`);
      continue;
    }

    for (const filenameWithExt of files) {
      const filePath = path.join(sourceSubdirPath, filenameWithExt);
      if (fs.statSync(filePath).isFile()) {
        const baseName = getBaseFilename(filenameWithExt);

        if (baseName.endsWith(".ide")) {
          console.log(`  Skipping IDE-specific file: '${filenameWithExt}' in '${subdirName}'`);
          continue;
        }

        console.log(`  Appending content from '${filenameWithExt}' (as '${baseName}') to '${targetFile}'`);

        const fileContent = fs.readFileSync(filePath, "utf8");
        const startMarker = `==================== START: ${baseName} ====================\n`;
        const endMarker = `\n==================== END: ${baseName} ====================\n\n\n`;

        fs.appendFileSync(targetFile, startMarker);
        fs.appendFileSync(targetFile, fileContent);
        if (!fileContent.endsWith("\n")) {
          fs.appendFileSync(targetFile, "\n");
        }
        fs.appendFileSync(targetFile, endMarker);
      }
    }
    console.log(`Finished processing '${subdirName}'.`);
  }

  if (createBundle) {
    console.log("\nCreating single-file bundle...");
    const bundleOutputPath = path.join(buildDir, "bmad-prompt-bundle-es.md");
    
    let bundleContent = [];

    bundleContent.push(`# PROMPT\n\`\`\`txt\n${promptContent}\n\`\`\`\n`);
    bundleContent.push(`## Assets\n`);
    bundleContent.push(`### Config\n\`\`\`txt\n${configContent}\n\`\`\`\n`);

    for (const subdirName of sourceSubdirNames) {
      const assetFilePath = path.join(buildDir, `${subdirName}.txt`);
      if (fs.existsSync(assetFilePath)) {
        const assetContent = fs.readFileSync(assetFilePath, "utf8");
        if (assetContent.trim()) {
          const sectionTitle = subdirName.charAt(0).toUpperCase() + subdirName.slice(1);
          bundleContent.push(`### ${sectionTitle}\n\`\`\`txt\n${assetContent}\n\`\`\`\n`);
        }
      }
    }
    
    fs.writeFileSync(bundleOutputPath, bundleContent.join("\n"));
    console.log(`-> Successfully generated single-file bundle: '${bundleOutputPath}'`);
  }

  console.log(`\nScript finished. Output files are in ${buildDir}`);
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});