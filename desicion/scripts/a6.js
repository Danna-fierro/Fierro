function ejecutarAlgoritmo() {
    let p = parseFloat(document.getElementById('dato1').value);
    let d = (p >= 200) ? 0.15 : (p > 100) ? 0.12 : 0.10;
    let desc = p * d;
    document.getElementById('res').innerHTML = "Costo: $" + (p - desc) + " (Desc: $" + desc + ")";
};