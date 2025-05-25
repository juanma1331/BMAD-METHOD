# Documento de Arquitectura Frontend de {Nombre del Proyecto}

## Tabla de Contenidos

{ Actualizar esto si se agregan o eliminan secciones y subsecciones }

- [Introducción](#introducción)
- [Filosofía y Patrones Frontend Generales](#filosofía-y-patrones-frontend-generales)
- [Estructura Detallada de Directorios Frontend](#estructura-detallada-de-directorios-frontend)
- [Desglose de Componentes y Detalles de Implementación](#desglose-de-componentes-y-detalles-de-implementación)
  - [Nomenclatura y Organización de Componentes](#nomenclatura-y-organización-de-componentes)
  - [Plantilla para Especificación de Componentes](#plantilla-para-especificación-de-componentes)
- [Gestión de Estado en Profundidad](#gestión-de-estado-en-profundidad)
  - [Estructura de Store / Slices](#estructura-de-store--slices)
  - [Selectores Clave](#selectores-clave)
  - [Acciones / Reducers / Thunks Clave](#acciones--reducers--thunks-clave)
- [Capa de Interacción API](#capa-de-interacción-api)
  - [Estructura Cliente/Servicio](#estructura-clienteservicio)
  - [Manejo de Errores y Reintentos (Frontend)](#manejo-de-errores-y-reintentos-frontend)
- [Estrategia de Enrutamiento](#estrategia-de-enrutamiento)
  - [Definiciones de Rutas](#definiciones-de-rutas)
  - [Guardias de Rutas / Protección](#guardias-de-rutas--protección)
- [Construcción, Empaquetado y Despliegue](#construcción-empaquetado-y-despliegue)
  - [Proceso de Construcción y Scripts](#proceso-de-construcción-y-scripts)
  - [Optimizaciones de Empaquetado Clave](#optimizaciones-de-empaquetado-clave)
  - [Despliegue a CDN/Hosting](#despliegue-a-cdnhosting)
- [Estrategia de Testing Frontend](#estrategia-de-testing-frontend)
  - [Testing de Componentes](#testing-de-componentes)
  - [Testing de Integración/Flujo UI](#testing-de-integraciónflujo-ui)
  - [Herramientas y Alcance de Testing End-to-End UI](#herramientas-y-alcance-de-testing-end-to-end-ui)
- [Detalles de Implementación de Accesibilidad (AX)](#detalles-de-implementación-de-accesibilidad-ax)
- [Consideraciones de Rendimiento](#consideraciones-de-rendimiento)
- [Estrategia de Internacionalización (i18n) y Localización (l10n)](#estrategia-de-internacionalización-i18n-y-localización-l10n)
- [Gestión de Feature Flags](#gestión-de-feature-flags)
- [Consideraciones de Seguridad Frontend](#consideraciones-de-seguridad-frontend)
- [Soporte de Navegadores y Mejora Progresiva](#soporte-de-navegadores-y-mejora-progresiva)
- [Registro de Cambios](#registro-de-cambios)

## Introducción

{ Este documento detalla la arquitectura técnica específicamente para el frontend de {Nombre del Proyecto}. Complementa el Documento de Arquitectura Principal de {Nombre del Proyecto} y la Especificación UI/UX. Este documento detalla la arquitectura frontend y **se basa en las decisiones fundamentales** (ej. stack tecnológico general, CI/CD, herramientas de testing primarias) definidas en el Documento de Arquitectura Principal de {Nombre del Proyecto} (`docs/architecture.md` o equivalente enlazado). **Las elaboraciones específicas del frontend o desviaciones de patrones generales deben ser explícitamente anotadas aquí.** El objetivo es proporcionar un blueprint claro para el desarrollo frontend, asegurando consistencia, mantenibilidad y alineación con el diseño general del sistema y objetivos de experiencia de usuario. }

- **Enlace al Documento de Arquitectura Principal (REQUERIDO):** {ej. `docs/architecture.md`}
- **Enlace a la Especificación UI/UX (REQUERIDO si existe):** {ej. `docs/especificacion-frontend.md`}
- **Enlace a Archivos de Diseño Primarios (Figma, Sketch, etc.) (REQUERIDO si existe):** {De la Especificación UI/UX}
- **Enlace a Storybook Desplegado / Showcase de Componentes (si aplica):** {URL}

## Filosofía y Patrones Frontend Generales

{ Describe las decisiones arquitectónicas centrales y patrones elegidos para el frontend. Esto debe alinearse con las "Selecciones Definitivas de Stack Tecnológico" en el documento de arquitectura principal y considerar implicaciones de la arquitectura general del sistema (ej. monorepo vs. polyrepo, estructura de servicios backend). }

- **Framework y Bibliotecas Centrales:** {ej. React 18.x con Next.js 13.x, Angular 16.x, Vue 3.x con Nuxt.js}. **Estos se derivan de las 'Selecciones Definitivas de Stack Tecnológico' en el Documento de Arquitectura Principal.** Esta sección elabora sobre *cómo* estas elecciones se aplican específicamente al frontend.
- **Arquitectura de Componentes:** {ej. principios de Atomic Design, componentes Presentacionales vs. Contenedor, uso de bibliotecas de componentes específicas como Material UI, enfoque de Tailwind CSS para estilos. Especificar enfoque elegido y cualquier biblioteca clave.}
- **Estrategia de Gestión de Estado:** {ej. Redux Toolkit, Zustand, Vuex, NgRx. Describir brevemente el enfoque general – store global, stores de características, uso de context API. **Referenciado del Documento de Arquitectura Principal y detallado más en la sección "Gestión de Estado en Profundidad".**}
- **Flujo de Datos:** {ej. Flujo de datos unidireccional (patrón Flux/Redux), React Query/SWR para estado del servidor. Describir cómo se obtienen, cachean, pasan a componentes y actualizan los datos.}
- **Enfoque de Estilos:** **{Solución de Estilos Elegida, ej. Tailwind CSS / CSS Modules / Styled Components}**. Archivo(s) de Configuración: {ej. `tailwind.config.js`, `postcss.config.js`}. Convenciones clave: {ej. "Enfoque utility-first para Tailwind. Componentes personalizados definidos en `src/styles/components.css`. Extensiones de tema en `tailwind.config.js` bajo `theme.extend`. Para CSS Modules, archivos co-ubicados con componentes, ej. `MyComponent.module.css`."}
- **Patrones de Diseño Clave Usados:** {ej. patrón Provider, Hooks, Higher-Order Components, patrones de Servicio para llamadas API, Contenedor/Presentacional. Estos patrones deben aplicarse consistentemente. Las desviaciones requieren justificación y documentación.}

## Estructura Detallada de Directorios Frontend

{ Proporciona un diagrama ASCII representando la estructura de carpetas específica de la aplicación frontend (ej. dentro de `src/` o `app/` o un directorio raíz `frontend/` dedicado si es parte de un monorepo). Esto debe elaborar sobre la parte frontend de la estructura principal del proyecto delineada en el documento de arquitectura. Destacar convenciones para organizar componentes, páginas/vistas, servicios, estado, estilos, assets, etc. Para cada directorio clave, proporcionar una descripción obligatoria de una oración de su propósito.}

### EJEMPLO - No Prescriptivo (para una app React/Next.js)

```plaintext
src/
├── app/                        # Next.js App Router: Páginas/Layouts/Rutas. DEBE contener segmentos de ruta, layouts y componentes de página.
│   ├── (features)/             # Grupos de enrutamiento basados en características. DEBE agrupar rutas relacionadas para una característica específica.
│   │   └── dashboard/
│   │       ├── layout.tsx      # Layout específico para las rutas de la característica dashboard.
│   │       └── page.tsx        # Componente de página de entrada para una ruta de dashboard.
│   ├── api/                    # Rutas API (si se usan características backend de Next.js). DEBE contener manejadores backend para llamadas del lado del cliente.
│   ├── globals.css             # Estilos globales. DEBE contener estilos base, definiciones de variables CSS, base/componentes/utilidades de Tailwind.
│   └── layout.tsx              # Layout raíz para toda la aplicación.
├── components/                 # Componentes UI Compartidos/Reutilizables.
│   ├── ui/                     # Elementos UI base (Button, Input, Card). DEBE contener solo elementos UI genéricos, reutilizables, presentacionales, a menudo mapeados de un sistema de diseño. NO DEBE contener lógica de negocio.
│   │   ├── Button.tsx
│   │   └── ...
│   ├── layout/                 # Componentes de layout (Header, Footer, Sidebar). DEBE contener componentes estructurando layouts de página, no contenido específico de página.
│   │   ├── Header.tsx
│   │   └── ...
│   └── (feature-specific)/     # Componentes específicos de una característica pero potencialmente reutilizables dentro de ella. Esta es una alternativa a co-ubicar dentro del directorio features/.
│       └── user-profile/
│           └── ProfileCard.tsx
├── features/                   # Lógica específica de características, hooks, estado no global, servicios y componentes usados únicamente por esa característica.
│   └── auth/
│       ├── components/         # Componentes usados exclusivamente por la característica auth. NO DEBE ser importado por otras características.
│       ├── hooks/              # Custom React Hooks específicos de la característica 'auth'. Hooks reutilizables entre características pertenecen en `src/hooks/`.
│       ├── services/           # Interacciones API específicas de características u orquestaciones para la característica 'auth'.
│       └── store.ts            # Slice de estado específico de característica (ej. slice Redux) si no es parte de un store global o si el estado local es complejo.
├── hooks/                      # Custom React Hooks globales/compartibles. DEBE ser genérico y usable por múltiples características/componentes.
│   └── useAuth.ts
├── lib/ / utils/             # Funciones de utilidad, helpers, constantes. DEBE contener funciones puras y constantes, sin efectos secundarios o código específico de framework a menos que esté claramente nombrado (ej. `react-helpers.ts`).
│   └── utils.ts
├── services/                   # Clientes de servicio API globales o configuraciones SDK. DEBE definir instancias de cliente API base y servicios centrales de obtención/mutación de datos.
│   └── apiClient.ts
├── store/                      # Configuración de gestión de estado global (ej. store Redux, store Zustand).
│   ├── index.ts                # Configuración y exportación principal del store.
│   ├── rootReducer.ts          # Root reducer si se usa Redux.
│   └── (slices)/               # Directorio para slices de estado global (si no están co-ubicados en características).
├── styles/                     # Estilos globales, configuraciones de tema (si no se usa `globals.css` o similar, o para sistemas de estilos específicos como parciales SCSS).
└── types/                      # Definiciones/interfaces de tipos TypeScript globales. DEBE contener tipos compartidos entre múltiples características/módulos.
    └── index.ts
```

### Notas sobre Estructura Frontend:

{ Explicar cualquier convención específica o justificación detrás de la estructura. ej. "Los componentes están co-ubicados con su característica si no son globalmente reutilizables para mejorar modularidad." El Agente AI DEBE adherirse a esta estructura definida estrictamente. Los nuevos archivos DEBEN colocarse en el directorio apropiado basado en estas descripciones. }

## Desglose de Componentes y Detalles de Implementación

{ Esta sección delinea las convenciones y plantillas para definir componentes UI. La especificación detallada para la mayoría de componentes específicos de características emergerá conforme se implementen las historias de usuario. El agente AI DEBE seguir la "Plantilla para Especificación de Componentes" abajo siempre que se identifique un nuevo componente para desarrollo. }

### Nomenclatura y Organización de Componentes

- **Convención de Nomenclatura de Componentes:** **{ej. PascalCase para archivos y nombres de componentes: `UserProfileCard.tsx`}**. Todos los archivos de componentes DEBEN seguir esta convención.
- **Organización:** {ej. "Componentes globalmente reutilizables en `src/components/ui/` o `src/components/layout/`. Componentes específicos de características co-ubicados dentro de su directorio de característica, ej. `src/features/feature-name/components/`. Referirse a Estructura Detallada de Directorios Frontend.}

### Plantilla para Especificación de Componentes

{ Para cada componente UI significativo identificado de la Especificación UI/UX y archivos de diseño (Figma), los siguientes detalles DEBEN proporcionarse. Repetir esta subsección para cada componente. El nivel de detalle DEBE ser suficiente para que un agente AI o desarrollador lo implemente con ambigüedad mínima. }

#### Componente: `{NombreComponente}` (ej. `UserProfileCard`, `ProductDetailsView`)

- **Propósito:** {Describir brevemente qué hace este componente y su rol en la UI. DEBE ser claro y conciso.}
- **Archivo(s) Fuente:** {ej. `src/components/user-profile/UserProfileCard.tsx`. DEBE ser la ruta exacta.}
- **Referencia Visual:** {Enlace a frame/componente específico de Figma, o página de Storybook. REQUERIDO.}
- **Props (Propiedades):**
  { Listar cada prop que acepta el componente. Para cada prop, todas las columnas en la tabla DEBEN completarse. }
  | Nombre Prop | Tipo                                      | ¿Requerido? | Valor Por Defecto | Descripción                                                                                                |
  | :-------------- | :---------------------------------------- | :-------- | :------------ | :--------------------------------------------------------------------------------------------------------- |
  | `userId`        | `string`                                  | Sí       | N/A           | El ID del usuario a mostrar. DEBE ser un UUID válido.                                                     |
  | `avatarUrl`     | `string \| null`                          | No        | `null`        | URL para la imagen de avatar del usuario. DEBE ser una URL HTTPS válida si se proporciona.                                    |
  | `onEdit`        | `() => void`                              | No        | N/A           | Función callback cuando se dispara una acción de edición.                                                        |
  | `variant`       | `\'compact\' \| \'full\'`                     | No        | `\'full\'`        | Controla el modo de visualización de la tarjeta.                                                                   |
  | `{otroProp}` | `{Primitivo específico, tipo importado, o definición de interfaz/tipo inline}` | {Sí/No}  | {Si alguno}    | {DEBE establecer claramente el propósito del prop y cualquier restricción, ej. \'Debe ser un entero positivo.\'}         |
- **Estado Interno (si alguno):**
  { Describir cualquier estado interno significativo que maneje el componente. Solo listar estado que *no* se derive de props o estado global. Si el estado es complejo, considerar si debe manejarse por un hook personalizado o solución de estado global en su lugar. }
  | Variable de Estado | Tipo      | Valor Inicial | Descripción                                                                    |
  | :-------------- | :-------- | :------------ | :----------------------------------------------------------------------------- |
  | `isLoading`     | `boolean` | `false`       | Rastrea si los datos para el componente están cargando.                                   |
  | `{otroEstado}`| `{tipo}`  | `{valor}`     | {Descripción de variable de estado y su propósito.}                               |
- **Elementos UI Clave / Estructura:**
  { Proporcionar una estructura pseudo-HTML o similar a JSX representando el DOM del componente. Incluir lógica de renderizado condicional clave si aplica. **Esta estructura dicta la salida primaria para el agente AI.** }
  ```html
  <div> <!-- Contenedor principal de tarjeta con clase específica ej. styles.cardFull o styles.cardCompact basado en prop variant -->
    <img src="{avatarUrl || defaultAvatar}" alt="Avatar de Usuario" class="{styles.avatar}" />
    <h2>{userName}</h2>
    <p class="{variant === 'full' ? styles.emailFull : styles.emailCompact}">{userEmail}</p>
    {variant === 'full' && onEdit && <button onClick={onEdit} class="{styles.editButton}">Editar</button>}
  </div>
  ```
- **Eventos Manejados / Emitidos:**
  - **Maneja:** {ej. `onClick` en el botón editar (dispara prop `onEdit`).}
  - **Emite:** {Si el componente emite eventos/callbacks personalizados no cubiertos por props, describirlos con su firma exacta. ej. `onFollow: (payload: { userId: string; followed: boolean }) => void`}
- **Acciones Disparadas (Efectos Secundarios):**
  - **Gestión de Estado:** {ej. "Despacha `userSlice.actions.setUserName(newName)` de `src/store/slices/userSlice.ts`. El payload de acción DEBE coincidir con el creador de acción definido." O "Llama `updateUserProfileOptimistic(newData)` de un hook local `useReducer`."}
  - **Llamadas API:** {Especificar qué servicio/función de la "Capa de Interacción API" se llama. ej. "Llama `userService.fetchUser(userId)` de `src/services/userService.ts` al montar. Payload de solicitud: `{ userId }`. Respuesta exitosa puebla estado interno `userData`. Respuesta de error despacha `uiSlice.actions.showErrorToast({ message: 'Falló cargar detalles de usuario' })`.}
- **Notas de Estilos:**
  - {DEBE referenciar nombres específicos de componentes del Sistema de Diseño (ej. "Usa `<Button variant='primary'>` de biblioteca UI") O especificar clases Tailwind CSS / nombres de clases de módulos CSS a aplicar (ej. "Contenedor usa `p-4 bg-white rounded-lg shadow-md`. Título usa `text-xl font-semibold`.") O especificar clases de componentes SCSS personalizados a aplicar (ej. "Contenedor usa `@apply p-4 bg-white rounded-lg shadow-md`. Título usa `@apply text-xl font-semibold`."). Cualquier lógica de estilos dinámicos basada en props o estado DEBE describirse. Si se usa Tailwind CSS, listar clases de utilidad primarias o directivas `@apply` para clases de componentes personalizados. El Agente AI debe priorizar uso directo de clases de utilidad para casos simples y proponer clases de componentes reutilizables/componentes React para patrones de estilos complejos.}
- **Notas de Accesibilidad:**
  - {DEBE listar atributos ARIA específicos y sus valores (ej. `aria-label="Tarjeta de perfil de usuario"`, `role="article"`), comportamiento de navegación por teclado requerido (ej. "Tab navega a avatar, nombre, email, luego botón editar. Botón editar es enfocable y activado por Enter/Espacio."), y cualquier requisito de gestión de enfoque (ej. "Si este componente abre un modal, el enfoque DEBE estar atrapado dentro. Al cerrar modal, el enfoque regresa al elemento disparador.").}

---

_Repetir la plantilla anterior para cada componente significativo._

---

## Gestión de Estado en Profundidad

{ Esta sección expande sobre la estrategia de Gestión de Estado. **Referirse al Documento de Arquitectura Principal para la elección definitiva de solución de gestión de estado.** }

- **Solución Elegida:** {ej. Redux Toolkit, Zustand, Vuex, NgRx - Como se define en el doc de arquitectura principal.}
- **Guía de Decisión para Ubicación de Estado:**
    - **Estado Global (ej. Redux/Zustand):** Datos compartidos entre muchos componentes no relacionados; datos persistiendo entre rutas; lógica de estado compleja manejada vía reducers/thunks. **DEBE usarse para datos de sesión, preferencias de usuario, notificaciones de toda la aplicación.**
    - **React Context API:** Estado principalmente pasado por un subárbol de componentes específico (ej. tema, contexto de formulario). Estado más simple, menos actualizaciones comparado con estado global. **DEBE usarse para estado localizado no adecuado para prop drilling pero no necesario globalmente.**
    - **Estado Local de Componente (`useState`, `useReducer`):** Estado específico de UI, no necesario fuera del componente o sus hijos directos (ej. valores de input de formulario, estado abierto/cerrado de dropdown). **DEBE ser la elección por defecto a menos que se cumplan criterios para Context o Estado Global.**

### Estructura de Store / Slices

{ Describir las convenciones para organizar el estado global (ej. "Cada característica mayor que requiera estado global tendrá su propio slice Redux ubicado en `src/features/[featureName]/store.ts`"). }

- **Ejemplo de Slice Central (ej. `sessionSlice` en `src/store/slices/sessionSlice.ts`):**
  - **Propósito:** {Maneja sesión de usuario, estado de autenticación, e info básica de perfil de usuario accesible globalmente.}
  - **Forma de Estado (Interfaz/Tipo):**
    ```typescript
    interface SessionState {
      currentUser: { id: string; name: string; email: string; roles: string[]; } | null;
      isAuthenticated: boolean;
      token: string | null;
      status: "idle" | "loading" | "succeeded" | "failed";
      error: string | null;
    }
    ```
  - **Reducers/Acciones Clave (dentro de `createSlice`):** {Listar brevemente acciones síncronas principales, ej. `setCurrentUser`, `clearSession`, `setAuthStatus`, `setAuthError`.}
  - **Thunks Async (si alguno):** {Listar thunks async clave, ej. `loginUserThunk`, `fetchUserProfileThunk`.}
  - **Selectores (memoizados con `createSelector`):** {Listar selectores clave, ej. `selectCurrentUser`, `selectIsAuthenticated`.}
- **Plantilla de Slice de Característica (ej. `{featureName}Slice` en `src/features/{featureName}/store.ts`):**
  - **Propósito:** {A completarse cuando una nueva característica requiera su propio slice de estado.}
  - **Forma de Estado (Interfaz/Tipo):** {A definirse por la característica.}
  - **Reducers/Acciones Clave (dentro de `createSlice`):** {A definirse por la característica.}
  - **Thunks Async (si alguno, definidos usando `createAsyncThunk`):** {A definirse por la característica.}
  - **Selectores (memoizados con `createSelector`):** {A definirse por la característica.}
  - **Exportación:** {Todas las acciones y selectores DEBEN exportarse.}

## Registro de Cambios

| Cambio | Fecha | Versión | Descripción | Autor |
| ------ | ---- | ------- | ----------- | ------ |
