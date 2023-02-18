let homeScore = 0
let guestScore = 0
const displayHome = document.getElementById('display-home')
const displayGuest = document.getElementById('display-guest')

function increaseHomeScoreBy(points) {
  homeScore += points
  displayHome.textContent = homeScore
}

function increaseGuestScoreBy(points) {
  guestScore += points
  displayGuest.textContent = guestScore
}
