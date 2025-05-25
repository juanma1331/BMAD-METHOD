# Tarea: Generar Plan de Desarrollo para Acción API ILIAS

## Propósito:
Generar un plan de desarrollo detallado y estructurado para una nueva acción API de ILIAS. Este plan servirá como la especificación completa para un agente desarrollador IDE, guiándolo a través de la investigación, implementación, validación y documentación de la nueva acción. El plan se basará en la plantilla `plantilla-plan-accion-api-ilias.md`.

## Inputs Requeridos por esta Tarea (a solicitar al usuario):

1.  **`ACTION_NAME`**: (string) Nombre descriptivo y legible por humanos para la nueva acción API.
2.  **`ACTION_NAME_SNAKE_CASE`**: (string) Nombre de la acción en `snake_case` para nombres de archivo y parámetro `action` URL.
3.  **`ACTION_NAME_PASCAL_CASE`**: (string) Nombre de la acción en `PascalCase` para nombres de funciones PHP.
4.  **`BREVE_DESCRIPCION_FUNCIONALIDAD`**: (string) Frase concisa describiendo qué debe hacer la acción API.
5.  **`JSON_INPUT_PARAMETERS_EJEMPLO`**: (string JSON o descripción para GET) Ejemplo del cuerpo JSON (para POST) o descripción de parámetros URL (para GET) que la API esperará.
6.  **`JSON_INPUT_PARAMETERS_EJEMPLO_PARA_CURL`**: (string JSON escapado para curl -d, o string de query params para GET) Formato adecuado para `curl`. Para GET, sería la parte de `?param1=valor1¶m2=valor2`.
7.  **`JSON_SUCCESS_RESPONSE_EJEMPLO`**: (string JSON) Ejemplo del cuerpo JSON de respuesta exitosa.
8.  **`ENDPOINT_URL_EJEMPLO`**: (string) URL completa del endpoint para probar la acción (sin query params si son para GET y se especifican en el punto 6).
9.  **`ABSOLUTE_ILIAS_CODE_PATH`**: (string) **Ruta absoluta en el sistema de archivos local donde reside el código fuente completo de ILIAS que el agente IDE investigará.**
10. **`INVESTIGATION_PATH_HINT`**: (string, opcional pero muy recomendado) Pista o ruta específica *relativa a `ABSOLUTE_ILIAS_CODE_PATH`* donde el agente IDE debería comenzar su investigación.

## Instrucciones para el Agente (PM o PO) que Ejecuta esta Tarea:

1.  **Solicitar Inputs al Usuario:**
    *   Presenta al usuario la lista de "Inputs Requeridos" de arriba (puntos 1 al 10).
    *   Pide al usuario que proporcione cada uno de estos detalles para la nueva acción API que desea planificar.
    *   **Validación Importante:** Asegúrate de que el usuario entiende que `ABSOLUTE_ILIAS_CODE_PATH` es la ruta completa en *su* sistema local donde el agente IDE accederá al código de ILIAS.

2.  **Cargar Plantilla del Plan:**
    *   Accede y carga el contenido completo del archivo de plantilla: `bmad-agent-es/templates/plantilla-plan-accion-api-ilias.md`.

3.  **Rellenar la Plantilla:**
    *   Sustituye sistemáticamente cada placeholder en la plantilla con los valores proporcionados.

4.  **Presentar Plan Generado para Revisión:**
    *   Muestra el plan completo al usuario.
    *   Pide revisión cuidadosa, especialmente de las rutas y los ejemplos de `curl`.
    *   Incorpora cambios solicitados hasta aprobación.

5.  **Guardar Plan Aprobado:**
    *   Nombre de archivo: `YYYY-MM-DD-plan-{ACTION_NAME_SNAKE_CASE}.md`.
    *   Guardar en: `docs/bmad-sessions/{NOMBRE_ARCHIVO_GENERADO}`. (Asegúrate que esta carpeta `docs/bmad-sessions/` exista en la raíz de tu proyecto ILIAS, o ajusta la ruta).

6.  **Confirmar y Handoff:**
    *   Informa al usuario que el plan detallado ha sido generado, guardado en la ubicación especificada, y está listo para ser entregado al agente desarrollador del IDE para su implementación.
    *   Recuérdale al usuario que el agente IDE usará la `ABSOLUTE_ILIAS_CODE_PATH` para su investigación y que los `research_findings` se enfocarán exclusivamente en el núcleo de ILIAS.