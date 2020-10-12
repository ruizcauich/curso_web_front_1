// Query selector permite seleccionar elementos HTML
// tomando como parámetro un string con selectores CSS.
// Esto nos devolverá el primer elemento que concuerde con
// el selector
// let deleteMessageButton = document.querySelector(".delete");
let deleteMessageButtons = document.querySelectorAll(".message .delete");

// NOTIFICACIONES
let deleteNotificationButtons = document.querySelectorAll(".notification .delete");



// deleteMessageButton.addEventListener("click", function(){
//     message.parentNode.parentNode.remove();
// });

deleteMessageButtons.forEach(function(button){
    button.addEventListener("click", function(){
        button.parentNode.parentNode.remove();
    });
});

deleteNotificationButtons.forEach(function(button){
    button.addEventListener("click", function(){
        button.parentNode.remove();
    })
});


// MODALES
// El codigo siguiente tiene una limitante, se maneja por medio de ids
// let botonOpenModal = document.getElementById("openModal")
// let modal = document.getElementById("miModal");
let closeModalButtons = document.querySelectorAll(".modal-close")

// Si queremos modularizar y usar el mismó código
// debemos saber cómo identificar al modal que quiere
// se debe abrir al dar click con algún botón, lo mismo para identificar
// cada botón que tiene como objetivo abrir un modal

// Los atributos personalizados (data-atributo), permiten establecer
// valores que podemos usar para para diferentes fines: identificar acciones,
// identificar el objetivo de una acción, etc.
// elejimos data-toggle para saber que el boton debe hacer un toggle
// y cmo valor modal para saber que esta acción se debe llevar a cabo en
// un modal
let openModalButtons = document.querySelectorAll("[data-toggle=modal]");

openModalButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // Debemos saber sobre qué modal, usemos de nuevo
        // los atributos personalizados, tenemos acceso a estos
        // por medio del objeto .dataset
        let target = button.dataset["target"];
        let modal = document.querySelector(target);
        modal.classList.add("is-active")
    })
})

// botonOpenModal.addEventListener("click", function(){
//     modal.classList.add("is-active");
// })

closeModalButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(button.parentElement.classList)
        button.parentElement.classList.remove("is-active");
    });
});


