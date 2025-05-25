# Tarea de Crear Arquitectura Frontend

## Propósito

Definir la arquitectura técnica para la aplicación frontend. Esto incluye seleccionar patrones apropiados, estructurar la base de código, definir estrategia de componentes, planificar gestión de estado, delinear interacciones API, y configurar enfoques de testing y despliegue, todo mientras se adhiere a las directrices en la plantilla `plantilla-arquitectura-frontend`.

## Inputs

- Documento de Requisitos de Producto (PRD) (`prd-tmpl` o equivalente)
- Especificación UI/UX Completada (`plantilla-especificacion-frontend` o equivalente)
- Documento de Arquitectura Principal del Sistema (`architecture` o equivalente) - El agente ejecutando esta tarea debe notar particularmente la estructura general del sistema (Monorepo/Polyrepo, arquitectura de servicios backend) detallada aquí, ya que influye en los patrones frontend.
- Archivos de Diseño Primarios (Figma, Sketch, etc., enlazados desde Especificación UI/UX)

## Actividades Clave e Instrucciones

### 1. Confirmar Modo de Interacción

- Preguntar al usuario: "¿Cómo te gustaría proceder con la creación de la arquitectura frontend? Podemos trabajar:
  A. **Incrementalmente (Por Defecto y Recomendado):** Iremos a través de cada decisión arquitectónica y sección de documentación paso a paso. Presentaré borradores, y buscaremos tu retroalimentación y confirmación antes de pasar a la siguiente parte. Esto es mejor para decisiones complejas y refinamiento detallado.
  B. **Modo "YOLO":** Puedo producir un borrador inicial más comprensivo de la arquitectura frontend para que revises más ampliamente primero. Luego podemos iterar en secciones específicas basado en tu retroalimentación. Esto puede ser más rápido para generar ideas iniciales pero generalmente no se recomienda si se prefiere colaboración detallada en cada paso."
- Solicitar al usuario que seleccione su modo preferido (ej. "Por favor déjame saber si prefieres A o B.").
- Una vez que el usuario elija, confirmar el modo seleccionado (ej. "Okay, procederemos en modo Incremental."). Este modo elegido gobernará cómo se ejecutan los pasos subsecuentes.

### 2. Revisar Inputs y Establecer Contexto

- Revisar exhaustivamente los inputs, incluyendo la Especificación UI/UX y el Documento de Arquitectura principal (especialmente "Selecciones Definitivas de Stack Tecnológico", contratos API, y la estructura general del sistema documentada como elecciones monorepo/polyrepo).
- Hacer preguntas aclaratorias para cerrar cualquier brecha entre la visión UI/UX y la arquitectura general del sistema.

### 3. Definir Filosofía y Patrones Frontend Generales (para `arquitectura-frontend`)

- Basado en el stack tecnológico de la arquitectura principal y estructura general del sistema (monorepo/polyrepo, detalles de servicios backend), confirmar y detallar:
  - Elecciones de Framework y Bibliotecas Centrales.
  - Estrategia de Arquitectura de Componentes de alto nivel.
  - Estrategia de Gestión de Estado de alto nivel.
  - Principios de Flujo de Datos.
  - Enfoque de Estilos.
  - Patrones de Diseño Clave a emplear.

### 4. Especificar Estructura Detallada de Directorios Frontend (para `arquitectura-frontend`)

- Definir o refinar colaborativamente la estructura de directorios específica del frontend, asegurando que se alinee con el framework elegido y promueva modularidad y escalabilidad.

### 5. Delinear Estrategia y Convenciones de Componentes (para `arquitectura-frontend`)

- Definir convenciones de Nomenclatura y Organización de Componentes.
- Establecer la "Plantilla para Especificación de Componentes" (según `arquitectura-frontend`), enfatizando que la mayoría de componentes serán detallados emergentemente pero deben seguir esta plantilla.
- Opcionalmente, especificar algunos componentes UI absolutamente fundamentales/compartidos (ej. un Button genérico o wrapper Modal si la biblioteca UI elegida necesita uno, o si no se usa biblioteca UI).

### 6. Detallar Configuración y Convenciones de Gestión de Estado (para `arquitectura-frontend`)

- Basado en la estrategia de alto nivel, detallar:
  - Solución Elegida y configuración central.
  - Convenciones para Estructura de Store / Slices (ej. "slices basados en características"). Definir cualquier slice genuinamente global/central (ej. sesión/auth).
  - Convenciones para Selectores y Acciones/Reducers/Thunks. Proporcionar plantillas o ejemplos.

### 7. Planificar Capa de Interacción API (para `arquitectura-frontend`)

- Definir la Configuración del Cliente HTTP.
- Establecer patrones para Definiciones de Servicio (cómo se encapsularán las llamadas API).
- Delinear estrategias frontend de Manejo de Errores y Reintentos para llamadas API.

### 8. Definir Estrategia de Enrutamiento (para `arquitectura-frontend`)

- Confirmar la Biblioteca de Enrutamiento.
- Definir colaborativamente las Definiciones de Rutas principales y cualquier Guardia de Rutas.

### 9. Especificar Detalles de Construcción, Empaquetado y Despliegue (para `arquitectura-frontend`)

- Delinear el Proceso de Construcción y Scripts específicos del frontend.
- Discutir y documentar Optimizaciones de Empaquetado Clave.
- Confirmar detalles de Despliegue a CDN/Hosting relevantes al frontend.

