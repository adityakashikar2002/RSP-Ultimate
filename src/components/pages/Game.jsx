// import { useEffect, useState } from 'react'
// import { useGame } from '../../context/GameContext'
// import GameHeader from '../game/GameHeader'
// import GameBoard from '../game/GameBoard'
// import Timer from '../game/Timer'
// import GameResult from '../game/GameResult'
// import Button from '../common/Button'
// import Confetti from '../common/Confetti';

// const Game = () => {
//   const {
//     gameStarted,
//     gameEnded,
//     startGame,
//     handleGameEnd,
//     newGame,
//     setShowRules,
//     playerScore,
//     computerScore,
//     timeLeft, // We need to access timeLeft to pass initialTime
//     setTimeLeft, // We might need to reset timeLeft here as well
//   } = useGame()

//   const [timerResetKey, setTimerResetKey] = useState(0);

//   useEffect(() => {
//     document.title = 'Play Game | Rock Paper Scissors Ultimate'
//   }, [])

//   const getResult = () => {
//     if (playerScore > computerScore) return 'player';
//     if (computerScore > playerScore) return 'computer';
//     return 'draw';
//   }

//   const handleStartGame = () => {
//     startGame();
//     setTimerResetKey(prev => prev + 1); // Trigger timer reset
//     setTimeLeft(60); // Or your default time in GameContext
//   };

//   const handleNewGame = () => {
//     newGame();
//     setTimerResetKey(prev => prev + 1); // Trigger timer reset
//     setTimeLeft(60); // Or your default time in GameContext
//   };

//   return (
//     <section className="min-h-screen bg-game-pattern bg-cover bg-center py-12 px-4">
//       <Confetti active={getResult() === 'player' && gameEnded} />
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-dark/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8">
//           <Timer
//             initialTime={60} // Or use a constant from GameContext if needed
//             onTimeUp={() => handleGameEnd(false)}
//             isRunning={gameStarted && !gameEnded}
//             onEndGame={() => handleGameEnd(true)}
//             resetTrigger={timerResetKey}
//           />

//           <GameHeader />

//           <GameBoard />

//           {gameEnded ? (
//             <GameResult onNewGame={handleNewGame} />
//           ) : (
//             <div className="flex justify-center gap-4 mt-8">
//               {!gameStarted && (
//                 <Button
//                   size="lg"
//                   onClick={handleStartGame}
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


// Game.jsx
import { useEffect, useState } from 'react'
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
    computerScore,
    timeLeft,
    setTimeLeft,
  } = useGame()

  const [timerResetKey, setTimerResetKey] = useState(0);

  useEffect(() => {
    document.title = 'Play Game | Rock Paper Scissors Ultimate'
  }, [])

  const getResult = () => {
    if (playerScore > computerScore) return 'player';
    if (computerScore > playerScore) return 'computer';
    return 'draw';
  }

  const handleStartGame = () => {
    startGame();
    setTimerResetKey(prev => prev + 1);
    setTimeLeft(60);
  };

  const handleNewGame = () => {
    newGame();
    setTimerResetKey(prev => prev + 1);
    setTimeLeft(60);
  };

  return (
    <section className="min-h-screen bg-game-pattern bg-cover bg-center py-12 px-4">
      <Confetti active={getResult() === 'player' && gameEnded} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8">
          <Timer
            initialTime={60}
            onTimeUp={() => handleGameEnd(false)}
            isRunning={gameStarted && !gameEnded}
            onEndGame={() => handleGameEnd(true)}
            resetTrigger={timerResetKey}
          />

          <GameHeader />

          {gameEnded ? (
            <GameResult onNewGame={handleNewGame} />
          ) : (
            <>
              <GameBoard />
              <div className="flex justify-center gap-4 mt-8">
                {!gameStarted && (
                  <Button
                    size="lg"
                    onClick={handleStartGame}
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
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Game