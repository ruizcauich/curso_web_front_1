# Persistiendo la Lista de Tareas (Local Storage)

Hemos visto hasta el momento cómo emplear JavaScript para manipular la información de las
tareas y convertirlas a un formato válido para almacenarlas por 24 horas usando cookies;
en el proceso hemos visto algunos inconvenientes, los explicamos y aprendimos a resolverlos.

A parte, hemos visto como obtener los datos de una cookie, y cómo renderizar un LI por cada
tarea, creando una función reutilizable en el proceso.

Ahora es turno de ver otra forma de almacenar información usando **web storage**: esta
herramienta presenta unas ventajas respecto a las cookies:

1. Se trabaja con una API más intuitiva

2. La información no es enviada al servidor (es más seguro)

La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave/valor, de una forma mucho más intuitiva que utilizando cookies. (Mozzila MDN)

Existen **dos objetos relacionados** al almacenamiento web:

* localStorage: Los datos no tienen tiempo de expiración (es el que emplearemos)

* sessionStorage: Los datos se borran al cerrar la pestaña del navegador

Enlaces:

1. [https://www.w3schools.com/html/html5_webstorage.asp](https://www.w3schools.com/html/html5_webstorage.asp)

2. [https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web/Usando_la_API_de_almacenamiento_web](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web/Usando_la_API_de_almacenamiento_web)
