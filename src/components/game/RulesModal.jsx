import { useGame } from '../../context/GameContext'
import Modal from '../common/Modal'

const RulesModal = () => {
  const { showRules, setShowRules } = useGame()

  return (
    <Modal isOpen={showRules} onClose={() => setShowRules(false)} title="Game Rules">
      <div className="space-y-6">
        <img 
          src="/assets/images/icons/rules.png" 
          alt="Game Rules" 
          className="w-full rounded-lg border border-light/10"
        />
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-primary/10 text-primary rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-light/90">
              You have 60 seconds to play as many rounds as possible. The player with the most points when time runs out wins!
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 text-primary rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-light/90">
              You can end the game early if you want to see your results before time runs out.
            </p>
          </div>
        </div>
        
        <div className="pt-4">
          <h4 className="font-bold text-light mb-3">Win Conditions:</h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="bg-green-500/10 text-green-400 rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-light/90">Rock crushes Scissors</span>
            </li>
            <li className="flex items-center">
              <span className="bg-green-500/10 text-green-400 rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-light/90">Paper covers Rock</span>
            </li>
            <li className="flex items-center">
              <span className="bg-green-500/10 text-green-400 rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-light/90">Scissors cut Paper</span>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}

export default RulesModal