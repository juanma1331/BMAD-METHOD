# {Nombre del Proyecto} Documento de Requisitos del Producto (PRD)

## Objetivo, Meta y Contexto

Esto debe venir principalmente del usuario o del resumen proporcionado, pero pide aclaraciones según sea necesario.

## Requisitos Funcionales (MVP)

Deberías tener una buena idea en este punto, pero clarifica, sugiere preguntas y explica para asegurar que estos sean correctos.

## Requisitos No Funcionales (MVP)

Deberías tener una buena idea en este punto, pero clarifica, sugiere preguntas y explica para asegurar que estos sean correctos.

## Interacción del Usuario y Objetivos de Diseño

{
Si el producto incluye una Interfaz de Usuario (UI), esta sección captura la visión y objetivos de alto nivel del Product Manager para la Experiencia del Usuario (UX). Esta información servirá como un punto de partida crucial y resumen para el Arquitecto de Diseño.

Considera y obtén información del usuario respecto a:

- **Visión General y Experiencia:** ¿Cuál es la apariencia y sensación deseada (ej., "moderno y minimalista," "amigable y accesible," "intensivo en datos y profesional")? ¿Qué tipo de experiencia deberían tener los usuarios?
- **Paradigmas de Interacción Clave:** ¿Hay formas específicas en que los usuarios interactuarán con características centrales (ej., "interfaz de arrastrar y soltar para X," "configuración estilo asistente para Y," "tablero en tiempo real para Z")?
- **Pantallas/Vistas Centrales (Conceptual):** Desde una perspectiva de producto, ¿cuáles son las pantallas o vistas más críticas necesarias para entregar el valor del MVP? (ej., "Pantalla de Inicio de Sesión," "Tablero Principal," "Página de Detalle de Elemento," "Página de Configuración").
- **Aspiraciones de Accesibilidad:** ¿Cualquier objetivo de accesibilidad de alto nivel conocido (ej., "debe ser utilizable por usuarios de lectores de pantalla")?
- **Consideraciones de Marca (Alto Nivel):** ¿Cualquier elemento de marca conocido o guías de estilo que deben incorporarse?
- **Dispositivos/Plataformas Objetivo:** (ej., "principalmente escritorio web," "aplicación web responsiva móvil-primero").

Esta sección no pretende ser una especificación UI detallada sino más bien un resumen enfocado en producto para guiar el trabajo detallado subsecuente del Arquitecto de Diseño, quien creará el documento comprensivo de Especificación UI/UX.
}

## Supuestos Técnicos

Aquí es donde podemos listar información principalmente para ser usada por el arquitecto para producir los detalles técnicos. Esto podría ser cualquier cosa que ya sepamos o descubramos del usuario a un nivel técnico alto. Preguntar sobre esto al usuario para obtener una idea básica de lenguajes, frameworks, conocimiento de plantillas iniciales, librerías, apis externas, elecciones potenciales de librerías, etc...

- **Arquitectura de Repositorio y Servicio:** {DECISIÓN CRÍTICA: Documentar la estructura de repositorio elegida (ej., Monorepo, Polyrepo) y la arquitectura de servicio de alto nivel (ej., Monolito, Microservicios, funciones Serverless dentro de un Monorepo). Explicar la justificación basada en objetivos del proyecto, alcance MVP, estructura del equipo y necesidades de escalabilidad. Esta decisión impacta directamente el enfoque técnico e informa al Agente Arquitecto.}

### Requisitos de pruebas

¿Cómo validaremos la funcionalidad más allá de pruebas unitarias? ¿Querremos scripts manuales o pruebas, e2e, integración, etc... averiguar esto del usuario para poblar esta sección

## Resumen de Épicas

- **Épica {#}: {Título}**
  - Objetivo: {Una declaración concisa de 1-2 oraciones describiendo el objetivo principal y valor de esta Épica.}
  - Historia {#}: Como un {tipo de usuario/sistema}, quiero {realizar una acción / lograr un objetivo} para que {pueda realizar un beneficio / lograr una razón}.
    - {Lista de Criterios de Aceptación}
  - Historia {#}: Como un {tipo de usuario/sistema}, quiero {realizar una acción / lograr un objetivo} para que {pueda realizar un beneficio / lograr una razón}.
    - {Lista de Criterios de Aceptación}
- **Épica {#}: {Título}**
  - Objetivo: {Una declaración concisa de 1-2 oraciones describiendo el objetivo principal y valor de esta Épica.}
  - Historia {#}: Como un {tipo de usuario/sistema}, quiero {realizar una acción / lograr un objetivo} para que {pueda realizar un beneficio / lograr una razón}.
    - {Lista de Criterios de Aceptación}
  - Historia {#}: Como un {tipo de usuario/sistema}, quiero {realizar una acción / lograr un objetivo} para que {pueda realizar un beneficio / lograr una razón}.
    - {Lista de Criterios de Aceptación}

## Documentos de Referencia Clave

{ Esta sección será creada más tarde, de las secciones anteriores a esta siendo divididas en documentos más pequeños }

## Ideas Fuera de Alcance Post MVP

Cualquier cosa que tú y el usuario acordaron que está fuera de alcance o puede removerse del alcance para mantener el MVP delgado. Considera los objetivos del PRD y qué podría ser dorado extra o características adicionales que podrían esperar hasta que el MVP esté completado y entregado para evaluar funcionalidad y ajuste de mercado o uso.

## [OPCIONAL: Solo para Flujo de Trabajo Simplificado PM-a-Desarrollo] Decisiones Técnicas Centrales y Estructura de Aplicación

{Esta sección debe poblarse SOLO si el PM está operando en el 'Flujo de Trabajo Simplificado PM-a-Desarrollo'. Captura fundamentos técnicos esenciales que típicamente serían definidos por un Arquitecto, permitiendo un camino más directo al desarrollo. Esta información debe recopilarse después de que las secciones iniciales del PRD (Objetivos, Usuarios, etc.) sean redactadas, e idealmente antes o en paralelo con la definición detallada de Épica/Historia, y actualizada según sea necesario.}

### Selecciones de Stack Tecnológico

{Definir colaborativamente las tecnologías centrales. Ser específico sobre elecciones y versiones donde sea apropiado.}

- **Lenguaje/Framework Backend Principal:** {ej., Python/FastAPI, Node.js/Express, Java/Spring Boot}
- **Lenguaje/Framework Frontend Principal (si aplica):** {ej., TypeScript/React (Next.js), JavaScript/Vue.js}
- **Base de Datos:** {ej., PostgreSQL, MongoDB, AWS DynamoDB}
- **Librerías/Servicios Clave (Backend):** {ej., Autenticación (JWT, proveedor OAuth), ORM (SQLAlchemy), Caché (Redis)}
- **Librerías/Servicios Clave (Frontend, si aplica):** {ej., Librería de Componentes UI (Material-UI, Tailwind CSS + Headless UI), Gestión de Estado (Redux, Zustand)}
- **Plataforma/Ambiente de Despliegue:** {ej., Docker en AWS ECS, Vercel, Netlify, Kubernetes}
- **Sistema de Control de Versiones:** {ej., Git con GitHub/GitLab}

### Estructura de Aplicación Propuesta

{Describir la organización de alto nivel del código base. Esto podría incluir un diseño de directorio simple basado en texto, una lista de módulos/componentes principales, y una explicación breve de cómo interactúan. El objetivo es proporcionar un punto de partida claro para desarrolladores.}

Ejemplo:

```
/
├── app/                  # Código fuente principal de la aplicación
│   ├── api/              # Rutas y lógica de API backend
│   │   ├── v1/
│   │   └── models.py
│   ├── web/              # Componentes y páginas frontend (si monolítico)
│   │   ├── components/
│   │   └── pages/
│   ├── core/             # Lógica de negocio compartida, utilidades
│   └── main.py           # Punto de entrada de la aplicación
├── tests/                # Pruebas unitarias y de integración
├── scripts/              # Scripts de utilidad
├── Dockerfile
├── requirements.txt
└── README.md
```

- **Monorepo/Polyrepo:** {Especificar si se visualiza una estructura monorepo o polyrepo, y brevemente por qué.}
- **Módulos/Componentes Clave y Responsabilidades:**
  - {Nombre del Módulo 1}: {Descripción breve de su propósito y responsabilidades clave}
  - {Nombre del Módulo 2}: {Descripción breve de su propósito y responsabilidades clave}
  - ...
- **Resumen de Flujo de Datos (Conceptual):** {Describir brevemente cómo se espera que fluyan los datos entre componentes principales, ej., Frontend -> API -> Lógica Central -> Base de Datos.}

## Registro de Cambios

| Cambio | Fecha | Versión | Descripción | Autor |
| ------ | ----- | ------- | ----------- | ----- |

----- FIN PRD INICIO SALIDA DE LISTA DE VERIFICACIÓN ------

## Reporte de Resultados de Lista de Verificación

----- FIN Lista de Verificación INICIO Prompt del Modo de Especificación UI/UX del Arquitecto de Diseño ------

----- FIN Prompt del Modo de Especificación UI/UX del Arquitecto de Diseño INICIO Prompt del Arquitecto ------

## Prompt Inicial del Arquitecto

Basado en nuestras discusiones y análisis de requisitos para el {Nombre del Producto}, he compilado la siguiente guía técnica para informar tu análisis de arquitectura y decisiones para iniciar el Modo de Creación de Arquitectura:

### Infraestructura Técnica

- **Decisión de Arquitectura de Repositorio y Servicio:** {Reiterar la decisión tomada en 'Supuestos Técnicos', ej., Monorepo con servicios frontend Next.js y backend Python FastAPI dentro del mismo repo; o Polyrepo con repositorios separados Frontend (Next.js) y Backend (Microservicios Spring Boot).}
- **Proyecto/Plantilla Inicial:** {Información sobre cualquier proyecto inicial, plantillas o códigos base existentes que deberían usarse}
- **Proveedor de Hosting/Nube:** {Plataforma de nube especificada (AWS, Azure, GCP, etc.) o requisitos de hosting}
- **Plataforma Frontend:** {Preferencias o requisitos de framework/librería (React, Angular, Vue, etc.)}
- **Plataforma Backend:** {Preferencias o requisitos de framework/lenguaje (Node.js, Python/Django, etc.)}
- **Requisitos de Base de Datos:** {Relacional, NoSQL, productos o servicios específicos preferidos}

### Restricciones Técnicas

- {Listar cualquier restricción técnica que impacte decisiones de arquitectura}
- {Incluir cualquier tecnología, servicio o plataforma obligatoria}
- {Notar cualquier requisito de integración con implicaciones técnicas específicas}

### Consideraciones de Despliegue

- {Expectativas de frecuencia de despliegue}
- {Requisitos de CI/CD}
- {Requisitos de ambiente (local, dev, staging, producción)}

### Requisitos de Desarrollo Local y Pruebas

{Incluir esta sección solo si el usuario ha indicado que estas capacidades son importantes. Si no es aplicable basado en preferencias del usuario, puedes remover esta sección.}

- {Requisitos para ambiente de desarrollo local}
- {Expectativas para capacidades de prueba de línea de comandos}
- {Necesidades para pruebas a través de diferentes ambientes}
- {Scripts de utilidad o herramientas que deberían proporcionarse}
- {Cualquier requisito específico de probabilidad para componentes}

### Otras Consideraciones Técnicas

- {Requisitos de seguridad con implicaciones técnicas}
- {Necesidades de escalabilidad con impacto arquitectónico}
- {Cualquier otro contexto técnico que el Arquitecto debería considerar}

----- FIN Prompt del Arquitecto -----
