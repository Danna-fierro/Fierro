function ejecutarAlgoritmo() {
    let a = parseInt(document.getElementById('dato1').value);
    let b = (a > 5) ? 1000 : a * 100;
    document.getElementById('res').innerHTML = "Bono: $" + b;
};