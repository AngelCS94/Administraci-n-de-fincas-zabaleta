# Repaso:

#### ¿Qué es GITHUB?
GitHub es como una red social para programadores donde puedes guardar, compartir y colaborar en proyectos de código. 

#### ¿Qué es CODESPACES?
Codespaces es una herramienta dentro de GitHub que te permite programar directamente desde tu navegador web, sin necesidad de instalar nada en tu ordenador. Es como tener un ordenador virtual en la nube lista para programar.

#### ¿Qué es LEARNPACK?
LearnPack es una herramienta de 4Geeks que facilita la enseñanza y el aprendizaje de habilidades técnicas mediante tutoriales y ejercicios interactivos, que se evalúan automáticamente. 

# HTML:

### Conceptos Básicos de HTML

**HTML** (HyperText Markup Language) es el lenguaje que usamos para crear páginas web. Es como el esqueleto que estructura todo lo que ves en un sitio.

### Etiquetas (Tags):
Las etiquetas son las piezas fundamentales de HTML. Cada elemento en una página web está rodeado por etiquetas, que indican cómo debe mostrarse.

- **Ejemplo básico:** `<p>Hola, mundo!</p>`
  - `<p>` es la etiqueta de apertura que dice "esto es un párrafo".
  - `</p>` es la etiqueta de cierre.

### Atributos:
Los atributos son pequeños detalles que añadimos a las etiquetas para darles más información o características.

- **Ejemplo:** `<a href="https://www.ejemplo.com">Visita mi página</a>`
  - `href` es un atributo de la etiqueta `<a>` (que crea un enlace) y especifica la URL a la que conduce.

### Estructura básica de un documento HTML:
Cada página web en HTML sigue una estructura básica:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi página web</title>
  </head>
  <body>
    <h1>¡Bienvenido a mi página!</h1>
    <p>Este es un párrafo con contenido.</p>
  </body>
