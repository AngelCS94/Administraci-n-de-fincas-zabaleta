# Introducción a la Depuración (Debugging) en HTML y CSS

## Depuración de Código HTML

### Herramientas de Depuración para HTML
1. **Código Fuente HTML:**
   - Inspecciona el código fuente real que el navegador utiliza, que puede diferir del que escribiste debido al caché del navegador o la manipulación del servidor.
   - **Deshabilita la caché del navegador** mientras desarrollas para asegurarte de que ves los cambios actuales.
   - **Acceso al código fuente:**
     - **Windows:** `Ctrl + U`
     - **Mac:** `⌥ Option + ⌘ Command + U`
     - **Linux:** Ctrl + U


2. **Inspector de Herramientas de Desarrollo:**
   - Muestra una versión "en vivo" de tu HTML llamada **DOM** (Document Object Model), que es lo que el navegador interpreta.
   - **Usos del Inspector:**
     - Identifica problemas visuales y estructurales inspeccionando los elementos directamente en la página.
     - Detecta y corrige errores donde el navegador ha intentado arreglar automáticamente un HTML incorrecto.

3. **Depuración en el Editor de Código (IDE):**
   - **Resaltado de Sintaxis:** Colores que ayudan a distinguir diferentes partes del código (etiquetas, atributos, valores).
   - **Linting:** Identifica errores potenciales en tu código y los resalta.
   - **Validación:** Comprueba si tu código cumple con los estándares de W3C.

### Errores Comunes en HTML y Cómo Depurarlos
1. **Etiquetas sin cerrar:**
   - Si olvidas cerrar una etiqueta, el editor puede resaltar un bloque grande en rojo. Usa herramientas como Prettier para detectar estos errores.

2. **Comillas sin cerrar:**
   - Las comillas incorrectas en los atributos pueden provocar errores. El resaltado de sintaxis ayuda a identificar estos errores visualmente.

3. **URLs incorrectas en etiquetas `<link>` o `<script>`:**
   - Si el enlace a una hoja de estilo o script es incorrecto, el Inspector mostrará un error 404 en la consola.

---

## Depuración de Código CSS

### Herramientas para Depurar CSS
1. **Editor de Código:**
   - Resalta errores comunes como la falta de punto y coma o llaves mal cerradas.

2. **Herramientas de Desarrollo:**
   - **Pestaña "Elementos":** Muestra los selectores y atributos de clase o ID aplicados a las etiquetas HTML.
   - **Pestaña "Estilos":** Muestra los estilos aplicados a un elemento específico, incluidos los estilos que podrían estar en conflicto.

### Errores CSS Difíciles de Depurar
1. **Estilos que no se aplican:**
   - **Razones comunes:** 
     - Selector incorrecto.
     - Error tipográfico en los estilos.
     - Otro estilo anula el tuyo (conflicto de estilos).
   - **Solución:** Usa el Inspector para verificar si el estilo se ha aplicado o si está siendo anulado por otros estilos.

2. **Conflictos de Estilos:**
   - La herramienta de desarrollo mostrará los estilos en conflicto; los estilos anulados estarán tachados.

### Conclusión
La depuración en HTML y CSS requiere paciencia y el uso de las herramientas adecuadas. Familiarízate con el Inspector de Herramientas de Desarrollo y mantén tu código limpio y bien organizado para evitar errores comunes.

# Repaso de Flexbox y Layouts

## ¿Qué es Flexbox?

**Flexbox**, o Flexible Box Layout, es un módulo de CSS diseñado para facilitar la creación de layouts complejos y responsivos de manera más sencilla. Proporciona una serie de propiedades y valores que permiten alinear y distribuir espacio entre elementos de manera eficiente y flexible.

### Conceptos Básicos

1. **Contenedor Flex**: 
   - Un contenedor se convierte en un contenedor flex cuando se le asigna la propiedad `display: flex;`.
   - Todos los elementos hijos de este contenedor se vuelven **flex items**.

2. **Ejes en Flexbox**:
   - **Eje Principal (Main Axis)**: El eje principal depende de la dirección establecida por `flex-direction`.
     - `row`: Los elementos se alinean horizontalmente (de izquierda a derecha).
     - `column`: Los elementos se alinean verticalmente (de arriba a abajo).
   - **Eje Secundario (Cross Axis)**: Perpendicular al eje principal.
     - Si el eje principal es `row`, el eje secundario será vertical.
     - Si el eje principal es `column`, el eje secundario será horizontal.


### Propiedades del Contenedor Flex

1. **`flex-direction`**:
   - Define la dirección en la que se colocarán los elementos.
   - Valores: `row`, `row-reverse`, `column`, `column-reverse`.

2. **`justify-content`**:
   - Alinea los elementos a lo largo del eje principal.
   - Valores: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

3. **`align-items`**:
   - Alinea los elementos a lo largo del eje secundario.
   - Valores: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

4. **`flex-wrap`**:
   - Permite que los elementos se envuelvan si no caben en una sola línea.
   - Valores: `nowrap`, `wrap`, `wrap-reverse`.

5. **`align-content`**:
   - Alinea múltiples líneas de elementos a lo largo del eje secundario.
   - Valores: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

### Propiedades de los Elementos Flex

1. **`order`**:
   - Cambia el orden en que los elementos aparecen en el contenedor.
   - Valor: Número entero (por defecto, todos los elementos tienen `order: 0`).

2. **`flex-grow`**:
   - Define la capacidad de un elemento para crecer si hay espacio disponible.
   - Valor: Número (por defecto es `0`, lo que significa que el elemento no crece).

3. **`flex-shrink`**:
   - Define la capacidad de un elemento para encogerse si hay menos espacio disponible.
   - Valor: Número (por defecto es `1`, lo que significa que el elemento puede encogerse).

4. **`flex-basis`**:
   - Establece el tamaño inicial de un elemento antes de que el espacio extra sea distribuido.
   - Valor: Tamaño en unidades de medida (`px`, `%`, etc.) o `auto`.

5. **`align-self`**:
   - Alinea un elemento individualmente a lo largo del eje secundario, ignorando `align-items`.
   - Valores: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

# Enlaces importantes:
- [Introducción al diseño CSS](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Introduction)
- [Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox)
- [Más sobre Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Juego para entender Flexbox](https://flexboxfroggy.com/#es)