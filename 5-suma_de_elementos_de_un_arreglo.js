// Suma de elementos de un arreglo:
// Crea un arreglo de números y calcula la suma de todos sus elementos.

// Arreglo a sumar sus elementos
const numeros = [10, 20, 30, 40, 50];

// Suma de elementos con metodo reduce
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

// Mostrar suma
console.log("La suma de los elementos del arreglo es:", suma);
