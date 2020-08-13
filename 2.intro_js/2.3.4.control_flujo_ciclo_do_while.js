// Como el ciclo while, la única diferencias es que este
// se ejecuta mínimo una vez


// Repitamos indefinidamente el código de adivina número
// hasta que el usuario adivine correctamente 
alert("Bienvenido. ¡Vamos a jugar a adivina el número!\n" + 
"El juego para cuando adivines el número correcto");

let numero = 1 + Math.random() * 10;
// Devuelve el número entero menor más cercano
numero = Math.floor(numero);

let guessed;

do{
    // El código, queda mejor que en el ejemplo anterior,
    // no tuvimos que repetir la intrucción dos veces
    guessed = parseInt(prompt("Escribe un número entre 0 y 100"));
}while(guessed!=numero)

alert("Bien hecho!\nGanaste Un millon de dolares!");

