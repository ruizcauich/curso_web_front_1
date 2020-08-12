/*El control de flujo nos permite modificar la dirección
de ejecución de los programas basado en condiciones.

Tenemos dos tipos de estructuras de control de flujo
*/

// SELECTIVAS: permiten seleccionar un porciones de código

let numero = parseInt(prompt("Ingresa un número"));

if (numero % 2 == 0) {
    alert("El número es par");
} else {
    alert("Es un número non");
}

let numero2 = parseInt(prompt("Ingresa un segundo número"));

if (numero2 > numero) {
    alert("El segundo número es mayor");
} else if (numero > numero2) {
    alert("El primer número es mayor");
} else {
    alert("Son el mismo número");
}


/*
Ejercicio: Calcula tu peso en el espacio, pero ahora,
pregunta por una opción: La tierra, la Luna, Marte o Plutón.
Haz uso de if...else para mostrar al usuario el resultado que corresponda.
 */

const gTierra = 9.8;
const gLuna = 1.62;
const gMarte = 3.71;
const gPluton = 0.81

let miMasa = parseInt(prompt("Cuál es tu masa en Kg?"));

let opcion = prompt("Tu peso en el espacio escribe para seleccionar: \nTierra,\nLuna,\nMarte,\nPlutón");

if(opcion=="Tierra"){
    alert("Tu peso en la tierra es: "+ (miMasa*gTierra));
}else if(opcion=="Luna"){
    alert("Tu peso en la luna es: "+ (miMasa*gLuna));
}else if(opcion=="Marte"){
    alert("Tu peso en marte es: "+ (miMasa*gMarte));
}else{
    alert("Tu peso en plutón es: "+ (miMasa*gPluton));
}

// SWITCH es una estructura que permite evaluar una serie de casos
// y ejecutar el que corresponda. Muchos aconsejan sustituir su uso
// por el de if...else ya que eso mejora la lectura del código.


miMasa = parseInt(prompt("Cuál es tu masa en Kg?"));
opcion = prompt("Tu peso en el espacio escribe para seleccionar: \nTierra,\nLuna,\nMarte,\nPlutón");
// Aplicado al peso en el espacio

switch(opcion){
    case "Tierra":
        alert("Tu peso en la tierra es " + (miMasa*gTierra));
        break;
    case "Luna":
        alert("Tu peso en la tierra es " + (miMasa*gLuna));

}


// En Javascript existen otros tipos de valores que son considerados como falsos
// a demás de booleano 'false', comprobemos esto:

if(!false) console.log("false es falso");
if(!undefined) console.log("undefined es falso");
if(!null) console.log("null es falso");
if(!0) console.log("0 es falso");
if(!NaN) console.log("NaN (Not a Number) es falso");
if(!"") console.log("\"\" La cadena vacía es falso");


// PARA SABER MÁS SOBRE CONTROL SELECTIVO, REVISA EL SIGUIENTE ENLACE:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores