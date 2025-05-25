# Historia de Usuario: {Título Descriptivo}

## Información Básica

- **ID de Historia:** {US-XXX}
- **Épica:** {Nombre de la Épica}
- **Prioridad:** {Alta/Media/Baja}
- **Estimación:** {Puntos de Historia o S/M/L}
- **Sprint/Iteración:** {Número de Sprint}
- **Asignado a:** {Nombre del Desarrollador}

## Descripción de la Historia

### Historia de Usuario
Como **{tipo específico de usuario/persona}**,
Quiero **{objetivo/acción específica}**,
Para que **{beneficio/valor claro}**.

### Contexto y Justificación
{Explicación del contexto de negocio y técnico que hace esta historia relevante. Incluir por qué es importante ahora y cómo se relaciona con objetivos más amplios del producto.}

### Valor de Negocio
{Descripción clara del valor que esta historia aporta al negocio y a los usuarios. Incluir métricas esperadas si son aplicables.}

## Criterios de Aceptación

### Escenario Principal (Happy Path)
- [ ] **{Criterio 1}:** {Descripción específica y testeable del comportamiento esperado}
- [ ] **{Criterio 2}:** {Descripción específica y testeable del comportamiento esperado}
- [ ] **{Criterio 3}:** {Descripción específica y testeable del comportamiento esperado}

### Escenarios Alternativos
- [ ] **{Escenario Alt 1}:** {Descripción del comportamiento en escenario alternativo}
- [ ] **{Escenario Alt 2}:** {Descripción del comportamiento en escenario alternativo}

### Manejo de Errores
- [ ] **{Error 1}:** {Cómo debe manejarse este tipo de error}
- [ ] **{Error 2}:** {Cómo debe manejarse este tipo de error}

### Validaciones
- [ ] **{Validación 1}:** {Qué datos deben validarse y cómo}
- [ ] **{Validación 2}:** {Qué datos deben validarse y cómo}

## Requisitos No Funcionales

### Rendimiento
- [ ] **Tiempo de Respuesta:** {Tiempo máximo aceptable para operaciones}
- [ ] **Throughput:** {Número de operaciones por segundo si aplica}
- [ ] **Concurrencia:** {Número de usuarios simultáneos soportados}

### Seguridad
- [ ] **Autenticación:** {Requisitos de autenticación}
- [ ] **Autorización:** {Permisos y roles requeridos}
- [ ] **Validación de Datos:** {Validaciones de seguridad específicas}

### Usabilidad
- [ ] **Accesibilidad:** {Estándares de accesibilidad a cumplir}
- [ ] **Responsive Design:** {Comportamiento en diferentes dispositivos}
- [ ] **Experiencia de Usuario:** {Requisitos específicos de UX}

## Especificaciones Técnicas

### Componentes Afectados
- **Frontend:** {Componentes, páginas o módulos afectados}
- **Backend:** {APIs, servicios o módulos afectados}
- **Base de Datos:** {Tablas, esquemas o cambios de datos}
- **Integraciones:** {Servicios externos o APIs de terceros}

### APIs Requeridas
```
{Especificación de endpoints necesarios}
GET/POST/PUT/DELETE /api/endpoint
Request: {estructura del request}
Response: {estructura del response}
```

### Cambios de Base de Datos
```sql
-- Cambios de esquema necesarios
{Scripts SQL o descripción de cambios}
```

### Configuraciones
- **Variables de Entorno:** {Nuevas configuraciones requeridas}
- **Feature Flags:** {Flags necesarios para esta funcionalidad}
- **Permisos:** {Nuevos permisos o roles requeridos}

## Diseño y UX

### Wireframes/Mockups
{Enlaces o descripciones de diseños visuales}

### Flujo de Usuario
1. {Paso 1 del flujo de usuario}
2. {Paso 2 del flujo de usuario}
3. {Paso 3 del flujo de usuario}

### Estados de UI
- **Estado Inicial:** {Cómo se ve la interfaz inicialmente}
- **Estado de Carga:** {Indicadores de loading}
- **Estado de Éxito:** {Feedback de operación exitosa}
- **Estado de Error:** {Manejo visual de errores}

## Dependencias

### Historias Prerequisito
- [ ] **{US-XXX}:** {Título de historia que debe completarse antes}
- [ ] **{US-XXX}:** {Título de historia que debe completarse antes}

### Dependencias Técnicas
- [ ] **{Dependencia 1}:** {Descripción de dependencia técnica}
- [ ] **{Dependencia 2}:** {Descripción de dependencia técnica}

### Dependencias Externas
- [ ] **{Servicio/API}:** {Descripción de dependencia externa}
- [ ] **{Recurso}:** {Descripción de recurso necesario}

## Testing

### Casos de Prueba
1. **{Caso de Prueba 1}:**
   - Precondiciones: {Estado inicial requerido}
   - Pasos: {Pasos a ejecutar}
   - Resultado Esperado: {Resultado esperado}

2. **{Caso de Prueba 2}:**
   - Precondiciones: {Estado inicial requerido}
   - Pasos: {Pasos a ejecutar}
   - Resultado Esperado: {Resultado esperado}

### Testing Automatizado
- [ ] **Pruebas Unitarias:** {Componentes que necesitan pruebas unitarias}
- [ ] **Pruebas de Integración:** {Integraciones que necesitan testing}
- [ ] **Pruebas E2E:** {Flujos que necesitan testing end-to-end}

### Testing Manual
- [ ] **Pruebas de Usabilidad:** {Aspectos de UX a validar manualmente}
- [ ] **Pruebas de Compatibilidad:** {Navegadores/dispositivos a probar}
- [ ] **Pruebas de Rendimiento:** {Aspectos de performance a validar}

## Definición de "Hecho"

### Criterios de Completitud
- [ ] **Desarrollo Completo:** Toda la funcionalidad implementada según especificaciones
- [ ] **Pruebas Pasando:** Todas las pruebas automatizadas pasando
- [ ] **Revisión de Código:** Código revisado y aprobado por pares
- [ ] **Testing Manual:** Pruebas manuales completadas y documentadas
- [ ] **Documentación:** Documentación técnica actualizada
- [ ] **Despliegue:** Funcionalidad desplegada en ambiente de staging
- [ ] **Validación PO:** Product Owner ha validado la funcionalidad

### Criterios de Calidad
- [ ] **Estándares de Código:** Código cumple estándares de calidad establecidos
- [ ] **Rendimiento:** Cumple requisitos de rendimiento especificados
- [ ] **Seguridad:** Pasa validaciones de seguridad
- [ ] **Accesibilidad:** Cumple estándares de accesibilidad requeridos

## Notas Adicionales

### Consideraciones de Implementación
{Notas técnicas importantes para el equipo de desarrollo}

### Riesgos Identificados
- **{Riesgo 1}:** {Descripción del riesgo y mitigación}
- **{Riesgo 2}:** {Descripción del riesgo y mitigación}

### Oportunidades de Mejora
{Ideas para mejoras futuras relacionadas con esta funcionalidad}

## Historial de Cambios

| Fecha | Versión | Cambio | Autor |
|-------|---------|--------|-------|
| {fecha} | 1.0 | Creación inicial | {autor} |
| {fecha} | 1.1 | {descripción del cambio} | {autor} |

## Aprobaciones

- **Product Owner:** {Nombre} - {Fecha}
- **Arquitecto:** {Nombre} - {Fecha}
- **Tech Lead:** {Nombre} - {Fecha}

---

**Estado:** {Draft/Ready/In Progress/In Review/Done}
**Última Actualización:** {Fecha}
**Próxima Revisión:** {Fecha}
