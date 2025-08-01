import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MenuItem = ({ index, text, hoveredIndex, onHoverStart, onHoverEnd, itemCount }) => {
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;

  const CONTAINER_PADDING_TOP_VH = 20;
  const TOTAL_CARD_SPACE_VH = 100 - CONTAINER_PADDING_TOP_VH;
  const EXPANDED_HEIGHT_VH = 35;
  const COLLAPSED_OVERLAP_VH = 14;
  const HOVER_OVERLAP_VH = 8;

  let overlap_vh = isAnyHovered ? HOVER_OVERLAP_VH : COLLAPSED_OVERLAP_VH;
  let collapsed_vh;
  if (!isAnyHovered) {
    collapsed_vh = (TOTAL_CARD_SPACE_VH + overlap_vh * itemCount) / itemCount;
  } else {
    collapsed_vh = (TOTAL_CARD_SPACE_VH - EXPANDED_HEIGHT_VH + overlap_vh * itemCount) / (itemCount - 1);
  }

  const height = isHovered ? EXPANDED_HEIGHT_VH : collapsed_vh;

  const verticalShift = isHovered ? (collapsed_vh - EXPANDED_HEIGHT_VH) / 2 : 0;

  let y = 0;
  for (let i = 0; i < index; i++) {
    const prevIsHovered = hoveredIndex === i;
    const prevHeight = prevIsHovered ? EXPANDED_HEIGHT_VH : collapsed_vh;
    y += prevHeight - overlap_vh;
  }

  const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'];
  const backgroundImageUrl = `url(${images[index % 4]})`;

  return (
    <motion.div
      initial={{ y: `${y}vh`, height: `${height}vh` }}
      animate={{ y: `${y}vh`, height: `${height}vh` }}
      transition={{ type: 'tween', stiffness: 500, damping: 25, duration: 0.2, ease:'easeOut' }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="absolute w-full cursor-pointer bg-cover bg-center overflow-hidden border-2 border-black rounded-lg shadow"
      style={{
        backgroundImage: backgroundImageUrl,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
      }}
    >
      <motion.div
        className="relative flex justify-center items-center h-full px-4 md:px-8"
        initial={{ y: `${verticalShift}vh` }}
        animate={{ y: `${verticalShift}vh` }}
      transition={{ type: 'tween', stiffness: 500, damping: 25, duration: 0.2, ease:'easeOut' }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-t from-og-black to-gray-300 flex flex-col" />
        
        <span className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase text-white tracking-tighter drop-shadow-lg w-full text-center">
          {text}
        </span>
        <motion.div
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ArrowRight size={48} className="text-white" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MenuItem;
