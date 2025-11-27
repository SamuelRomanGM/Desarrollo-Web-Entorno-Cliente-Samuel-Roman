
const lista = [];
lista[0] = "Elemento 1";
lista[1] = "Elemento 2";
lista[5] = null;
lista[6] = undefined;
lista[7] = "";
console.log(lista);
lista.push("Elemento 3");
lista.unshift("Elemento 0");
let confirmacion = confirm("¿Desea eliminar el primer elemento?");
if (confirmacion) {
    console.log(`Eliminando el elemento ${lista.pop()}`);
    console.log(lista);
}else {
    console.log(`Eliminando el elemento ${lista.shift()}`);
    console.log(lista);
}
lista.splice(2, 1, "Elemento 1.5");// Reemplaza el elemento en el índice 2 y agrega "Elemento 1.5" y elimina 1 elemento de el lado derecho
console.log(lista);
lista.length//tamaño de la lista
for (const element of lista) {
    console.log(element);
}
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}