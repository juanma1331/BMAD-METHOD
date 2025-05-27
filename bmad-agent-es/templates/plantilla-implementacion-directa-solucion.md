# Plan de Implementación Directa de Solución: {NOMBRE_SOLUCION_AMIGABLE}

## SECCIÓN 0: DEFINICIÓN DE LA SOLUCIÓN Y SUS COMPONENTES CONSTITUTIVOS

### 0.1. Visión General de la Solución
- **Nombre Descriptivo de la Solución Completa:** `{NOMBRE_SOLUCION_AMIGABLE}`
- **Identificador `snake_case` de la Solución:** `{NOMBRE_SOLUCION_SNAKE_CASE}` (para artefactos y referencias)
- **Descripción General de la Solución:** ¿Qué problema resuelve o qué capacidad proporciona esta solución en su conjunto?
  `{DESCRIPCION_GENERAL_SOLUCION}`
- **Referencia a Investigación Previa o Documentos de Requisitos (si existen):** (Enlace a informes de investigación, PRD, etc., que fundamentan esta implementación)
  `{REFERENCIA_INVESTIGACION_O_REQUISITOS_PREVIOS}`

### 0.2. Componentes Principales de la Solución
- **Número de Componentes Principales:** `{NUMERO_DE_COMPONENTES_PRINCIPALES}` (Ej: 1, 2, 3)

---
**(Repetir la siguiente subsección para cada componente, desde X=1 hasta {NUMERO_DE_COMPONENTES_PRINCIPALES})**
---
### 0.3. Definición del Componente {X}

- **ID del Componente {X}:** `{ID_COMPONENTE_X}` (Identificador único dentro de esta solución, ej: C1, API_Servicio, Modulo_Frontend)
- **Nombre Descriptivo del Componente {X}:** `{NOMBRE_COMPONENTE_X}`
- **Tipo de Componente {X}:** (Naturaleza del componente, ej: "API RESTful", "Aplicación Web Frontend (SPA)", "Servicio Backend de Procesamiento", "Script CLI", "Función Serverless", "Librería Compartida", "Módulo de Integración con Sistema Externo")
  `{TIPO_DE_COMPONENTE_X}`
- **Tecnología Principal del Componente {X}:** (ej: "Python/FastAPI", "JavaScript/React (Next.js)", "Java/Spring Boot", "Bash Script", "Node.js/AWS Lambda")
  `{TECNOLOGIA_PRINCIPAL_COMPONENTE_X}`
- **Breve Descripción Funcional del Componente {X}:** ¿Cuál es el rol y la funcionalidad principal de *este* componente dentro de la solución global?
  `{BREVE_DESCRIPCION_FUNCIONALIDAD_COMPONENTE_X}`
- **Interacciones Clave del Componente {X} con Otros Componentes de esta Solución (si aplica):** (ej: "Consume datos de {ID_COMPONENTE_Y} vía API", "Es invocado por {ID_COMPONENTE_Z} mediante mensajes en cola", "Provee una interfaz gráfica para gestionar {ID_COMPONENTE_W}")
  `{INTERACCIONES_CON_OTROS_COMPONENTES_X}`
- **Dependencias Externas Clave del Componente {X} (si aplica):** (Sistemas externos, APIs de terceros, etc.)
  `{DEPENDENCIAS_EXTERNAS_COMPONENTE_X}`

---
**(Repetir la siguiente SECCIÓN 1.X para cada componente definido en la SECCIÓN 0.2, desde X=1 hasta {NUMERO_DE_COMPONENTES_PRINCIPALES})**
---
## SECCIÓN 1.{X}: PLAN DE DESARROLLO DEL COMPONENTE: {NOMBRE_COMPONENTE_X} (ID: {ID_COMPONENTE_X})

### 1.{X}.1. Detalle de Funcionalidad y Especificaciones Técnicas del Componente

- **Funcionalidad Principal a Implementar:** (Descripción detallada de lo que hará este componente, basada en `{BREVE_DESCRIPCION_FUNCIONALIDAD_COMPONENTE_X}` pero más elaborada).
  `{FUNCIONALIDAD_DETALLADA_COMPONENTE_X}`
