import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datePicker = document.querySelector('input#datetime-picker')

const startBtn = document.querySelector('button[data-start]')

startBtn.disabled = true

document.body.addEventListener("click", () => {
    Notiflix.Notify.failure('Please choose a date in the future')
})

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };





flatpickr(datePicker, options);