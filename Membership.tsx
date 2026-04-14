import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Loader2 } from 'lucide-react';

const Membership = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    fitness_goals: '',
    lifestyle: '',
    preferred_time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="membership"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            By Invitation Only
          </p>
          <h2
            className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] font-light mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            APPLY FOR
            <br />
            <span className="text-gold">MEMBERSHIP</span>
          </h2>
          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Membership at The One is by application only. Complete the form below
            and our team will contact you to schedule a private tour.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
                <Check className="text-gold" size={40} />
              </div>
              <h3
                className="text-white text-3xl tracking-[0.1em] font-light mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Application Received
              </h3>
              <p
                className="text-white/60 text-lg"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Our membership team will contact you within 24 hours to schedule
                your private tour.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex justify-center gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      step >= s ? 'bg-gold' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full mt-8 py-4 bg-gold text-foreground text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Fitness Goals
                      </label>
                      <select
                        name="fitness_goals"
                        value={formData.fitness_goals}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500 cursor-pointer"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        <option value="" className="bg-[#0A0A0A]">Select your primary goal</option>
                        <option value="strength" className="bg-[#0A0A0A]">Strength & Muscle Building</option>
                        <option value="weight-loss" className="bg-[#0A0A0A]">Weight Loss & Toning</option>
                        <option value="performance" className="bg-[#0A0A0A]">Athletic Performance</option>
                        <option value="wellness" className="bg-[#0A0A0A]">Overall Wellness & Recovery</option>
                        <option value="flexibility" className="bg-[#0A0A0A]">Flexibility & Mobility</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Lifestyle
                      </label>
                      <select
                        name="lifestyle"
                        value={formData.lifestyle}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500 cursor-pointer"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        <option value="" className="bg-[#0A0A0A]">Describe your lifestyle</option>
                        <option value="executive" className="bg-[#0A0A0A]">Busy Executive</option>
                        <option value="entrepreneur" className="bg-[#0A0A0A]">Entrepreneur</option>
                        <option value="professional" className="bg-[#0A0A0A]">Working Professional</option>
                        <option value="athlete" className="bg-[#0A0A0A]">Athlete / Sports Person</option>
                        <option value="other" className="bg-[#0A0A0A]">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Preferred Training Time
                      </label>
                      <select
                        name="preferred_time"
                        value={formData.preferred_time}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500 cursor-pointer"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        <option value="" className="bg-[#0A0A0A]">Select preferred time</option>
                        <option value="early-morning" className="bg-[#0A0A0A]">Early Morning (5-8 AM)</option>
                        <option value="morning" className="bg-[#0A0A0A]">Morning (8-11 AM)</option>
                        <option value="afternoon" className="bg-[#0A0A0A]">Afternoon (12-4 PM)</option>
                        <option value="evening" className="bg-[#0A0A0A]">Evening (5-8 PM)</option>
                        <option value="night" className="bg-[#0A0A0A]">Night (8-11 PM)</option>
                      </select>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border border-white/20 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all duration-500"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 bg-gold text-foreground text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        Continue <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <label className="text-white/50 text-sm tracking-[0.2em] uppercase block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Additional Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-transparent border-b border-white/20 text-white py-4 text-lg focus:outline-none focus:border-gold transition-colors duration-500 resize-none"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        placeholder="Tell us anything else we should know..."
                      />
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 py-4 border border-white/20 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all duration-500"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 bg-gold text-foreground text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 disabled:opacity-50"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <>Submit Application</>  
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Membership;
