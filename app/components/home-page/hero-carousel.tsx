import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { AnimatedHighlight } from '~/components/animated-highlight';
import { ScrollIndicator } from '~/components/ScrollIndicator';
import Herobg from '@/images/home-page/Hero-bg.png'
interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function HeroCarousel({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Only background images array - content stays the same
  const backgroundImages = [
    Herobg,
    "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_0057.jpg",
    // "https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg",
    // "https://lhbs.edu.vn/wp-content/uploads/2025/04/487416882_640655751929902_4676467757656853160_n.jpg",
    // "https://lhbs.edu.vn/wp-content/uploads/2021/05/MG_5074.jpg",

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
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/80 via-black/30 to-transparent" />

      {/* Additional dark overlay for top-left corner (logo area) */}
      <div className="absolute inset-0 z-11 bg-gradient-to-bl from-black/60 via-transparent to-transparent" 
           style={{
             background: `radial-gradient(ellipse at 14% 0%, 
               rgba(0, 0, 0, 0.7) 5%, 
               rgba(0, 0, 0, 0.25) 15%, 
               rgba(0, 0, 0, 0.1) 25%, 
               transparent 70%)`
           }} />

      {/* <div 
        className="absolute inset-0 z-10" 
        style={{
          background: `linear-gradient(45deg, 
            rgba(39, 41, 17, 0.45) 0%, 
            rgba(39, 41, 17, 0.32) 30%, 
            rgba(39, 41, 17, 0.18) 60%, 
            rgba(39, 41, 17, 0.08) 85%, 
            transparent 100%)`
        }}
      /> */}



      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1640px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content Column - Positioned at bottom left */}
          <motion.div 
            className="lg:col-span-10 flex flex-col justify-end py-12 lg:py-0 lg:pt-32 px-4 lg:px-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <nav className="flex items-center text-white/80 text-base font-medium">
                <span>School</span>
                <span className="mx-2">›</span>
                <span className="text-white">LHBS Bien Hoa GalaxyKG</span>
              </nav>
            </motion.div>

            {/* Main Title - Single row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-[#FFAE00] text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold drop-shadow-lg">
                <span className="block">Bien Hoa - A place for comprehensive</span>
                <span className="block">development for children</span>
              </h1>
            </motion.div>

                      {/* Row 3 - Arrow down icon and tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            > 
              {/* Tagline */}
              <p className="text-white text-base md:text-lg font-medium drop-shadow-lg">
                Lac Hong Bilingual School is a leading bilingual school in Dong Nai, where every student is
              </p>
               <p className="text-white text-base md:text-lg font-medium drop-shadow-lg">
                nurtured to develop intellectually, ethically, and globally competent in the digital era.
              </p>
            </motion.div>

            {/* CTA Button - Row 2 */}
            <div className="flex flex-col sm:flex-row sm:gap-4">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-4 sm:mb-0"
            >
              <button
                onClick={() => onNavigate('/admissions')}
                className="px-8 md:px-10 h-12 bg-none text-white border-2 border-white font-bold uppercase text-sm md:text-base tracking-wider 
                 shadow-xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] rounded-lg hover:bg-white hover:text-black transition-all"
              >
                DOWNLOAD PDF
              </button>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => onNavigate('/admissions')}
                className="px-8 md:px-10 h-12 bg-[#FABA1E] text-black font-bold uppercase text-sm md:text-base tracking-wider 
                          hover:bg-[#e5a812] transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 
                          focus:ring-offset-transparent shadow-xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] rounded-lg"
              >
                ENQUIRE NOW
              </button>
            </motion.div>
            </div>
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
      <ScrollIndicator targetSectionId="solid-education-level" />
    </section>
  );
}