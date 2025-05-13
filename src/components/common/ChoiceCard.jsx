import { motion } from 'framer-motion'

const ChoiceCard = ({ choice, onClick, disabled, isWinner = false, isActive = false }) => {
  const getChoiceImage = () => {
    switch (choice) {
      case 'ROCK':
        return '/assets/images/choices/rock.png'
      case 'PAPER':
        return '/assets/images/choices/paper.png'
      case 'SCISSORS':
        return '/assets/images/choices/scissors.png'
      default:
        return ''
    }
  }

  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={() => onClick(choice)}
      className={`
        relative flex items-center justify-center 
        h-32 w-32 md:h-40 md:w-40 cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <motion.div
        animate={{
          scale: isActive ? [1, 1.1, 1] : 1,
          boxShadow: isWinner
            ? '0 0 20px 5px rgba(74, 222, 128, 0.7)'
            : '0 0 0px 0px rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.5 }}
        className={`
          relative z-10 flex items-center justify-center
          h-full w-full rounded-full
          ${isWinner ? 'ring-4 ring-green-500' : ''}
        `}
      >
        <img
          src={getChoiceImage()}
          alt={choice}
          className="h-3/4 w-3/4 object-contain"
        />
      </motion.div>
    </motion.div>
  )
}

export default ChoiceCard