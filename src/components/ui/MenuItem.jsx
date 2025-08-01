import { motion } from 'framer-motion';

const MenuItem = ({ text, color }) => {
  return (
    <motion.div
      className="relative text-lg font-bold uppercase text-neutral-800 cursor-pointer overflow-hidden rounded p-2"
      whileHover="hover"
    >
      <motion.div
        className={`absolute inset-0 z-0 ${color}`}
        initial={{ y: '100%' }}
        variants={{
          hover: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <span className="relative z-10">{text}</span>
    </motion.div>
  );
};

export default MenuItem;
