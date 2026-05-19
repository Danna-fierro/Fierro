function ejecutarAlgoritmo() {
    let n = parseInt(document.getElementById('dato1').value);
    let c = (n > 100) ? 20 : (n >= 50) ? 35 : (n >= 20) ? 40 : 70;
    document.getElementById('res').innerHTML = "Costo por alumno: $" + c + " (Total: $" + (n * c) + ")";
};