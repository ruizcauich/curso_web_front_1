// Los ciclos nos permiten repetir una o varias instrucciones
// una y otra vez, de acuerdo a una condición

// Repitamos indefinidamente el código de adivina número
// hasta que el usuario adivine correctamente 
alert("Bienvenido. ¡Vamos a jugar a adivina el número!\n" + 
"El juego para cuando adivines el número correcto");
// Para no hacer trampa, usemos números pseudo aleatoreos
// Math.random es una herramienta que retorna números entre 0 y 1
// la técnica que sigue nos permite crear números entre 1 y 10
let numero = 1 + Math.random() * 10;
// Devuelve el número entero menor más cercano
numero = Math.floor(numero);

let guessed = parseInt(prompt("Igresa un número del 1 al 10"));

while(guessed!=numero){
    guessed = parseInt(prompt("Aun no le atinas, ingresa otro número"));
}

alert("Bien hecho!\nGanaste Un millon de dolares!");

