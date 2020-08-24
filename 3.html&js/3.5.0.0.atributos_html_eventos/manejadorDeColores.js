
let redInput = document.getElementById("red");
let greenInput = document.getElementById("green");
let blueInput = document.getElementById("blue");

let contenedor = document.getElementById("canvas");


let botonReset = document.getElementById("reset");


// Los eventos están relacionados a acciones que el usuario realiza
// sobre los elementos HTML, existen muchos tipos de eventos:
// click (cuando el usuario da click), change (en inputs cuando el 
// valor es cambiado por el usuario), mousemove, etc.

// MÁS INFORMACIÓN: https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Eventos

// Podemos configurar de formas diferentes  a los eventos
// cuando redInput cambie de valor, ejecutar la función cambiarColor
greenInput.onchange = cambiarColor;

// A diferencia del anterior, esta forma permite registrar más de un
// manejador por evento, a demás podemos usar su contra parte
// removeEventListener, para quitar un manejador
blueInput.addEventListener("change", cambiarColor);

// Existen al menos 3 formas de definir nuestro manejador
// Veamos dos de estas:


// Definir una función separada y pasar la al addEventListener
function cambiarColor(){
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;

    contenedor.style.backgroundColor = "RGB("+ red + "," + green + "," + blue +")";
    
}

// Pasar al addEventListener una función anónima (SIN NOMBRE)
// esta forma no es útil si queremos posteriormente usar el 
// método removeEventListener
botonReset.addEventListener("click", function(){
    redInput.value = "255";
    greenInput.value = "255";
    blueInput.value = "255";

    contenedor.style.backgroundColor = "";
});


