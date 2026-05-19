function ejecutarAlgoritmo() {
    let p = parseFloat(document.getElementById('dato1').value);
    let r = (p <= 10) ? "Tarjeta" : (p <= 100) ? "Chocolates" : (p <= 250) ? "Flores" : "Anillo";
    document.getElementById('res').innerHTML = "Regalo: " + r;
};