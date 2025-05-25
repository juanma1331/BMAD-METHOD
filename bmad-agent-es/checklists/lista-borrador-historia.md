# Lista de Verificación de Borrador de Historia

El Scrum Master debe usar esta lista de verificación para validar que cada historia contenga suficiente contexto para que un agente desarrollador la implemente exitosamente, asumiendo que el agente dev tiene capacidades razonables para resolver las cosas.

## 1. CLARIDAD DE OBJETIVO Y CONTEXTO

- [ ] El objetivo/propósito de la historia está claramente establecido
- [ ] La relación con los objetivos de la épica es evidente
- [ ] Se explica cómo la historia encaja en el flujo general del sistema
- [ ] Se identifican las dependencias de historias previas (si aplica)
- [ ] El contexto de negocio y valor son claros

## 2. ORIENTACIÓN DE IMPLEMENTACIÓN TÉCNICA

- [ ] Se identifican los archivos clave a crear/modificar (no necesariamente exhaustivo)
- [ ] Se mencionan las tecnologías específicamente necesarias para esta historia
- [ ] Las APIs o interfaces críticas están suficientemente descritas
- [ ] Se referencian los modelos de datos o estructuras necesarias
- [ ] Se listan las variables de entorno requeridas (si aplica)
- [ ] Se anotan cualquier excepción a patrones estándar de codificación

## 3. EFECTIVIDAD DE REFERENCIAS

- [ ] Las referencias a documentos externos apuntan a secciones específicas relevantes
- [ ] La información crítica de historias previas está resumida (no solo referenciada)
- [ ] Se proporciona contexto de por qué las referencias son relevantes
- [ ] Las referencias usan formato consistente (ej. `docs/filename.md#section`)

## 4. EVALUACIÓN DE AUTO-CONTENIDO

- [ ] La información central necesaria está incluida (no excesivamente dependiente de docs externos)
- [ ] Las suposiciones implícitas se hacen explícitas
- [ ] Se explican términos o conceptos específicos del dominio
- [ ] Se abordan casos extremos o escenarios de error

## 5. ORIENTACIÓN DE TESTING

- [ ] Se delinea el enfoque de testing requerido
- [ ] Se identifican los escenarios de prueba clave
- [ ] Se definen los criterios de éxito
- [ ] Se anotan consideraciones especiales de testing (si aplica)

## RESULTADO DE VALIDACIÓN

| Categoría                                | Estado            | Problemas |
| ---------------------------------------- | ----------------- | --------- |
| 1. Claridad de Objetivo y Contexto      | PASA/FALLA/PARCIAL |           |
| 2. Orientación de Implementación Técnica | PASA/FALLA/PARCIAL |           |
| 3. Efectividad de Referencias           | PASA/FALLA/PARCIAL |           |
| 4. Evaluación de Auto-Contenido         | PASA/FALLA/PARCIAL |           |
| 5. Orientación de Testing               | PASA/FALLA/PARCIAL |           |

**Evaluación Final:**

- LISTO: La historia proporciona suficiente contexto para implementación
- NECESITA REVISIÓN: La historia requiere actualizaciones (ver problemas)
- BLOQUEADO: Se requiere información externa (especificar qué información)
