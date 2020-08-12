// El peso de una persona está dada por la fórmula:
// P = m*g (Peso igual a masa por gravedad), y es medido en 
// Newtons

// Vamos a investigar cuánto pesamos aqui en la Tierra,
// la Luna, Marte, y Plutón

const gTierra = 9.8;
const gLuna = 1.62;
const gMarte = 3.71;
const gPluton = 0.81


let miMasa = prompt("Cuál es tu masa en Kg?");
miMasa = parseInt(miMasa);

alert(
    "Pesas: " + (miMasa*gTierra) + " en la tierra.\n" + 
    (miMasa*gLuna) + " Newton en la Luna\n" + 
    (miMasa*gMarte) + " Newton en Marte\n" + 
    (miMasa*gPluton) + " Newton en Plutón."
);
