export function controls ({
    soundCoffeeShop,
    soundFireplace,
    soundForest,
    soundRain
}) {

      function coffeeColor() {
        soundCoffeeShop.classList.toggle("soundOn")
        soundForest.classList.remove("soundOn")
        soundFireplace.classList.remove("soundOn")
        soundRain.classList.remove("soundOn")
        }

      function fireplaceColor() {
        soundFireplace.classList.toggle("soundOn")
        soundCoffeeShop.classList.remove("soundOn")
        soundForest.classList.remove("soundOn")
        soundRain.classList.remove("soundOn")
      }

      function rainColor() {
        soundRain.classList.toggle("soundOn")
        soundCoffeeShop.classList.remove("soundOn")
        soundForest.classList.remove("soundOn")
        soundFireplace.classList.remove("soundOn")
      }

      function forestColor() {
        soundForest.classList.toggle("soundOn")
        soundCoffeeShop.classList.remove("soundOn")
        soundFireplace.classList.remove("soundOn")
        soundRain.classList.remove("soundOn")
      }

      return {
        coffeeColor,
        forestColor,
        rainColor,
        fireplaceColor
      }
}