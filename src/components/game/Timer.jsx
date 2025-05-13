// Timer.jsx
import { useEffect, useState, useRef } from 'react';

const Timer = ({ initialTime, onTimeUp, isRunning, onEndGame, resetTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef(null);
  const prevIsRunningRef = useRef(isRunning);

  useEffect(() => {
    setTimeLeft(initialTime);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [initialTime, resetTrigger]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    if (prevIsRunningRef.current === isRunning) return;
    prevIsRunningRef.current = isRunning;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setTimeout(() => {
              onTimeUp();
            }, 0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [isRunning, onTimeUp]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const getTimerColor = () => {
    if (timeLeft <= 10) return 'text-red-400';
    if (timeLeft <= 30) return 'text-yellow-400';
    return 'text-primary';
  };

  return (
    <div className="flex justify-between items-center mb-6 bg-dark/70 rounded-xl p-4">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 mr-2 ${getTimerColor()}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-16 0 9 9 0 0116 0z"
          />
        </svg>
        <span className={`text-2xl font-bold ${getTimerColor()}`}>
          {formatTime(timeLeft)}
        </span>
      </div>

      {isRunning && (
        <button
          onClick={() => {
            onEndGame();
          }}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            />
          </svg>
          End Game
        </button>
      )}
    </div>
  );
};

export default Timer;