- **Identificador Principal de la Acción/Función (si aplica, para código):**
    - `snake_case`: `{ACCION_PRINCIPAL_COMPONENTE_X_SNAKE_CASE}`
    - `PascalCase`: `{ACCION_PRINCIPAL_COMPONENTE_X_PASCAL_CASE}`
- **Parámetros de Entrada / Interfaz de Configuración:** (Descripción, tipos, ejemplos. Para una API serían los query/body params; para un script CLI, los argumentos; para una librería, los parámetros de sus funciones públicas).
  `{PARAMETROS_ENTRADA_COMPONENTE_X_EJEMPLO}`
- **Respuesta Exitosa / Salida Esperada / Artefactos Producidos:** (Descripción, formato, ejemplos. Para una API, la respuesta JSON; para un script, la salida en consola o archivos generados; para una librería, los valores de retorno).
  `{RESPUESTA_EXITOSA_COMPONENTE_X_EJEMPLO}`
- **Manejo de Errores Específico del Componente:** (Tipos de errores comunes, cómo se reportarán/registrarán).
  `{MANEJO_ERRORES_COMPONENTE_X}`
- **Interfaz de Prueba / Comando de Ejecución Ejemplo:** (Cómo se puede probar/ejecutar este componente de forma aislada o integrada. Ej: URL de API con `curl`, comando CLI, snippet de código para usar la librería).
  `{INTERFAZ_PRUEBA_COMPONENTE_X_EJEMPLO}`

### 1.{X}.2. Fases de Implementación para el Agente IDE ({TECNOLOGIA_PRINCIPAL_COMPONENTE_X})

#### Fase A: Preparación y Planificación Detallada del Componente (basada en inputs existentes)
- **Objetivos:** (Ej: Revisar requisitos/especificaciones previas para este componente, identificar puntos de integración con `{ID_COMPONENTE_Y}`, detallar algoritmos, diseñar estructura de clases/módulos).
  `{OBJETIVOS_PREPARACION_COMP_X}`
- **Pasos/Tareas:**
  1. `{PASO_A1_COMP_X}`
  2. `{PASO_A2_COMP_X}`
- **Entregables de esta fase:** (Ej: Diagrama de clases/módulos para el componente, resumen de API interna a usar/definir).
  `{ENTREGABLES_FASE_A_COMP_X}`

#### Fase B: Implementación de la Lógica Principal
- **Objetivos:** (Ej: Desarrollar las funciones/clases/módulos centrales que realizan `{FUNCIONALIDAD_DETALLADA_COMPONENTE_X}`).
  `{OBJETIVOS_FASE_B_COMP_X}`
- **Pasos/Tareas:**
  1.  Crear estructura de archivos/directorios para `{ID_COMPONENTE_X}` en `{RUTA_PROYECTO_COMP_X}`.
  2.  Implementar `{FUNCION_O_CLASE_PRINCIPAL_COMP_X}`.
  3.  `{PASO_B3_COMP_X}`
- **Pruebas Unitarias Clave:** (Listar los aspectos más importantes a cubrir con pruebas unitarias).
  `{PRUEBAS_UNITARIAS_FASE_B_COMP_X}`

#### Fase C: Integración y Exposición de Interfaz (si aplica)
- **Objetivos:** (Ej: Exponer la lógica como endpoints API, conectar con otros componentes, definir la interfaz pública de la librería).
  `{OBJETIVOS_FASE_C_COMP_X}`
- **Pasos/Tareas:**
  1.  Definir/implementar `{ENDPOINT_O_FUNCION_PUBLICA_COMP_X}`.
  2.  Configurar `{MIDDLEWARE_O_CONECTOR_COMP_X}` (si es necesario).
  3.  `{PASO_C3_COMP_X}`

#### Fase D: Despliegue (si aplica individualmente) y Validación
- **Objetivos:** (Ej: Desplegar el componente a un entorno de pruebas, validar E2E la funcionalidad principal).
  `{OBJETIVOS_FASE_D_COMP_X}`
