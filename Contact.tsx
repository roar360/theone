import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 bg-transparent overflow-hidden"
    >

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.p
              className="text-[#C6A75E] text-sm tracking-[0.4em] uppercase mb-6 font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Visit Us
            </motion.p>

            <motion.h2
              className="text-[#0A0A0A] text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-bold leading-tight mb-12"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              EXPERIENCE
              <br />
              <span className="text-[#C6A75E] font-bold">THE ONE</span>
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <MapPin className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3
                    className="text-[#0A0A0A] text-lg tracking-[0.1em] font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Location
                  </h3>
                  <p
                    className="text-[#0A0A0A] text-base leading-relaxed font-semibold"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Plot No 339, Rd Number 10C
                    <br />
                    Venkatagiri, Jubilee Hills
                    <br />
                    Hyderabad, Telangana 500033
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Clock className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3
                    className="text-[#0A0A0A] text-lg tracking-[0.1em] font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Hours
                  </h3>
                  <p
                    className="text-[#0A0A0A] text-base leading-relaxed font-semibold"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    24/7 Member Access
                    <br />
                    Staff Hours: 6:00 AM - 10:00 PM
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Phone className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3
                    className="text-[#0A0A0A] text-lg tracking-[0.1em] font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Contact
                  </h3>
                  <p
                    className="text-[#0A0A0A] text-base leading-relaxed font-semibold"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    +91 98686 11111
                    <br />
                    membership@theone.club
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Instagram className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h3
                    className="text-[#0A0A0A] text-lg tracking-[0.1em] font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Social
                  </h3>
                  <a
                    href="https://instagram.com/theonejublieehills"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A0A0A] text-base link-underline font-semibold"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    @theonejublieehills
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="aspect-square md:aspect-[4/5] overflow-hidden">
              <img
                src="/images/wellness-cafe.jpg"
                alt="The One Lounge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
