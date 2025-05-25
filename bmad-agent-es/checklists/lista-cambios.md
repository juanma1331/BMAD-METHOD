# Lista de Verificación de Navegación de Cambios

**Propósito:** Guiar sistemáticamente al Agente seleccionado y al usuario a través del análisis y planificación requeridos cuando se identifica un cambio significativo (pivote, problema técnico, requisito faltante, historia fallida) durante el flujo de trabajo BMAD.

**Instrucciones:** Revisar cada elemento con el usuario. Marcar `[x]` para completado/confirmado, `[N/A]` si no aplica, o agregar notas para puntos de discusión.

---

## 1. Entender el Disparador y Contexto

- [ ] **Identificar Historia Disparadora:** Identificar claramente la historia (o historias) que reveló el problema.
- [ ] **Definir el Problema:** Articular el problema central con precisión.
  - [ ] ¿Es una limitación/callejón sin salida técnico?
  - [ ] ¿Es un requisito recién descubierto?
  - [ ] ¿Es un malentendido fundamental de requisitos existentes?
  - [ ] ¿Es un pivote necesario basado en retroalimentación o nueva información?
  - [ ] ¿Es una historia fallida/abandonada que necesita un nuevo enfoque?
- [ ] **Evaluar Impacto Inicial:** Describir las consecuencias inmediatas observadas (ej. progreso bloqueado, funcionalidad incorrecta, tecnología no viable).
- [ ] **Recopilar Evidencia:** Anotar logs específicos, mensajes de error, retroalimentación del usuario, o análisis que apoye la definición del problema.

## 2. Evaluación de Impacto en Épicas

- [ ] **Analizar Épica Actual:**
  - [ ] ¿Puede completarse aún la épica actual que contiene la historia disparadora?
  - [ ] ¿Necesita modificación la épica actual (cambios, adiciones, eliminaciones de historias)?
  - [ ] ¿Debe abandonarse o redefinirse fundamentalmente la épica actual?
- [ ] **Analizar Épicas Futuras:**
  - [ ] Revisar todas las épicas planificadas restantes.
  - [ ] ¿Requiere el problema cambios a historias planificadas en épicas futuras?
  - [ ] ¿Invalida el problema alguna épica futura?
  - [ ] ¿Necesita el problema la creación de épicas completamente nuevas?
  - [ ] ¿Debe cambiarse el orden/prioridad de épicas futuras?
- [ ] **Resumir Impacto en Épicas:** Documentar brevemente el efecto general en la estructura y flujo de épicas del proyecto.

## 3. Análisis de Conflictos e Impacto en Artefactos

- [ ] **Revisar PRD:**
  - [ ] ¿Conflicta el problema con los objetivos centrales o requisitos establecidos en el PRD?
  - [ ] ¿Necesita el PRD clarificación o actualizaciones basadas en el nuevo entendimiento?
- [ ] **Revisar Documento de Arquitectura:**
  - [ ] ¿Conflicta el problema con la arquitectura documentada (componentes, patrones, elecciones tecnológicas)?
  - [ ] ¿Están impactados componentes/diagramas/secciones específicos?
  - [ ] ¿Necesita actualización la lista de tecnologías?
  - [ ] ¿Necesitan revisión los modelos de datos o esquemas?
  - [ ] ¿Están afectadas las integraciones de APIs externas?
- [ ] **Revisar Especificación Frontend (si aplica):**
  - [ ] ¿Conflicta el problema con la arquitectura FE, elección de biblioteca de componentes, o diseño UI/UX?
  - [ ] ¿Están impactados componentes FE específicos o flujos de usuario?
- [ ] **Revisar Otros Artefactos (si aplica):**
  - [ ] Considerar impacto en scripts de despliegue, IaC, configuración de monitoreo, etc.
- [ ] **Resumir Impacto en Artefactos:** Listar todos los artefactos que requieren actualizaciones y la naturaleza de los cambios necesarios.

## 4. Evaluación de Camino a Seguir

- [ ] **Opción 1: Ajuste Directo / Integración:**
  - [ ] ¿Puede abordarse el problema modificando/agregando historias futuras dentro del plan existente?
  - [ ] Definir el alcance y naturaleza de estos ajustes.
  - [ ] Evaluar factibilidad, esfuerzo y riesgos de este camino.
- [ ] **Opción 2: Posible Rollback:**
  - [ ] ¿Simplificaría significativamente revertir historias completadas para abordar el problema?
  - [ ] Identificar historias/commits específicos a considerar para rollback.
  - [ ] Evaluar el esfuerzo requerido para rollback.
  - [ ] Evaluar el impacto del rollback (trabajo perdido, implicaciones de datos).
  - [ ] Comparar el beneficio/costo neto vs. Ajuste Directo.
- [ ] **Opción 3: Revisión de MVP del PRD y Posible Re-alcance:**
  - [ ] ¿Es aún alcanzable el MVP original del PRD dado el problema y restricciones?
  - [ ] ¿Necesita reducción el alcance del MVP (eliminando características/épicas)?
  - [ ] ¿Necesitan modificación los objetivos centrales del MVP?
  - [ ] ¿Se necesitan enfoques alternativos para cumplir la intención original del MVP?
  - [ ] **Caso Extremo:** ¿Necesita el problema una replanificación fundamental o potencialmente un nuevo PRD V2 (a ser manejado por PM)?
- [ ] **Seleccionar Camino Recomendado:** Basado en la evaluación, acordar el camino más viable hacia adelante.

## 5. Componentes de Propuesta de Cambio de Sprint

_(Asegurar que todos los puntos acordados de secciones previas estén capturados en la propuesta)_

- [ ] **Resumen del Problema Identificado:** Declaración clara y concisa del problema.
- [ ] **Resumen de Impacto en Épicas:** Cómo están afectadas las épicas.
- [ ] **Necesidades de Ajuste de Artefactos:** Lista de documentos a cambiar.
- [ ] **Camino Recomendado a Seguir:** Solución elegida con justificación.
- [ ] **Impacto en MVP del PRD:** Cambios en alcance/objetivos (si los hay).
- [ ] **Plan de Acción de Alto Nivel:** Próximos pasos para historias/actualizaciones.
- [ ] **Plan de Handoff de Agentes:** Identificar roles necesarios (PM, Arch, Design Arch, PO).

## 6. Revisión Final y Handoff

- [ ] **Revisar Lista de Verificación:** Confirmar que todos los elementos relevantes fueron discutidos.
- [ ] **Revisar Propuesta de Cambio de Sprint:** Asegurar que refleje con precisión la discusión y decisiones.
- [ ] **Aprobación del Usuario:** Obtener aprobación explícita del usuario para la propuesta.
- [ ] **Confirmar Próximos Pasos:** Reiterar el plan de handoff y las próximas acciones a tomar por agentes específicos.

---
