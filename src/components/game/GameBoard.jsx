import { motion, AnimatePresence } from 'framer-motion'
import ChoiceCard from '../common/ChoiceCard'
import { useGame } from '../../context/GameContext'
import { getResultMessage } from '../../utils/gameLogic'

const GameBoard = () => {
  const {
    playerChoice,
    computerChoice,
    result,
    gameStarted,
    gameEnded,
    handleChoice,
  } = useGame()

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
      <AnimatePresence>
        {!gameEnded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center space-x-4 md:space-x-12 mb-8">
              <ChoiceCard
                choice="ROCK"
                onClick={handleChoice}
                disabled={!gameStarted || gameEnded}
                isActive={playerChoice === 'ROCK'}
                isWinner={result === 'player' && playerChoice === 'ROCK'}
              />
              <ChoiceCard
                choice="PAPER"
                onClick={handleChoice}
                disabled={!gameStarted || gameEnded}
                isActive={playerChoice === 'PAPER'}
                isWinner={result === 'player' && playerChoice === 'PAPER'}
              />
              <ChoiceCard
                choice="SCISSORS"
                onClick={handleChoice}
                disabled={!gameStarted || gameEnded}
                isActive={playerChoice === 'SCISSORS'}
                isWinner={result === 'player' && playerChoice === 'SCISSORS'}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {playerChoice && computerChoice && !gameEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-center">
                <div className="text-xl font-semibold text-white">You chose</div>
                <div className="mt-2">
                  <ChoiceCard
                    choice={playerChoice}
                    onClick={() => {}}
                    disabled
                    isWinner={result === 'player'}
                  />
                </div>
              </div>
              
              <div className="text-3xl font-bold text-white mx-4">VS</div>
              
              <div className="text-center">
                <div className="text-xl font-semibold text-white">System chose</div>
                <div className="mt-2">
                  <ChoiceCard
                    choice={computerChoice}
                    onClick={() => {}}
                    disabled
                    isWinner={result === 'computer'}
                  />
                </div>
              </div>
            </div>

            <div className={`text-center text-2xl font-bold ${
              result === 'player' ? 'text-green-400' : 
              result === 'computer' ? 'text-red-400' : 'text-yellow-400'
            }`}>
              {getResultMessage(playerChoice, computerChoice, result)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GameBoard