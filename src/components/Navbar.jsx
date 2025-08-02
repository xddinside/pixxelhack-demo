import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuOverlay from './ui/MenuOverlay';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonVariants = {
    initial: { 
      y: 0, 
      background: 'linear-gradient(to bottom, #DBA66D, #844D11)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    hover: { 
      y: -6, 
      background: 'linear-gradient(to bottom, #EBC27E, #A55F14)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)'
    },
    tap: { 
      y: 0, 
      background: 'linear-gradient(to bottom, #B88450, #632B00)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)'
    }
  };

  const buttonTransition = {
    hover: { duration: 0.3, ease: 'easeOut' },
    initial: { duration: 0.2, ease: 'easeOut' },
    tap: { duration: 0.1, ease: 'easeIn' }
  };

  const buttonClassnames = "relative z-10 px-2 py-0.5 md:px-3 md:py-1 border-yellow-800 border-2 rounded-lg text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)] text-sm md:text-base";

  return (
    <nav className="fixed top-0 left-0 w-full p-4 sm:p-6 lg:p-8 flex justify-between items-center z-50">
      <div className="relative z-[60]">
        <motion.button
          className={buttonClassnames}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={buttonTransition}
        >
          <Link to={'/'} className="flex items-center px-0.5 gap-x-0 sm:gap-x-1 md:gap-x-1.5 lg:gap-x-2 font-semibold justify-center">
            <Home size={14} className="size-5 sm:size-4" strokeWidth={3.5} />
            <span className="hidden sm:inline">HOME</span>
          </Link>
        </motion.button>
      </div>

      <div className="relative z-[60]">
        <motion.button
          onClick={toggleMenu}
          className={buttonClassnames}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={buttonTransition}
        >
          {isOpen ? (
            <div className="cursor-pointer flex items-center px-0.5 gap-x-0 sm:gap-x-1 md:gap-x-1.5 lg:gap-x-2 font-semibold justify-center">
              <span className="hidden sm:inline">CLOSE</span>
              <X size={14} className="size-5 sm:size-4" strokeWidth={3.5} />
            </div>
          ) : (
            <div className="cursor-pointer flex items-center px-0.5 gap-x-0 sm:gap-x-1 md:gap-x-1.5 lg:gap-x-2 font-semibold justify-center">
              <span className="hidden sm:inline">MENU</span>
              <Menu size={14} className="size-5 sm:size-4" strokeWidth={3.5} />
            </div>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && <MenuOverlay />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
