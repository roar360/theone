import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1a1a1a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div style={{ y }}>
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/images/gym-interior-1.jpg"
                alt="The One Interior"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
              Jubilee Hills, Hyderabad
            </motion.p>

            <motion.h2
              className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-light leading-tight mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              NOT JUST A GYM.
              <br />
              <span className="text-gold">A SANCTUARY.</span>
            </motion.h2>

            <motion.p
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Located in the heart of Jubilee Hills at Alcazar Mall, The One
              redefines what a fitness experience can be. This is a members-only
              private club where every detail has been crafted for those who
              demand nothing less than excellence.
            </motion.p>

            <motion.p
              className="text-white/60 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              State-of-the-art equipment. World-class trainers. Advanced
              recovery therapies including Hyperbaric Oxygen, Cryotherapy, and
              Infrared treatments. A premium wellness café. All within an
              atmosphere of understated luxury.
            </motion.p>

            <motion.div
              className="flex gap-12 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div>
                <p className="text-gold text-4xl md:text-5xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>15K+</p>
                <p className="text-white/50 text-sm tracking-[0.2em] uppercase mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Sq. Ft.</p>
              </div>
              <div>
                <p className="text-gold text-4xl md:text-5xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>24/7</p>
                <p className="text-white/50 text-sm tracking-[0.2em] uppercase mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Access</p>
              </div>
              <div>
                <p className="text-gold text-4xl md:text-5xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>VIP</p>
                <p className="text-white/50 text-sm tracking-[0.2em] uppercase mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
