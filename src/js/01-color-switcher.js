'use strict';
const body = document.querySelector('body');
const bthStart = document.querySelector('[data-start]');
const bthStop = document.querySelector('[data-stop]');

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