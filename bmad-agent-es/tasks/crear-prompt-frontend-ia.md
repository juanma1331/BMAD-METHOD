# Tarea de Crear Prompt Frontend IA

## Propósito

Generar un prompt magistral, comprensivo y optimizado que pueda usarse con herramientas de desarrollo frontend impulsadas por IA (ej. Lovable, Vercel v0, o similares) para estructurar o generar porciones significativas de la aplicación frontend.

## Inputs

- Especificación UI/UX Completada (`plantilla-especificacion-frontend`)
- Documento de Arquitectura Frontend Completado (`plantilla-arquitectura-frontend`)
- Documento de Arquitectura Principal del Sistema (`architecture` - para contratos API y stack tecnológico)
- Archivos de Diseño Primarios (Figma, Sketch, etc. - para contexto visual si la herramienta puede aceptarlo o si se necesitan descripciones)

## Actividades Clave e Instrucciones

1.  **Confirmar Plataforma de Generación IA Objetivo:**

    - Pide al usuario que especifique qué herramienta/plataforma de generación frontend IA pretenden usar (ej. "Lovable.ai", "Vercel v0", "GPT-4 con instrucciones directas de generación de código", etc.).
    - Explica que la optimización del prompt podría diferir ligeramente basándose en las capacidades de la plataforma y formato de entrada preferido.

2.  **Sintetizar Inputs en un Prompt Estructurado:**

    - **Contexto General del Proyecto:**
      - Declarar brevemente el propósito del proyecto (del resumen/PRD).
      - Especificar el framework frontend elegido, bibliotecas centrales, y biblioteca de componentes UI (de `plantilla-arquitectura-frontend` y `architecture` principal).
      - Mencionar el enfoque de estilos (ej. Tailwind CSS, CSS Modules).
    - **Sistema de Diseño y Visuales:**
      - Referenciar los archivos de diseño primarios (ej. enlace de Figma).
      - Si la herramienta no ingiere directamente archivos de diseño, describir el estilo visual general, paleta de colores, tipografía, y elementos clave de marca (de `plantilla-especificacion-frontend`).
      - Listar cualquier componente UI global o tokens de diseño que deban definirse o adherirse.
    - **Estructura de Aplicación y Enrutamiento:**
      - Describir las páginas/vistas principales y sus rutas (de `plantilla-arquitectura-frontend` - Estrategia de Enrutamiento).
      - Delinear la estructura de navegación (de `plantilla-especificacion-frontend`).
    - **Flujos de Usuario Clave e Interacciones a Nivel de Página:**
      - Para algunos flujos de usuario críticos (de `plantilla-especificacion-frontend`):
        - Describir la secuencia de acciones del usuario y cambios UI esperados en cada página relevante.
        - Especificar llamadas API a realizar (referenciando endpoints API de la `architecture` principal) y cómo los datos deben mostrarse o usarse.
    - **Instrucciones de Generación de Componentes (Iterativo o Componentes Clave):**
      - Basándose en las capacidades de la herramienta IA elegida, decidir sobre una estrategia:
        - **Opción 1 (Estructuración):** Prompt para la generación de estructuras de página principales, layouts, y marcadores de posición para componentes.
        - **Opción 2 (Generación de Componentes Clave):** Seleccionar algunos componentes críticos o complejos de la `plantilla-arquitectura-frontend` (Desglose de Componentes) y proporcionar especificaciones detalladas para ellos (props, estado, comportamiento básico, elementos UI clave).
        - **Opción 3 (Holístico, si la herramienta lo soporta):** Intentar describir toda la estructura de aplicación y componentes clave más ampliamente.
      - <nota_importante>Aconsejar al usuario que generar una aplicación compleja entera perfectamente de una vez es raro. El prompting iterativo o enfocarse en secciones/componentes clave es a menudo más efectivo.</nota_importante>
    - **Gestión de Estado (Punteros de Alto Nivel):**
      - Mencionar la solución de gestión de estado elegida (ej. "Usar Redux Toolkit").
      - Para piezas clave de datos, indicar si deben manejarse en estado global.
    - **Puntos de Integración API:**
      - Para páginas/componentes que obtienen o envían datos, declarar claramente los endpoints API relevantes (de `architecture`) y las formas de datos esperadas (puede referenciar esquemas en secciones `modelos-datos` o `referencia-api` del doc de arquitectura).
    - **"No Hacer" Críticos o Restricciones:**
      - ej. "No usar bibliotecas deprecadas." "Asegurar que todos los formularios tengan validación básica del lado del cliente."
    - **Optimizaciones Específicas de Plataforma:**
      - Si la herramienta IA elegida tiene mejores prácticas conocidas para prompting (ej. palabras clave específicas, estructura, nivel de detalle), incorporarlas. (Esto podría requerir que el agente tenga algún conocimiento general o preguntar al usuario si conoce tales modificadores de prompt específicos para su herramienta elegida).

3.  **Presentar y Refinar el Prompt Maestro:**
    - Generar el prompt generado en un formato claro y copiable (ej. un bloque de código grande).
    - Explicar la estructura del prompt y por qué se incluyó cierta información.
    - Trabajar con el usuario para refinar el prompt basándose en su conocimiento de la herramienta IA objetivo y cualquier matiz específico que quieran enfatizar.
    - <nota_importante>Recordar al usuario que el código generado de la herramienta IA probablemente requerirá revisión, testing, y refinamiento adicional por desarrolladores.</nota_importante>
