
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form')
const firstDelay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault()

  setTimeout(() => {
    for (let i = 1; i <= amount.value; i += 1) {
      createPromise(i,  i * Number(step.value))
        .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        })
    }
  formEl.reset();

  }, firstDelay.value)
})




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
       reject({ position, delay });
  }
}, delay)
  })

  return promise

}
