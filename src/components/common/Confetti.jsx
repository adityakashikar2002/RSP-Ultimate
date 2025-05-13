// Confetti.jsx
import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from '../../hooks/useWindowSize'

const Confetti = ({ active }) => {
  const [showConfetti, setShowConfetti] = useState(active)
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (active) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [active])

  if (!showConfetti) return null

  return (
    <div className="fixed inset-0 z-[1000] pointer-events-none overflow-hidden">
      <ReactConfetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.2}
        colors={['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6']}
        style={{ position: 'absolute' }}
      />
    </div>
  )
}

export default Confetti