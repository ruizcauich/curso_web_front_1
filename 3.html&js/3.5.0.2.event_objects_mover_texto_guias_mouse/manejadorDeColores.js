// Los eventos están relacionados a acciones que el usuario realiza
// sobre los elementos HTML.
// En este ejemplo veremos cómo mover de posición el texto que indica 
// los valores RGB del color de fondo del CANVAS. Al dar doble clic sobre
// un punto de este.

let redInput = document.getElementById("red");
let greenInput = document.getElementById("green");
let blueInput = document.getElementById("blue");

let contenedor = document.getElementById("canvas");


let botonReset = document.getElementById("reset");

let posicionEnEjeX = 150;
let posicionEnEjeY = 150;

// ESTABLECEMOS moverTexto COMO FUNCIÓN MANEJADORA DEL
// EVENTO dblclick (DOBLE CLIC)
contenedor.addEventListener("dblclick", moverTexto);

// Necesitamos información extra: saber en qué lugar el usuario dio clic,
//  esta información y mucha más puede esta contenida en los “event objects” 
//  que son pasados a los manejadores de manera automática.
// Debemos definir un parámetro para recuperarlo (event, evt o e servirán)
function moverTexto(e){
    // Explora las propiedades de este objeto
    console.log(e);
    // Screen hace referencia a la posición del puntero en la pantalla.
    // posicionEnEjeX = e.screenX;
    // posicionEnEjeY = e.screenY;

    // La propiedad offset devuelve la coordenada x/y del puntero del mouse,
    // relativa al elemento de destino (sobre el cual se dio hizo el evento).
    posicionEnEjeX = e.offsetX;
    posicionEnEjeY = e.offsetY;

    // Como cambiarColor dibuja el texto, lo llamamos
    // para que se actualice la posición
    cambiarColor();
}

greenInput.onchange = cambiarColor;

blueInput.addEventListener("change", cambiarColor);

// Definir una función separada y pasar la al addEventListener
function cambiarColor(){
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;

    contenedor.style.backgroundColor = "RGB("+ red + "," + green + "," + blue +")";
    
    
    clearCanvasAndWrite(contenedor, contenedor.style.backgroundColor, posicionEnEjeX, posicionEnEjeY);
}

botonReset.addEventListener("click", function(){
    redInput.value = "255";
    greenInput.value = "255";
    blueInput.value = "255";

    contenedor.style.backgroundColor = "";

    
    clearCanvasAndWrite(contenedor, "SIN COLOR", 50, 50);
});



function clearCanvasAndWrite(canvas, text, xText=10, yText=10  ){
    let ctx = canvas.getContext("2d"); // el contexto de dibujo
    // para limpiar un área rectangular que parte del origen 
    // a todo lo ancho y alto del canvas
    ctx.clearRect(0,0, canvas.width, canvas.height ); 
    // DIBUJAR EL TEXTO
    ctx.fillText(text, xText, yText);
}


contenedor.addEventListener("mousemove", moverEjes);

function moverEjes(e){
    ctx = e.target.getContext("2d");
    // console.log(e);
    // Cambiar color se encarga de establecer color y texto
    cambiarColor();
    // Los ejes que siguen al mouse
    // Vertical
    dibujarLinea(ctx, "grey", e.offsetX, 0, e.offsetX, e.target.height);
    // Horizontal
    dibujarLinea(ctx, "grey", 0, e.offsetY, e.target.width, e.offsetY);
}
