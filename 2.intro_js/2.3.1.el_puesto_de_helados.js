// Un cono de helado en un puesto de helados, tiene un costo de 20 pesos.
// Si el cliente quiere agregarle algún topping el precio aumenta según
// el dulce elegido.
// Pregunta al cliente si desea agregar un topping, y luego permitele seleccionar.
// Al final muestrale el total de su helado.

// El helado sin topping cuesta $20.
//     • El topping de oreo cuesta $3.50
//     • El topping de KitKat cuesta $3.50
//     • El topping de bubulubu cuesta $5
//     • El topping de M&M’s cuesta $4


let total = 20

let deseaTopping = confirm("Desea agregar un topping a su cono?");

if (deseaTopping) {
    let topping = prompt("¿Qué topping desea agregar?\nOreo\nKitKat\nBubulubu\nM&M's");
    if(topping=='KitKat' || topping=='Oreo'){
        total +=3.5;
    }else if(topping=='Bubulubu'){
        total += 5;
    }else if(topping == "M&M's"){
        total += 4;
    }else{
        alert("Lo sentimos, no contamos con esa opción :(");
    }
}
alert("El total de su compra es de " + total);
