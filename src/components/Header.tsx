import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/images/logo.jpeg"
            alt="Feel the Magic Logo"
            className="h-8 w-auto mr-2"
          />
          
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Feel the Magic
          </span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#overview" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-gray-200'} transition-colors`}>Campaign</a>
          <a href="#video" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-gray-200'} transition-colors`}>Watch</a>
          <a href="#instructions" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-gray-200'} transition-colors`}>Participate</a>
          <a href="https://www.1in20.org.au/donate" className="btn-primary text-accent-500">Donate Now</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#overview" 
              className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Campaign
            </a>
            <a 
              href="#video" 
              className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Watch
            </a>
            <a 
              href="#instructions" 
              className="font-medium text-gray-600 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Participate
            </a>
            <a 
              href="https://www.1in20.org.au/donate" 
              className="btn-primary text-accent-500 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;