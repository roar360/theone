import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Strength & Conditioning',
    description: 'Premium equipment from the world\'s finest manufacturers. Every machine, every weight, chosen for peak performance.',
    image: '/images/strength-area.jpg',
  },
  {
    title: 'Boxing & Combat',
    description: 'A dedicated combat zone with professional-grade equipment. Train like a champion in an atmosphere of focused intensity.',
    image: '/images/boxing.jpg',
  },
  {
    title: 'Yoga & Pilates Studio',
    description: 'A serene sanctuary for mind-body connection. Natural light, premium mats, and expert-led sessions.',
    image: '/images/yoga-studio.jpg',
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Training Zones
          </p>
          <h2
            className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-light"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            THE EXPERIENCE
          </h2>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {experiences.map((exp, i) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [i % 2 === 0 ? 100 : -100, i % 2 === 0 ? -100 : 100]
            );

            return (
              <motion.div
                key={exp.title}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={`relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}
                  style={{ y: yOffset }}
                >
                  <div className="relative group">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>

                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.span
                    className="text-gold/50 text-7xl md:text-9xl font-light absolute -z-10 opacity-20"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    0{i + 1}
                  </motion.span>
                  <h3
                    className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] font-light mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-white/60 text-lg md:text-xl leading-relaxed"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
