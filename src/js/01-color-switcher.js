const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
let timerId = null;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true
    document.body.style.backgroundColor = getRandomHexColor()

    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()

    }, 1000)
    
})

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false
    clearInterval(timerId)
})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }