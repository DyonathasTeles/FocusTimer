
export function sound() {

 const coffeeSound = new Audio("./sounds/Cafeteria.wav") 
 const rainSound = new Audio("./sounds/Chuva.wav") 
 const fireplaceSound = new Audio("./sounds/Lareira.wav") 
 const forestSound = new Audio("./sounds/Floresta.wav") 
 const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
 const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

 function togglePlay(audio) {
    return audio.paused ? audio.play() : audio.pause();
  };

 function Coffee() {
    togglePlay(coffeeSound)
    rainSound.pause()
    fireplaceSound.pause()
    forestSound.pause()

    coffeeSound.loop = true
 }

 function Rain() {
    togglePlay(rainSound)

    coffeeSound.pause()
    fireplaceSound.pause()
    forestSound.pause()

    rainSound.loop = true
 }

 function fireplace() {
    togglePlay(fireplaceSound)

    rainSound.pause()
    coffeeSound.pause()
    forestSound.pause()

    fireplaceSound.loop = true
 }

 function Forest() {
    togglePlay(forestSound)

    rainSound.pause()
    fireplaceSound.pause()
    coffeeSound.pause()

    forestSound.loop = true
 }

 function pressButton() {
    buttonPressAudio.play()
 }

 function KitchenTimer() {
    kitchenTimer.play()
 }

    return {
        Coffee,
        fireplace,
        Forest,
        Rain,
        pressButton,
        KitchenTimer
    }
}