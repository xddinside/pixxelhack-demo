import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const menuItems = [
  { text: 'About Us', color: 'bg-orange-500' },
  { text: 'Works', color: 'bg-yellow-400' },
  { text: 'Services', color: 'bg-teal-500' },
];

// New variants for the dropdown card animation
const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const MenuOverlay = () => {
  return (
    <motion.div
      className="absolute top-full right-0 mt-2 w-56 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-col space-y-1">
        {menuItems.map((item, index) => (
          <MenuItem key={index} text={item.text} color={item.color} />
        ))}
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
