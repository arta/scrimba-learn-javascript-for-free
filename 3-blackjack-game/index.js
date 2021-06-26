let firstCard = 9
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')
let cardsStr = firstCard + ', ' + secondCard

function startGame() {
  cardsEl.textContent = 'Cards: ' + cardsStr
  sumEl.textContent = 'Sum: ' + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }

  messageEl.textContent = message
}

function newCard() {
  // 1. Create a card variable, and hard code its value to a number (2-11)

  // 2. Add the new card to the sum variable

  // 3. Call startGame()
  console.log("Drawing a new card from the deck!")
}
