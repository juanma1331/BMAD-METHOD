# Tarea: Generar Plan de Implementación Detallado de Solución (con Investigación Opcional)

## Propósito
Guiar al usuario en la creación de un plan de implementación exhaustivo para una solución técnica (que puede constar de múltiples componentes), incluyendo una fase opcional de investigación integrada, asegurando que todos los aspectos de la definición, diseño, desarrollo y validación estén cubiertos.

## Plantilla Asociada
- `plantilla-plan-implementacion-solucion-generica.md`

## Entradas Clave del Usuario
- Idea general de la solución a implementar.
- Requisitos de alto nivel o necesidades de negocio.
- (Opcional) Resultados de investigaciones previas si existen y son relevantes.
- Preferencias tecnológicas generales (si se conocen).

## Proceso Principal de la Tarea
1.  **Fase 1: Definición de la Solución y sus Componentes.**
    -   Colaborar con el usuario para completar la Sección 0 de la `plantilla-plan-implementacion-solucion-generica.md`:
        -   `NOMBRE_SOLUCION_AMIGABLE`, `NOMBRE_SOLUCION_SNAKE_CASE`, `DESCRIPCION_GENERAL_SOLUCION`.
        -   `NUMERO_DE_COMPONENTES_PRINCIPALES`.
        -   Para cada componente: `ID_COMPONENTE_X`, `NOMBRE_COMPONENTE_X`, `TIPO_DE_COMPONENTE_X`, `TECNOLOGIA_PRINCIPAL_COMPONENTE_X`, `BREVE_DESCRIPCION_FUNCIONALIDAD_COMPONENTE_X`, `INTERACCIONES_CON_OTROS_COMPONENTES_X`, `DEPENDENCIAS_EXTERNAS_COMPONENTE_X`.
2.  **Fase 2: Planificación de la Investigación (si aplica).**
    -   Determinar con el usuario si se requiere la Sección 1 (`NECESITA_INVESTIGACION`).
    -   Si "Sí":
        -   Completar los detalles de la Sección 1: `OBJETIVOS_INVESTIGACION`, `FUENTES_INVESTIGACION_PROPUESTAS`, `ARTEFACTOS_INVESTIGACION_ESPERADOS` (nombres y descripción), `CRITERIOS_ACEPTACION_INVESTIGACION`.
        -   **Punto de Validación Intermedio:** Aprobar el plan de esta investigación integrada.
        -   *(Nota para el Agente: La ejecución de esta investigación podría ser un subproceso dentro de esta tarea si es acotada. Si es extensa, se debería haber utilizado previamente la tarea `definir-plan-investigacion-estrategica` y `ejecutar-investigacion-documentar-hallazgos`, y sus resultados serían una entrada para esta tarea, omitiendo esta fase de planificación de investigación).*
3.  **Fase 3: Plan de Desarrollo por Componente.**
    -   Iterar para cada `ID_COMPONENTE_X` definido en la Sección 0:
        -   Completar colaborativamente la Sección 2.{X} (`PLAN DE DESARROLLO DEL COMPONENTE: {NOMBRE_COMPONENTE_X}`):
            -   Subsección 2.{X}.1: Detalle de Funcionalidad y Especificaciones Técnicas.
            -   Subsección 2.{X}.2: Fases de Implementación (A-F), adaptando el detalle según el tipo y tecnología del componente.
            -   Establecer Criterios de Aceptación y Puntos de Revisión para el componente.
4.  **Fase 4: Dependencias y Consideraciones Globales.**
    -   Completar las Secciones 3 (Dependencias Generales) y 4 (Consideraciones Adicionales Generales) de la plantilla.
5.  **Fase 5: Revisión y Finalización del Plan.**
    -   Completar la Sección 5 (Registro de Cambios) con la entrada inicial.

## Puntos de Validación con el Usuario
- **Validación 1 (Definición de Solución y Componentes):** Confirmar que la Sección 0 refleja correctamente la solución y su desglose.
- **Validación 2 (Plan de Investigación Integrada - si aplica y se planifica aquí):** Aprobar el alcance y objetivos de la investigación descrita en la Sección 1 antes de proceder con la planificación detallada de componentes.
- **Validación 3 (Plan de Desarrollo por Componente - iterativo):** Para cada componente significativo, revisar su plan de desarrollo (Sección 2.X) antes de pasar al siguiente.
- **Validación 4 (Plan de Implementación Completo):** Presentar la `plantilla-plan-implementacion-solucion-generica.md` completamente rellenada para la revisión y aprobación final del usuario.

## Entregable Principal
- La plantilla `plantilla-plan-implementacion-solucion-generica.md` completamente rellenada y aprobada por el usuario.
- (Si la investigación integrada se planificó y ejecutó dentro de esta tarea) Los artefactos de investigación generados (ej: `informe-investigacion-{NOMBRE_SOLUCION_SNAKE_CASE}.md`).

**Nota para el Agente:**
  Esta sección define el plan para una investigación integrada. La ejecución de esta investigación, una vez planificada aquí, será responsabilidad del agente IDE externo. Si se requiere un plan de investigación mucho más extenso y separado, se debería haber utilizado previamente la tarea definir-plan-investigacion-estrategica para generar dicho plan, y este plan de implementación simplemente lo referenciaría o consumiría sus resultados.