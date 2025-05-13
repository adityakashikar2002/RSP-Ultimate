const GAME_STORAGE_KEY = 'rpsUltimateGames'

export const saveGameToLocalStorage = (gameData) => {
  const games = JSON.parse(localStorage.getItem(GAME_STORAGE_KEY)) || []
  // Keep only the last 50 games to prevent storage bloat
  const updatedGames = [gameData, ...games].slice(0, 50)
  localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(updatedGames))
}

export const getGamesFromLocalStorage = () => {
  const games = JSON.parse(localStorage.getItem(GAME_STORAGE_KEY)) || []
  // Sort by timestamp (newest first)
  return games.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
}

export const clearGameHistory = () => {
  localStorage.removeItem(GAME_STORAGE_KEY)
}

export const getWinRate = () => {
  const games = getGamesFromLocalStorage()
  if (games.length === 0) return 0
  
  const wins = games.filter(game => game.result === 'Win').length
  return Math.round((wins / games.length) * 100)
}