### 10. Refinar Estrategia de Testing Frontend (para `arquitectura-frontend`)

- Elaborar sobre la estrategia de testing principal con específicos para: Testing de Componentes, Testing de Integración/Flujo UI, y alcance y herramientas de Testing E2E UI.

### 11. Delinear Consideraciones de Rendimiento (para `arquitectura-frontend`)

- Listar estrategias de rendimiento específicas del frontend clave a emplear.

### 12. Redacción y Confirmación de Documentos (Guiado por `plantilla-arquitectura-frontend`)

- **Si se seleccionó "Modo Incremental":**

  - Para cada sección relevante de la `arquitectura-frontend` (como se delinea en pasos 3-11 arriba, cubriendo temas desde Filosofía General hasta Consideraciones de Rendimiento):

    - **a. Explicar Propósito y Redactar Sección:** Explicar el propósito de la sección y presentar un borrador para esa sección.
    - **b. Discusión Inicial y Retroalimentación:** Discutir el borrador con el usuario, incorporar su retroalimentación, e iterar según sea necesario para revisiones iniciales.
    - **c. [Ofrecer Opciones Avanzadas de Auto-Refinamiento y Obtención](#ofrecer-opciones-avanzadas-de-auto-refinamiento-y-obtención)**

    - **d. Aprobación Final y Documentación:** Obtener aprobación explícita del usuario para la sección. Asegurar que todos los enlaces de marcador de posición y referencias estén correctamente anotados dentro de cada sección. Luego proceder a la siguiente sección.

  - Una vez que todas las secciones sean individualmente aprobadas a través de este proceso, confirmar con el usuario que el documento general `arquitectura-frontend` está poblado y listo para Paso 13 (Impactos de Épicas/Historias) y luego la revisión de lista de verificación (Paso 14).

- **Si se seleccionó "Modo YOLO":**
  - Poblar colaborativamente todas las secciones relevantes de la `plantilla-arquitectura-frontend` (como se delinea en pasos 3-11 arriba) para crear un primer borrador comprensivo.
  - Presentar el borrador completo de `arquitectura-frontend` al usuario para una revisión holística.
  - <nota_importante>Después de presentar el borrador completo en modo YOLO, AÚN PUEDES ofrecer una versión condensada del menú 'Opciones Avanzadas de Reflexión y Obtención', quizás enfocado en algunas acciones de revisión generales clave (ej. alineación general de requisitos, evaluación de riesgo mayor) si el usuario desea realizar un análisis estructurado profundo antes de retroalimentación detallada sección por sección.</nota_importante>
  - Obtener aprobación explícita del usuario para todo el documento `arquitectura-frontend` antes de proceder al Paso 13 (Impactos de Épicas/Historias) y luego la revisión de lista de verificación (Paso 14).

### 13. Identificar y Resumir Impactos de Épicas/Historias (Enfoque Frontend)

- Después de que la `arquitectura-frontend` sea confirmada, revisarla en contexto de épicas existentes e historias de usuario (si se proporcionan o conocen).
- Identificar cualquier tarea técnica específica del frontend que podría necesitar agregarse como nuevas historias o sub-tareas (ej. "Implementar layout responsivo para página de detalles de producto basado en breakpoints definidos," "Configurar slice de gestión de estado X para perfil de usuario," "Desarrollar componente reutilizable Y según especificación").
- Identificar si cualquier historia de usuario existente requiere refinamiento de sus criterios de aceptación debido a decisiones arquitectónicas frontend (ej. especificar detalles de interacción, uso de componentes, o consideraciones de rendimiento para elementos UI).
- Colaborar con el usuario para definir estas adiciones o refinamientos.
- Preparar un resumen conciso detallando todas las adiciones, actualizaciones, o modificaciones propuestas a épicas e historias de usuario relacionadas con el frontend. Si no se identifican cambios, establecer esto explícitamente (ej. "No se identificaron impactos directos en épicas/historias existentes de la arquitectura frontend").

### 14. Revisión de Lista de Verificación y Finalización

- Una vez que la `arquitectura-frontend` haya sido poblada y revisada con el usuario, y los impactos de épicas/historias hayan sido resumidos, usar la `lista-arquitectura-frontend`.
- Ir a través de cada elemento en la lista de verificación para asegurar que la `arquitectura-frontend` sea comprensiva y todas las secciones estén adecuadamente abordadas - para cada elemento de lista de verificación DEBES considerar si está realmente completo o deficiente.
- Para cada sección de lista de verificación, confirmar su estado (ej. \[x] Completado, \[ ] N/A, \[!] Necesita Atención).
- Si se identifican deficiencias o áreas que necesitan más detalle con una sección:
  - Discutir estas con el usuario.
  - Hacer colaborativamente actualizaciones o adiciones necesarias a la `arquitectura-frontend`.
- Después de abordar todos los puntos y asegurar que el documento sea robusto, presentar un resumen de la revisión de lista de verificación al usuario. Este resumen debe destacar:
  - Confirmación de que todas las secciones relevantes de la lista de verificación han sido satisfechas.
  - Cualquier elemento marcado N/A y una razón breve.
  - Una nota breve sobre cualquier discusión significativa o cambios hechos como resultado de la revisión de lista de verificación.
- El objetivo es asegurar que la `arquitectura-frontend` sea un documento completo y accionable.

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
