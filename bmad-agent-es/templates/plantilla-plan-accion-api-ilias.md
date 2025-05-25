# Plan de Desarrollo: Acción API {ACTION_NAME}

## 1. Objetivo Principal:
Implementar y validar la Acción API `{ACTION_NAME}` para ILIAS, que permita {BREVE_DESCRIPCION_FUNCIONALIDAD}.

## 2. Alcance:
*   **Incluido:**
    *   Investigación del código ILIAS para la acción `{ACTION_NAME}`.
    *   Implementación del handler PHP: `api/actions/handle_{ACTION_NAME_SNAKE_CASE}.php`.
    *   Integración en `api/entry.php`.
    *   Despliegue en entorno de pruebas.
    *   Validación mediante `curl`.
    *   **Generación del documento de hallazgos técnicos (`ai-docs/research_findings_{ACTION_NAME_SNAKE_CASE}.md`) DESPUÉS de la validación exitosa, enfocado exclusivamente en el código y API interna de ILIAS.**
*   **Fuera del Alcance (para esta iteración):**
    *   Implementación de la "herramienta" correspondiente en el backend Python.
    *   Interfaz de usuario en el plugin ILIAS para esta acción específica.

## 3. Requisitos Clave/Criterios de Aceptación para la Acción API:
*   Endpoint: `POST api/entry.php?action={ACTION_NAME_SNAKE_CASE}` (Ajustar método HTTP si es GET)
*   Autenticación: Requiere `X-Auth-SID` válido en las cabeceras.
*   Parámetros de entrada (cuerpo JSON para POST, o parámetros URL para GET):
    ```json
    {JSON_INPUT_PARAMETERS_EJEMPLO} 
    // Para GET, esto podría ser una descripción de los parámetros URL esperados.
    ```
*   Respuesta Exitosa (HTTP 200 OK o 201 Created):
    ```json
    {JSON_SUCCESS_RESPONSE_EJEMPLO}
    ```
*   El nuevo módulo/funcionalidad debe ser visible/operativo en ILIAS según lo esperado.

## 4. Fases de Implementación Detalladas para el Agente IDE:

### Fase A: Investigación Inicial y Planificación de Implementación
*   A.1. **Ruta Absoluta Base para Investigación del Código ILIAS:** `{ABSOLUTE_ILIAS_CODE_PATH}`
*   A.2. **Contexto para la investigación (relativo a la ruta base):** {INVESTIGATION_PATH_HINT}
*   A.3. **Analizar el código fuente de ILIAS (ubicado en la ruta absoluta proporcionada) para determinar:**
    *   Clases principales de ILIAS involucradas para `{ACTION_NAME}`.
    *   Proceso programático interno de ILIAS para la acción.
    *   Mecanismos de almacenamiento y asociación de contenido específicos de ILIAS (si aplica).
    *   Permisos internos de ILIAS necesarios.
*   A.4. **Planificar los cambios necesarios en los archivos PHP del plugin.**

### Fase B: Implementación del Handler PHP
*   B.1. Crear/Modificar `api/actions/handle_{ACTION_NAME_SNAKE_CASE}.php`.
*   B.2. Definir la función `handle{ACTION_NAME_PASCAL_CASE}(ILIAS\DI\Container $DIC, ?array $input, int $user_id): array`.
*   B.3. Validar parámetros de entrada.
*   B.4. Verificar permisos del usuario ILIAS.
*   B.5. Implementar la lógica usando **exclusivamente clases y métodos internos de ILIAS**.
*   B.6. Implementar manejo de errores robusto.
*   B.7. Devolver respuesta JSON de éxito/error.

### Fase C: Integración en `api/entry.php`
*   C.1. Añadir `{ACTION_NAME_SNAKE_CASE}` a `$valid_actions`.
*   C.2. Añadir `{ACTION_NAME_SNAKE_CASE}` a `$actions_requiring_auth` (si aplica).
*   C.3. Añadir `case '{ACTION_NAME_SNAKE_CASE}'` en el `switch`.

### Fase D: Despliegue y Validación Iterativa
*   D.1. **Desplegar:** Usar `uv run utils/upload.py`.
*   D.2. **Obtener SID (Agente IDE debe ejecutar esto primero):**
    ```bash
    curl -X GET 'https://jmdelaflor.ilias9.com/Customizing/global/plugins/Services/UIComponent/UserInterfaceHookapi/entry.php?action=login'
    # Extraer "sid" de la respuesta JSON.
    ```
*   D.3. **Probar Acción (reemplazar `<SID_OBTENIDO>` y datos):**
    ```bash
    # Ejemplo para POST:
    curl -X POST -H "Content-Type: application/json" -H "X-Auth-SID: <SID_OBTENIDO>" -d '{JSON_INPUT_PARAMETERS_EJEMPLO_PARA_CURL}' '{ENDPOINT_URL_EJEMPLO}'
    # Ejemplo para GET (si aplica):
    # curl -X GET -H "X-Auth-SID: <SID_OBTENIDO>" '{ENDPOINT_URL_EJEMPLO_CON_QUERY_PARAMS}'
    ```
*   D.4. **Iteración:** Si falla, analizar, corregir (Fase B/C, o A.3 si es necesario), redesplegar y reprobar hasta éxito.

### Fase E: Documentación de Hallazgos Técnicos de ILIAS (Post-Validación)
*   E.1. **UNA VEZ LA VALIDACIÓN (Fase D) ES COMPLETAMENTE EXITOSA:**
*   E.2. Generar `ai-docs/research_findings_{ACTION_NAME_SNAKE_CASE}.md`.
*   E.3. **Contenido (Estrictamente enfocado en ILIAS):**
    *   Acción ILIAS Implementada: `{ACTION_NAME}`.
    *   Clases Principales de ILIAS Utilizadas y su rol.
    *   Servicios de ILIAS Invocados (del `$DIC`).
    *   Secuencia de Llamadas Clave a la API Interna de ILIAS.
    *   Estructuras de Datos de ILIAS Relevantes.
    *   Consideraciones de Permisos de ILIAS.
    *   Puntos Críticos o Desafíos en la API de ILIAS.
    *   Comando `curl` de Validación (para referencia interna).
*   E.4. Guardar el documento. **No incluir detalles de implementación del plugin PHP aquí.**

### Fase F: Verificación Manual por Humano
*   F.1. Notificar al humano sobre implementación, validación y documentación de hallazgos.
*   F.2. Humano revisa código PHP, `research_findings_...md`, y funcionalidad en ILIAS.

## 5. Dependencias Identificadas:
*   Acceso al código fuente de ILIAS en `{ABSOLUTE_ILIAS_CODE_PATH}`.
*   Entorno ILIAS (`jmdelaflor.ilias9.com`) con plugin base.
*   Acción `login` GET operativa en `https://jmdelaflor.ilias9.com/.../entry.php?action=login`.

## 6. Consideraciones Adicionales/Notas:
*   Usar logging `$DIC->logger()->plugin('SurAgent')` en PHP.
*   Asegurar rutas absolutas en PHP.