</html>
```

- ```<!DOCTYPE html>```: Le dice al navegador que estamos usando HTML5.
- ```html<html>```: Contiene todo el contenido de la página.
- ```html<head>```: Incluye información que no se ve directamente en la página, como el título.
- ```html<body>```: Es donde ponemos el contenido que se muestra en la página, como texto, imágenes, etc.

### Principales Etiquetas de HTML

1. **`<html>`**
   - **Descripción:** Contiene todo el código HTML de la página. Es la etiqueta raíz de cualquier documento HTML.
   
2. **`<head>`**
   - **Descripción:** Incluye información sobre la página, como el título y enlaces a archivos CSS y JavaScript. Esta información no se muestra directamente en la página.
   
3. **`<title>`**
   - **Descripción:** Define el título de la página, que aparece en la pestaña del navegador.
   
4. **`<body>`**
   - **Descripción:** Contiene todo el contenido visible de la página web, como texto, imágenes, enlaces, etc.
   
5. **`<h1>` a `<h6>`**
   - **Descripción:** Representan encabezados, siendo `<h1>` el más importante (generalmente el título principal) y `<h6>` el menos importante.

6. **`<p>`**
   - **Descripción:** Define un párrafo de texto.
   
7. **`<a>`**
   - **Descripción:** Crea un enlace a otra página web o a una parte de la misma página. Se utiliza con el atributo `href` para definir la URL de destino.
   
8. **`<img>`**
   - **Descripción:** Inserta una imagen en la página. Se utiliza con el atributo `src` para definir la ruta de la imagen y con `alt` para proporcionar un texto alternativo.
   
9. **`<ul>`**
   - **Descripción:** Crea una lista desordenada (con viñetas).
   
10. **`<ol>`**
    - **Descripción:** Crea una lista ordenada (numerada).
    
11. **`<li>`**
    - **Descripción:** Define un elemento dentro de una lista (ya sea desordenada o numerada).
    
12. **`<div>`**
    - **Descripción:** Agrupa contenido en bloques. Es útil para organizar y aplicar estilos a secciones de la página.
    
13. **`<span>`**
    - **Descripción:** Similar a `<div>`, pero para agrupar contenido en línea. Se usa para aplicar estilos o funciones a pequeñas partes de texto o elementos en línea.
    
14. **`<strong>`**
    - **Descripción:** Resalta texto como importante, generalmente mostrando el texto en negrita.
    
15. **`<em>`**
    - **Descripción:** Enfatiza texto, generalmente mostrando el texto en cursiva.
    
16. **`<br>`**
    - **Descripción:** Inserta un salto de línea. Es útil para dividir líneas de texto.
    
17. **`<input>`**
    - **Descripción:** Crea un campo donde los usuarios pueden introducir datos, como en formularios. Puede tener diferentes tipos (texto, contraseña, etc.).
    
18. **`<form>`**
    - **Descripción:** Crea un formulario para recolectar datos del usuario. Se utiliza en conjunto con etiquetas como `<input>`, `<button>`, etc.
    
19. **`<button>`**
    - **Descripción:** Crea un botón que se puede hacer clic. Generalmente se usa dentro de formularios para enviar datos.
    
20. **`<table>`**
    - **Descripción:** Crea una tabla. Se utiliza junto con etiquetas como `<tr>`, `<th>`, y `<td>` para definir filas y celdas.
    
21. **`<tr>`**
    - **Descripción:** Define una fila en una tabla.
    
22. **`<th>`**
    - **Descripción:** Define una celda de encabezado en una tabla. Generalmente aparece en negrita y centrada.
    
23. **`<td>`**
    - **Descripción:** Define una celda de datos en una tabla.

# CSS

**CSS** (Cascading Style Sheets) es el lenguaje que usamos para dar estilo a las páginas web, como colores, fuentes y disposición de elementos.

### Sintaxis
La sintaxis de CSS se compone de **reglas** que tienen el siguiente formato:

```css
selector {
  propiedad: valor;
}
```

- Selector: Indica a qué elementos HTML se aplican los estilos.
- Propiedad: Especifica qué aspecto del elemento deseas cambiar.
- Valor: Define el nuevo aspecto que tendrá la propiedad.

Ejemplo:
```css
p {
  color: blue;
  font-size: 16px;
}
```
### Selectores

Los selectores indican a qué elementos HTML se aplican los estilos. Algunos ejemplos son:

- Selector de tipo: Selecciona todos los elementos de un tipo específico.
```css
p { /* Estilos para todos los párrafos */ }
```

- Selector de clase: Selecciona todos los elementos con una clase específica. Se usa con un punto (.) antes del nombre.
```css
.mi-clase { /* Estilos para elementos con clase "mi-clase" */ }
```

- Selector de ID: Selecciona un único elemento con un ID específico. Se usa con una almohadilla (#) antes del nombre.
```css
#mi-id { /* Estilos para el elemento con ID "mi-id" */ }
```

### Especificidad y Herencia

- Especificidad: Determina qué estilos se aplican cuando hay múltiples reglas para un mismo elemento. La especificidad se basa en el tipo de selector:
  - ID > Clases > Etiquetas
- Herencia: Los estilos de un elemento pueden ser heredados de sus elementos padres. Por ejemplo, si un contenedor tiene un color de texto, todos sus elementos hijos también tendrán ese color a menos que se especifique lo contrario.

# Enlaces importantes:
- [Guía para el estudiante - Prework](https://4geeksacademy.notion.site/Gu-a-para-el-estudiante-Prework-7bb8f5fc33114692a8b41e9a746dfcf9)
- [Conceptos básicos - HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [Lenguaje de etiquetas](https://developer.mozilla.org/es/docs/Web/HTML)
- [Conceptos básicos - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [Referencias - CSS](https://cssreference.io/)
- [Unidades de medida - CSS](https://keepcoding.io/blog/unidades-de-medida-en-css/)







