/*Crear una función que tome como parámetro un array, retornar el
último elemento del array*/

var miarray = ["mario", "pino", "franco","gio", "peppe"];

function longitudArray (arr) {
    return arr[arr.length-1];
}

document.write(longitudArray (miarray));

