function ejecutarAlgoritmo() {
    let n1 = document.getElementById('nom1').value, e1 = parseInt(document.getElementById('ed1').value);
    let n2 = document.getElementById('nom2').value, e2 = parseInt(document.getElementById('ed2').value);
    let n3 = document.getElementById('nom3').value, e3 = parseInt(document.getElementById('ed3').value);
    let mNom = n1, mEd = e1;
    if (e2 < mEd) { mNom = n2; mEd = e2; }
    if (e3 < mEd) { mNom = n3; mEd = e3; }
    document.getElementById('res').innerHTML = "Menor: " + mNom + " (" + mEd + " años)";
};