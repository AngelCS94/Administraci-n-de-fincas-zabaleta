# Repaso de JavaScript: Funciones, Condicionales y Bucles

## 1. Funciones
Las funciones son bloques de código reutilizables que realizan una tarea específica. Se pueden definir y luego llamar en cualquier parte del código.

### 1.1 Definir y Llamar Funciones
Para definir una función, utilizamos la palabra clave `function` seguida del nombre de la función y paréntesis `()`.

```javascript
function saludar() {
    console.log("Hola, mundo!");
}

// Llamar a la función
saludar(); // Output: "Hola, mundo!"
```

### 1.2 Funciones Flecha
Las funciones flecha (arrow functions) son una forma más concisa de escribir funciones en JavaScript.

```javascript
const saludar = () => {
    console.log("Hola, mundo!");
};

saludar(); // Output: "Hola, mundo!"
```

Si la función tiene un solo retorno, puedes omitir las llaves {} y la palabra return.

```javascript
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // Output: 5
```

### 1.3 Funciones Anónimas
Las funciones anónimas son funciones que no tienen nombre. Se utilizan comúnmente como argumentos para otras funciones.

```javascript
setTimeout(function() {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
```

## 2. Condicionales
Los condicionales se utilizan para ejecutar código solo si se cumple una cierta condición.

### 2.1 if y else
La estructura if ejecuta un bloque de código si la condición es verdadera. else ejecuta otro bloque si la condición es falsa.

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

### 2.2 else if
Para manejar múltiples condiciones, usamos else if.

```javascript
let nota = 85;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```
### 2.3 Operador Ternario
El operador ternario es una forma abreviada de escribir un if...else. Se utiliza para realizar asignaciones rápidas basadas en una condición.

```javascript
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Output: "Eres mayor de edad"
```

### 2.4 switch
El switch es útil cuando tienes que comparar una variable con varios valores posibles.

```javascript
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    default:
        nombreDia = "Fin de semana";
}

console.log(nombreDia); // Output: "Miércoles"
```






## 3. Bucles e Iteración
Los bucles permiten repetir un bloque de código múltiples veces.

### 3.1 for
El bucle for es útil cuando conoces el número exacto de repeticiones.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}
```

### 3.2 while
El bucle while ejecuta el código mientras una condición sea verdadera.

```javascript
let contador = 0;

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}
```

### 3.3 for...of
El bucle for...of se usa para iterar sobre elementos de un array o colección.

```javascript
let frutas = ["Manzana", "Banana", "Naranja"];

for (let fruta of frutas) {
    console.log(fruta);
}
```
### 3.4 do...while
El bucle do...while es similar a while, pero garantiza que el código dentro del bucle se ejecute al menos una vez, ya que la condición se evalúa después de la primera iteración.

```javacript
let numero = 0;

do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 5);
```

### 3.5 for...in
El bucle for...in se utiliza para iterar sobre las propiedades de un objeto.

```javascript
let persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Output:
// nombre: Ana
// edad: 25
// ciudad: Madrid
```

### 3.6 break y continue
break se utiliza para salir de un bucle antes de que se complete, y continue se usa para saltar a la siguiente iteración.

```javascript
// Ejemplo de break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }
    console.log(i);
}

// Ejemplo de continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Salta la iteración cuando i es 5
    }
    console.log(i);
}
```