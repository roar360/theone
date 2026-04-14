import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
}

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <section
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
            Member Stories
          </p>
          <h2
            className="text-[#0A0A0A] text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            TESTIMONIALS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="relative p-8 md:p-10 glass-effect rounded-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Quote className="text-gold/30 mb-6" size={40} />
              <p
                className="text-[#0A0A0A] text-lg leading-relaxed mb-8 font-semibold"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "{testimonial.quote}"
              </p>
              <div>
                <p
                  className="text-[#0A0A0A] text-lg tracking-[0.1em] font-bold"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-[#C6A75E] text-sm tracking-[0.2em] uppercase mt-1 font-bold"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
