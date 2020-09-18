let lista = document.getElementById("listaDeTareas");
let botonAgregarTarea = document.getElementById("botonAgregarTarea");
let inputTareaNueva = document.getElementById("nuevaTarea")
let botonGuardar = document.getElementById("guardarLista");

let arrayDeTareas = [];

// Reaccionamos al clic
botonAgregarTarea.addEventListener("click", agregarTareaALista);
botonGuardar.addEventListener("click", guardar);


// El oyente sobre la lista que contiene items (LI)
lista.addEventListener("dblclick", function (event) { // el atributo apunta al elemento que recibió la acción
    console.log(event.target.tagName);
    // Los nombres de las etiquetas están el mayúscula
    noEsUnItem = event.target.tagName !== "LI";

    // Si el clic viene de cualquier lado que del UL que no sea un LI
    if (noEsUnItem) 
        return;
    
    deseaQuitarItem = confirm(`Desea eliminar el item concluído (${
        event.target.innerText
    })?`);

    if (!deseaQuitarItem)
        return;
    
    // retorna el indice del elemento que cumpla
    let tareaPorEliminar = arrayDeTareas.findIndex(
        tarea=> tarea.descripcion == event.target.innerText
    );

    // Remueve  1 elemento a partir del índice obtenido (el propio objeto)
    arrayDeTareas.splice(tareaPorEliminar, 1);

    event.target.remove();

});

function agregarTareaALista() {
    
    // AHORA QUE TENEMOS A renderTarea PODEMOS
    // NO REQUERIMOS DE CREAR LI's EN ESTA FUNCIÓN

    let tarea = {
        'descripcion': inputTareaNueva.value,
        'realizado' :  false
    };

    // lo ponemos en el array
    arrayDeTareas.push(tarea);

    renderTarea(tarea);

    inputTareaNueva.value = "";
}

inputTareaNueva.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) 
        agregarTareaALista();
    
});


// Función encargada de renderizar un objeto con datos de tarea
// en el documento
function renderTarea(tarea){
    let item = document.createElement("LI");

    item.innerText = tarea.descripcion;

    if(tarea.realizado){
        item.style.backgroundColor = "#A3E293";
    }

    lista.appendChild(item);

    item.addEventListener("click", function () {
        item.style.backgroundColor = "#A3E293";
        
        tarea.realizado = true;
    })

}


function guardar(){
    // Necesitamos una representación en texto del array
    // para establecer como valor de nuestra cookie
    let strListaTareas = JSON.stringify(arrayDeTareas);

    // Las claves y valores siempre se almacenan 
    // como strings
    localStorage.setItem("mis_tareas", strListaTareas);
    // Establece la cookie mis_tareas por 24 horas
    
    alert("¡Hecho!\n\nTu lista de tareas esta a salvo");
}

function cargarDatos(){
    
    let strListaTareas = localStorage.getItem("mis_tareas");
    
    // Cuando no se han almacenado valores para un item
    // getItem retornará null, si así fuera, no continuamos
    // la ejecución
    if(!strListaTareas) return;
    
    arrayDeTareas = JSON.parse(strListaTareas);

    arrayDeTareas.forEach(renderTarea);

}

cargarDatos();
