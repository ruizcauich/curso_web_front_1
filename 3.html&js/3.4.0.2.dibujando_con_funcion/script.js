// Obtenemos el canvas#areaDibujo del document
let areaDibujo = document.getElementById("areaDibujo");

let contexto = areaDibujo.getContext("2d");

// dibujarLinea(contexto, "red", 0, 0, 300, 300);
// dibujarLinea(contexto, "blue", 0, 10, 300, 290);
// dibujarLinea(contexto, "blue", 0, 20, 300, 280);
// dibujarLinea(contexto, "blue", 0, 30, 300, 270);

for(i=0; i<=300; i+=10){
    dibujarLinea(contexto, "red", 0, i, 300, 300-i);
    dibujarLinea(contexto, "green", i, 0, 300-i, 300);
}


// Las funciones nos permiten reunir código que se escribe una y otra vez,
// en distintas partes de nuestros programas, en un solo bloque de código
// identificado con un nombre y al que podemos “llamar” donde lo
// requiramos.
// Por ejemplo, si queremos dibujar 5 líneas, podríamos tener 5 veces el
// código que va de ctx.beginPath() a ctx.stroke(); o tener una función 
// que tenga esas líneas y unicamente llamar a la función 5 veces.

function dibujarLinea(ctx, color, xInicial, yInicial, xFinal, yFinal){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xInicial, yInicial);
    ctx.lineTo(xFinal, yFinal);
    ctx.closePath();
    ctx.stroke();
}


// MAS INFORMACIÓN SOBRE FUNCIONES EN: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones



