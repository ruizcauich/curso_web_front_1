// JavaScript posee 3 tipos de ciclos for, en este ejemplo veremos
// el siclo for clásico

// Com el mismo juego de adivina el número, ahora demos al jugador
// únicamente 4 oprtunidades de adivinar

// INICIAMOS IGUAL QUE EN LOS EJEMPLOS ANTERIORES
alert("Bienvenido. ¡Vamos a jugar a adivina el número!\n" + 
"TIENES 4 OPRTUNIDADES");

let numero = 1 + Math.random() * 10;
// Devuelve el número entero menor más cercano
numero = Math.floor(numero);

let guessed;

for(let oportunidad=1; oportunidad<=3; oportunidad++){
    guessed = prompt("Tu número para la oportunidad número " + oportunidad);
    guessed = parseInt(guessed);

    if(guessed==numero) { 
        alert("Wow! Lo lograste en el intento " + oportunidad);
        
        // break es una instrucción que únicamente se usa en ciclos en el 
        // el switch. Permite interrumpir el flujo de la ejecución
        // INDICA QUE EL CICLO PARE
        break;
    }
}

// Otra instrucción interesante es continue.
// Esta termina la ejecución de las sentencias de la iteración actual del 
// ciclo y continua la ejecución del ciclo con la próxima iteración.