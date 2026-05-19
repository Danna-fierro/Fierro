function ejecutarAlgoritmo() {
    let ant = parseFloat(document.getElementById('dato1').value);
    let sueldo = parseFloat(document.getElementById('dato2').value);
    let bA = (ant >= 5) ? sueldo * 0.3 : (ant > 2) ? sueldo * 0.2 : 0;
    let bS = (sueldo <= 1000) ? sueldo * 0.25 : (sueldo <= 3500) ? sueldo * 0.15 : sueldo * 0.10;
    let final = Math.max(bA, bS);
    document.getElementById('res').innerHTML = "Bono asignado: $" + final;
};