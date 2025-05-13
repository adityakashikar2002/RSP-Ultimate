import { useEffect } from 'react'
import { useGame } from '../../context/GameContext'
import GameHeader from '../game/GameHeader'
import GameBoard from '../game/GameBoard'
import Timer from '../game/Timer'
import GameResult from '../game/GameResult'
import Button from '../common/Button'
import Confetti from '../common/Confetti';

const Game = () => {
  const {
    gameStarted,
    gameEnded,
    startGame,
    handleGameEnd,
    newGame,
    setShowRules,
    playerScore,
    computerScore
  } = useGame()

  useEffect(() => {
    document.title = 'Play Game | Rock Paper Scissors Ultimate'
  }, [])

  const getResult = () => {
    if (playerScore > computerScore) return 'player';
    if (computerScore > playerScore) return 'computer';
    return 'draw';
  }

  return (
    <section className="min-h-screen bg-game-pattern bg-cover bg-center py-12 px-4">
      <Confetti active={getResult() === 'player' && gameEnded} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8">
          <Timer 
            onTimeUp={() => handleGameEnd(false)} 
            onEndGame={() => handleGameEnd(true)}
          />
          
          <GameHeader />
          
          <GameBoard />
          
          {gameEnded ? (
            <GameResult onNewGame={newGame} />
          ) : (
            <div className="flex justify-center gap-4 mt-8">
              {!gameStarted && (
                <Button
                  size="lg"
                  onClick={startGame}
                  className="shadow-lg"
                >
                  Start Game
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowRules(true)}
                className="shadow-lg"
              >
                Show Rules
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Game

// import { useEffect } from 'react'
// import { useGame } from '../../context/GameContext'
// import GameHeader from '../game/GameHeader'
// import GameBoard from '../game/GameBoard'
// import Timer from '../game/Timer'
// import GameResult from '../game/GameResult'
// import Button from '../common/Button'

// const Game = () => {
//   const {
//     gameStarted,
//     gameEnded,
//     startGame,
//     handleGameEnd,
//     newGame,
//     setShowRules,
//   } = useGame()

//   useEffect(() => {
//     document.title = 'Play Game | Rock Paper Scissors Ultimate'
//   }, [])

//   return (
//     <section className="min-h-screen bg-game py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-dark/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8">
//           <Timer
//             onTimeUp={() => handleGameEnd(false)}
//             onEndGame={() => handleGameEnd(true)}
//           />

//           <GameHeader />

//           <GameBoard />

//           {gameEnded ? (
//             <GameResult onNewGame={newGame} />
//           ) : (
//             <div className="flex justify-center gap-4 mt-8">
//               {!gameStarted && (
//                 <Button
//                   size="lg"
//                   onClick={startGame}
//                   className="shadow-lg"
//                 >
//                   Start Game
//                 </Button>
//               )}
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => setShowRules(true)}
//                 className="shadow-lg"
//               >
//                 Show Rules
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Game
