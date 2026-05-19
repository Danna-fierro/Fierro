function ejecutarAlgoritmo() {
    let tipo = document.getElementById('dato1').value; // A o B
    let alcohol = document.getElementById('dato2').checked;
    let lentes = document.getElementById('dato3').checked;
    let enf = document.getElementById('dato4').checked;
    let edad = parseInt(document.getElementById('dato5').value);
    let base = (tipo === 'A') ? 1200 : 950;
    let cargos = 0;
    if (alcohol) cargos += base * 0.1;
    if (lentes) cargos += base * 0.05;
    if (enf) cargos += base * 0.05;
    cargos += (edad > 40) ? base * 0.2 : base * 0.1;
    document.getElementById('res').innerHTML = "Total Póliza: $" + (base + cargos);
};