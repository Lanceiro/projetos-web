function calcular() {
    let nome = String(document.getElementById('nome').value);
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let result = document.getElementById('result');

    let imc = (peso / (altura**2)).toFixed(2);
    let forma = "";
    if (nome == "" || altura == "" || peso == "") {
        alert('ERROR: Campo(s) vazio(s)!');
    } else {
        if (imc < 16) {
            forma = `Magreza grave`;
        } else if (imc > 16 && imc < 17) {
            forma = `Magreza moderada`;
        } else if (imc > 17 && imc < 18.5) {
            forma = `Magreza leve`;
        } else if (imc > 18,5 && imc < 25) {
            forma = `Saudável`;
        } else if (imc > 25 && imc < 30) {
            forma = `Sobrepeso`;
        } else if (imc > 30 && imc < 35) {
            forma = `Obesidade Grau 1`;
        } else if (imc > 35 && imc < 40) {
            forma = `Obesidade Grau 2 (severa)`;
        } else if (imc >= 40) {
            forma = `Obesidade grau 3 (mórbida)`;
        }
        result.innerHTML = `${nome} seu IMC é ${imc} e você está ${forma}`;
    }
}