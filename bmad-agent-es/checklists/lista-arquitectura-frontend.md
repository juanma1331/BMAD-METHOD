# Lista de Verificación de Documento de Arquitectura Frontend

## Propósito
Esta lista de verificación es para que el Arquitecto de Diseño la use después de completar el "Modo de Arquitectura Frontend" y poblar el documento `plantilla-arquitectura-frontend.md`. Asegura que todas las secciones estén comprensivamente cubiertas y cumplan estándares de calidad antes de la finalización.

---

## I. Introducción

- [ ] ¿Está el `{Nombre del Proyecto}` correctamente completado a lo largo de la Introducción?
- [ ] ¿Está presente y correcto el enlace al Documento de Arquitectura Principal?
- [ ] ¿Está presente y correcto el enlace a la Especificación UI/UX?
- [ ] ¿Está presente y correcto el enlace a los Archivos de Diseño Primarios (Figma, Sketch, etc.)?
- [ ] ¿Está incluido el enlace a un Storybook Desplegado / Showcase de Componentes, si aplica y está disponible?

## II. Filosofía y Patrones Frontend Generales

- [ ] ¿Están claramente establecidos el Framework y Bibliotecas Centrales elegidos y alineados con el documento de arquitectura principal?
- [ ] ¿Está claramente descrita la Arquitectura de Componentes (ej. Atomic Design, Presentacional/Contenedor)?
- [ ] ¿Está claramente descrita la Estrategia de Gestión de Estado (ej. Redux Toolkit, Zustand) a alto nivel?
- [ ] ¿Está claramente explicado el Flujo de Datos (ej. Unidireccional)?
- [ ] ¿Está claramente definido el Enfoque de Estilos (ej. CSS Modules, Tailwind CSS)?
- [ ] ¿Están listados los Patrones de Diseño Clave a emplear (ej. Provider, Hooks)?
- [ ] ¿Se alinea esta sección con "Selecciones Definitivas de Stack Tecnológico" en el documento de arquitectura principal?
- [ ] ¿Se consideran las implicaciones de la arquitectura general del sistema (monorepo/polyrepo, servicios backend)?

## III. Estructura Detallada de Directorios Frontend

- [ ] ¿Se proporciona un diagrama ASCII representando la estructura de carpetas de la aplicación frontend?
- [ ] ¿Es el diagrama claro, preciso y refleja el framework/patrones elegidos?
- [ ] ¿Están destacadas las convenciones para organizar componentes, páginas, servicios, estado, estilos, etc.?
- [ ] ¿Están presentes y claras las notas explicando convenciones específicas o justificación para la estructura?

## IV. Desglose de Componentes y Detalles de Implementación

### Nomenclatura y Organización de Componentes
- [ ] ¿Están descritas las convenciones para nombrar componentes (ej. PascalCase)?
- [ ] ¿Está claramente explicada la organización de componentes en el sistema de archivos (reiterando de la estructura de directorios si es necesario)?

### Plantilla para Especificación de Componentes
- [ ] ¿Está la "Plantilla para Especificación de Componentes" misma completa y bien definida?
  - [ ] ¿Incluye campos para: Propósito, Archivo(s) Fuente, Referencia Visual?
  - [ ] ¿Incluye una estructura de tabla para Props (Nombre, Tipo, Requerido, Por Defecto, Descripción)?
  - [ ] ¿Incluye una estructura de tabla para Estado Interno (Variable, Tipo, Valor Inicial, Descripción)?
  - [ ] ¿Incluye una sección para Elementos UI Clave / Estructura (textual o pseudo-HTML)?
  - [ ] ¿Incluye una sección para Eventos Manejados / Emitidos?
  - [ ] ¿Incluye una sección para Acciones Disparadas (Gestión de Estado, Llamadas API)?
  - [ ] ¿Incluye una sección para Notas de Estilos?
  - [ ] ¿Incluye una sección para Notas de Accesibilidad?
- [ ] ¿Hay una declaración clara de que esta plantilla debe usarse para la mayoría de componentes específicos de características?

### Componentes Fundamentales/Compartidos (si se especifican por adelantado)
- [ ] Si se especifican componentes UI fundamentales/compartidos, ¿siguen la "Plantilla para Especificación de Componentes"?
- [ ] ¿Es clara la justificación para especificar estos componentes por adelantado?

## V. Gestión de Estado en Profundidad

- [ ] ¿Se reitera la Solución de Gestión de Estado elegida y se proporciona justificación brevemente (si no está completamente cubierto en el doc de arquitectura principal)?
- [ ] ¿Están claramente definidas las convenciones para Estructura de Store / Slices (ej. ubicación, slices basados en características)?
- [ ] Si se proporciona un Ejemplo de Slice Central (ej. `sessionSlice`):
  - [ ] ¿Es claro su propósito?
  - [ ] ¿Está definida su Forma de Estado (ej. usando interfaz TypeScript)?
  - [ ] ¿Están listados sus Reducers/Acciones Clave?
- [ ] ¿Se proporciona una Plantilla de Slice de Característica, delineando propósito, forma de estado, y reducers/acciones clave a completar?
- [ ] ¿Se anotan las convenciones para Selectores Clave (ej. usar `createSelector`)?
- [ ] ¿Se proporcionan ejemplos de Selectores Clave para cualquier slice central?
- [ ] ¿Se describen las convenciones para Acciones / Reducers / Thunks Clave (especialmente async)?
- [ ] ¿Se proporciona un ejemplo de una Acción/Thunk Central (ej. `authenticateUser`), detallando su propósito y flujo de dispatch?
- [ ] ¿Se proporciona una Plantilla de Acción/Thunk de Característica para operaciones async específicas de características?

## VI. Capa de Interacción API

