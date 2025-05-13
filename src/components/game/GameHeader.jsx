import { useGame } from '../../context/GameContext'

const GameHeader = () => {
  const { playerScore, computerScore, round } = useGame()

  return (
    <div className="flex justify-between items-center mb-8 bg-dark/80 backdrop-blur-md rounded-2xl p-4 shadow-lg">
      <div className="text-center px-4">
        <h3 className="text-lg font-bold text-light">YOU</h3>
        <div className="text-4xl font-bold text-primary-light">{playerScore}</div>
      </div>
      
      <div className="text-center px-4 border-x border-light/20">
        <h3 className="text-lg font-bold text-light">ROUND</h3>
        <div className="text-4xl font-bold text-accent">{round}</div>
      </div>
      
      <div className="text-center px-4">
        <h3 className="text-lg font-bold text-light">SYSTEM</h3>
        <div className="text-4xl font-bold text-secondary-light">{computerScore}</div>
      </div>
    </div>
  )
}

export default GameHeader