# Tarea de Crear Siguiente Historia

## Propósito

- Generar la siguiente historia de usuario lógica basada en el progreso actual del proyecto
- Asegurar continuidad y flujo lógico en el desarrollo
- Mantener alineación con objetivos del PRD y arquitectura del sistema
- Proporcionar historias bien definidas y listas para desarrollo

Recuerda mientras sigues las próximas instrucciones:

- Tu historia debe construir sobre el trabajo completado previamente
- Debe entregar valor incremental y medible al usuario
- Debe ser implementable dentro de las restricciones arquitectónicas actuales
- Debe mantener la secuencia lógica de desarrollo establecida

## Instrucciones

### 1. Análisis del Estado Actual

- **Revisar Progreso Completado:**
  - Analizar qué historias han sido completadas hasta ahora
  - Identificar qué épicas están en progreso o pendientes
  - Revisar cualquier feedback o lecciones aprendidas de historias anteriores
  - Evaluar el estado actual de la arquitectura y base de código

- **Identificar Dependencias:**
  - Determinar qué historias están bloqueadas esperando otras
  - Identificar dependencias técnicas que ahora están resueltas
  - Evaluar dependencias externas (APIs, servicios, recursos)
  - Considerar dependencias de equipo o recursos humanos

### 2. Selección de Épica y Priorización

- **Evaluar Épicas Disponibles:**
  - Revisar épicas pendientes según el PRD
  - Evaluar cuáles están desbloqueadas y listas para trabajo
  - Considerar valor de negocio y impacto en el usuario
  - Evaluar complejidad técnica y esfuerzo requerido

- **Priorización Basada en Valor:**
  - Priorizar historias que entregan máximo valor con mínimo esfuerzo
  - Considerar feedback de usuarios o stakeholders
  - Evaluar impacto en objetivos clave del MVP
  - Considerar riesgos técnicos y de negocio

### 3. Definición de Historia

- **Estructura de Historia:**
  - Usar formato estándar: "Como [usuario], quiero [objetivo] para que [beneficio]"
  - Asegurar que la persona de usuario esté claramente definida
  - Definir objetivo específico y medible
  - Articular beneficio claro y valor para el usuario

- **Criterios de Aceptación:**
  - Definir criterios específicos, medibles y testeable
  - Cubrir escenario principal (happy path)
  - Incluir escenarios alternativos importantes
  - Definir manejo de errores y casos edge
  - Especificar requisitos de rendimiento si son relevantes

### 4. Consideraciones Técnicas

- **Alineación Arquitectónica:**
  - Asegurar que la historia se alinea con la arquitectura definida
  - Verificar que no introduce deuda técnica innecesaria
  - Considerar patrones y estándares establecidos
  - Evaluar impacto en componentes existentes

- **Implementabilidad:**
  - Verificar que la historia es técnicamente factible
  - Considerar disponibilidad de APIs y servicios necesarios
  - Evaluar si requiere nuevas dependencias o tecnologías
  - Estimar complejidad y esfuerzo de implementación

### 5. Validación de Calidad

- **Revisión de Completitud:**
  - Verificar que la historia es una "rebanada vertical" completa
  - Asegurar que entrega valor independiente
  - Confirmar que tiene el tamaño apropiado para una iteración
  - Validar que todos los criterios de aceptación son claros

- **Revisión de Consistencia:**
  - Verificar consistencia con historias anteriores
  - Asegurar alineación con objetivos del PRD
  - Confirmar que mantiene la experiencia de usuario coherente
  - Validar que sigue patrones establecidos

### 6. Documentación y Entrega

- **Formato de Historia:**
  - Usar plantilla estándar de historia de usuario
  - Incluir contexto y justificación
  - Proporcionar enlaces a documentación relevante
  - Incluir mockups o wireframes si son necesarios

- **Información Adicional:**
  - Proporcionar notas técnicas para desarrolladores
  - Incluir consideraciones de testing
  - Documentar dependencias y prerequisitos
  - Sugerir enfoque de implementación si es útil

## Plantilla de Historia

```markdown
## Historia de Usuario: [Título Descriptivo]

### Descripción
Como [tipo específico de usuario/persona],
Quiero [objetivo/acción específica],
Para que [beneficio/valor claro].

### Contexto
[Explicación del contexto de negocio y técnico que hace esta historia relevante ahora]

### Criterios de Aceptación

#### Escenario Principal
- [ ] [Criterio específico y testeable]
- [ ] [Criterio específico y testeable]
- [ ] [Criterio específico y testeable]

#### Escenarios Alternativos
- [ ] [Criterio para escenario alternativo]
- [ ] [Criterio para manejo de errores]

#### Requisitos No Funcionales
- [ ] [Requisito de rendimiento si aplica]
- [ ] [Requisito de seguridad si aplica]
- [ ] [Requisito de usabilidad si aplica]

### Notas Técnicas
[Consideraciones técnicas importantes para implementación]

### Dependencias
- [Lista de historias o componentes prerequisitos]
- [Dependencias externas si las hay]

### Definición de "Hecho"
[Criterios específicos que definen cuándo esta historia está completamente terminada]

### Estimación
[Estimación de esfuerzo: S/M/L o puntos de historia]
```

## Consideraciones Especiales

### Para Diferentes Tipos de Historias

#### Historias de Frontend
- Incluir consideraciones de UX/UI
- Especificar comportamiento responsivo
- Definir estados de interacción (loading, error, success)
- Considerar accesibilidad

#### Historias de Backend
- Definir contratos de API claramente
- Especificar validaciones de datos
- Incluir consideraciones de seguridad
- Definir logging y monitoreo

#### Historias de Integración
- Especificar puntos de integración
- Definir manejo de errores de servicios externos
- Incluir consideraciones de timeout y retry
- Planificar testing de integración

### Validación con Stakeholders

- **Product Owner:** Validar valor de negocio y prioridad
- **Arquitecto:** Confirmar viabilidad técnica y alineación
- **Desarrolladores:** Verificar claridad y implementabilidad
- **Diseñadores:** Asegurar coherencia de experiencia de usuario

## Métricas de Éxito

- **Claridad:** La historia es comprensible sin ambigüedades
- **Completitud:** Todos los criterios de aceptación están definidos
- **Testabilidad:** Cada criterio puede ser verificado objetivamente
- **Valor:** La historia entrega valor medible al usuario
- **Implementabilidad:** La historia puede ser completada en una iteración

## Iteración y Mejora

- **Feedback Loop:** Incorporar feedback de historias anteriores
- **Refinamiento:** Ajustar enfoque basado en lecciones aprendidas
- **Optimización:** Mejorar proceso de definición de historias
- **Documentación:** Mantener registro de patrones exitosos
