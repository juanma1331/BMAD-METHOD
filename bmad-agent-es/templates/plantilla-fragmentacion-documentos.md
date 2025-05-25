# Plantilla de Plan de Fragmentación de Documentos

Este plan dirige al agente sobre cómo dividir documentos fuente grandes en archivos más pequeños y granulares durante su Fase de Bibliotecario. El agente se referirá a este plan para identificar documentos fuente, las secciones específicas a extraer, y los nombres de archivo objetivo para el contenido fragmentado.

---

## 1. Documento Fuente: PRD (Documento de Requisitos del Proyecto)

- **Nota para el Agente:** Confirmar el nombre exacto del archivo del PRD con el usuario (ej. `PRD.md`, `RequisitosProyecto.md`, `prdx.y.z.md`).

### 1.1. Granulación de Épicas

- **Instrucción:** Para cada Épica identificada dentro del PRD:
- **Sección(es) Fuente a Copiar:** El texto completo para la Épica, incluyendo su descripción principal, objetivos, y todas las historias de usuario asociadas o requisitos detallados bajo esa Épica. Asegurar capturar contenido comenzando desde un encabezado como "**Épica X:**" hasta el siguiente encabezado similar o final de la sección "Resumen de Épicas".
- **Patrón de Archivo Objetivo:** `docs/epica-<id>.md`
  - _Nota del Agente: `<id>` debe corresponder al número de la Épica._

---

## 2. Documento Fuente: Documento de Arquitectura Principal

- **Nota para el Agente:** Confirmar el nombre exacto del archivo con el usuario (ej. `architecture.md`, `ArquitecturaSistema.md`).

### 2.1. Gránulos de Arquitectura Central

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Referencia API", "Endpoints API", o "Interfaces de Servicio".
- **Archivo Objetivo:** `docs/referencia-api.md`

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Modelos de Datos", "Esquema de Base de Datos", "Definiciones de Entidades".
- **Archivo Objetivo:** `docs/modelos-datos.md`

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Documentación de Variables de Entorno", "Configuraciones", "Parámetros de Despliegue", o subsecciones relevantes dentro de "Resumen de Infraestructura y Despliegue" si no se encuentra una sección dedicada.
- **Archivo Objetivo:** `docs/variables-entorno.md`

  - _Nota del Agente: Priorizar una sección dedicada 'Variables de Entorno' o fuente enlazada 'variables-entorno.md' si está disponible. Si no, extraer detalles de configuración relevantes de 'Resumen de Infraestructura y Despliegue'. Este fragmento es para definiciones específicas de variables y uso._

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Estructura del Proyecto".
- **Archivo Objetivo:** `docs/estructura-proyecto.md`

  - _Nota del Agente: Si el proyecto involucra múltiples repositorios (no un monorepo), asegurar que este archivo describa claramente la estructura de cada repositorio relevante o enlace a sub-archivos si es necesario._

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Stack Tecnológico", "Tecnologías Clave", "Bibliotecas y Frameworks", o "Selecciones Definitivas de Stack Tecnológico".
- **Archivo Objetivo:** `docs/stack-tecnologico.md`

- **Sección(es) Fuente a Copiar:** Secciones detallando "Estándares de Codificación", "Directrices de Desarrollo", "Mejores Prácticas", "Estrategia de Testing", "Decisiones de Testing", "Procesos QA", "Estrategia General de Testing", "Estrategia de Manejo de Errores", y "Mejores Prácticas de Seguridad".
- **Archivo Objetivo:** `docs/directrices-operacionales.md`

  - _Nota del Agente: Este archivo consolida varios aspectos operacionales clave. Asegurar que el contenido de cada sección fuente ("Estándares de Codificación", "Estrategia de Testing", "Estrategia de Manejo de Errores", "Mejores Prácticas de Seguridad") esté claramente delineado bajo su propio encabezado H3 (###) o H4 (####) dentro de este documento._

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Vista de Componentes" (incluyendo sub-secciones como "Patrones Arquitectónicos / de Diseño Adoptados").
- **Archivo Objetivo:** `docs/vista-componentes.md`

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Flujo de Trabajo Central / Diagramas de Secuencia" (incluyendo todos los sub-diagramas).
- **Archivo Objetivo:** `docs/diagramas-secuencia.md`

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Resumen de Infraestructura y Despliegue".
- **Archivo Objetivo:** `docs/infraestructura-despliegue.md`

  - _Nota del Agente: Esto es para el resumen más amplio, distinto del específico `docs/variables-entorno.md`._

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Documentos de Referencia Clave".
- **Archivo Objetivo:** `docs/referencias-clave.md`

---

## 3. Documento(s) Fuente: Documentación Específica de Front-End

- **Nota para el Agente:** Confirmar nombres de archivo con el usuario (ej. `arquitectura-frontend.md`, `especificacion-frontend.md`, `directrices-ui.md`). Pueden existir múltiples documentos FE.

### 3.1. Gránulos de Front-End

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Estructura de Proyecto Front-End" o "Estructura Detallada de Directorios Frontend".
- **Archivo Objetivo:** `docs/estructura-proyecto-frontend.md`

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Guía de Estilo UI", "Directrices de Marca", "Especificaciones de Diseño Visual", o "Enfoque de Estilos".
- **Archivo Objetivo:** `docs/guia-estilo-frontend.md`

  - _Nota del Agente: Esta sección podría ser una sub-sección o referir a otros documentos (ej. `especificacion-ui-ux.txt`). Extraer la filosofía central de estilos y enfoque definido dentro del documento de arquitectura frontend mismo._

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Biblioteca de Componentes", "Guía de Componentes UI Reutilizables", "Elementos de Diseño Atómico", o "Desglose de Componentes y Detalles de Implementación".
- **Archivo Objetivo:** `docs/guia-componentes-frontend.md`

- **Sección(es) Fuente a Copiar:** Sección(es) detallando "Estándares de Codificación Front-End" (específicamente para desarrollo UI, ej. estilo JavaScript/TypeScript, convenciones de nomenclatura CSS, mejores prácticas de accesibilidad para FE).
- **Archivo Objetivo:** `docs/estandares-codificacion-frontend.md`

  - _Nota del Agente: Una sección dedicada de nivel superior para esto podría no existir. Si no se encuentra, este fragmento podría estar vacío o requerir referencia cruzada con los estándares de codificación de la arquitectura principal. Extraer cualquier convención de codificación específica de frontend mencionada._

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Gestión de Estado en Profundidad".
- **Archivo Objetivo:** `docs/gestion-estado-frontend.md`

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Capa de Interacción API".
- **Archivo Objetivo:** `docs/interaccion-api-frontend.md`

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Estrategia de Enrutamiento".
- **Archivo Objetivo:** `docs/estrategia-enrutamiento-frontend.md`

- **Sección(es) Fuente a Copiar:** Sección(es) tituladas "Estrategia de Testing Frontend".
- **Archivo Objetivo:** `docs/estrategia-testing-frontend.md`

---

CRÍTICO: **Gestión de Índice:** Después de crear los archivos, actualizar `docs/index.md` según sea necesario para referenciar y describir cada doc - no mencionar gránulos o de dónde fue fragmentado, solo propósito del doc - ya que el índice también contiene potencialmente otras referencias de documentos.
