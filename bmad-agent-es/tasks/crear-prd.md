# Tarea de Generación de PRD

## Propósito

- Transformar entradas en documentos de definición de producto central que se ajusten a la plantilla `prd-tmpl`.
- Definir alcance MVP claro enfocado en funcionalidad esencial.
- Proporcionar fundamento para Arquitecto y eventualmente agentes desarrolladores de IA.

Recuerda mientras sigues las próximas instrucciones:

- Tus documentos forman la base para todo el proceso de desarrollo.
- La salida será usada directamente por el Arquitecto para crear un documento de arquitectura y diseños de solución para tomar decisiones técnicas definitivas.
- Tus épicas/historias serán finalmente transformadas en tareas de desarrollo.
- Mientras te enfocas en el "qué" no el "cómo", sé lo suficientemente preciso para soportar un orden lógico secuencial de operaciones que una vez que se agreguen más detalles posteriormente puedan seguirse lógicamente donde una historia completará lo que se necesita.

## Instrucciones

### 1. Definir Contexto de Flujo de Trabajo del Proyecto

- Antes de la generación del PRD, pide al usuario que elija su flujo de trabajo previsto:

  A. **Enfocado en Resultados (Predeterminado):** (El agente define Historias de Usuario enfocadas en resultados, dejando el "cómo" técnico detallado para Arquitecto/Scrum Master. Capturar matices como "Notas para Arquitecto/Scrum Master en el Prompt para Arquitecto.")

  B. **Muy Técnico (No Recomendado):** (El agente adopta una postura "consciente de la solución", proporcionando Criterios de Aceptación más detallados y conscientes de la implementación para conectar con el desarrollo, potencialmente sin arquitecto involucrado en absoluto, en su lugar llenando todos los detalles técnicos. \<nota_importante\>Cuando se selecciona este flujo de trabajo, también eres responsable de definir y documentar colaborativamente fundamentos técnicos clave—como elecciones de stack tecnológico y estructura de aplicación propuesta—directamente dentro de una nueva sección dedicada de la plantilla PRD titulada '[OPCIONAL: Solo para Flujo de Trabajo Simplificado PM-a-Desarrollo] Decisiones Técnicas Centrales y Estructura de Aplicación'.\</nota_importante\>)

- Explicar que esta elección establece un nivel de detalle predeterminado, que puede ajustarse finamente más tarde por historia/épica.

### 2. Determinar Modo de Interacción (para Estructura y Detalle del PRD)

- Confirmar con el usuario su estilo de interacción preferido para crear el PRD si es desconocido - ¿INCREMENTAL o YOLO?:
  - **Incrementalmente (Predeterminado):** Abordar secciones del PRD secuencialmente, buscando retroalimentación en cada una. Para Épicas/Historias: primero presentar la lista ordenada de Épicas para aprobación, luego detallar historias para cada Épica una por una.
  - **Modo "YOLO":** Redactar un PRD más comprensivo (o porciones significativas con múltiples secciones, épicas e historias) para una sola revisión más grande.

### 3. Revisar entradas proporcionadas

Revisar las entradas proporcionadas hasta ahora, como un resumen del proyecto, cualquier investigación, e input e ideas del usuario.

### 4. Procesar Secciones del PRD

Informar al usuario que trabajaremos a través de las secciones del PRD en orden 1 a la vez (si no es YOLO) - la plantilla contiene tus instrucciones para cada sección. Después de presentar la sección al usuario, también [Ofrecer Opciones Avanzadas de Auto-Refinamiento y Elicitación](#ofrecer-opciones-avanzadas-de-auto-refinamiento-y-elicitación)

<nota_importante>Cuando trabajando en la sección "Supuestos Técnicos" del PRD, guía explícitamente al usuario a través de discutir y decidir sobre la estructura del repositorio (Monorepo vs. Polyrepo) y la arquitectura de servicio de alto nivel (ej., Monolito, Microservicios, funciones Serverless dentro de un Monorepo). Enfatizar que este es un punto de decisión crítico que será documentado formalmente aquí con su justificación, impactando el alcance del MVP e informando al Arquitecto. Asegurar que esta decisión sea capturada en los `Supuestos Técnicos` del PRD y luego reiterada en la sección `Prompt Inicial del Arquitecto` del PRD.</nota_importante>

<nota_importante>Específicamente para "Flujo de Trabajo Simplificado PM-a-Desarrollo":
Después de discutir secciones iniciales del PRD (como Problema, Objetivos, Personas de Usuario) y antes o en paralelo con definir Épicas y Historias detalladas, debes introducir y poblar la sección "[OPCIONAL: Solo para Flujo de Trabajo Simplificado PM-a-Desarrollo] Decisiones Técnicas Centrales y Estructura de Aplicación" del PRD.

    Cuando hagas esto, primero verifica si existe un archivo `docs/preferencias-tecnicas.md` o ha sido proporcionado. Si existe, informa al usuario que lo consultarás para ayudar a guiar estas decisiones técnicas, mientras aún confirmas todas las elecciones con ellos. Haz preguntas dirigidas como:

1.  "¿Cuáles son tus pensamientos preliminares sobre los lenguajes de programación primarios y frameworks para el backend y frontend (si aplica)? (Haré referencia cruzada con cualquier preferencia que hayas notado en `preferencias-tecnicas`.)"
2.  "¿Qué sistema de base de datos estás considerando? (Verificando preferencias...)"
3.  "¿Hay servicios en la nube específicos, librerías clave o plataformas de despliegue que deberíamos planificar en esta etapa? (Verificando preferencias...)"
4.  "¿Cómo visualizas la estructura de carpetas de alto nivel o módulos principales de la aplicación? ¿Podrías describir los componentes clave y sus responsabilidades? (Consideraré cualquier preferencia estructural notada.)"
5.  "¿Será esto un monorepo o estás pensando en repositorios separados para diferentes partes de la aplicación?"
    Esta sección debe llenarse colaborativamente y actualizarse según sea necesario si las discusiones posteriores de épica/historia revelan nuevos requisitos o restricciones.

</nota_importante>

### 4A. Estrategia de Presentación y Redacción de Épicas

Primero presentarás al usuario los títulos y descripciones de épicas, para que el usuario pueda determinar si es correcto y lo que se espera, o si falta una épica importante.

### 4B. Generación y Revisión de Historias dentro de Épicas (Modo Incremental)

**Una vez que la Lista de Épicas sea aprobada, ENTONCES para cada Épica, procederás como sigue:**

i. **Redactar Todas las Historias para la Épica Actual:** Basado en el objetivo de la Épica y tus discusiones, redacta todas las Historias de Usuario necesarias para esta Épica, siguiendo los "Principios Guía para Generación de Épicas e Historias de Usuario".
ii. **Realizar Análisis Interno de Historias y Proponer Orden:** Antes de presentar las historias para revisión detallada, internamente:
a. **Re-evaluar para Preocupaciones Transversales:** Asegurar que ninguna historia redactada debería ser realmente ACs o notas dentro de otras historias, según el principio guía. Hacer ajustes necesarios.
b. **Analizar para Secuencia Lógica y Dependencias:** Para todas las historias dentro de esta Épica, determinar su orden lógico de implementación. Identificar cualquier historia prerequisito directo (ej., "Historia X debe completarse antes que Historia Y porque Y consume la salida de X").
c. **Formular una Justificación para el Orden:** Preparar una explicación breve de por qué el orden propuesto es lógico.
iii. **Presentar Conjunto de Historias Propuesto y Orden para la Épica:** Presentar al usuario:
a. La lista completa de Historias de Usuario (potencialmente revisadas) para la Épica.
b. La secuencia propuesta para estas historias.
c. Tu justificación breve para la secuenciación y cualquier dependencia clave que hayas notado (ej., "Sugiero este orden porque Historia 2 se basa en los datos preparados en Historia 1, e Historia 3 luego usa los resultados de Historia 2.").
iv. **Revisión Colaborativa de Secuencia y Esquemas de Historia:** Discutir esta estructura y secuencia propuesta con el usuario. Hacer cualquier ajuste a la lista de historias o su orden basado en retroalimentación del usuario.
v. Una vez que la estructura general y secuencia de historias para la Épica sean acordadas, ENTONCES trabajarás con el usuario para revisar los detalles (descripción, Criterios de Aceptación) de cada historia en la secuencia acordada para esa Épica.
vi. [Ofrecer Opciones Avanzadas de Auto-Refinamiento y Elicitación](#ofrecer-opciones-avanzadas-de-auto-refinamiento-y-elicitación)

#### 4C. Presentar Borrador Completo

Presentar al usuario el borrador completo una vez que todas las secciones estén completadas (o según el modo de interacción YOLO).

#### 4D. Nota de Entrega de Componente UI

Si hay un componente UI en este PRD, puedes informar al usuario que el Arquitecto de Diseño debería tomar esta salida final.

### 5. Evaluación de Lista de Verificación

- Usar la `pm-checklist` para considerar que cada elemento en la lista de verificación se cumple (o n/a) contra el PRD.
- Documentar estado de completitud para cada elemento.
- Presentar al usuario con resumen de cada sección de la lista de verificación antes de ir a la siguiente sección.
- Abordar deficiencias con usuario para input o actualizaciones o correcciones sugeridas.
- Una vez completo y abordado, generar la lista de verificación final con todos los elementos verificados o elementos omitidos, la tabla de resumen de sección, y cualquier nota final. La lista de verificación debe tener cualquier hallazgo que fue discutido y resuelto o ignorado también. Este será un buen artefacto para que el usuario mantenga.

### 6. Producir el PRD

Producir el PRD con Prompt PM según la `prd-tmpl` utilizando la siguiente guía:

**Presentación y Contenido General:**

- Presentar Resúmenes de Proyecto (borradores o finales) en un formato limpio y completo.
- Crucialmente, NO truncar información que no ha cambiado de una versión anterior.
- Para documentos completos, comenzar directamente con el contenido (no se necesita texto introductorio).

<nota_importante>
**Próximos Pasos para Especificación UI/UX (Si Aplica):**

- Si el producto descrito en este PRD incluye una interfaz de usuario:

  1.  **Incluir Prompt del Arquitecto de Diseño en PRD:** Agregarás una sección dedicada en el documento PRD que estás produciendo, específicamente en la ubicación marcada `(FIN Lista de Verificación INICIO Prompt del Modo de Especificación UI/UX del Arquitecto de Diseño)` (según la estructura `prd-tmpl`). Esta sección contendrá un prompt para el agente **Arquitecto de Diseño**.

      - El prompt debe declarar claramente que el Arquitecto de Diseño debe operar en su **'Modo de Especificación UI/UX'**.

      - Debe instruir al Arquitecto de Diseño a usar este PRD como entrada principal para definir y documentar colaborativamente especificaciones UI/UX detalladas. Esto podría involucrar crear/poblar un `front-end-spec-tmpl` y asegurar que consideraciones UI/UX clave sean integradas o referenciadas de vuelta al PRD para enriquecerlo.

      - Ejemplo de texto de prompt a insertar:

        ```markdown
        ## Prompt para Arquitecto de Diseño (Modo de Especificación UI/UX)

        **Objetivo:** Elaborar sobre los aspectos UI/UX del producto definido en este PRD.
        **Modo:** Modo de Especificación UI/UX
        **Entrada:** Este documento PRD completado.
        **Tareas Clave:**

        1. Revisar los objetivos del producto, historias de usuario y cualquier nota relacionada con UI aquí.
        2. Definir colaborativamente flujos de usuario detallados, wireframes (conceptuales) y mockups/descripciones de pantallas clave.
        3. Especificar requisitos de usabilidad y consideraciones de accesibilidad.
        4. Poblar o crear el documento `front-end-spec-tmpl`.
        5. Asegurar que este PRD sea actualizado o referencie claramente las especificaciones UI/UX detalladas derivadas de tu trabajo, para que proporcione una base comprensiva para fases posteriores de arquitectura y desarrollo.

        Por favor guía al usuario a través de este proceso para enriquecer el PRD con especificaciones UI/UX detalladas.
        ```

  2.  **Recomendar Flujo de Trabajo del Usuario:** Después de finalizar este PRD (con el prompt incluido para el Arquitecto de Diseño), recomendar fuertemente al usuario la siguiente secuencia:
      a. Primero, involucrar al agente **Arquitecto de Diseño** (usando el prompt que has incrustado en el PRD) para operar en **'Modo de Especificación UI/UX'**. Explicar que este paso es crucial para detallar la interfaz y experiencia del usuario, y la salida (ej., un `front-end-spec-tmpl` poblado y secciones PRD potencialmente actualizadas) será vital.
      b. Segundo, _después_ de que el Arquitecto de Diseño haya completado su trabajo de especificación UI/UX, el usuario debe entonces proceder a involucrar al agente **Arquitecto** (usando el 'Prompt Inicial del Arquitecto' también contenido en este PRD). El PRD, ahora enriquecido con detalles UI/UX, proporcionará una base más completa para diseño de arquitectura técnica.

- Si el producto no incluye una interfaz de usuario, simplemente recomendarás proceder al agente Arquitecto usando el 'Prompt Inicial del Arquitecto' en el PRD.
  </nota_importante>

## Principios Guía para Generación de Épicas e Historias de Usuario

### I. Fundamento Estratégico: Definir Valor Central y Alcance MVP Rigurosamente

Entender y Clarificar Necesidades Centrales: Comenzar entendiendo profundamente y clarificando el problema central que este producto resuelve, las necesidades esenciales de las Personas de Usuario definidas (o actores del sistema), y los objetivos de negocio clave para el Producto Mínimo Viable (MVP).
Desafiar Alcance Implacablemente: Desafiar activamente todas las características solicitadas y alcance en cada etapa. Para cada característica o historia potencial, preguntar rigurosamente, "¿Esto apoya directamente los objetivos centrales del MVP y proporciona valor significativo a una Persona de Usuario objetivo?" Identificar claramente y diferir funcionalidades no esenciales a un backlog Post-MVP.

### II. Estructurar el Trabajo: Épicas Orientadas a Valor y Secuenciación Lógica

Organizar en Épicas Desplegables y Orientadas a Valor: Estructurar el alcance del MVP en Épicas. Cada Épica debe diseñarse para entregar un incremento significativo, de extremo a extremo y completamente desplegable de funcionalidad probable que proporcione valor tangible al usuario o negocio. Las Épicas deben representar bloques funcionales lógicos o jornadas de usuario coherentes.

Secuenciación Lógica de Épicas y Trabajo Fundacional:
Asegurar que la secuencia de Épicas siga un orden lógico de implementación, haciendo claras las dependencias entre Épicas y gestionándolas explícitamente.
La primera Épica debe siempre establecer la infraestructura fundacional del proyecto (ej., configuración inicial de app, repositorio Git, pipeline CI/CD, configuraciones centrales de servicio en la nube, shell básico de autenticación de usuario si se necesita universalmente) necesaria para soportar su propia funcionalidad desplegable y la de Épicas subsecuentes.
Asegurar Secuenciación Lógica de Historias y Conciencia de Dependencias dentro de Épicas:
Después de redactar inicialmente todas las Historias de Usuario para una Épica, pero antes de revisión detallada con el usuario, tú (el Agente IA ejecutando esta tarea) debes realizar explícitamente una revisión interna para establecer una secuencia lógica para estas historias.
Para cada historia, identificar si tiene historias prerequisito directas dentro de la misma Épica o de Épicas ya completadas.
Proponer un orden claro de historias al usuario, explicando la justificación basada en estas dependencias (ej., "Historia X necesita hacerse antes que Historia Y porque..."). Hacer visibles dependencias significativas, quizás como una nota dentro de la descripción de la historia.

### III. Crear Historias de Usuario Efectivas: Rebanadas Verticales Enfocadas en Valor y Claridad

Definir Historias como "Rebanadas Verticales": Dentro de cada Épica, definir Historias de Usuario como "rebanadas verticales". Esto significa que cada historia debe entregar una pieza completa de funcionalidad que logre un objetivo específico de usuario o sistema, potencialmente cortando a través de todas las capas necesarias (ej., UI, API, lógica de negocio, base de datos).
Enfocarse en "Qué" y "Por Qué," No "Cómo":
Las historias se enfocarán principalmente en el resultado funcional, el valor del usuario ("qué"), y la razón ("por qué"). Evitar detallar implementación técnica ("cómo") en la descripción principal de la historia.
El formato "Como un {Persona de Usuario específica/actor del sistema}, quiero {realizar una acción / lograr un objetivo} para que {pueda realizar un beneficio / lograr una razón}" es estándar. Ser preciso y consistente al definir el '{Persona de Usuario específica/actor del sistema}', asegurando que se alinee con personas definidas.
Asegurar Valor del Usuario, No Solo Tareas Técnicas: Las Historias de Usuario deben articular valor claro del usuario o negocio. Evitar crear historias que sean puramente tareas técnicas (ej., "Configurar base de datos," "Refactorizar módulo X"), a menos que sean parte de la Épica de infraestructura fundacional o sean tareas habilitadoras esenciales que estén explícitamente vinculadas a, y justificadas por, una historia orientada al usuario que entregue valor.
Dimensionamiento Apropiado y Esforzarse por Independencia:
Asegurar que las Historias de Usuario tengan el tamaño apropiado para una iteración de desarrollo típica (es decir, puedan completarse por el equipo en un sprint/iteración).
Si una historia rebanada verticalmente es demasiado grande o compleja, trabajar con el usuario para dividirla en incrementos más pequeños, aún valiosos y aún rebanados verticalmente.
Donde sea factible, definir historias para que puedan desarrollarse, probarse y potencialmente entregarse independientemente de otras. Si las dependencias son inevitables, deben identificarse claramente y gestionarse a través de secuenciación.

### IV. Detallar Historias: Criterios de Aceptación Comprensivos y Habilitación del Desarrollador

Criterios de Aceptación (ACs) Claros, Comprensivos y Probables:
Cada Historia de Usuario tendrá Criterios de Aceptación detallados, inequívocos y probables.
Los ACs definen precisamente qué significa "hecho" para esa historia desde una perspectiva funcional y sirven como base para verificación.
Donde un Requisito No Funcional (NFR) específico del PRD (ej., un objetivo de rendimiento particular para una acción específica, una restricción de seguridad para manejar ciertos datos) es crítico para una historia, asegurar que sea explícitamente capturado o claramente referenciado dentro de sus Criterios de Aceptación.
Integrar Habilitación del Desarrollador y Diseño Iterativo en Historias:
Probabilidad Local (CLI): Para Historias de Usuario que involucran procesamiento backend o componentes de datos, asegurar que los ACs consideren o especifiquen la capacidad para que los desarrolladores prueben esa funcionalidad localmente (ej., vía comandos CLI, instancias de servicio local).
Definición Iterativa de Esquema: Los cambios de esquema de base de datos (nuevas tablas, columnas) deben introducirse iterativamente dentro de las Historias de Usuario que funcionalmente los requieren, en lugar de definir todo el esquema por adelantado.
Estándares UI/UX Por Adelantado (si aplica UI): Para Historias de Usuario con un componente UI, los ACs deben declarar explícitamente requisitos respecto a apariencia y sensación, responsividad y adherencia a frameworks/librerías elegidos (ej., Tailwind CSS, shadcn/ui) desde el inicio.

### V. Gestionar Complejidad: Abordar Preocupaciones Transversales Efectivamente

Evaluar Críticamente para Preocupaciones Transversales:
Antes de finalizar una Historia de Usuario, evaluar si la funcionalidad descrita es verdaderamente una pieza discreta y orientada al usuario de valor o si representa una preocupación transversal (ej., un requisito específico de logging, un elemento de tema UI usado por muchas vistas, un habilitador técnico central para múltiples otras historias, un aspecto específico de manejo de errores).
Si una pieza de funcionalidad se identifica como una preocupación transversal:
a. Evitar crear una Historia de Usuario separada para ella a menos que entregue valor de usuario independiente y probable.
b. En su lugar, integrar el requisito como Criterios de Aceptación específicos dentro de todas las Historias de Usuario relevantes que impacta.
c. Alternativamente, si es un habilitador técnico generalizado o un requisito no funcional que aplica ampliamente, documentarlo claramente dentro de la sección relevante del PRD (ej., 'Requisitos No Funcionales', 'Supuestos Técnicos'), o como una nota para el Arquitecto dentro de las descripciones de historia si es altamente específico.

Tu objetivo es asegurar que las Historias de Usuario permanezcan enfocadas en entregar valor de usuario medible, mientras aún capturan todos los detalles técnicos y funcionales necesarios apropiadamente.

### VI. Asegurar Calidad y Entrega Suave

Mantener Claridad para Entrega y Libertad Arquitectónica: Las Historias de Usuario, sus descripciones y Criterios de Aceptación deben ser lo suficientemente detallados para proporcionar al Arquitecto una comprensión clara y comprensiva de "qué se requiere," mientras permiten flexibilidad arquitectónica en el "cómo."
Confirmar Estado "Listo": Antes de considerar completas las historias de una Épica, asegurar que cada historia esté efectivamente "lista" para revisión arquitectónica subsecuente o planificación de desarrollo – significando que es clara, comprensible, probable, sus dependencias están notadas, y cualquier trabajo fundacional (como de la primera épica) está considerado.

## Ofrecer Opciones Avanzadas de Auto-Refinamiento y Elicitación

(Esta sección se llama cuando se necesita antes de esto)

Presentar al usuario la siguiente lista de 'Acciones Avanzadas de Reflexión, Elicitación y Lluvia de Ideas'. Explicar que estos son pasos opcionales para ayudar a asegurar calidad, explorar alternativas y profundizar la comprensión de la sección actual antes de finalizarla y continuar. El usuario puede seleccionar una acción por número, o elegir omitir esto y proceder a finalizar la sección.

"Para asegurar la calidad de la sección actual: **[Nombre de Sección Específica]** y para asegurar su robustez, explorar alternativas y considerar todos los ángulos, puedo realizar cualquiera de las siguientes acciones. Por favor elige un número (8 para finalizar y proceder):

**Acciones Avanzadas de Reflexión, Elicitación y Lluvia de Ideas que Puedo Tomar:**

{Instrucción para Agente IA: Mostrar el título de cada elemento numerado abajo. Si el usuario pregunta qué significa una opción específica, proporcionar una explicación breve de la acción que tomarás, basándote en descripciones detalladas adaptadas para el contexto.}

1.  **Auto-Revisión Crítica y Alineación de Objetivos del Usuario**
2.  **Generar y Evaluar Soluciones de Diseño Alternativas**
3.  **Prueba de Estrés de Jornada de Usuario e Interacción (Conceptual)**
4.  **Inmersión Profunda en Supuestos y Restricciones de Diseño**
5.  **Revisión de Auditoría de Usabilidad y Accesibilidad y Preguntas de Sondeo**
6.  **Lluvia de Ideas Colaborativa y de Características UI**
7.  **Elicitar 'Necesidades de Usuario Imprevistas' y Preguntas de Interacción Futura**
8.  **Finalizar esta Sección y Proceder.**

Después de que realice la acción seleccionada, podemos discutir el resultado y decidir sobre cualquier revisión adicional para esta sección."

REPETIR preguntando al usuario si le gustaría realizar otra Acción de Reflexión, Elicitación y Lluvia de Ideas HASTA que el usuario indique que es hora de proceder a la siguiente sección (o seleccione #8)
