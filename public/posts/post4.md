# Repaso de Programación en JavaScript

## 1. Variables
Las variables son contenedores que almacenan datos. Se pueden declarar con `var`, `let` o `const`.

```javascript
let nombre = "Juan";
var edad = 25;
const PI = 3.14;
```

- `let` y `var` son variables que pueden cambiar.
- `const` crea una constante, es decir, una variable cuyo valor no puede cambiar.

## 2. Tipos Primitivos
JavaScript tiene varios tipos de datos primitivos:

- `string`: Cadenas de texto.
- `number`: Números, ya sean enteros o decimales.
- `boolean`: true o false.
- `null`: Intencionalmente vacío.
- `undefined`: Sin valor asignado.

```javascript
let texto = "Hola"; // string
let numero = 42;    // number
let esVerdad = true; // boolean
let vacio = null;   // null
let sinValor;       // undefined
```

## 3. Constantes
Las constantes son variables cuyo valor no puede cambiar después de ser asignado.

```javascript
const GRAVEDAD = 9.81;
```

## 4. Tipado Dinámico
JavaScript es un lenguaje de tipado dinámico, lo que significa que el tipo de una variable puede cambiar durante la ejecución.

```javascript
let data = 42;    // number
data = "texto";   // string
```

## 5. Comentarios
Los comentarios se usan para dejar notas en el código y no son ejecutados.

```javascript
// Esto es un comentario de una línea

/*
Esto es un
comentario de
múltiples líneas
*/
```

## 6. Objetos
Los objetos son colecciones de propiedades, donde cada propiedad es una clave (key) con un valor (value) asociado.

```javascript
let persona = {
  nombre: "Ana",
  edad: 28,
  saludar: function() {
    return "Hola";
  }
};

console.log(persona.nombre); // Accede a la propiedad "nombre"
```

## 7. Arrays
Los arrays son listas ordenadas de elementos, que pueden ser de cualquier tipo de dato.

```javascript
let numeros = [1, 2, 3, 4, 5];
let mezclado = ["texto", 42, true];
```

Acceso a los elementos del array:
```javascript
console.log(numeros[0]); // 1
```

## 8. Funciones
Las funciones son bloques de código reutilizables que se ejecutan cuando son llamados.

```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(3, 4); // 7
```

## 9. Argumentos
Los argumentos son valores que se pasan a una función cuando se llama.

```javascript
function saludar(nombre) {
  return "Hola, " + nombre;
}

saludar("Luis"); // "Hola, Luis"
```

## 10. Operadores
### 10.1 Operadores Aritméticos
Estos operadores se usan para realizar cálculos matemáticos.

- `+` Suma: 5 + 3 // 8
- `-` Resta: 10 - 6 // 4
- `*` Multiplicación: 7 * 3 // 21
- `/` División: 20 / 4 // 5
- `%` Módulo: 10 % 3 // 1 (el resto de la división)
- `++` Incremento: let a = 5; a++; // 6
- `--` Decremento: let b = 3; b--; // 2

### 10.2 Operadores de Asignación
Asignan valores a las variables.

- `=` Asignación: let x = 10;
- `+=` Suma y asigna: x += 5; // x = x + 5
- `-=` Resta y asigna: x -= 2; // x = x - 2
- `*=` Multiplica y asigna: x *= 3; // x = x * 3
- `/=` Divide y asigna: x /= 4; // x = x / 4
- `%=` Módulo y asigna: x %= 2; // x = x % 2

### 10.3 Operadores de Comparación
Comparan dos valores y devuelven un booleano (true o false).

- `==` Igual: 5 == '5' // true (compara solo el valor)
- `===` Estrictamente igual: 5 === '5' // false (compara valor y tipo)
- `!=` Diferente: 5 != '5' // false
- `!==` Estrictamente diferente: 5 !== '5' // true
- `>` Mayor que: 7 > 5 // true
- `<` Menor que: 4 < 10 // true
- `>=` Mayor o igual que: 7 >= 7 // true
- `<=` Menor o igual que: 3 <= 5 // true

### 10.4 Operadores Lógicos
Utilizados para combinar múltiples condiciones.

- `&&` AND: true && false // false
- `||` OR: true || false // true
- `!` NOT: !true // false

### 10.5 Operador de Orden
Permiten comparar elementos en términos de su orden en el sistema de valores.

- `>` Mayor que
- `<` Menor que
- `>=` Mayor o igual
- `<=` Menor o igual

### 10.6 Operador Ternario
Es una forma abreviada de `if-else`.

```javascript
let edad = 20;
let esAdulto = (edad >= 18) ? "Sí, es adulto" : "No, es menor";
```


# Enlaces importantes:
- [Tutorial javascript](https://www.w3schools.com/js/default.asp)
- [javascript moderno](https://es.javascript.info/)
- [Tipos de datos y estructuras](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
- [Expresiones y operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
