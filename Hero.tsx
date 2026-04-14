import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  '/images/gym-stairs.png',
  '/images/gym-main-hall.png',
  '/images/gym-locker-room.png',
  '/images/gym-reception.png',
  '/images/gym-cardio.png',
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    // Start the animation sequence after 0.2 seconds
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationStarted) return;

    // Cycle through images smoothly - slower for elegant movement
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [animationStarted]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      

      {/* Animated Background with Ken Burns Effect */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 2, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 10, ease: 'linear' }
            }}
          >
            <img
              src={heroImages[currentImage]}
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
        style={{ opacity }}
      >
        <motion.p
          className="text-[#0A0A0A]/70 text-sm md:text-base tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Hyderabad's Most Exclusive
        </motion.p>

        <motion.h1
          className="text-[#0A0A0A] text-center text-4xl md:text-7xl lg:text-8xl tracking-[0.15em] font-light leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          PRIVATE FITNESS
          <br />
          <span className="text-[#C6A75E]">& WELLNESS CLUB</span>
        </motion.h1>

        <motion.p
          className="text-[#0A0A0A]/60 text-center text-lg md:text-xl tracking-[0.1em] mt-8 max-w-2xl"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Where luxury meets transformation. Experience world-class training,
          recovery, and wellness in an atmosphere of absolute exclusivity.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#membership"
            className="px-10 py-4 bg-[#0A0A0A] text-white text-sm tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-all duration-500 hover:scale-[1.02]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Request Access
          </a>
          <a
            href="#experience"
            className="px-10 py-4 border border-[#0A0A0A]/30 text-[#0A0A0A] text-sm tracking-[0.2em] uppercase hover:bg-[#0A0A0A]/10 transition-all duration-500"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Book a Private Tour
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-[#0A0A0A]/50" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
