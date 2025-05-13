import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const About = () => {
  useEffect(() => {
    document.title = 'About | Rock Paper Scissors Ultimate'
  }, [])

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 bg-dark">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-light/50 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-bold text-primary font-display mb-6">
              About RPS Ultimate
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-4">
                Rock Paper Scissors Ultimate is a modern take on the classic hand game. 
                With stunning visuals, smooth animations, and enhanced gameplay features, 
                it brings new life to this timeless competition.
              </p>
              
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Game Features
              </h2>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Beautiful animated interface with responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Timed gameplay with strategic decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Comprehensive game history and statistics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Leaderboard to track your performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Sound effects and visual feedback</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                How to Play
              </h2>
              
              <p className="mb-4">
                The rules are simple:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Rock crushes Scissors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Paper covers Rock</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Scissors cut Paper</span>
                </li>
              </ul>
              
              <div className="mt-12 pt-8 border-t border-light/10">
                <h3 className="text-xl font-bold mb-4">Connect with the Developer</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" className="text-light hover:text-primary text-2xl">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com" className="text-light hover:text-primary text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="text-light hover:text-primary text-2xl">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About