- [ ] ¿Está detallada la Configuración del Cliente HTTP (ej. instancia Axios, wrapper Fetch, URL base, headers por defecto, interceptores)?
- [ ] ¿Se explican las convenciones de Definiciones de Servicio?
- [ ] ¿Se proporciona un ejemplo de servicio (ej. `userService.ts`), incluyendo su propósito y funciones de ejemplo?
- [ ] ¿Se describe el Manejo Global de Errores para llamadas API (ej. notificaciones toast, estado global de error)?
- [ ] ¿Se proporciona orientación sobre Manejo Específico de Errores dentro de componentes?
- [ ] ¿Se detalla y configura cualquier Lógica de Reintento del lado del cliente para llamadas API?

## VII. Estrategia de Enrutamiento

- [ ] ¿Se establece la Biblioteca de Enrutamiento elegida?
- [ ] ¿Se proporciona una tabla de Definiciones de Rutas?
  - [ ] ¿Incluye Patrón de Ruta, Componente/Página, estado de Protección, y Notas para cada ruta?
  - [ ] ¿Están listadas todas las rutas clave de la aplicación?
- [ ] ¿Se describe el mecanismo de Guardia de Autenticación para proteger rutas?
- [ ] ¿Se describe el mecanismo de Guardia de Autorización (si aplica para roles/permisos)?

## VIII. Construcción, Empaquetado y Despliegue

- [ ] ¿Están listados los Scripts de Construcción Clave (ej. `npm run build`) y se explica su propósito?
- [ ] ¿Se describe el manejo de Variables de Entorno durante el proceso de construcción para diferentes entornos?
- [ ] ¿Se detalla la estrategia de División de Código (ej. basada en rutas, basada en componentes)?
- [ ] ¿Se confirma o explica el Tree Shaking?
- [ ] ¿Se delinea la estrategia de Carga Perezosa (para componentes, imágenes, rutas)?
- [ ] ¿Se menciona la Minificación y Compresión por herramientas de construcción?
- [ ] ¿Se especifica la Plataforma de Despliegue Objetivo (ej. Vercel, Netlify)?
- [ ] ¿Se describe el Disparador de Despliegue (ej. Git push vía CI/CD), referenciando el pipeline principal de CI/CD?
- [ ] ¿Se delinea la Estrategia de Caché de Assets (CDN/navegador) para assets estáticos?

## IX. Estrategia de Testing Frontend

- [ ] ¿Hay un enlace al documento/sección de Estrategia Principal de Testing, y es correcto?
- [ ] Para Testing de Componentes:
  - [ ] ¿Está claramente definido el Alcance?
  - [ ] ¿Están listadas las Herramientas?
  - [ ] ¿Es claro el Enfoque de las pruebas (renderizado, props, interacciones)?
  - [ ] ¿Se especifica la Ubicación de archivos de prueba?
- [ ] Para Testing de Integración/Flujo UI:
  - [ ] ¿Es claro el Alcance (interacciones entre múltiples componentes)?
  - [ ] ¿Están listadas las Herramientas (pueden ser las mismas que testing de componentes)?
  - [ ] ¿Es claro el Enfoque de estas pruebas?
- [ ] Para Testing End-to-End UI:
  - [ ] ¿Se reiteran las Herramientas (ej. Playwright, Cypress) de la estrategia principal?
  - [ ] ¿Se define el Alcance (journeys clave de usuario para frontend)?
  - [ ] ¿Se aborda la Gestión de Datos de Prueba para pruebas E2E UI?

## X. Detalles de Implementación de Accesibilidad (AX)

- [ ] ¿Hay énfasis en usar HTML Semántico?
- [ ] ¿Se proporcionan directrices para Implementación ARIA (roles, estados, propiedades para componentes personalizados)?
- [ ] ¿Se establecen requisitos para Navegación por Teclado (todos los elementos interactivos enfocables/operables)?
- [ ] ¿Se aborda la Gestión de Enfoque (para modales, contenido dinámico)?
- [ ] ¿Se listan las Herramientas de Testing para AX (ej. Axe DevTools, Lighthouse)?
- [ ] ¿Se alinea esta sección con requisitos AX de la Especificación UI/UX?

## XI. Consideraciones de Rendimiento

- [ ] ¿Se discute la Optimización de Imágenes (formatos, imágenes responsivas, carga perezosa)?
- [ ] ¿Se reitera la División de Código y Carga Perezosa (impacto en rendimiento percibido) si es necesario?
- [ ] ¿Se mencionan técnicas para Minimizar Re-renders (ej. `React.memo`)?
- [ ] ¿Se considera el uso de Debouncing/Throttling para manejadores de eventos?
- [ ] ¿Se menciona Virtualización para listas largas/conjuntos de datos grandes si aplica?
- [ ] ¿Se discuten Estrategias de Caché del Lado del Cliente (caché del navegador, service workers) si es relevante?
- [ ] ¿Se listan Herramientas de Monitoreo de Rendimiento (ej. Lighthouse, DevTools)?

## XII. Registro de Cambios

- [ ] ¿Está presente e inicializada la tabla de Registro de Cambios?
- [ ] ¿Hay un proceso para actualizar el registro de cambios conforme evoluciona el documento?

---

## Aprobación de Revisión Final

- [ ] ¿Se han completado o eliminado todos los marcadores de posición (ej. `{Nombre del Proyecto}`, `{ej. ...}`) donde sea apropiado?
- [ ] ¿Ha sido revisado el documento para claridad, consistencia y completitud por el Arquitecto de Diseño?
- [ ] ¿Están todos los documentos enlazados (Arquitectura Principal, Especificación UI/UX) finalizados o suficientemente estables para que este documento dependa de ellos?
- [ ] ¿Está el documento listo para ser compartido con el equipo de desarrollo?
