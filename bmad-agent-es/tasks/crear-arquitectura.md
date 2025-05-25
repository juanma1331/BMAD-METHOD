# Tarea de Creación de Arquitectura

## Propósito

- Transformar PRDs y especificaciones técnicas en diseños de arquitectura comprensivos y accionables.
- Definir decisiones técnicas fundamentales que guiarán todo el desarrollo.
- Crear documentación arquitectónica que sirva como referencia autoritativa para equipos de desarrollo.
- Establecer patrones, estándares y mejores prácticas para la implementación.

Recuerda mientras sigues las próximas instrucciones:

- Tu arquitectura forma la base técnica para todo el desarrollo subsecuente.
- Las decisiones que tomes impactarán escalabilidad, mantenibilidad y rendimiento a largo plazo.
- Los desarrolladores usarán directamente tu documentación para guiar decisiones de implementación.
- Equilibra idealismo técnico con restricciones prácticas y objetivos del proyecto.

## Instrucciones

### 1. Análisis de Entrada y Contexto

- **Revisar Documentación Existente:**
  - Analizar minuciosamente el PRD proporcionado, prestando especial atención a requisitos funcionales y no funcionales
  - Examinar cualquier especificación UI/UX si está disponible
  - Revisar restricciones técnicas, supuestos y decisiones ya tomadas
  - Identificar cualquier documentación de arquitectura o decisiones técnicas existentes

- **Clarificar Ambigüedades:**
  - Identificar cualquier requisito técnico ambiguo o faltante
  - Hacer preguntas específicas sobre aspectos técnicos no claros
  - Validar entendimiento de objetivos de rendimiento, escalabilidad y seguridad
  - Confirmar restricciones de presupuesto, cronograma y recursos

### 2. Análisis de Requisitos Arquitectónicos

- **Requisitos No Funcionales:**
  - Analizar requisitos de rendimiento (latencia, throughput, concurrencia)
  - Evaluar necesidades de escalabilidad (usuarios, datos, transacciones)
  - Identificar requisitos de seguridad y cumplimiento
  - Determinar necesidades de disponibilidad y confiabilidad
  - Considerar requisitos de mantenibilidad y operabilidad

- **Restricciones Técnicas:**
  - Evaluar limitaciones de infraestructura existente
  - Considerar restricciones de presupuesto y recursos
  - Analizar experiencia y capacidades del equipo
  - Identificar dependencias de sistemas externos
  - Revisar requisitos de integración y compatibilidad

### 3. Diseño de Arquitectura de Alto Nivel

- **Arquitectura de Sistema:**
  - Definir arquitectura general del sistema (monolítico, microservicios, serverless, híbrido)
  - Diseñar separación de responsabilidades y límites de componentes
  - Establecer patrones de comunicación entre servicios/componentes
  - Definir estrategia de gestión de datos y persistencia
  - Planificar estrategia de escalado horizontal y vertical

- **Stack Tecnológico:**
  - Seleccionar tecnologías backend apropiadas (lenguajes, frameworks, librerías)
  - Elegir tecnologías frontend si aplica (frameworks, librerías, herramientas)
  - Decidir sobre soluciones de base de datos (relacional, NoSQL, caché)
  - Seleccionar herramientas de desarrollo y DevOps
  - Evaluar servicios de nube y infraestructura

### 4. Diseño Detallado de Componentes

- **Arquitectura de Aplicación:**
  - Definir estructura de capas y responsabilidades
  - Diseñar patrones de acceso a datos y gestión de estado
  - Establecer patrones de manejo de errores y logging
  - Definir estrategias de validación y sanitización
  - Planificar gestión de configuración y secretos

- **APIs y Interfaces:**
  - Diseñar contratos de API (REST, GraphQL, gRPC)
  - Definir esquemas de datos y formatos de mensaje
  - Establecer patrones de versionado de API
  - Planificar estrategias de autenticación y autorización
  - Diseñar manejo de errores y códigos de respuesta