- **Pasos/Tareas:**
  1.  Script/proceso de despliegue: `{SCRIPT_DESPLIEGUE_COMP_X}`.
  2.  Ejecutar prueba de validación usando: `{INTERFAZ_PRUEBA_COMPONENTE_X_EJEMPLO}`.
  3.  Verificar que la salida coincida con `{RESPUESTA_EXITOSA_COMPONENTE_X_EJEMPLO}`.
- **Iterar y Corregir:** (Hasta que la validación sea exitosa).

#### Fase E: Documentación Técnica del Componente
- **Objetivos:** (Ej: Documentar la API expuesta, la configuración del componente, ejemplos de uso).
  `{OBJETIVOS_FASE_E_COMP_X}`
- **Entregables:**
    - Actualizar/Crear `README.md` para el componente en `{RUTA_DOC_COMP_X}`.
    - (Opcional) Comentarios de código significativos (Docstrings, JSDoc, etc.).
    - (Opcional) Registrar en `ai-docs/hallazgos_tecnicos_{ID_COMPONENTE_X}.md` (lecciones aprendidas, decisiones de diseño clave, desafíos).

#### Fase F: Verificación Humana y Criterios de Aceptación del Componente
- **Criterios de Aceptación Específicos para `{ID_COMPONENTE_X}`:**
    - [ ] CA1: `{CRITERIO_ACEPTACION_1_COMP_X}`
    - [ ] CA2: `{CRITERIO_ACEPTACION_2_COMP_X}`
    - [ ] (Añadir más según sea necesario)
- **Puntos de Revisión por el Usuario:** (Aspectos específicos que el usuario debe verificar).
  `{PUNTOS_REVISION_USUARIO_COMP_X}`

---

## SECCIÓN 2: DEPENDENCIAS GENERALES DE LA SOLUCIÓN

### 2.1. Dependencias Entre Componentes de la Solución
- (Listar explícitamente qué componentes dependen de otros y por qué. Ej: `{ID_COMPONENTE_A}` debe estar desplegado y funcional antes de que `{ID_COMPONENTE_B}` pueda operar completamente porque consume su API.)
  `{DEPENDENCIAS_ENTRE_COMPONENTES}`

### 2.2. Dependencias Externas Generales de la Solución
- (Sistemas externos, APIs de terceros, bases de datos compartidas, etc., que son cruciales para la solución en su conjunto).
  `{DEPENDENCIAS_EXTERNAS_SOLUCION}`

### 2.3. Orden Sugerido de Implementación de Componentes (si es crítico)
- (Basado en las dependencias, sugerir un orden lógico para desarrollar los componentes).
  `{ORDEN_IMPLEMENTACION_SUGERIDO}`

## SECCIÓN 3: CONSIDERACIONES ADICIONALES GENERALES PARA LA SOLUCIÓN

- **Seguridad:** (Consideraciones de seguridad que aplican a toda la solución).
  `{CONSIDERACIONES_SEGURIDAD_SOLUCION}`
- **Rendimiento:** (Expectativas de rendimiento globales para la solución).
  `{CONSIDERACIONES_RENDIMIENTO_SOLUCION}`
- **Escalabilidad:** (Cómo se espera que la solución escale en su conjunto).
  `{CONSIDERACIONES_ESCALABILIDAD_SOLUCION}`
- **Mantenibilidad:** (Estrategias para facilitar el mantenimiento futuro).
  `{CONSIDERACIONES_MANTENIBILIDAD_SOLUCION}`
- **Testing General de la Solución:** (Estrategia de pruebas de integración entre componentes, pruebas E2E de la solución completa).
  `{TESTING_GENERAL_SOLUCION}`
- **Notas Adicionales del Planificador:**
  `{NOTAS_ADICIONALES_PLANIFICADOR}`

## SECCIÓN 4: REGISTRO DE CAMBIOS DEL PLAN
| Fecha      | Versión | Descripción del Cambio                                  | Autor     |
|------------|---------|---------------------------------------------------------|-----------|
| {FECHA}    | 1.0     | Creación inicial del plan de implementación.            | {AUTOR}   |
|            |         |                                                         |           |