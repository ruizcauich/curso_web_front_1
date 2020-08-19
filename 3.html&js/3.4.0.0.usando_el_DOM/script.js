let contenedorRespuesta = document.getElementById("respuesta");

let numero = 1+ Math.random()*10;


let guessedNumber = parseInt(prompt("Adivina el número: "));

if(guessedNumber==numero){
    contenedorRespuesta.innerHTML = "Ganaste!!";
}else{
    contenedorRespuesta.innerHTML = "Upps!, No le atinaste al número!";
}
