# Tarea de Crear Especificación UI/UX

## Propósito

Trabajar colaborativamente con el usuario para definir y documentar las especificaciones de Interfaz de Usuario (UI) y Experiencia de Usuario (UX) para el proyecto. Esto involucra entender las necesidades del usuario, definir arquitectura de información, delinear flujos de usuario, y asegurar una base sólida para diseño visual y desarrollo frontend. La salida poblará un nuevo documento llamado `especificacion-frontend.md` siguiendo la plantilla `plantilla-especificacion-frontend`.

## Inputs

- Resumen del Proyecto (`resumen-proyecto.md` o equivalente)
- Documento de Requisitos de Producto (PRD) (`prd.md` o equivalente)
- Retroalimentación o investigación de usuario (si está disponible)

## Actividades Clave e Instrucciones

### 1. Entender Requisitos Centrales

- Revisar Resumen del Proyecto y PRD para captar objetivos del proyecto, audiencia objetivo, características clave, y cualquier restricción existente.
- Hacer preguntas aclaratorias sobre necesidades del usuario, puntos de dolor, y resultados deseados.

### 2. Definir Objetivos y Principios UX Generales (para `plantilla-especificacion-frontend`)

- Establecer y documentar colaborativamente:
  - Personas de Usuario Objetivo (obtener detalles o confirmar existentes).
  - Objetivos Clave de Usabilidad.
  - Principios de Diseño Centrales para el proyecto.

### 3. Desarrollar Arquitectura de Información (IA) (para `plantilla-especificacion-frontend`)

- Trabajar con el usuario para crear un Mapa del Sitio o Inventario de Pantallas.
- Definir la Estructura de Navegación primaria y secundaria.
- Usar diagramas Mermaid o listas según sea apropiado para la plantilla.

### 4. Delinear Flujos de Usuario Clave (para `plantilla-especificacion-frontend`)

- Identificar tareas críticas del usuario del PRD/resumen.
- Para cada flujo:
  - Definir el objetivo del usuario.
  - Mapear colaborativamente los pasos (usar diagramas Mermaid o descripciones detalladas paso a paso).
  - Considerar casos extremos y estados de error.

### 5. Discutir Estrategia de Wireframes y Mockups (para `plantilla-especificacion-frontend`)

- Clarificar dónde se crearán diseños visuales detallados (ej. Figma, Sketch) y asegurar que la `plantilla-especificacion-frontend` enlace correctamente a estos archivos de diseño primarios.
- Si se necesitan wireframes de baja fidelidad primero, ofrecer ayuda para conceptualizar layouts para pantallas clave.

### 6. Definir Enfoque de Biblioteca de Componentes / Sistema de Diseño (para `plantilla-especificacion-frontend`)

- Discutir si se usará un sistema de diseño existente o si necesita desarrollarse uno nuevo.
- Si es nuevo, identificar algunos componentes fundamentales para empezar (ej. Button, Input, Card) y sus estados/comportamientos clave a alto nivel. Las especificaciones técnicas detalladas estarán en `arquitectura-frontend`.

### 7. Establecer Fundamentos de Branding y Guía de Estilo (para `plantilla-especificacion-frontend`)

- Si existe una guía de estilo, enlazarla.
- Si no, definir colaborativamente marcadores de posición para: Paleta de Colores, Tipografía, Iconografía, Espaciado.

### 8. Especificar Requisitos de Accesibilidad (AX) (para `plantilla-especificacion-frontend`)

- Determinar el nivel de cumplimiento objetivo (ej. WCAG 2.1 AA).
- Listar cualquier requisito AX específico conocido.

### 9. Definir Estrategia de Responsividad (para `plantilla-especificacion-frontend`)

- Discutir y documentar Breakpoints clave.
- Describir la Estrategia de Adaptación general.

### 10. Generación de Salida y Refinamiento Iterativo (Guiado por `plantilla-especificacion-frontend`)

- **a. Sección de Borrador:** Poblar incrementalmente una sección lógica del archivo `plantilla-especificacion-frontend` basado en tus discusiones.
- **b. Presentar e Incorporar Retroalimentación Inicial:** Presentar la sección redactada al usuario para revisión. Discutir, explicar e incorporar su retroalimentación inicial y revisiones directamente.
- **c. [Ofrecer Opciones Avanzadas de Auto-Refinamiento y Obtención](#ofrecer-opciones-avanzadas-de-auto-refinamiento-y-obtención)**

## Ofrecer Opciones Avanzadas de Auto-Refinamiento y Obtención

(Esta sección se llama cuando se necesita antes de esto)

Presentar al usuario la siguiente lista de 'Acciones Avanzadas de Reflexión, Obtención y Lluvia de Ideas'. Explicar que estos son pasos opcionales para ayudar a asegurar calidad, explorar alternativas, y profundizar el entendimiento de la sección actual antes de finalizarla y continuar. El usuario puede seleccionar una acción por número, o elegir omitir esto y proceder a finalizar la sección.

"Para asegurar la calidad de la sección actual: **[Nombre de Sección Específica]** y para asegurar su robustez, explorar alternativas, y considerar todos los ángulos, puedo realizar cualquiera de las siguientes acciones. Por favor elige un número (8 para finalizar y proceder):

**Acciones Avanzadas de Reflexión, Obtención y Lluvia de Ideas que Puedo Tomar:**

{Instrucción para Agente AI: Mostrar el título de cada elemento numerado abajo. Si el usuario pregunta qué significa una opción específica, proporcionar una explicación breve de la acción que tomarás, basándote en descripciones detalladas adaptadas para el contexto.}

1.  **Auto-Revisión Crítica y Alineación con Objetivos del Usuario**
2.  **Generar y Evaluar Soluciones de Diseño Alternativas**
3.  **Prueba de Estrés de Journey de Usuario e Interacción (Conceptual)**
4.  **Análisis Profundo de Suposiciones y Restricciones de Diseño**
5.  **Revisión de Auditoría de Usabilidad y Accesibilidad y Preguntas Exploratorias**
6.  **Ideación Colaborativa y Lluvia de Ideas de Características UI**
7.  **Obtener 'Necesidades de Usuario No Previstas' y Preguntas de Interacción Futura**
8.  **Finalizar esta Sección y Proceder.**

Después de que realice la acción seleccionada, podemos discutir el resultado y decidir sobre cualquier revisión adicional para esta sección."

REPETIR preguntando al usuario si le gustaría realizar otra Acción de Reflexión, Obtención y Lluvia de Ideas HASTA que el usuario indique que es hora de proceder a la siguiente sección (o seleccione #8)
