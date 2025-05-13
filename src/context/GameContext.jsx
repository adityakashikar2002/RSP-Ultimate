// // GameContext.jsx
// import { createContext, useContext, useState, useEffect } from 'react'
// import { saveGameToLocalStorage, getGamesFromLocalStorage, clearGameHistory } from '../utils/storage'
// import { getRandomChoice, determineWinner } from '../utils/gameLogic'

// const GameContext = createContext()

// export const GameProvider = ({ children }) => {
//   const DEFAULT_GAME_TIME = 60 // 60 seconds

//   const [playerScore, setPlayerScore] = useState(0)
//   const [computerScore, setComputerScore] = useState(0)
//   const [playerChoice, setPlayerChoice] = useState(null)
//   const [computerChoice, setComputerChoice] = useState(null)
//   const [result, setResult] = useState(null)
//   const [gameHistory, setGameHistory] = useState([])
//   const [gameStarted, setGameStarted] = useState(false)
//   const [gameEnded, setGameEnded] = useState(false)
//   const [round, setRound] = useState(0)
//   const [timeLeft, setTimeLeft] = useState(DEFAULT_GAME_TIME)
//   const [gameEndTriggered, setGameEndTriggered] = useState(false)
//   const [showRules, setShowRules] = useState(false)

//   useEffect(() => {
//     const savedHistory = getGamesFromLocalStorage()
//     setGameHistory(savedHistory)
//   }, [])

//   const startGame = () => {
//     setPlayerScore(0)
//     setComputerScore(0)
//     setPlayerChoice(null)
//     setComputerChoice(null)
//     setResult(null)
//     setGameStarted(true)
//     setGameEnded(false)
//     setRound(0)
//     setTimeLeft(DEFAULT_GAME_TIME)
//     setGameEndTriggered(false)
//   }

//   const handleChoice = (choice) => {
//     if (!gameStarted || gameEnded) return

//     const compChoice = getRandomChoice()
//     const gameResult = determineWinner(choice, compChoice)

//     setPlayerChoice(choice)
//     setComputerChoice(compChoice)
//     setResult(gameResult)
//     setRound(prev => prev + 1)

//     if (gameResult === 'player') {
//       setPlayerScore(prev => prev + 1)
//     } else if (gameResult === 'computer') {
//       setComputerScore(prev => prev + 1)
//     }
//   }

//   const handleGameEnd = (endedEarly = false) => {
//     if (gameEndTriggered || !gameStarted) return
    
//     setGameEndTriggered(true)
    
//     const gameResult = playerScore > computerScore ? 'Win' : 
//                       computerScore > playerScore ? 'Lose' : 'Draw'
    
//     const gameData = {
//       result: gameResult,
//       playerScore,
//       computerScore,
//       rounds: round,
//       timestamp: new Date().toISOString(),
//       duration: DEFAULT_GAME_TIME - timeLeft,
//       endedEarly
//     }

//     saveGameToLocalStorage(gameData)
//     setGameHistory(prev => [gameData, ...prev])
//     setGameEnded(true)
//     setGameStarted(false)
//   }

//   const newGame = () => {
//     setPlayerScore(0)
//     setComputerScore(0)
//     setPlayerChoice(null)
//     setComputerChoice(null)
//     setResult(null)
//     setGameStarted(false)
//     setGameEnded(false)
//     setRound(0)
//     setGameEndTriggered(false)
//   }

//   const clearHistory = () => {
//     clearGameHistory()
//     setGameHistory([])
//   }

//   return (
//     <GameContext.Provider
//       value={{
//         playerScore,
//         computerScore,
//         playerChoice,
//         computerChoice,
//         result,
//         gameHistory,
//         gameStarted,
//         gameEnded,
//         round,
//         timeLeft,
//         setTimeLeft,
//         showRules,
//         setShowRules,
//         startGame,
//         handleChoice,
//         handleGameEnd,
//         newGame,
//         clearHistory,
//       }}
//     >
//       {children}
//     </GameContext.Provider>
//   )
// }

// export const useGame = () => useContext(GameContext)

// GameContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { saveGameToLocalStorage, getGamesFromLocalStorage, clearGameHistory } from '../utils/storage'
import { getRandomChoice, determineWinner } from '../utils/gameLogic'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const DEFAULT_GAME_TIME = 60 // 60 seconds

  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [gameHistory, setGameHistory] = useState([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [round, setRound] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DEFAULT_GAME_TIME)
  const [startTime, setStartTime] = useState(null)
  const [showRules, setShowRules] = useState(false)

  useEffect(() => {
    const savedHistory = getGamesFromLocalStorage()
    setGameHistory(savedHistory)
  }, [])

  const startGame = () => {
    setPlayerScore(0)
    setComputerScore(0)
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
    setGameStarted(true)
    setGameEnded(false)
    setRound(0)
    setTimeLeft(DEFAULT_GAME_TIME)
    setStartTime(Date.now())
  }

  const handleChoice = (choice) => {
    if (!gameStarted || gameEnded) return

    const compChoice = getRandomChoice()
    const gameResult = determineWinner(choice, compChoice)

    setPlayerChoice(choice)
    setComputerChoice(compChoice)
    setResult(gameResult)
    setRound(prev => prev + 1)

    if (gameResult === 'player') {
      setPlayerScore(prev => prev + 1)
    } else if (gameResult === 'computer') {
      setComputerScore(prev => prev + 1)
    }
  }

  const handleGameEnd = (endedEarly = false) => {
    if (!gameStarted) return
    
    const endTime = Date.now()
    const duration = Math.floor((endTime - startTime) / 1000) // in seconds
    
    const gameResult = playerScore > computerScore ? 'Win' : 
                      computerScore > playerScore ? 'Lose' : 'Draw'
    
    // Don't save empty games (where no rounds were played)
    if (round > 0 || gameResult !== 'Draw') {
      const gameData = {
        result: gameResult,
        playerScore,
        computerScore,
        rounds: round,
        timestamp: new Date().toISOString(),
        duration,
        endedEarly
      }

      saveGameToLocalStorage(gameData)
      setGameHistory(prev => [gameData, ...prev])
    }

    setGameEnded(true)
    setGameStarted(false)
  }

  const newGame = () => {
    setPlayerScore(0)
    setComputerScore(0)
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
    setGameStarted(false)
    setGameEnded(false)
    setRound(0)
    setTimeLeft(DEFAULT_GAME_TIME)
  }

  const clearHistory = () => {
    clearGameHistory()
    setGameHistory([])
  }

  return (
    <GameContext.Provider
      value={{
        playerScore,
        computerScore,
        playerChoice,
        computerChoice,
        result,
        gameHistory,
        gameStarted,
        gameEnded,
        round,
        timeLeft,
        setTimeLeft,
        showRules,
        setShowRules,
        startGame,
        handleChoice,
        handleGameEnd,
        newGame,
        clearHistory,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)