### 5. Consideraciones de Seguridad

- **Seguridad por Capas:**
  - Implementar autenticación y autorización robustas
  - Planificar cifrado de datos en tránsito y en reposo
  - Establecer validación de entrada y sanitización
  - Definir estrategias de gestión de secretos
  - Planificar auditoría y logging de seguridad

- **Cumplimiento y Privacidad:**
  - Considerar requisitos de cumplimiento regulatorio (GDPR, HIPAA, etc.)
  - Planificar gestión de datos personales y privacidad
  - Establecer políticas de retención y eliminación de datos
  - Definir procedimientos de respuesta a incidentes

### 6. Estrategia de Despliegue e Infraestructura

- **Ambientes y Despliegue:**
  - Diseñar estrategia de ambientes (dev, staging, prod)
  - Planificar pipelines CI/CD y automatización
  - Definir estrategias de despliegue (blue-green, canary, rolling)
  - Establecer procedimientos de rollback y recuperación
  - Planificar gestión de configuración por ambiente

- **Infraestructura y Operaciones:**
  - Diseñar arquitectura de infraestructura (on-premise, cloud, híbrida)
  - Planificar estrategias de escalado automático
  - Establecer monitoreo, alertas y observabilidad
  - Definir estrategias de backup y recuperación ante desastres
  - Planificar gestión de costos y optimización de recursos

### 7. Documentación y Comunicación

- **Documentación Arquitectónica:**
  - Crear diagramas de arquitectura claros y comprensivos
  - Documentar decisiones arquitectónicas y justificaciones
  - Establecer estándares de desarrollo y mejores prácticas
  - Crear guías de implementación para desarrolladores
  - Documentar procedimientos operacionales

- **Transferencia de Conocimiento:**
  - Preparar presentaciones para stakeholders técnicos
  - Crear materiales de onboarding para nuevos desarrolladores
  - Establecer procesos de revisión arquitectónica
  - Planificar sesiones de capacitación técnica
  - Definir canales de comunicación y escalación

## Plantilla de Salida

Usar la plantilla `architecture-tmpl` para estructurar la documentación final, asegurando que incluya:

- **Resumen Ejecutivo:** Visión general de alto nivel para stakeholders no técnicos
- **Decisiones Arquitectónicas:** Decisiones clave con justificaciones y trade-offs
- **Diagramas de Sistema:** Representaciones visuales de la arquitectura
- **Especificaciones Técnicas:** Detalles técnicos para desarrolladores
- **Guías de Implementación:** Patrones y estándares para desarrollo
- **Consideraciones Operacionales:** Requisitos de despliegue y operación

## Validación y Revisión

- **Validación Técnica:**
  - Verificar que la arquitectura cumple todos los requisitos funcionales y no funcionales
  - Validar que las decisiones tecnológicas son apropiadas y sostenibles
  - Confirmar que el diseño es implementable dentro de restricciones dadas
  - Asegurar que la arquitectura soporta objetivos de escalabilidad y rendimiento

- **Revisión con Stakeholders:**
  - Presentar arquitectura a stakeholders técnicos para feedback
  - Validar decisiones con equipos de desarrollo y operaciones
  - Confirmar alineación con objetivos de negocio y producto
  - Incorporar feedback y realizar ajustes según sea necesario

## Consideraciones Especiales

- **Evolución y Mantenimiento:**
  - Diseñar para cambios futuros y evolución de requisitos
  - Establecer procesos para actualización y revisión arquitectónica
  - Planificar migración y modernización gradual
  - Considerar impacto de nuevas tecnologías y tendencias

- **Riesgos y Mitigación:**
  - Identificar riesgos técnicos y arquitectónicos
  - Desarrollar estrategias de mitigación y planes de contingencia
  - Establecer métricas y KPIs para monitoreo de salud arquitectónica
  - Planificar revisiones regulares y optimizaciones
