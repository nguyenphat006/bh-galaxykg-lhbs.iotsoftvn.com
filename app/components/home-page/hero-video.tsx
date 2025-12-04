import { motion } from 'motion/react';
import { AnimatedHighlight } from '~/components/animated-highlight';
import { ScrollIndicator } from '~/components/ScrollIndicator';

interface VideoHeroProps {
  onNavigate: (path: string) => void;
}

export default function VideoHero({ onNavigate }: VideoHeroProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Natural Shadow for Text Focus */}
      <div className="absolute inset-0 z-10">

        
        {/* Additional shadow from bottom-left upward for extra text contrast */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent"></div>
      </div>

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
            {/* <motion.div
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
            </motion.div> */}

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetSectionId="solid-education-section" />
    </section>
  );
}