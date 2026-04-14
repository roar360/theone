import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Flame, Heart, Sparkles, Coffee, Users } from 'lucide-react';

interface Amenity {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  dumbbell: <Dumbbell size={32} />,
  flame: <Flame size={32} />,
  heart: <Heart size={32} />,
  sparkles: <Sparkles size={32} />,
  coffee: <Coffee size={32} />,
  users: <Users size={32} />,
};

const Amenities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [amenities, setAmenities] = useState<Amenity[]>([]);

  useEffect(() => {
    fetch('/api/amenities')
      .then((res) => res.json())
      .then((data) => setAmenities(data))
      .catch(console.error);
  }, []);

  return (
    <section
      id="amenities"
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
            World-Class Facilities
          </p>
          <h2
            className="text-[#0A0A0A] text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            AMENITIES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.id}
              className="group relative p-8 md:p-10 neumorphic rounded-sm hover:shadow-lg transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {iconMap[amenity.icon] || <Sparkles size={32} />}
              </div>
              <h3
                className="text-[#0A0A0A] text-xl md:text-2xl tracking-[0.1em] font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {amenity.title}
              </h3>
              <p
                className="text-[#0A0A0A] text-base leading-relaxed font-semibold"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
