import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark/90 backdrop-blur-md border-t border-light/10 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/assets/images/logo.png" 
              alt="Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-primary font-display">
              RPS Ultimate
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              className="text-light/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              className="text-light/70 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-light/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-light/50 mt-4 md:mt-0">
            © {new Date().getFullYear()} Rock Paper Scissors Ultimate. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer