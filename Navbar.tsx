import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Recovery', href: '#recovery' },
  { name: 'Membership', href: '#membership' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'glass-effect py-4' : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1">
            <span
              className={`text-xl md:text-2xl tracking-[0.2em] font-extralight transition-colors duration-500 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              THE
            </span>
            <span className={`text-xl md:text-2xl font-extralight transition-colors duration-500 ${isScrolled ? 'text-foreground' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>O</span>
            <svg viewBox="0 0 60 80" className="h-5 md:h-6 w-auto -mx-0.5" fill="none">
              <path d="M5 80 L5 15 Q5 5 15 5 L45 5 Q55 5 55 15 L55 80" stroke="#D4A84B" strokeWidth="8" strokeLinecap="square" fill="none" />
            </svg>
            <span className={`text-xl md:text-2xl font-extralight transition-colors duration-500 ${isScrolled ? 'text-foreground' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>E</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`link-underline text-sm tracking-[0.15em] uppercase transition-colors duration-500 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#membership"
            className={`hidden md:block px-6 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-500 hover:scale-[1.02] ${
              isScrolled
                ? 'border-foreground text-foreground hover:bg-foreground hover:text-background'
                : 'border-white text-white hover:bg-white hover:text-foreground'
            }`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Request Access
          </a>

          <button
            className={`md:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-white text-2xl tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#membership"
                className="mt-8 px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Access
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
