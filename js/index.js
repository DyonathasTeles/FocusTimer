import { sound } from "./sounds.js"
import { timers } from "./timer.js"
import { controls } from "./controls.js"

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

const Sound = sound()

const timer = timers({ minutesDisplay, secondsDisplay, minutes })

const control = controls({
  soundCoffeeShop,
  soundFireplace,
  soundForest,
  soundRain
})


buttonPlay.addEventListener("click", () => {
  if (minutes == 0) {
    return
  }
  timer.countdown()
  Sound.pressButton()
})

ButtonStop.addEventListener("click", () => {
  timer.updateTimerDisplay(minutes, 0)  
  timer.stop()
  Sound.pressButton()
})

ButtonAdd.addEventListener("click", () => { 
  timer.timerAdd()
})

ButtonDecrement.addEventListener("click", () => {
  timer.timerDecrement()
})


soundRain.addEventListener("click", () => {
  control.rainColor()
  Sound.Rain()
})

soundFireplace.addEventListener("click", () => {
  control.fireplaceColor()
  Sound.fireplace()
})

soundForest.addEventListener("click", () => {
 control.forestColor()
 Sound.Forest()
})

soundCoffeeShop.addEventListener("click", () => {
  control.coffeeColor()
  Sound.Coffee()
})














