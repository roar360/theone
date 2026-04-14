import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* THE ONE Typography - Side by Side like the image */}
        <motion.div
          className="flex items-center gap-2 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* THE */}
          <motion.span
            className="text-[#F5F5F5] text-4xl md:text-7xl lg:text-8xl font-extralight tracking-[0.3em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            THE
          </motion.span>
          
          {/* O */}
          <motion.span
            className="text-[#F5F5F5] text-4xl md:text-7xl lg:text-8xl font-extralight tracking-[0.1em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            O
          </motion.span>
          
          {/* ∩ (Orange/Gold arch shape for N - like upside down U) */}
          <motion.svg 
            viewBox="0 0 50 70" 
            className="h-8 md:h-14 lg:h-18 w-auto -mx-1 md:-mx-2"
            fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <path
              d="M5 70 L5 25 C5 10 15 2 25 2 C35 2 45 10 45 25 L45 70"
              stroke="#D4A84B"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </motion.svg>
          
          {/* E */}
          <motion.span
            className="text-[#F5F5F5] text-4xl md:text-7xl lg:text-8xl font-extralight tracking-[0.1em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            E
          </motion.span>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4A84B] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
