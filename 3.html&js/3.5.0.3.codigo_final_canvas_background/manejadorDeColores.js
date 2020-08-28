
let redInput = document.getElementById("red");
let greenInput = document.getElementById("green");
let blueInput = document.getElementById("blue");

let mostrarGuiasCheckbox = document.getElementById("mostrarGuias");

let contenedor = document.getElementById("canvas");


let botonReset = document.getElementById("reset");

let posicionEnEjeX = 150;
let posicionEnEjeY = 150;

// ESTABLECEMOS EL MANEJADOR DE VENTOS PARA TODOS LOS ELEMENTOS
redInput.addEventListener("change", draw);
greenInput.addEventListener("change", draw);
blueInput.addEventListener("change", draw);
contenedor.addEventListener("dblclick", draw);
contenedor.addEventListener("mousemove", draw);
// Si las guias están dibujadas cuando se deselecciona
// ejecutar draw hace que se borren
mostrarGuiasCheckbox.addEventListener("change", draw);


botonReset.addEventListener("click", function () {
    redInput.value = "255";
    greenInput.value = "255";
    blueInput.value = "255";

    contenedor.style.backgroundColor = "";

    clearCanvasAndWrite(contenedor, "SIN COLOR", 50, 50);
});



// Función que se ejecutará siempre que se deba redibujar el canvas
// (Al cambiar inputs, al dar doble click, al mover el mouse)
function draw(e) {
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;

    contenedor.style.backgroundColor = "RGB(" + red + "," + green + "," + blue + ")";

    // Para mover el texto
    if(e.type == 'dblclick'){
        posicionEnEjeX = e.offsetX;
        posicionEnEjeY = e.offsetY;
    }
    clearCanvasAndWrite(contenedor, contenedor.style.backgroundColor, posicionEnEjeX, posicionEnEjeY);

    // Dibuja las líneas sólo cduando el evento es mousemove
    // y el checkbox está seleccionado
    if(e.type=="mousemove" && mostrarGuiasCheckbox.checked){
        let ctx = contenedor.getContext("2d");
        dibujarLinea(ctx, "grey", e.offsetX, 0, e.offsetX, e.target.height);
        // Horizontal
        dibujarLinea(ctx, "grey", 0, e.offsetY, e.target.width, e.offsetY);

        ctx.fillText(e.offsetX + " x " + e.offsetY, e.offsetX+2, e.offsetY-2);
    }

}


function clearCanvasAndWrite(canvas, text, xText = 10, yText = 10) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text, xText, yText);
}
