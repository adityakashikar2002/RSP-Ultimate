import { motion } from 'framer-motion'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-dark overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white font-display tracking-wide"
          >
            Rock Paper Scissors <span className="text-primary">Ultimate</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-light mb-10 max-w-2xl mx-auto"
          >
            The classic game with a modern twist. Challenge the system and prove your skills!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="xl"
              onClick={() => navigate('/game')}
              className="shadow-lg"
            >
              Play Now
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => navigate('/about')}
              className="shadow-lg"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white animate-bounce-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero