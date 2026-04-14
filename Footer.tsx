import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span
              className="text-white text-2xl md:text-3xl tracking-[0.2em] font-extralight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              THE
            </span>
            <span className="text-white text-2xl md:text-3xl font-extralight" style={{ fontFamily: 'Playfair Display, serif' }}>O</span>
            <svg viewBox="0 0 60 80" className="h-6 md:h-8 w-auto -mx-0.5" fill="none">
              <path d="M5 80 L5 15 Q5 5 15 5 L45 5 Q55 5 55 15 L55 80" stroke="#D4A84B" strokeWidth="8" strokeLinecap="square" fill="none" />
            </svg>
            <span className="text-white text-2xl md:text-3xl font-extralight" style={{ fontFamily: 'Playfair Display, serif' }}>E</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {['Experience', 'Amenities', 'Trainers', 'Recovery', 'Membership'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/50 text-sm tracking-[0.15em] uppercase link-underline hover:text-white transition-colors duration-500"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p
            className="text-white/30 text-sm tracking-[0.1em]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            © {new Date().getFullYear()} The One. All rights reserved.
          </p>
          <p
            className="text-white/30 text-sm tracking-[0.1em]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Jubilee Hills, Hyderabad
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
