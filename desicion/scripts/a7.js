function ejecutarAlgoritmo() {
    let ed = parseInt(document.getElementById('dato1').value);
    let prom = parseFloat(document.getElementById('dato2').value);
    let m = "";
    if (ed > 18) {
        m = (prom >= 9) ? "$2000" : (prom >= 7.5) ? "$1000" : (prom >= 6) ? "$500" : "Carta invitación";
    } else {
        m = (prom >= 9) ? "$3000" : (prom >= 8) ? "$2000" : (prom >= 6) ? "$100" : "Carta invitación";
    }
    document.getElementById('res').innerHTML = "Beca: " + m;
};