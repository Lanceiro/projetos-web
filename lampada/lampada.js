const button = document.querySelector('button#b-button');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "img/ligada.jpg";
        button.innerHTML = `Desligar`;
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "img/desligada.jpg";
        button.innerHTML = `Ligar`;
    }
}

function turnOnOff() {
    if (!isLampBroken() && button.innerHTML == `Desligar`) {
        lampOff();
        button.innerHTML = `Ligar`;
    } else if (!isLampBroken()) { // button.innerHTML == `Ligar`
        lampOn();
        button.innerHTML = `Desligar`;
    }
}

function lampBroken() {
    lamp.src = "img/quebrada.jpg";
}


button.addEventListener('click', turnOnOff);
lamp.addEventListener('dblclick', lampBroken);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);



