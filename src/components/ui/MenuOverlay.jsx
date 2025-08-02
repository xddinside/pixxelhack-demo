import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  { text: 'About Us' },
  { text: 'Works' },
  { text: 'Services' },
  { text: 'Contacts' },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MenuOverlay = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className="fixed top-2 right-2 bottom-2 left-2 md:left-auto md:w-4/5 lg:w-2/3 rounded-2xl shadow-2xl bg-[#FDFBD4] overflow-hidden"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className='text-[#23395d] text-5xl font-semibold h-[25vh] flex flex-col justify-center items-center'>
      <span className='text-center'>Timeless Designs,</span><span className='text-center'>Modern Homes.</span>
      </div>
      <div className="relative w-full h-full">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            index={index}
            text={item.text}
            hoveredIndex={hoveredIndex}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            itemCount={menuItems.length}
          ></MenuItem>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuOverlay;