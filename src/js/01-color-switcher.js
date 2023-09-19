'use strict';
const body = document.querySelector('body');
const bthStart = document.querySelector('button[data-start]');
// czasem kilka elementów w bloku moze mieć np data-start dlatego warto zawęzić wyszukiwanie elementu
const bthStop = document.querySelector('nutton[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

bthStop.disabled = true;

const colorChange = () => {
    body.style.backgroundColor = getRandomHexColor()
};

let timerId = null;

const startChange = () => {
    bthStart.disabled = true;
    bthStop.disabled = false;
        colorChange();
    timerId = setInterval(() => {
        colorChange();
    }, 2000);
};

bthStart.addEventListener('click', startChange);

const stopChange = () => {
    clearInterval(timerId);
    bthStart.disabled = false;
    bthStop.disabled = true;
};

bthStop.addEventListener('click', stopChange);