function ejecutarAlgoritmo() {
    let h = Math.ceil(parseFloat(document.getElementById('dato1').value));
    let c = 0;
    if (h <= 2) c = h * 5;
    else if (h <= 5) c = 10 + (h - 2) * 4;
    else if (h <= 10) c = 22 + (h - 5) * 3;
    else c = 37 + (h - 10) * 2;
    document.getElementById('res').innerHTML = "Costo: $" + c;
};