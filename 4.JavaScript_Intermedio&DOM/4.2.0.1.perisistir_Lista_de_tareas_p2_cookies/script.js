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
    let item = document.createElement("li");
    item.innerText = inputTareaNueva.value;

    let tarea = {
        'descripcion': inputTareaNueva.value,
        'realizado' :  false
    };

    // lo ponemos en el array
    arrayDeTareas.push(tarea);

    lista.appendChild(item);

    
    item.addEventListener("click", function () {
        item.style.backgroundColor = "#A3E293";
        
        tarea.realizado = true;
    })

    inputTareaNueva.value = "";
}

inputTareaNueva.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) 
        agregarTareaALista();
    
});


function guardar(){
    // Necesitamos una representación en texto del array
    // para establecer como valor de nuestra cookie
    let strListaTareas = JSON.stringify(arrayDeTareas);

    // los valores de cookies no permiten espacios y otros caracteres
    strListaTareas = encodeURIComponent(strListaTareas);

    // Establece la cookie mis_tareas por 24 horas
    document.cookie = `mis_tareas = ${strListaTareas};max-age=${60*60*24};samesite=strict`;
    // document.cookie = "hola=hola";
    alert("¡Hecho!\n\nTu lista de tareas esta a salvo por 24 horas");
}

function cargarDatos(){
    // Lo opuesto de encode
    let cookies = decodeURIComponent(document.cookie);

    // Si hay mas cookies, las separamos
    let cookiesArray = cookies.split(";")
    
    // Para verificar cada cookie en busca de mis_tareas
    for (let cookie of cookiesArray) {
        // Si la cookie actual no contiene como texto "mis_tareas"
        // retorna -1; por lo que no es la que necesitamos
        if(cookie.indexOf("mis_tareas")>=0){
            let strListaTareas = cookie.split("=")[1];
            arrayDeTareas = JSON.parse(strListaTareas);
        }
    }

}

cargarDatos();

// Ejericio para la próxima sesión:
// Ahora que guardamos datos en una cookie y los extraemos al cargar,
// "renderiza"  los elementos HTML para mostrar al usuario