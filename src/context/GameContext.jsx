// GameContext.jsx
import React from 'react'
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
  const [gameSaved, setGameSaved] = useState(false) // Track if game has been saved

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
    setGameSaved(false) // Reset saved state when new game starts
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

  const handleGameEnd = React.useCallback((endedEarly = false) => {
    if (!gameStarted || gameSaved) return;
    
    // Immediately set gameSaved to prevent duplicates
    setGameSaved(true);
    
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000);
    const actualDuration = Math.min(duration, DEFAULT_GAME_TIME);
    
    const gameResult = playerScore > computerScore ? 'Win' : 
                      computerScore > playerScore ? 'Lose' : 'Draw';
    
    if (round > 0) {
      const gameData = {
        result: gameResult,
        playerScore,
        computerScore,
        rounds: round,
        timestamp: new Date().toISOString(),
        duration: actualDuration,
        endedEarly
      };

      saveGameToLocalStorage(gameData);
      setGameHistory(prev => [gameData, ...prev]);
    }

    setGameEnded(true);
    setGameStarted(false);
  }, [gameStarted, gameSaved, startTime, playerScore, computerScore, round]);

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
    setGameSaved(false)
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