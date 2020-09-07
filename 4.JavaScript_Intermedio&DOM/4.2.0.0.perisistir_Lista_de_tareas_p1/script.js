let lista = document.getElementById("listaDeTareas");
let botonAgregarTarea = document.getElementById("botonAgregarTarea");
let inputTareaNueva = document.getElementById("nuevaTarea")

// Los arrays permiten mantener una coleccion de diferentes valores
// accesibles por medio de un índice. También podemos realizar otras
// operaciones con ellos como filtrado.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/colecciones_indexadas
let arrayDeTareas = [];

// Reaccionamos al clic
botonAgregarTarea.addEventListener("click", agregarTareaALista);


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
    
    // Find recibe una función, en este caso un ARROW FUNCTION.
    // En este caso la función retorna el valor de la comparación de
    // igualdad entre la descripción y el innerText del elemento
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

    // let tareaPorEliminar = arrayDeTareas.find( (tarea)=> tarea.descripcion==event.target.innerText );
    // find retorna el elemento, pero para elminar usamos el método splice, que espera un índice
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

    // Creamos un objeto con un inicializador (un literal)
    // Un objeto es una colección de propiedades, y una propiedad es
    // una asociación entre un nombre (o clave) y un valor.
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos
    let tarea = {
        'descripcion': inputTareaNueva.value,
        'realizado' :  false
    };

    // lo ponemos en el array
    arrayDeTareas.push(tarea);

    lista.appendChild(item);

    // El oyente es un clousure, hace uso de la variable
    // item definida en esta función.
    item.addEventListener("click", function () {
        item.style.backgroundColor = "#A3E293";
        // Tarea es accesible dentro del clousure, y como hace referencia
        // también al objeto en el arreglo, cambiando aqui, se cambia en el
        // arreglo también
        tarea.realizado = true;
    })

    inputTareaNueva.value = "";
}

inputTareaNueva.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) 
        agregarTareaALista();
    
});
