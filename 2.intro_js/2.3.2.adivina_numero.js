let numero = 45;

alert("Bienvenido a adivina el número");

let quiereJugar = confirm("¿Deseas jugar?");

if(quiereJugar){
    let guessed = parseInt(prompt("Escribe un número entre 0 y 100"));
    
    if(guessed==numero) {
        alert("FELICIDADES!!! HAZ GANADO UN MILLON DE DOLARES!");
    } else {
        alert("Uff, intentalo nuevamente!");
    }
}else{
    alert("Nos vemos pronto");
}