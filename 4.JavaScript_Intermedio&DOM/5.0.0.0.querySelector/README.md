# Localizando elementos del DOM usando selectores CSS

Hasta este momento hemos empleado únicamente el método **getElementById** de **document** para localizar los elementos del DOM.

Ahora aprenderemos a usar un método más flexible para localizar elementos, esto, usando **selectores CSS**.

Se trata del método **querySelector**, este método retorna el elemento, descendiente de aquel sobre el cual se ejecute, que coincidan con el o los selectores que se le proporcionan a manera de una cadena de caracteres.

Ejemplo:

    // retorna el input de tipo text que se encuentra en el div con clase form
    // que a la vez es descendiente de document
    document.querySelector(“div.form input[type=text]”);

**querySelector** únicamente retornará el primer elemento que coincida con los selectores; para obtener todos los elementos coincidentes, emplea **querySelectorAll**.

Enlaces:

1. [https://developer.mozilla.org/es/docs/Web/API/Document/querySelector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)
2. [https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)
