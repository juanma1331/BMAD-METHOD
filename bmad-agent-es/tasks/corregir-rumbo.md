# Tarea de Corrección de Rumbo

## Propósito

- Guiar una respuesta estructurada a un disparador de cambio usando la `lista-cambios`.
- Analizar los impactos del cambio en épicas, artefactos del proyecto y el MVP, guiado por la estructura de la lista de verificación.
- Explorar soluciones potenciales (ej. ajustar alcance, hacer rollback de elementos, re-alcanzar características) según lo indicado por la lista de verificación.
- Redactar actualizaciones específicas y accionables propuestas para cualquier artefacto del proyecto afectado (ej. épicas, historias de usuario, secciones del PRD, secciones del documento de arquitectura) basadas en el análisis.
- Producir un documento consolidado de "Propuesta de Cambio de Sprint" que contenga el análisis de impacto y las ediciones propuestas claramente redactadas para revisión y aprobación del usuario.
- Asegurar un camino claro de handoff si la naturaleza de los cambios necesita replanificación fundamental por otros agentes centrales (como PM o Arquitecto).

## Instrucciones

### 1. Configuración Inicial y Selección de Modo

- **Reconocer Tarea e Inputs:**
  - Confirmar con el usuario que la "Tarea de Corrección de Rumbo" (Navegación e Integración de Cambios) está siendo iniciada.
  - Verificar el disparador de cambio y asegurar que tienes la explicación inicial del usuario del problema y su impacto percibido.
  - Confirmar acceso a todos los artefactos relevantes del proyecto (ej. PRD, Épicas/Historias, Documentos de Arquitectura, Especificaciones UI/UX) y, críticamente, la `lista-cambios`.
- **Establecer Modo de Interacción:**
  - Preguntar al usuario su modo de interacción preferido para esta tarea:
    - **"Incrementalmente (Por Defecto y Recomendado):** ¿Trabajamos a través de la `lista-cambios` sección por sección, discutiendo hallazgos y redactando colaborativamente cambios propuestos para cada parte relevante antes de pasar a la siguiente? Esto permite refinamiento detallado, paso a paso."
    - **"Modo YOLO (Procesamiento por Lotes):** O, ¿preferirías que conduzca un análisis más por lotes basado en la lista de verificación y luego presente un conjunto consolidado de hallazgos y cambios propuestos para una revisión más amplia? Esto puede ser más rápido para evaluación inicial pero podría requerir revisión más extensa de las propuestas combinadas."
  - Solicitar al usuario que seleccione su modo preferido.
  - Una vez que el usuario elija, confirmar el modo seleccionado (ej. "Okay, procederemos en modo Incremental."). Este modo elegido gobernará cómo se ejecutan los pasos subsecuentes en esta tarea.
- **Explicar Proceso:** Informar brevemente al usuario: "Ahora usaremos la `lista-cambios` para analizar el cambio y redactar actualizaciones propuestas. Te guiaré a través de los elementos de la lista de verificación basado en nuestro modo de interacción elegido."
  <regla>Cuando hagas múltiples preguntas o presentes múltiples puntos para input del usuario de una vez, numéralos claramente (ej. 1., 2a., 2b.) para hacer más fácil que el usuario proporcione respuestas específicas.</regla>

### 2. Ejecutar Análisis de Lista de Verificación (Iterativamente o por Lotes, según Modo de Interacción)

- Trabajar sistemáticamente a través de las Secciones 1-4 de la `lista-cambios` (típicamente cubriendo Contexto de Cambio, Análisis de Impacto en Épicas/Historias, Resolución de Conflictos de Artefactos, y Evaluación/Recomendación de Camino).
- Para cada elemento de lista de verificación o grupo lógico de elementos (dependiendo del modo de interacción):
  - Presentar las indicaciones o consideraciones relevantes de la lista de verificación al usuario.
  - Solicitar información necesaria y analizar activamente los artefactos relevantes del proyecto (PRD, épicas, documentos de arquitectura, historial de historias, etc.) para evaluar el impacto.
  - Discutir tus hallazgos para cada elemento con el usuario.
  - Registrar el estado de cada elemento de lista de verificación (ej. `[x] Abordado`, `[N/A]`, `[!] Se Necesita Acción Adicional`) y cualquier nota o decisión pertinente.
  - Acordar colaborativamente el "Camino Recomendado a Seguir" según lo indicado por la Sección 4 de la lista de verificación.

### 3. Redactar Cambios Propuestos (Iterativamente o por Lotes)

