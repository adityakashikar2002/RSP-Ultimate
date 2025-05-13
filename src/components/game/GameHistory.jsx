import { motion, AnimatePresence } from 'framer-motion'
import { useGame } from '../../context/GameContext'
import { FaTrophy, FaHistory, FaClock, FaTimes } from 'react-icons/fa'

const GameHistory = () => {
  const { gameHistory, clearHistory } = useGame()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="bg-dark-light/50 backdrop-blur-md rounded-2xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary flex items-center">
          <FaHistory className="mr-2" /> Game History
        </h2>
        {gameHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-red-400 hover:text-red-300 flex items-center text-sm"
          >
            <FaTimes className="mr-1" /> Clear All
          </button>
        )}
      </div>

      {gameHistory.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-light/50 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-light mb-2">
            No games played yet
          </h3>
          <p className="text-light/70">
            Your game history will appear here after you play
          </p>
        </div>
      ) : (
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-3 max-h-[500px] overflow-y-auto pr-2"
        >
          <AnimatePresence>
            {gameHistory.map((game, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: 'spring', damping: 20 }}
                className={`bg-dark/70 rounded-xl p-4 shadow-md border-l-4 ${
                  game.result === 'Win'
                    ? 'border-green-500'
                    : game.result === 'Lose'
                    ? 'border-red-500'
                    : 'border-yellow-500'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-1">
                      {game.result === 'Win' && (
                        <FaTrophy className="text-yellow-400 mr-2" />
                      )}
                      <span
                        className={`font-bold ${
                          game.result === 'Win'
                            ? 'text-green-400'
                            : game.result === 'Lose'
                            ? 'text-red-400'
                            : 'text-yellow-400'
                        }`}
                      >
                        {game.result}
                        {game.endedEarly && (
                          <span className="text-xs text-light/50 ml-1">
                            (ended early)
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="text-light text-sm mb-1">
                      <span className="font-medium">Score:</span> You{' '}
                      <span className="text-primary-light">{game.playerScore}</span> -{' '}
                      <span className="text-secondary-light">
                        {game.computerScore}
                      </span>{' '}
                      System
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-light/70">
                      <div className="flex items-center">
                        <FaClock className="mr-1" />
                        {Math.floor(game.duration / 60)}m {game.duration % 60}s
                      </div>
                      <div>
                        {new Date(game.timestamp).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <div>{game.rounds} rounds</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-light/30">
                    #{index + 1}
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  )
}

export default GameHistory