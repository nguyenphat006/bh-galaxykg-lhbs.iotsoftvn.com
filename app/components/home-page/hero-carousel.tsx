import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { AnimatedHighlight } from '~/components/animated-highlight';
import { ScrollIndicator } from '~/components/ScrollIndicator';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function HeroCarousel({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Only background images array - content stays the same
  const backgroundImages = [
    "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_0057.jpg",
    "https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg",
    "https://lhbs.edu.vn/wp-content/uploads/2025/04/487416882_640655751929902_4676467757656853160_n.jpg",
    "https://lhbs.edu.vn/wp-content/uploads/2021/05/MG_5074.jpg",

  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, backgroundImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with smooth transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 1, ease: 'easeInOut' },
              // scale: { duration: 10, ease: 'linear' }
            }}
          >
            <img
              src={image}
              alt="LHBS campus with students"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Dark Overlay focused on bottom-left content area */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/80 via-black/30 to-transparent" /> */}

      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: `linear-gradient(45deg, 
            rgba(39, 41, 17, 0.45) 0%, 
            rgba(39, 41, 17, 0.32) 30%, 
            rgba(39, 41, 17, 0.18) 60%, 
            rgba(39, 41, 17, 0.08) 85%, 
            transparent 100%)`
        }}
      />



      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center py-12 lg:py-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className="text-white/95 text-sm md:text-base uppercase tracking-[0.15em] font-medium drop-shadow-lg">
                Welcome to
              </span>
            </motion.div>

            {/* Main Title with Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="whitespace-nowrap">
                <AnimatedHighlight 
                  delay={0.6} 
                  duration={1.2}
                  backgroundColor="#FABA1E"
                >
                  <span 
                    className="text-[#1a5336] leading-tight font-semibold drop-shadow-2xl" 
                    style={{ 
                      fontSize: '48px',
                      lineHeight: '1.24',
                    }}
                  >
                    Lac Hong Bilingual School
                  </span>
                </AnimatedHighlight>
              </h1>
            </motion.div>

            {/* Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[600px] drop-shadow-lg font-semibold"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
            >
             Lac Hong Bilingual School is a leading bilingual school in Dong Nai, 
             where every student is nurtured to develop intellectually, ethically, 
             and globally competent in the digital era. <br />
             The school preserves and promotes 
             Vietnamese cultural values while fostering creativity, lifelong learning, and 
             social responsibility, empowering students to become compassionate, confident, 
             innovative, and adaptable citizens in an ever-changing world.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => onNavigate('/admissions')}
                className="px-8 md:px-10 h-12 bg-[#FABA1E] text-[#1a5336] font-bold uppercase text-sm md:text-base tracking-wider 
                          hover:bg-[#e5a812] transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 
                          focus:ring-offset-transparent rounded-full shadow-xl drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                Enquire Now
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Carousel Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] ${
              index === currentSlide 
                ? 'bg-[#FABA1E] scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <motion.div
          className="h-full bg-[#FABA1E]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'restart'
          }}
          key={currentSlide}
        />
      </div> */}

      {/* Scroll Indicator */}
      <ScrollIndicator targetSectionId="solid-education-section" />
    </section>
  );
}