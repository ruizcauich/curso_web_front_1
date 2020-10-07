// Query selector permite seleccionar elementos HTML
// tomando como parámetro un string con selectores CSS.
// Esto nos devolverá el primer elemento que concuerde con
// el selector
// let deleteMessageButton = document.querySelector(".delete");
let deleteMessageButtons = document.querySelectorAll(".message .delete");

// NOTIFICACIONES
let deleteNotificationButtons = document.querySelectorAll(".notification .delete");

// MODALES
let botonOpenModal = document.getElementById("openModal")
let modal = document.getElementById("miModal");
let closeModalButton = document.querySelector(".modal-close")


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

botonOpenModal.addEventListener("click", function(){
    modal.classList.add("is-active");
})

closeModalButton.addEventListener("click", function(){
    modal.classList.remove("is-active");
})
