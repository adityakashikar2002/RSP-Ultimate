import { useGame as useGameContext } from '../context/GameContext' // Import the useGame hook

const useGame = () => {
  return useGameContext(); // Just return the context from the other hook
}

export default useGame;