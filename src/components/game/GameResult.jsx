import { useEffect, useState } from 'react';
import Confetti from '../common/Confetti';
import Button from '../common/Button';
import { useAudio } from '../../hooks/useAudio';
import useGame from '../../hooks/useGame';

const GameResult = ({ onNewGame }) => {
  const { playerScore, computerScore } = useGame();
  const [winSound] = useAudio('/assets/sounds/win.mp3');
  const [loseSound] = useAudio('/assets/sounds/lose.mp3');
  const [drawSound] = useAudio('/assets/sounds/draw.mp3');
  const [resultPlayed, setResultPlayed] = useState(false);

  const getResult = () => {
    if (playerScore > computerScore) return 'player';
    if (computerScore > playerScore) return 'computer';
    return 'draw';
  };

  useEffect(() => {
    if (!resultPlayed) {
      const result = getResult();
      if (result === 'player') {
        winSound();
      } else if (result === 'computer') {
        loseSound();
      } else {
        drawSound();
      }
      setResultPlayed(true);
    }
  }, [playerScore, computerScore, winSound, loseSound, drawSound, resultPlayed]);

  return (
    <div className="text-center">
      <Confetti active={getResult() === 'player'} />

      <div className="mb-8">
        <h2
          className={`text-4xl font-bold mb-4 font-display ${
            getResult() === 'player'
              ? 'text-primary'
              : getResult() === 'computer'
              ? 'text-secondary'
              : 'text-accent'
          }`}
        >
          {getResult() === 'player' && 'You Win!'}
          {getResult() === 'computer' && 'You Lose!'}
          {getResult() === 'draw' && "It's a Draw!"}
        </h2>
        <p className="text-xl text-light/80">
          Final Score: You {playerScore} - {computerScore} System
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={onNewGame}
          className="animate-pulse-glow"
        >
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default GameResult;