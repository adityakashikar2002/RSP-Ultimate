// import { useEffect } from 'react'
// import { useGame } from '../../context/GameContext'

// const Leaderboard = () => {
//   const { gameHistory, clearHistory } = useGame()

//   useEffect(() => {
//     document.title = 'Leaderboard | Rock Paper Scissors Ultimate'
//   }, [])

//   return (
//     <section className="min-h-screen pt-24 pb-12 px-4 bg-dark">
//       <div className="container mx-auto max-w-4xl">
//         <div className="bg-dark-light/50 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex justify-between items-center mb-8">
//               <h1 className="text-3xl font-bold text-primary font-display">
//                 Game History
//               </h1>
//               {gameHistory.length > 0 && (
//                 <button
//                   onClick={clearHistory}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
//                 >
//                   Clear History
//                 </button>
//               )}
//             </div>

//             {gameHistory.length === 0 ? (
//               <div className="text-center py-12">
//                 <div className="text-light/50 mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-16 w-16 mx-auto"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1}
//                       d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-medium text-light mb-2">
//                   No games played yet
//                 </h3>
//                 <p className="text-light/70">
//                   Play some games to see your history here!
//                 </p>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-light/10 text-left">
//                       <th className="pb-4 font-medium text-light/70">Result</th>
//                       <th className="pb-4 font-medium text-light/70">Score</th>
//                       <th className="pb-4 font-medium text-light/70">Rounds</th>
//                       <th className="pb-4 font-medium text-light/70">Duration</th>
//                       <th className="pb-4 font-medium text-light/70">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {gameHistory.map((game, index) => (
//                       <tr
//                         key={index}
//                         className="border-b border-light/5 hover:bg-dark-light/30 transition-colors"
//                       >
//                         <td className="py-4">
//                           <span
//                             className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                               game.result === 'Win'
//                                 ? 'bg-green-500/20 text-green-400'
//                                 : game.result === 'Lose'
//                                 ? 'bg-red-500/20 text-red-400'
//                                 : 'bg-yellow-500/20 text-yellow-400'
//                             }`}
//                           >
//                             {game.result}
//                             {game.endedEarly && (
//                               <span className="ml-1 text-xs">(ended early)</span>
//                             )}
//                           </span>
//                         </td>
//                         <td className="py-4 text-light">
//                           {game.playerScore} - {game.computerScore}
//                         </td>
//                         <td className="py-4 text-light">{game.rounds}</td>
//                         <td className="py-4 text-light">
//                           {Math.floor(game.duration / 60)}m {game.duration % 60}s
//                         </td>
//                         <td className="py-4 text-light/70">
//                           {new Date(game.timestamp).toLocaleDateString()}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Leaderboard

import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import GameHistory from '../game/GameHistory'; // Adjust the import path as needed

const Leaderboard = () => {
  useEffect(() => {
    document.title = 'Leaderboard | Rock Paper Scissors Ultimate';
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 bg-dark">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-dark-light/50 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-primary font-display mb-8">
              Game History
            </h1>
            <GameHistory /> {/* Render the GameHistory component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;