# Persistiendo la Lista de Tareas (cookies)

Recordemos que las conexiones entre un cliente y un servidor no mantienen su estado; cuando el servidor responde, la conexión es cerrada y los datos sobre el usuario se pierden.
Por ello las cookies se inventaron: como una forma de recordar la información del usuario; así la siguiente vez que se realice una petición las cookies son incluidas y de esta manera el servidor tiene la información necesaria para hacer su trabajo.

Algunos datos importantes relacionados a este mecanismo son:

- **document.cookie** es una cadena que contiene una lista de todas las cookies separadas por punto y coma.
- Cada cookie se representa con un par **clave=valor**
- **clave** y **valor** pueden estar rodeados de espacios en blanco (incluso tabulaciones)
- Por defecto las cookies son borradas al cerrar el navegador
- Para persistir una cookie después de cerrar el navegador se puede especificar **max-age** y **expires** para establecer: **tiempo de duración en segundos**, para la primera o **fecha en formato GMTString** para la segunda.
- No se permiten espacios en blanco, comas, punto y coma o caracteres especiales como valor de la cookie; emplea **encodeURIComponent()** para evaluar y obtener una cadena válida.

Enlaces:

1. [https://www.w3schools.com/js/js_cookies.asp](https://www.w3schools.com/js/js_cookies.asp)
2. [https://developer.mozilla.org/es/docs/DOM/document.cookie](https://developer.mozilla.org/es/docs/DOM/document.cookie)
