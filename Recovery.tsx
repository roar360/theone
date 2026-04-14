import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Snowflake, Sun, Wind, Sparkles } from 'lucide-react';

const recoveryServices = [
  {
    icon: <Snowflake size={40} />,
    title: 'Cryotherapy',
    description: 'Full-body cryochamber sessions for rapid recovery, reduced inflammation, and enhanced performance.',
  },
  {
    icon: <Sun size={40} />,
    title: 'Infrared Therapy',
    description: 'Deep tissue healing through advanced infrared light technology. Promotes cellular regeneration.',
  },
  {
    icon: <Wind size={40} />,
    title: 'Hyperbaric Oxygen',
    description: 'HBOT chambers for accelerated healing, improved cognition, and peak athletic performance.',
  },
  {
    icon: <Sparkles size={40} />,
    title: 'Spa & Wellness',
    description: 'Steam rooms, saunas, and premium spa treatments. Complete relaxation and rejuvenation.',
  },
];

const Recovery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section
      id="recovery"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            className="relative"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/images/spa-recovery.jpg"
                alt="Recovery & Wellness"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Advanced Recovery
            </motion.p>

            <motion.h2
              className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-light leading-tight mb-12"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              RECOVERY
              <br />
              <span className="text-gold">& WELLNESS</span>
            </motion.h2>

            <div className="space-y-8">
              {recoveryServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className="flex gap-6 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-gold/70 group-hover:text-gold transition-colors duration-500 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3
                      className="text-white text-xl tracking-[0.1em] font-light mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-white/50 text-base leading-relaxed"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recovery;
