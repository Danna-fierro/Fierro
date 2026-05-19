function ejecutarAlgoritmo() {
    let edad = parseInt(document.getElementById('dato1').value);
    let res = document.getElementById('res');
    res.innerHTML = (edad >= 18) ? "Resultado: Puede votar" : "Resultado: No puede votar";
};