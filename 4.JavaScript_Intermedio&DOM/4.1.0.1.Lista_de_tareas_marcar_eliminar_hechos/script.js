let lista = document.getElementById("listaDeTareas");
let botonAgregarTarea = document.getElementById("botonAgregarTarea");
let inputTareaNueva = document.getElementById("nuevaTarea")

// Reaccionamos al clic
botonAgregarTarea.addEventListener("click", agregarTareaALista);


// Queremos ejecutar la misma función en todos los items:
// CAMBIAR EL COLOR DE FONDO DEL ITEM AL DAR CLICK SOBRE EL

// 1- Delegación: dar la responsabilidad de actual no al elemento,
// afectado, sino al padre estable (que no cambia) más cercano (la lista UL).
// FUNCIONA GRACIAS A LA PROPAGACIÓN DEL EVENTO: 
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-event-propagation.php

// 2- Usando Clousures como oyentes en cada elemento. Los CLOUSURES 
// son Funciones que se definen dentro de otras y que mantienen vivas las 
// variables de la función que las contiene incluso después de 
// que haya finalizado su ejecución.


// El oyente sobre la lista que contiene items (LI)
lista.addEventListener("dblclick", function(event){
    // el atributo apunta al elemento que recibió la acción
    console.log(event.target.tagName);
    // Los nombres de las etiquetas están el mayúscula
    noEsUnItem = event.target.tagName !== "LI";

    // Si el clic viene de cualquier lado que del UL que no sea un LI
    if(noEsUnItem) return;

    deseaQuitarItem = confirm(`Desea eliminar el item concluído (${event.target.innerText})?`);

    if(deseaQuitarItem) event.target.remove();
    
});

function agregarTareaALista() {
    let item = document.createElement("li");
    item.innerText = inputTareaNueva.value;

    lista.appendChild(item);

    // El oyente es un clousure, hace uso de la variable
    // item definida en esta función.
    item.addEventListener("click", function(){
        item.style.backgroundColor = "#A3E293";
    })

    inputTareaNueva.value = "";
}

inputTareaNueva.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) 
        agregarTareaALista();
    

});


