// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import Layout from './components/common/Layout'
import Hero from './components/pages/Hero'
import Game from './components/pages/Game'
import About from './components/pages/About'
import Leaderboard from './components/pages/Leaderboard'
import RulesModal from './components/game/RulesModal'
import './App.css'

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="game" element={<Game />} />
            <Route path="about" element={<About />} />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
        <RulesModal />
      </Router>
    </GameProvider>
  )
}

export default App