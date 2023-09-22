'use strict';
import Notiflix from 'notiflix';

const form = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay })
      }
    }, delay);
  });
}

const handleSubmit = event => { // event jako zdarzenie przesłania formularza
  event.preventDefault();
  //event.target to element DOM, który wywoła zdarzenie (tutaj formularz)
  const firstDelay = Number.parseInt(event.target.elements['delay'].value);
  const delayStep = Number.parseInt(event.target.elements['step'].value);
  const amount = Number.parseInt(event.target.elements['amount'].value);

  createPromises(firstDelay, delayStep, amount);
}
  
function createPromises(firstDelay, delayStep, amount) {
  let currentDelay = firstDelay;
  for (let i = 0; i < amount; i++) {
    
    createPromise(i, currentDelay)
      .then(({ position, delay }) => { // then obsługuje tylko pomyślne wykonanie obietnicy
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => { // catch słuzy do wyłapywania błędów
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
     currentDelay += delayStep;
  };
};

form.addEventListener('submit', handleSubmit);