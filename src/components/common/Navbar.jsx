import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGame } from '../../context/GameContext'

const Navbar = () => {
  const location = useLocation()
  const { gameStarted } = useGame()

  const links = [
    { path: '/', name: 'Home' },
    { path: '/game', name: 'Play' },
    { path: '/leaderboard', name: 'Leaderboard' },
    { path: '/about', name: 'About' },
  ]

  return (
    <nav className="bg-dark/80 backdrop-blur-md border-b border-light/10 fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/images/logo.jpg" 
              alt="Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-primary font-display">
              RPS Ultimate
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-1 text-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-light hover:text-primary-light'
                }`}
              >
                {link.path === location.pathname && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {gameStarted && (
            <Link
              to="/game"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-colors"
            >
              Return to Game
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar