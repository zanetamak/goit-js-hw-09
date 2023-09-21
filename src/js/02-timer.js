'use strict';
// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const date = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
// czasem kilka elementów w bloku moze mieć np data-start dlatego warto zawęzić wyszukiwanie elementu
const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');

let chosenDate = null;
//const options (bez const pickedDate) było gotowe do dodawnia z dokumentacji
const options = { // opcje do interaktywnego elementu wyboru daty i czasu
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(), // ustawienie na aktualny czas i date
  minuteIncrement: 1, // wybor czasu co do minuty
  onClose(selectedDates) {
    const pickedDate = selectedDates[0];
    if (pickedDate > new Date()) {
      chosenDate = pickedDate;
        btn.disabled = false;
         startCount();
    } else {
        Notiflix.Notify.failure('Please choose a date in the future');
        // część biblioteki Notiflix, która służy do wyświetlania powiadomień (komunikatów) 
        // tutaj używane do wyświetlenia powiadomienia o rodzaju "błąd" (failure) =
        // użytkownik wykonał nieprawidłowy wybór daty.
        btn.disabled = true;
    }
  },
};

  flatpickr(date, options)  

// gotowe do dodawnia z dokumentacji
function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// konwertowanie wartości na łańcuch znaków i użycie padStart do dodawania wiodącego zera (01 zamiast 1) 
function addLeadingZero(value) {
    return value.toString().padStart(2, 0) //pamiętać, ze kropka oddziela obiekt od metody
} //  wywołuje metodę toString na zmiennej value, konwertując ją na łańcuch znaków.

let pickedDate = 0;

const startCount = () => {
  if (pickedDate) {
    clearInterval(pickedDate);
  }
  pickedDate = setInterval(() => {
    const actualTime = new Date();
    const difference = chosenDate - actualTime; // sprawdzam czy róznica czasu jest ujemna

    if (difference <= 0) {
      clearInterval(pickedDate); //sprawdzam czy róznica czasu jest ujemna. jeśli tak to zatrzymanie odliczania (odpowiada za to pickedDate). return kończy działanie 'startCount'
      return;
    }
    const objectTime = convertMs(difference);

    daysData.textContent = addLeadingZero(objectTime.days);
    hoursData.textContent = addLeadingZero(objectTime.hours);
    minutesData.textContent = addLeadingZero(objectTime.minutes);
    secondsData.textContent = addLeadingZero(objectTime.seconds);
  }, 1000);
};

btn.addEventListener('click', startCount);