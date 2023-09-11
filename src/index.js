document.getElementById("botonCalcular").addEventListener("click", function() {
    var costoC = Number(document.getElementById("costo").value);
    var porcentajeP = Number(document.getElementById("porcentaje").value);

    var propina = (costoC * (porcentajeP*0.01));
    var totalPagar = costoC + propina;

    // Asigna valores al span 
    document.getElementById("resultadoPropina").textContent = propina; //toFixed redondea a 2 decimales
    document.getElementById("resultadoTotal").textContent = totalPagar;

    // Asigna valores al span en la ventana emergente
    document.getElementById("compraVentana").textContent = costoC;
    document.getElementById("porcentajeVentana").textContent = porcentajeP;
    document.getElementById("resultadoPropinaVentana").textContent = propina.toFixed(2);
    document.getElementById("resultadoTotalVentana").textContent = totalPagar.toFixed(2);
});
