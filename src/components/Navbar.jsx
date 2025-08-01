import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuOverlay from './ui/MenuOverlay';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonVariants = {
    initial: { 
      y: 0, 
      background: 'linear-gradient(to bottom, #DBA66D, #844D11)',
    },
    hover: { 
      y: -6, 
      background: 'linear-gradient(to bottom, #EBC27E, #A55F14)' 
    },
    tap: { 
      y: 0, 
      background: 'linear-gradient(to bottom, #B88450, #632B00)', 
    }
  };

  const buttonTransition = {
    hover: { duration: 0.2 },
    initial: { 
      type: 'spring',
      stiffness: 400,
      damping: 8,
      mass: 0.5
    },
    tap: { 
      type: 'spring',
      stiffness: 400,
      damping: 8,
      mass: 0.5
    }
  };

  const shadowVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50">
      <div className="relative">
        <motion.button
          className="relative z-10 px-2 py-0.5 rounded-lg border-yellow-950 border-2 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)]"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={buttonTransition}
        >
          <div className="flex items-center px-0.5 gap-x-1.5 font-semibold">
            <ShoppingCart size={15} strokeWidth={3.5} />
            CART
          </div>
        </motion.button>
        <AnimatePresence>
          <motion.div
            key="cart-shadow"
            className="absolute top-0 left-0 w-full h-full rounded-lg bg-og-black"
            variants={shadowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ willChange: 'opacity, transform' }}
          />
        </AnimatePresence>
      </div>

      <div className="relative">
        <motion.button
          onClick={toggleMenu}
          className="relative z-10 px-2 py-0.5 rounded-lg border-yellow-900 border-2 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)]"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={buttonTransition}
        >
          {isOpen ? (
            <div className="flex items-center px-0.5 gap-x-1.5 font-semibold">
              CLOSE
              <X size={15} strokeWidth={3.5} />
            </div>
          ) : (
            <div className="flex items-center px-0.5 gap-x-1.5 font-semibold">
              MENU
              <Menu size={15} strokeWidth={3.5} />
            </div>
          )}
        </motion.button>
        <AnimatePresence>
          <motion.div
            key="menu-shadow"
            className="absolute top-0 left-0 w-full h-full rounded-lg bg-og-black"
            variants={shadowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ willChange: 'opacity, transform' }}
          />
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && <MenuOverlay />}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
