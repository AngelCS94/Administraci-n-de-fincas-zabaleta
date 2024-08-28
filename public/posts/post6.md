# Repaso de JavaScript: Conexión y Manipulación del DOM

## 1. Conexión de JavaScript con HTML a través del DOM

El DOM (*Document Object Model*) es la representación estructurada de un documento HTML. JavaScript puede interactuar con el DOM para modificar el contenido, el estilo y la estructura del documento en tiempo real.

### 1.1 ¿Qué es el DOM?
- El DOM es una interfaz que permite a los lenguajes de programación acceder y manipular el contenido y la estructura de un documento HTML o XML.
- Representa la página web como una jerarquía de nodos, donde cada nodo es un objeto que representa una parte del documento (etiquetas, atributos, texto, etc.).

### 1.2 Conectando JavaScript al DOM
Para conectar JavaScript con HTML, puedes escribir el código JavaScript directamente dentro de una etiqueta `<script>` en el HTML, o enlazar un archivo `.js` externo:

#### 1.2.1 Enlazando un Archivo JavaScript Externo
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo DOM</title>
</head>
<body>
    <h1 id="titulo">¡Hola, Mundo!</h1>
    <p id="parrafo">Este es un párrafo de ejemplo.</p>

    <script src="script.js"></script> <!-- Enlazamos el archivo JavaScript -->
</body>
</html>
```
#### 1.2.2 Código JavaScript para Manipular el DOM

 ```javascript
 
document.getElementById("titulo").textContent = "¡Hola, Universo!";
document.getElementById("parrafo").style.color = "blue";
```

Este ejemplo cambia el texto del `<h1>` y el color del `<p>` a azul.

### 2. Manipulación del DOM
Manipular el DOM significa cambiar la estructura, el contenido o el estilo de la página web usando JavaScript.

#### 2.1 Seleccionar Elementos del DOM
Para manipular elementos, primero necesitas seleccionarlos. Aquí hay algunas formas comunes de hacerlo:

##### 2.1.1 Seleccionar por ID
```javascript
const elemento = document.getElementById("miElemento");
```
##### 2.1.2 Seleccionar por Clase
```javascript
const elementos = document.getElementsByClassName("miClase");
```

##### 2.1.3 Seleccionar por Etiqueta
```javacsript
const elementos = document.getElementsByTagName("p");
```

###### 2.1.4 Seleccionar Usando Selectores CSS
```javascript
const elemento = document.querySelector(".miClase"); // Selecciona el primer elemento con esa clase
const elementos = document.querySelectorAll(".miClase"); // Selecciona todos los elementos con esa clase
```

#### 2.2 Modificar Contenido del DOM
Una vez seleccionado un elemento, puedes modificar su contenido:


##### 2.2.1 Cambiar el Texto de un Elemento
```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo Título";
```

##### 2.2.2 Cambiar el HTML Interno de un Elemento
```javascript
const contenido = document.getElementById("contenido");
contenido.innerHTML = "<p>Este es el nuevo contenido con HTML.</p>";
```

#### 2.3 Modificar Estilos del DOM
Puedes cambiar el estilo de un elemento directamente:

##### 2.3.1 Cambiar el Color de Texto
```javascript
const parrafo = document.getElementById("parrafo");
parrafo.style.color = "red";
```

##### 2.3.2 Cambiar el Fondo
```javascript
const caja = document.getElementById("caja");
caja.style.backgroundColor = "yellow";
```

#### 2.4 Añadir y Eliminar Elementos del DOM
##### 2.4.1 Añadir un Elemento
```javascript
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo añadido dinámicamente.";
document.body.appendChild(nuevoParrafo);
```

##### 2.4.2 Eliminar un Elemento
```javascript
const elemento = document.getElementById("titulo");
elemento.remove(); // Elimina el elemento del DOM
```

#### 2.5 Eventos del DOM
Los eventos son acciones que ocurren en la página web (como un clic o la carga de la página). Puedes usar JavaScript para manejar estos eventos.

##### 2.5.1 Ejemplo de Evento de Clic
```javascript
const boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});
```

# Enlaces importantes:
- [Uso de selectores](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
