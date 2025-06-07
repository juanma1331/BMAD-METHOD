# Plan de Implementación: {NOMBRE_SOLUCION_AMIGABLE}

## SECCIÓN 0: DEFINICIÓN Y PRERREQUISITOS
### 0.1. Visión General
- **Nombre:** {NOMBRE_SOLUCION_AMIGABLE}
- **ID:** `{NOMBRE_SOLUCION_SNAKE_CASE}`
- **Descripción:** {DESCRIPCION_GENERAL_SOLUCION}
### 0.2. Documentos de Referencia (Fuente de la Verdad)
- **Requisitos Funcionales:** [{NOMBRE_PRD}](ruta/al/prd.md)
- **Especificaciones Técnicas del Arquitecto:** [{NOMBRE_DICTAMEN}](ruta/al/dictamen.md)

## SECCIÓN 1: PLAN DE DESARROLLO DEL COMPONENTE: {NOMBRE_COMPONENTE_X}
### 1.1. Especificaciones Técnicas Detalladas
- **Archivo(s) a Modificar/Crear:** `{ruta/exacta/al/archivo.ext}`
- **Función/Clase/Componente a Modificar/Crear:** `{NombreExactoDeLaEntidad}`
- **Lógica Funcional a Implementar:** {Descripción clara de la tarea a realizar, derivada de los requisitos funcionales.}

#### a. Especificaciones de Implementación de Seguridad (Directivas del Arquitecto)
- {Directiva explícita 1. Ejemplo: "El endpoint DEBE verificar el scope 'read:orders' del token JWT."}

#### b. Especificaciones de Implementación de Rendimiento (Directivas del Arquitecto)
- {Directiva explícita 1. Ejemplo: "La consulta a la BD DEBE usar `joinedload` para la relación `user`."}

#### c. Especificaciones de Implementación de Escalabilidad (Directivas del Arquitecto)
- {Directiva explícita 1. Ejemplo: "El procesamiento de la imagen DEBE ser delegado a la cola de trabajos 'image_processing'."}

### 1.2. Fases de Implementación para el Agente IDE
- **Fase A: Actualizar/Crear Pruebas:** {Instrucciones detalladas para las pruebas que validan la nueva lógica.}
- **Fase B: Implementar Cambios en Código:** {Pasos detallados para la modificación del código, referenciando las especificaciones de la sección 1.1.}
- **Fase C: Calidad de Código y Limpieza (Obligatoria):**
    1.  **Revisión de Código:** Revisa todo el código modificado. El código y los comentarios deben estar en inglés. Los comentarios deben explicar el "porqué", no el "qué".
    2.  **Formateo:** Ejecuta el comando de formateo: `{comando_formateo}`
    3.  **Linting:** Ejecuta el comando de linting: `{comando_linting}`
    4.  **Pruebas Finales:** Ejecuta la suite de pruebas completa: `{comando_pruebas}`

## SECCIÓN 2: CRITERIOS DE VERIFICACIÓN FUNCIONAL (para el Vibe-CEO)
- **Verificación 1:** {Descripción de la acción que el usuario puede realizar para validar el cambio.}
- **Resultado Esperado:** {Descripción del resultado que confirma el éxito.}

## SECCIÓN 3: CRITERIOS DE TERMINADO (DoD)
- **Instrucción Final:** Antes de finalizar, valida tu trabajo contra `checklists/lista-definicion-terminado.md`.
