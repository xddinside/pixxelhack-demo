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
      className="fixed top-0 right-0 h-full w-full md:w-4/5 lg:w-2/3 shadow-2xl bg-[#FDFBD4]"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className="relative w-full h-full pt-[30vh]">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            index={index}
            text={item.text}
            hoveredIndex={hoveredIndex}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            itemCount={menuItems.length}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