- Basado en el análisis completado de lista de verificación (Secciones 1-4) y el "Camino Recomendado a Seguir" acordado (excluyendo escenarios que requieren replanes fundamentales que necesitarían handoff inmediato a PM/Arquitecto):
  - Identificar los artefactos específicos del proyecto que requieren actualizaciones (ej. épicas específicas, historias de usuario, secciones del PRD, componentes del documento de arquitectura, diagramas).
  - **Redactar los cambios propuestos directa y explícitamente para cada artefacto identificado.** Los ejemplos incluyen:
    - Revisar texto de historia de usuario, criterios de aceptación, o prioridad.
    - Agregar, eliminar, reordenar, o dividir historias de usuario dentro de épicas.
    - Proponer fragmentos modificados de diagrama de arquitectura (ej. proporcionar un bloque de diagrama Mermaid actualizado o una descripción textual clara del cambio a un diagrama existente).
    - Actualizar listas de tecnología, detalles de configuración, o secciones específicas dentro del PRD o documentos de arquitectura.
    - Redactar nuevos artefactos de apoyo pequeños si es necesario (ej. un addendum breve para una decisión específica).
  - Si en "Modo Incremental," discutir y refinar estas ediciones propuestas para cada artefacto o pequeño grupo de artefactos relacionados con el usuario conforme se redactan.
  - Si en "Modo YOLO," compilar todas las ediciones redactadas para presentación en el siguiente paso.

### 4. Generar "Propuesta de Cambio de Sprint" con Ediciones

- Sintetizar el análisis completo de `lista-cambios` (cubriendo hallazgos de Secciones 1-4) y todas las ediciones propuestas acordadas (de Instrucción 3) en un solo documento titulado "Propuesta de Cambio de Sprint." Esta propuesta debe alinearse con la estructura sugerida por la Sección 5 de la `lista-cambios` (Componentes de Propuesta).
- La propuesta debe presentar claramente:
  - **Resumen de Análisis:** Una visión general concisa del problema original, su impacto analizado (en épicas, artefactos, alcance del MVP), y la justificación para el camino elegido a seguir.
  - **Ediciones Específicas Propuestas:** Para cada artefacto afectado, mostrar claramente o describir los cambios exactos (ej. "Cambiar Historia X.Y de: [texto viejo] A: [texto nuevo]", "Agregar nuevo Criterio de Aceptación a Historia A.B: [nuevo AC]", "Actualizar Sección 3.2 del Documento de Arquitectura como sigue: [texto nuevo/modificado o descripción de diagrama]").
- Presentar el borrador completo de la "Propuesta de Cambio de Sprint" al usuario para revisión final y retroalimentación. Incorporar cualquier ajuste final solicitado por el usuario.

### 5. Finalizar y Determinar Próximos Pasos

- Obtener aprobación explícita del usuario para la "Propuesta de Cambio de Sprint," incluyendo todas las ediciones específicas documentadas dentro de ella.
- Proporcionar el documento finalizado de "Propuesta de Cambio de Sprint" al usuario.
- **Basado en la naturaleza de los cambios aprobados:**
  - **Si las ediciones aprobadas abordan suficientemente el cambio y pueden implementarse directamente u organizarse por un PO/SM:** Establecer que la "Tarea de Corrección de Rumbo" está completa respecto al análisis y propuesta de cambio, y el usuario puede ahora proceder con implementar o registrar estos cambios (ej. actualizar documentos reales del proyecto, elementos del backlog). Sugerir handoff a un agente PO/SM para organización del backlog si es apropiado.
  - **Si el análisis y camino propuesto (según la Sección 4 de la lista de verificación y potencialmente Sección 6) indican que el cambio requiere un replan más fundamental (ej. cambio significativo de alcance, reelaboración arquitectónica mayor):** Establecer claramente esta conclusión. Aconsejar al usuario que el próximo paso involucra involucrar a los agentes primarios PM o Arquitecto, usando la "Propuesta de Cambio de Sprint" como input crítico y contexto para ese esfuerzo de replanificación más profundo.

## Entregables de Salida

- **Primario:** Un documento de "Propuesta de Cambio de Sprint" (en formato markdown). Este documento contendrá:
  - Un resumen del análisis de `lista-cambios` (problema, impacto, justificación para el camino elegido).
  - Ediciones específicas, claramente redactadas propuestas para todos los artefactos del proyecto afectados.
- **Implícito:** Una `lista-cambios` anotada (o el registro de su completitud) reflejando las discusiones, hallazgos y decisiones tomadas durante el proceso.
