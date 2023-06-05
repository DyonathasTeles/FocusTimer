import { sound } from "./sounds.js"

export function timers({
minutesDisplay,
secondsDisplay,
minutes
}){

  
  let timerTimeOut

      function countdown() {
          timerTimeOut = setTimeout(() => {
          let minutes = minutesDisplay.textContent
          let seconds = secondsDisplay.textContent
      
          updateTimerDisplay(minutes, 0)
      
          if (minutes <= 0 && seconds <= 0) {
            return sound().KitchenTimer() 
          }
      
          if (seconds <= 0) {
            seconds = 60
            --minutes
          }
      
          updateTimerDisplay(minutes, String( seconds - 1 ))
      
          countdown()
        }, 1000)
      }

    function updateTimerDisplay(minutes, seconds) {
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
        minutesDisplay.textContent = String(minutes).padStart(2,"0")
      }
      
      function timerDecrement () {

        if (minutes == 0) {
          return
        }
        
        minutes = minutes - 5
      
        updateTimerDisplay(minutes, 0)
      }

      function timerAdd() {

        minutes = minutes + 5
        updateTimerDisplay(minutes, 0)
      }

      function stop() {
        clearTimeout(timerTimeOut)
      }

    return {
        countdown,
        updateTimerDisplay,
        timerAdd,
        timerDecrement,
        stop
    }
    
}