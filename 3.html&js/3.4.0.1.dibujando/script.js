// Obtenemos el canvas#areaDibujo del document
let areaDibujo = document.getElementById("areaDibujo");

// area Dibujo es únicamente un elemento HTML
// Para poder dibujar, necesitamos obtener un espacio
// que nos de la funcionalidad para dibujar;
// Este espacio es llamado contexto

// requerimos el contexto 2d
let ctx = areaDibujo.getContext("2d");

// Para dibujar TRAZOS, se necesita indicar un incio 
// y un fin
ctx.beginPath();
// Establece el color de la línea
ctx.strokeStyle = "blue";

// Se mueve a un punto del lienzo
ctx.moveTo(0,0);
// Dibuja una línea que conecte con las coordenadas
ctx.lineTo(300,300);


ctx.closePath();

// Dibuja el contorno de la forma
ctx.stroke();

// Para pintar otra línea
ctx.beginPath();
// Establece el color de la línea
ctx.strokeStyle = "green";

// Se mueve a un punto del lienzo
ctx.moveTo(150,150);
// Dibuja una línea que conecte con las coordenadas
ctx.lineTo(0,300);


ctx.closePath();

// Dibuja el contorno de la forma
ctx.stroke();


