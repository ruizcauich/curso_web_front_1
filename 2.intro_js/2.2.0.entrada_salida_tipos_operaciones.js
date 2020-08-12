// declaración y asignación de variables
var mensaje = "Bienvenido!"

// constantes
const pi = 3.1416

// una variable puede ser modificada, incluso 
// con un tipo diferente
mensaje = 45
mensaje = "Bienvenido a esta página!"

// intentar modifcar una constante nos lleva a un error
pi = 10.34

// Salida por consola, log, error, y advertencia
console.log(mensaje)
console.error(mensaje)
console.warn(mensaje)

// entrada de datos por medio de prompt
var numero = prompt("Ingresa un número entero")

/* prompt siempre retorna una cadena de texto
 parseInt permite convertir cadenas de texto que representen
 números a enteros, u otro tipo de datos numéricos a enteros */
var numero = parseInt(numero)

// Salida de datos fuera de consola ALERT
alert("Tu número es: " + numero)


// Entrada de confirmación
var continuar = confirm("¿Desea continuar con la operación?")

/* OPERADORES:
    Nos permite realizar diversas operaciones con los datos, por lo 
    que tenemos diferentes tipos de operadores:
*/

// OPERADORES ARITMÉTICOS: Operaciones aritméticas
// suma, resta, multiplicación, división, módulo, exponenciación
//  +      -         *             /        %         **
console.log("numero + 2: " + (numero + 2))
console.log("El operador + aplicado une" + " cadenas")
console.log("numero - 2: " + (numero - 2))
console.log("numero * 2: " + (numero * 2))
console.log("numero / 2: " + (numero / 2))
console.log("numero % 2: " + (numero % 2))
console.log("numero ** 2: " +( numero ** 2))

// OPERADORES COMPARATIVOS: Permiten comparar los valores de las variables
// igualdad, desigualdad, mayor que, menor que, mayor o igual, menor o igual, igualdad / desigualdadestricta
//    ==         !=           >          <           >=            <=               ===    !==

// si 'numero' fuera de un tipo distinto, JS intentará convertir el dato
console.log("numero == 4: " + (numero == 4)) // "4" == 4 devolverá true
console.log("numero != 4: " + (numero != 4))
console.log("numero > 4: " + (numero > 4))
console.log("numero < 4: " + (numero < 4))
console.log("numero >= 4: " + (numero >= 4))
console.log("numero <= 4: " + (numero <= 4))
// JavaSciprt compara tipo de dato y valor
console.log("numero === '4': " + (numero === "4")) // 4 === "4" devolverá false
console.log("numero !== '4': " + (numero !== "4")) // 4 !== "4" devolverá true

// OPERADORES LÓGICOS: usados con valores booleanos (true o false)
// y lógico,    o lógico,   negación
//    &&           ||          !
console.log("true && true: " + (true && true))      // true
console.log("true && false: " + (true && false))     // false
console.log("true || false: " + (true || false))     // true
console.log("!(true && false): " + !(true && false))  // !(false) => true


// PARA SABER MÁS SOBRE OPERADORES, REVISA EL SIGUIENTE ENLACE:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators