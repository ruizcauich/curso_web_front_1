// EMPLEANDO TODO LO APRENDIDO, REALIZA LOS SIGUIETNES JERCICIOS

// 1- Modifica el juego de adivina el número y que cumpla con los siguientes requisitos:
// Considera un premio incial de 100,000 pesos
// Por cada oportunidad fallida descuenta el 5% de lo que queda del premio
// La partida termina cuando el jugador adivina
// Si lo logró muestrale al usuario la cantidad que ganó


// 2- Modifica el tu código anterior para que cumpla con lo siguiente
// Preguta al usuario si quiere una nueva partida
// Por cada partida genera un número nuevo

let continuar 
do{

    let premio = 100000;
    
    let numero = 1 + Math.random()*100;
    numero = Math.floor(numero);
    
    alert("¡Bievenido!. ¡Vamos a jugar a adivina el número!\n" + 
    "TIENES TODAS LAS OPORTUNIDADES QUE QUIERAS");
    
    let guessed = parseInt(prompt("Escribe un número entre 0 y 100"));
    
    while(guessed!=numero){
        premio -= premio*0.05;
        guessed = parseInt(prompt("Escribe un número entre 0 y 100"));
    }
    
    alert("Feliciddades!! Ha ganado $" + premio);

    continuar = confirm("Desea jugar otra partida?");
}while(continuar)