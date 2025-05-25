# Tarea de Validación de Lista de Verificación

Esta tarea proporciona instrucciones para validar documentación contra listas de verificación. El agente debe seguir estas instrucciones para asegurar una validación exhaustiva y sistemática de documentos.

## Contexto

El Método BMAD usa varias listas de verificación para asegurar calidad y completitud de diferentes artefactos. El mapeo entre listas de verificación y sus documentos requeridos está definido en `mapeo-listas`. Esto permite agregar fácilmente nuevas listas de verificación sin modificar esta tarea.

## Instrucciones

1. **Evaluación Inicial**

   - Verificar `mapeo-listas` para listas de verificación disponibles
   - Si el usuario proporciona un nombre de lista de verificación:
     - Buscar coincidencia exacta en mapeo-listas.yml
     - Si no hay coincidencia exacta, intentar coincidencia difusa (ej. "lista de arquitectura" -> "architect-checklist")
     - Si se encuentran múltiples coincidencias, pedir al usuario que clarifique
     - Una vez coincidido, usar la ruta checklist_file del mapeo
   - Si no se especifica lista de verificación:
     - Preguntar al usuario qué lista de verificación quiere usar
     - Presentar opciones disponibles de mapeo-listas.yml
   - Confirmar si quieren trabajar a través de la lista de verificación:
     - Sección por sección (modo interactivo)
     - Todo de una vez (modo YOLO)

2. **Ubicación de Documentos**

   - Buscar los documentos requeridos y ubicaciones por defecto en `mapeo-listas`
   - Para cada documento requerido:
     - Verificar todas las ubicaciones por defecto especificadas en el mapeo
     - Si no se encuentra, preguntar al usuario por la ubicación del documento
   - Verificar que todos los documentos requeridos sean accesibles

3. **Procesamiento de Lista de Verificación**

   Si en modo interactivo:

   - Trabajar a través de cada sección de la lista de verificación una a la vez
   - Para cada sección:
     - Revisar todos los elementos en la sección
     - Verificar cada elemento contra la documentación relevante
     - Presentar hallazgos para esa sección
     - Obtener confirmación del usuario antes de proceder a la siguiente sección

   Si en modo YOLO:

   - Procesar todas las secciones de una vez
   - Crear un reporte comprensivo de todos los hallazgos
   - Presentar el análisis completo al usuario

4. **Enfoque de Validación**

   Para cada elemento de lista de verificación:

   - Leer y entender el requisito
   - Buscar evidencia en la documentación que satisfaga el requisito
   - Considerar tanto menciones explícitas como cobertura implícita
   - Marcar elementos como:
     - ✅ PASA: Requisito claramente cumplido
     - ❌ FALLA: Requisito no cumplido o cobertura insuficiente
     - ⚠️ PARCIAL: Algunos aspectos cubiertos pero necesita mejora
     - N/A: No aplicable a este caso

5. **Análisis de Sección**

   Para cada sección:

   - Calcular tasa de aprobación
   - Identificar temas comunes en elementos fallidos
   - Proporcionar recomendaciones específicas para mejora
   - En modo interactivo, discutir hallazgos con usuario
   - Documentar cualquier decisión o explicación del usuario

6. **Reporte Final**

   Preparar un resumen que incluya:

   - Estado general de completitud de lista de verificación
   - Tasas de aprobación por sección
   - Lista de elementos fallidos con contexto
   - Recomendaciones específicas para mejora
   - Cualquier sección o elemento marcado como N/A con justificación

## Consideraciones Especiales

1. **Lista de Verificación de Arquitectura**

   - Enfocarse en completitud técnica y claridad
   - Verificar que todos los componentes del sistema estén abordados
   - Verificar consideraciones de seguridad y escalabilidad
   - Asegurar que aspectos de despliegue y operacionales estén cubiertos

2. **Lista de Verificación de Arquitectura Frontend**

   - Validar especificaciones UI/UX
   - Verificar estructura y organización de componentes
   - Verificar enfoque de gestión de estado
   - Asegurar consideraciones de diseño responsivo

3. **Lista de Verificación PM**

   - Enfocarse en claridad de requisitos de producto
   - Verificar historias de usuario y criterios de aceptación
   - Verificar cobertura de investigación de mercado y usuario
   - Asegurar que factibilidad técnica esté abordada

4. **Listas de Verificación de Historias**
   - Verificar criterios de aceptación claros
   - Verificar contexto técnico y dependencias
   - Asegurar que testabilidad esté abordada
   - Validar que valor del usuario esté claramente establecido

## Criterios de Éxito

La validación de lista de verificación está completa cuando:

1. Todos los elementos aplicables han sido evaluados
2. Estado claro de pasa/falla para cada elemento
3. Recomendaciones específicas proporcionadas para elementos fallidos
4. Usuario ha revisado y reconocido hallazgos
5. Reporte final documenta todas las decisiones y justificaciones

## Ejemplo de Interacción

Agente: "Déjame verificar las listas de verificación disponibles... Según mapeo-listas.yml, tenemos varias opciones. ¿Cuál te gustaría usar?"

Usuario: "La lista de verificación del arquitecto"

Agente: "¿Te gustaría trabajar a través de ella sección por sección (interactivo) o obtener un análisis completo de una vez (modo YOLO)?"

Usuario: "Interactivo por favor"

Agente: "Según los mapeos, necesito verificar architecture.md. La ubicación por defecto es docs/architecture.md. ¿Debo buscar ahí?"

[Continuar interacción basada en respuestas del usuario...]
