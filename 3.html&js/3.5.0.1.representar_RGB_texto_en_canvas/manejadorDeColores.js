
let redInput = document.getElementById("red");
let greenInput = document.getElementById("green");
let blueInput = document.getElementById("blue");

let contenedor = document.getElementById("canvas");


let botonReset = document.getElementById("reset");


greenInput.onchange = cambiarColor;


blueInput.addEventListener("change", cambiarColor);


// Definir una función separada y pasar la al addEventListener
function cambiarColor(){
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;

    contenedor.style.backgroundColor = "RGB("+ red + "," + green + "," + blue +")";
    
    // let ctx = contenedor.getContext("2d");
    // ctx.clearRect(0,0, contenedor.clientWidth, contenedor.height);
    // ctx.fillText(contenedor.style.backgroundColor, 40, 40);
    clearCanvasAndWrite(contenedor, contenedor.style.backgroundColor, 120,120);
}


botonReset.addEventListener("click", function(){
    redInput.value = "255";
    greenInput.value = "255";
    blueInput.value = "255";

    contenedor.style.backgroundColor = "";

    // let ctx = contenedor.getContext("2d");
    // ctx.clearRect(0,0, contenedor.clientWidth, contenedor.height);
    // ctx.fillText("SIN COLOR", 40, 40);
    clearCanvasAndWrite(contenedor, "SIN COLOR", 50, 50);
});


// SEPARAMOS EL CÓDIGO PARA ESCRIBIR EN EL CANVAS EN UNA FUNCIÓN
// PARA NO REPETIR TODAS LAS LÍNEAS DE CÓDIGO DONDE SE NECESITE
// CON PARÁMETROS POR DEFECTO (si no son proporcionados los valores)
//  PARA xText y yText
function clearCanvasAndWrite(canvas, text, xText=10, yText=10  ){
    let ctx = canvas.getContext("2d"); // el contexto de dibujo
    // para limpiar un área rectangular que parte del origen 
    // a todo lo ancho y alto del canvas
    ctx.clearRect(0,0, canvas.width, canvas.height ); 
    // DIBUJAR EL TEXTO
    ctx.fillText(text, xText, yText);
}