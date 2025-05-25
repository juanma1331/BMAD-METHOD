# BMad Agent - Versión en Español

Esta es la versión completamente traducida al español del sistema de agentes BMad (Breakthrough Method of Agile AI-driven Development). Todos los agentes, tareas, plantillas y documentación han sido cuidadosamente traducidos manteniendo la precisión técnica y la sensibilidad específica para instrucciones de IA.

## 🌟 Características Principales

- **Orquestadores Completos:** Versiones IDE y Web completamente funcionales
- **8 Agentes Especializados:** Cada uno con personalidad y expertise únicos
- **Tareas Detalladas:** Instrucciones paso a paso para procesos complejos
- **Plantillas Profesionales:** Documentos estructurados para resultados consistentes
- **Listas de Verificación:** Validación de calidad comprensiva (174 puntos total)
- **Base de Conocimiento:** Documentación completa del método BMad

## 📁 Estructura del Proyecto

```
bmad-agent-es/
├── README.md                           # Este archivo
├── ide-bmad-orchestrator.md           # Orquestador principal para IDEs
├── ide-bmad-orchestrator-cfg.md       # Configuración del orquestador IDE
├── web-bmad-orchestrator-agent.md     # Orquestador para agentes web
├── web-bmad-orchestrator-agent-cfg.md # Configuración del orquestador web
├── personas/                           # Agentes especializados
│   ├── analista.md                    # Investigación y análisis
│   ├── arquitecto.md                  # Diseño de sistemas
│   ├── arquitecto-diseno.md           # Diseño UX/UI y frontend
│   ├── dev.ide.md                     # Desarrollo full-stack
│   ├── pm.md                          # Product Manager
│   ├── po.md                          # Product Owner
│   ├── sm.ide.md                      # Scrum Master (IDE)
│   └── sm.md                          # Scrum Master (completo)
├── tasks/                             # Tareas ejecutables
│   ├── crear-prd.md                   # Creación de PRD
│   ├── crear-arquitectura.md          # Diseño arquitectónico
│   ├── crear-siguiente-historia-tarea.md # Generación de historias
│   ├── crear-arquitectura-frontend.md # Arquitectura frontend
│   ├── crear-especificacion-uxui.md   # Especificaciones UX/UI
│   ├── crear-prompt-frontend-ia.md    # Prompts para IA frontend
│   ├── crear-prompt-investigacion-profunda.md # Investigación profunda
│   ├── corregir-rumbo.md              # Corrección de curso
│   ├── ejecutar-lista-verificacion.md # Ejecutar listas de verificación
│   ├── tarea-fragmentacion-documentos.md # Fragmentación de documentos
│   ├── tarea-indexacion-biblioteca.md # Indexación de biblioteca
│   └── mapeo-listas.yml               # Mapeo de listas de verificación
├── templates/                         # Plantillas de documentos
│   ├── prd-tmpl.md                    # Plantilla de PRD
│   ├── architecture-tmpl.md           # Plantilla de arquitectura
│   ├── story-tmpl.md                  # Plantilla de historia de usuario
│   ├── plantilla-arquitectura-frontend.md # Plantilla arquitectura frontend
│   ├── plantilla-especificacion-frontend.md # Plantilla especificación frontend
│   ├── plantilla-resumen-proyecto.md  # Plantilla resumen de proyecto
│   └── plantilla-fragmentacion-documentos.md # Plantilla fragmentación
├── checklists/                        # Listas de verificación
│   ├── po-master-checklist.md         # Lista maestra del PO
│   ├── architect-checklist.md         # Lista del arquitecto
│   ├── lista-arquitectura-frontend.md # Lista arquitectura frontend
│   ├── lista-pm.md                    # Lista del Product Manager
│   ├── lista-cambios.md               # Lista de navegación de cambios
│   ├── lista-definicion-terminado.md  # Lista definición de "terminado"
│   └── lista-borrador-historia.md     # Lista borrador de historia
└── data/                              # Datos de referencia
    ├── bmad-kb.md                     # Base de conocimiento BMad
    └── technical-preferences.txt      # Preferencias técnicas
```

## 🚀 Inicio Rápido

### Para IDEs (Recomendado para Desarrollo)

1. **Copia la carpeta completa** `bmad-agent-es` a tu proyecto
2. **Configura el Orquestador IDE:**
   - Copia el contenido de `ide-bmad-orchestrator.md` a tu agente personalizado del IDE
   - Asegúrate de que el archivo de configuración `ide-bmad-orchestrator-cfg.md` esté accesible
3. **Inicia una sesión:** El orquestador cargará automáticamente la configuración y te mostrará los agentes disponibles

### Para Agentes Web (Gemini, ChatGPT, etc.)

1. **Copia el contenido** de `web-bmad-orchestrator-agent.md` como instrucciones del agente
2. **Adjunta los archivos** de la carpeta `bmad-agent-es` al agente web
3. **Usa comandos:** Comienza con `/help` para ver todas las opciones disponibles

## 👥 Agentes Disponibles

### 🎯 **Analista (Larry)**
*"El sabelotodo entusiasta"*
- Investigación de mercado y análisis competitivo
- Lluvia de ideas y validación de conceptos
- Creación de resúmenes de proyecto

### 📋 **Product Owner (Curly)**
*"El maestro de requisitos"*
- Creación y mantenimiento de PRDs
- Definición de épicas e historias de usuario
- Gestión de backlog y priorización

### 🏗️ **Arquitecto (Mo)**
*"El cerebro técnico frío y calculador"*
- Diseño de arquitectura de sistemas
- Decisiones técnicas fundamentales
- Documentación arquitectónica

### 🎨 **Arquitecto de Diseño (Millie)**
*"Divertida y despreocupada, maestra del frontend"*
- Diseño UX/UI y especificaciones frontend
- Arquitectura frontend completa
- Generación de prompts para IAs de UI

### 📊 **Product Manager (Jack)**
*"Obsesionado con el PRD perfecto"*
- Estrategia de producto y roadmap
- Análisis de mercado y competencia
- Visión de producto a largo plazo

### 👨‍💻 **Desarrollador (Dev)**
*"El generalista experto senior"*
- Desarrollo end-to-end
- Implementación de APIs y servicios
- Integración de sistemas

### 🏃‍♀️ **Scrum Master (SallySM)**
*"Súper técnica y orientada a detalles"*
- Gestión de procesos ágiles
- Generación de historias de usuario
- Facilitación de ceremonias

## 🔄 Flujo de Trabajo Típico

### 1. **Ideación**
```
Agente: Analista
Tareas: Lluvia de ideas → Investigación → Resumen de proyecto
```

### 2. **Definición de Producto**
```
Agente: Product Owner
Tareas: Crear PRD → Definir épicas → Crear historias
```

### 3. **Diseño Técnico**
```
Agente: Arquitecto
Tareas: Crear arquitectura → Validar con checklist
```

### 4. **Desarrollo**
```
Agente: Desarrollador
Tareas: Implementar historias → Testing → Integración
```

### 5. **Gestión de Proceso**
```
Agente: Scrum Master
Tareas: Planificar sprints → Facilitar ceremonias → Generar historias
```

## 📋 Listas de Verificación Incluidas

- **Lista Maestra del PO:** 91 puntos de verificación para PRDs
- **Lista del Arquitecto:** 83 puntos de verificación para arquitectura
- **Lista de Arquitectura Frontend:** Verificación completa de especificaciones frontend
- **Lista del Product Manager:** Validación de requisitos y definición de producto
- **Lista de Navegación de Cambios:** Guía sistemática para manejar cambios y pivotes
- **Lista de Definición de "Terminado":** Criterios para completar historias de usuario
- **Lista de Borrador de Historia:** Validación de historias antes de desarrollo
- **Evaluación de Calidad:** Sistemas de puntuación para medir preparación

## 🛠️ Plantillas Profesionales

- **PRD Template:** Documento completo de requisitos de producto
- **Architecture Template:** Documentación arquitectónica comprensiva
- **Story Template:** Historias de usuario detalladas con criterios de aceptación
- **Frontend Architecture Template:** Arquitectura frontend completa y especificaciones
- **Frontend Spec Template:** Especificaciones detalladas de UX/UI y componentes
- **Project Brief Template:** Resumen ejecutivo y contexto inicial del proyecto
- **Document Sharding Template:** Fragmentación y organización de documentos grandes

## 📚 Base de Conocimiento

El archivo `bmad-kb.md` contiene:
- Principios fundamentales del método BMad
- Mejores prácticas para cada agente
- Flujos de trabajo recomendados
- Troubleshooting común
- Métricas y KPIs

## ⚙️ Configuración Técnica

### Preferencias por Defecto
- **Backend:** Python (FastAPI), Node.js (Express), TypeScript
- **Frontend:** React (Next.js), Vue.js, TypeScript
- **Bases de Datos:** PostgreSQL, MongoDB, Redis
- **Cloud:** AWS, Vercel, Google Cloud Platform
- **DevOps:** Docker, GitHub Actions, Kubernetes

### Personalización
Edita `technical-preferences.txt` para adaptar las preferencias técnicas a tu proyecto específico.

## 🎯 Casos de Uso

### Desarrollo de Aplicaciones Web
- SPAs, PWAs, aplicaciones móviles web
- APIs REST, microservicios, serverless
- Aplicaciones full-stack completas

### Sistemas Empresariales
- CRM/ERP, plataformas de análisis
- Sistemas de integración y middleware
- Arquitecturas de microservicios

### Productos Digitales
- Software como servicio (SaaS)
- Marketplaces y plataformas de comercio
- Sistemas de gestión de contenido

## 🔧 Solución de Problemas

### Problemas Comunes
1. **Error de carga de configuración:** Verifica que `ide-bmad-orchestrator-cfg.md` esté en la ruta correcta
2. **Agente no encontrado:** Revisa los nombres de agentes en la configuración
3. **Tarea no disponible:** Confirma que el archivo de tarea existe en la carpeta `tasks/`

### Soporte
- Revisa la base de conocimiento en `bmad-kb.md`
- Consulta las listas de verificación para validar calidad
- Usa el comando `/help` en el orquestador web para obtener ayuda

## 📈 Métricas de Éxito

- **Tiempo de Ciclo:** Desde ideación hasta entrega
- **Calidad de Artefactos:** Puntuación de listas de verificación
- **Eficiencia de Handoffs:** Calidad de transiciones entre agentes
- **Completitud de Funcionalidades:** Cobertura de requisitos

## 🤝 Contribuciones

Para mejorar esta versión en español:
1. Mantén la precisión técnica en las traducciones
2. Preserva la sensibilidad específica para instrucciones de IA
3. Asegura consistencia en terminología técnica
4. Valida que los flujos de trabajo funcionen correctamente

---

**Versión:** BMad Method v3 - Español
**Última Actualización:** 2025
**Licencia:** Consulta el archivo de licencia del proyecto principal

*¡Disfruta desarrollando con el poder del Método BMad en español!* 🚀
