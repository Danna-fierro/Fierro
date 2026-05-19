function ejecutarAlgoritmo() {
    let horas = parseFloat(document.getElementById('dato1').value);
    let pago = parseFloat(document.getElementById('dato2').value);
    let sueldo = (horas <= 40) ? (horas * pago) : (40 * pago) + ((horas - 40) * pago * 2);
    document.getElementById('res').innerHTML = "Sueldo Semanal: $" + sueldo;
};