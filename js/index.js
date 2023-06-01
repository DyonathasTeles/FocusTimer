const ButtonAdd = document.querySelector(".add")
const ButtonDecrement = document.querySelector(".remove")
const buttonPlay = document.querySelector(".play")
const ButtonStop = document.querySelector(".stop")

const soundForest = document.querySelector(".forest")
const soundRain = document.querySelector(".rain")
const soundCoffeeShop = document.querySelector(".coffeeShop")
const soundFireplace = document.querySelector(".fireplace")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut


// Todas as Function 

function timerAdd() {

  minutes = minutes + 5
  updateTimerDisplay(minutes, 0)
}

function timerDecrement () {

  if (minutes == 0) {
    return
  }
  
minutes = minutes - 5

  updateTimerDisplay(minutes, 0)
}

function resetColorButtons() {
soundCoffeeShop.classList.remove("soundOn")
soundForest.classList.remove("soundOn")
soundFireplace.classList.remove("soundOn")
soundRain.classList.remove("soundOn")
}

function updateTimerDisplay(minutes, seconds) {
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
  minutesDisplay.textContent = String(minutes).padStart(2,"0")
}

function countdown() {
    timerTimeOut = setTimeout(() => {
    let minutes = minutesDisplay.textContent
    let seconds = secondsDisplay.textContent

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 10
      --minutes
    }

    updateTimerDisplay(minutes, String( seconds - 1 ))

    countdown()
  }, 1000)
}

// Buttons dos controles do site

buttonPlay.addEventListener("click", () => {
  if (minutes == 0) {
    return
  }
  countdown()
})

ButtonStop.addEventListener("click", () => {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
})

ButtonAdd.addEventListener("click", () => {
  timerAdd()
})

ButtonDecrement.addEventListener("click", () => {
  timerDecrement()
})

// Buttons de som do site

soundRain.addEventListener("click", () => {
  resetColorButtons()
  soundRain.classList.add("soundOn")
})

soundFireplace.addEventListener("click", () => {
  resetColorButtons()
soundFireplace.classList.add("soundOn")
})

soundForest.addEventListener("click", () => {
  resetColorButtons()
soundForest.classList.add("soundOn")
})

soundCoffeeShop.addEventListener("click", () => {
  resetColorButtons()
soundCoffeeShop.classList.add("soundOn")
})














