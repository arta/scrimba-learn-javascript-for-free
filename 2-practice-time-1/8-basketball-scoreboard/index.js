let homeScore = 0
let guestScore = 0
const displayHome = document.getElementById('display-home')
const displayGuest = document.getElementById('display-guest')
const resetScores = document.getElementById('btn-reset')

function reset() {
  increaseHomeScoreBy(homeScore * (-1))
  increaseGuestScoreBy(guestScore * (-1))
}

function score(team, points) {
  if (team == 'home') increaseHomeScoreBy(points)
  if (team == 'guest') increaseGuestScoreBy(points)
}

function increaseHomeScoreBy(points) {
  homeScore += points
  displayHome.textContent = homeScore
}

function increaseGuestScoreBy(points) {
  guestScore += points
  displayGuest.textContent = guestScore
}
