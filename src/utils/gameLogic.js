import { CHOICES, RESULTS } from './constants'

export const getRandomChoice = () => {
  const choices = Object.values(CHOICES)
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

export const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return RESULTS.DRAW
  }

  if (
    (playerChoice === CHOICES.ROCK && computerChoice === CHOICES.SCISSORS) ||
    (playerChoice === CHOICES.PAPER && computerChoice === CHOICES.ROCK) ||
    (playerChoice === CHOICES.SCISSORS && computerChoice === CHOICES.PAPER)
  ) {
    return RESULTS.PLAYER
  }

  return RESULTS.COMPUTER
}

export const getResultMessage = (playerChoice, computerChoice, result) => {
  if (result === RESULTS.DRAW) return `Both chose ${playerChoice}. It's a draw!`
  
  if (result === RESULTS.PLAYER) {
    if (playerChoice === CHOICES.ROCK && computerChoice === CHOICES.SCISSORS) 
      return 'Rock crushes scissors! You win! 🎉'
    if (playerChoice === CHOICES.PAPER && computerChoice === CHOICES.ROCK) 
      return 'Paper covers rock! You win! 🎉'
    if (playerChoice === CHOICES.SCISSORS && computerChoice === CHOICES.PAPER) 
      return 'Scissors cut paper! You win! 🎉'
  } else {
    if (computerChoice === CHOICES.ROCK && playerChoice === CHOICES.SCISSORS) 
      return 'Rock crushes scissors! You lose! 😢'
    if (computerChoice === CHOICES.PAPER && playerChoice === CHOICES.ROCK) 
      return 'Paper covers rock! You lose! 😢'
    if (computerChoice === CHOICES.SCISSORS && playerChoice === CHOICES.PAPER) 
      return 'Scissors cut paper! You lose! 😢'
  }
  
  return ''
}