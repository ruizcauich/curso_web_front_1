
function dibujarLinea(ctx, color, xInicial, yInicial, xFinal, yFinal){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xInicial, yInicial);
    ctx.lineTo(xFinal, yFinal);
    ctx.closePath();
    ctx.stroke();
}
