function ejecutarAlgoritmo() {
    let h = parseFloat(document.getElementById('dato1').value);
    let p = parseFloat(document.getElementById('dato2').value);
    let s = 0;
    if (h > 50) return alert("No permitido");
    if (h <= 40) s = h * p;
    else if (h <= 45) s = (40 * p) + (h - 40) * p * 2;
    else s = (40 * p) + (5 * p * 2) + (h - 45) * p * 3;
    document.getElementById('res').innerHTML = "Sueldo: $" + s;
};