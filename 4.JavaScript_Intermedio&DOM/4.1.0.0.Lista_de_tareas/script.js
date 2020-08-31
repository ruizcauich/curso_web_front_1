// Los elementos que queremos
let lista = document.getElementById("listaDeTareas");
let botonAgregarTarea = document.getElementById("botonAgregarTarea");
let inputTareaNueva = document.getElementById("nuevaTarea")

// Reaccionamos al clic
botonAgregarTarea.addEventListener("click", agregarTareaALista);

function agregarTareaALista(){
    // Una lista requiere de Items, en HTML
    // estos son elementos <li>contenido</li>
    
    // Podemos acceder al contenido del elemento UL
    // por medio del atributo innerHTML
    
    //lista.innerHTML = "<li>"+ inputTareaNueva.value +"</li>"
    
    // El código anterior únicamente permite mantener un item no agrega.
    
    // Concatenamos en valor anterior, para tener un nuevo LI (usamos TEMPLATE STRINGS)
    lista.innerHTML = lista.innerHTML +  `<li>${inputTareaNueva.value}</li>`;

    /* Los TEMPLATE STRINGS son una nueva característica de JS que nos permite INTERPOLAR
    (insertar) expresiones y valores dentro de la cadena usando ${}; aprende más en:
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings */

    inputTareaNueva.value = "";
}

// Esto no nos funciona, queremos que se agregue al dar enter, mejoremos esto
// inputTareaNueva.addEventListener("keypress", agregarTareaALista);

inputTareaNueva.addEventListener("keypress", function(event){
    // podemos verificar el código de la tecla presionada (https://keycode.info/), 
    // y ejecutar el código 13 pertenece al enter
    if(event.keyCode==13) agregarTareaALista();
    
    // Tambien podríamos emular el clic sobre el boton
    // if(event.keyCode==13) botonAgregarTarea.click();
});


