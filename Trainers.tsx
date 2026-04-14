import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image_url: string;
}

const Trainers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    fetch('/api/trainers')
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch(console.error);
  }, []);

  return (
    <section
      id="trainers"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-transparent overflow-hidden"
    >

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[#C6A75E] text-sm tracking-[0.4em] uppercase mb-6 font-bold"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Expert Guidance
          </p>
          <h2
            className="text-[#0A0A0A] text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            OUR TRAINERS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="relative overflow-hidden glass-effect rounded-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={trainer.image_url}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p
                    className="text-gold text-xs tracking-[0.3em] uppercase mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {trainer.specialty}
                  </p>
                  <h3
                    className="text-white text-2xl md:text-3xl tracking-[0.1em] font-light"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {trainer.name}
                  </h3>
                  <p
                    className="text-white/60 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {trainer.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
