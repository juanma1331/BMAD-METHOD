# Tarea de Indexación de Biblioteca

## Propósito

Esta tarea mantiene la integridad y completitud del archivo `docs/index.md` escaneando todos los archivos de documentación y asegurando que estén apropiadamente indexados con descripciones.

## Instrucciones de Tarea

Ahora estás operando como un Indexador de Documentación. Tu objetivo es asegurar que todos los archivos de documentación estén apropiadamente catalogados en el índice central.

### Pasos Requeridos

1. Primero, localizar y escanear:

   - El directorio `docs/` y todos los subdirectorios
   - El archivo existente `docs/index.md` (crear si está ausente)
   - Todos los archivos markdown (`.md`) y texto (`.txt`) en la estructura de documentación

2. Para el `docs/index.md` existente:

   - Analizar entradas actuales
   - Notar referencias de archivos existentes y descripciones
   - Identificar cualquier enlace roto o archivos faltantes
   - Mantener registro de contenido ya indexado

3. Para cada archivo de documentación encontrado:

   - Extraer el título (del primer encabezado o nombre de archivo)
   - Generar una descripción breve analizando el contenido
   - Crear un enlace markdown relativo al archivo
   - Verificar si ya está en el índice
   - Si falta o está desactualizado, preparar una actualización

4. Para cualquier archivo faltante o no existente encontrado en el índice:

   - Presentar una lista de todas las entradas que referencian archivos no existentes
   - Para cada entrada:
     - Mostrar los detalles completos de la entrada (título, ruta, descripción)
     - Pedir confirmación explícita antes de la eliminación
     - Proporcionar opción para actualizar la ruta si el archivo fue movido
     - Registrar la decisión (eliminar/actualizar/mantener) para el reporte final

5. Actualizar `docs/index.md`:
   - Mantener estructura y organización existente
   - Agregar entradas faltantes con descripciones
   - Actualizar entradas desactualizadas
   - Eliminar solo entradas que fueron confirmadas para eliminación
   - Asegurar formateo consistente a lo largo

### Formato de Entrada de Índice

Cada entrada en `docs/index.md` debe seguir este formato:

```markdown
### [Título del Documento](ruta/relativa/al/archivo.md)

Descripción breve del propósito y contenidos del documento.
```

### Reglas de Operación

1. NUNCA modificar el contenido de archivos indexados
2. Preservar descripciones existentes en index.md cuando sean adecuadas
3. Mantener cualquier categorización o agrupación existente en el índice
4. Usar rutas relativas para todos los enlaces
5. Asegurar que las descripciones sean concisas pero informativas
6. NUNCA eliminar entradas sin confirmación explícita
7. Reportar cualquier enlace roto o inconsistencias encontradas
8. Permitir actualizaciones de ruta para archivos movidos antes de considerar eliminación

### Salida del Proceso

La tarea proporcionará:

1. Un resumen de cambios hechos a index.md
2. Lista de archivos recién indexados
3. Lista de entradas actualizadas
4. Lista de entradas presentadas para eliminación y su estado:
   - Eliminaciones confirmadas
   - Rutas actualizadas
   - Mantenidas a pesar de archivo faltante
5. Cualquier otro problema o inconsistencias encontradas

### Manejo de Archivos Faltantes

Para cada archivo referenciado en el índice pero no encontrado en el sistema de archivos:

1. Presentar la entrada:

   ```markdown
   Archivo faltante detectado:
   Título: [Título del Documento]
   Ruta: ruta/relativa/al/archivo.md
   Descripción: Descripción existente

   Opciones:

   1. Eliminar esta entrada
   2. Actualizar la ruta del archivo
   3. Mantener entrada (marcar como temporalmente no disponible)

   Por favor elige una opción (1/2/3):
   ```

2. Esperar confirmación del usuario antes de tomar cualquier acción
3. Registrar la decisión para el reporte final

## Entrada Requerida

Por favor proporciona:

1. Ubicación del directorio `docs/`
2. Confirmación de acceso de escritura a `docs/index.md`
3. Cualquier preferencia específica de categorización
4. Cualquier archivo o directorio a excluir de la indexación

¿Te gustaría proceder con la indexación de biblioteca? Por favor proporciona la entrada requerida arriba.
