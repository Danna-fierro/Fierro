function ejecutarAlgoritmo() {
    let p = parseFloat(document.getElementById('dato1').value); // Presupuesto
    let km = parseFloat(document.getElementById('dato2').value); // Costo por KM
    let destinos = [["Cancún", 1800], ["Acapulco", 1200], ["P.V.", 800], ["México", 750]];
    let viaje = "Quedarse en casa, dinero insuficiente";
    for (let d of destinos) {
        if ((d[1] * km * 2) <= p) { viaje = d[0]; break; }
    }
    document.getElementById('res').innerHTML = "Lugar: " + viaje;
};