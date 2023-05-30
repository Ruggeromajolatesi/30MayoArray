/*Crear una función que tome como parámetro un array y un número,
retornar un nuevo array con todos los elementos y el número
agregado al final del array*/

var miarray = [2, 4, 7, 90, 38];
var numero = 67;
var array2 = [];

function operacion(array,numero) {
    for (let i = 0; i < array.length; i++) {
        array2.push (array[i]);
    }
    array2.push (numero);
}
operacion(miarray, numero);

alert(array2);
