import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  targetSectionId?: string;
}

export function ScrollIndicator({ targetSectionId = 'solid-education-section' }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const handleScrollClick = () => {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      // Get the current scroll position
      const currentScrollY = window.scrollY;
      // Add offset to scroll a bit higher than the target element
      const offset = 45; // Adjust this value to control how much higher to scroll
      const targetScrollY = targetElement.offsetTop - offset;
      const distance = Math.abs(targetScrollY - currentScrollY);
      
      // Calculate duration based on distance for smoother animation
      const duration = Math.min(Math.max(distance / 3, 800), 1500);
      
      // Smooth scroll with custom easing
      const startTime = performance.now();
      const startScrollY = currentScrollY;
      
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation (easeInOutCubic)
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const currentPosition = startScrollY + (targetScrollY - startScrollY) * easeProgress;
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  // Monitor scroll to hide/show the component immediately
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      if (value > 0.02) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer group"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleScrollClick}
    >
      {/* Animated ripple effect */}
      <motion.div
        className="absolute inset-0 w-38 h-38 rounded-full border border-white/20"
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.6, 0.3, 0]
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      
      {/* Second ripple with delay */}
      <motion.div
        className="absolute inset-0 w-38 h-38 rounded-full border border-[#FABA1E]/40"
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.5, 0.2, 0]
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.5
        }}
      />

      {/* Main container with enhanced effects */}
      <div className="relative w-38 h-38 flex items-center justify-center">
        {/* Pulsing background circle */}
        <motion.div
          className="absolute inset-2 bg-gradient-to-br from-[#FABA1E]/20 to-white/10 rounded-full backdrop-blur-sm"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Rotating dotted outer ring */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 112 112"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <circle
            cx="56"
            cy="56"
            r="50"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="1 1"
            fill="none"
            opacity="0.8"
          />
        </motion.svg>

        {/* Counter-rotating inner ring */}
        {/* <motion.svg
          className="absolute inset-1 w-[100px] h-[100px]"
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            stroke="#FABA1E"
            strokeWidth="1"
            strokeDasharray="1 3"
            fill="none"
            opacity="0.6"
          />
        </motion.svg> */}

        {/* Inner content area */}
        <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center">
          {/* Enhanced SCROLL text with animation */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -2, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          >
            <span className="text-white text-[10px] font-semibold tracking-[0.15em] uppercase drop-shadow-lg">
              SCROLL
            </span>
          </motion.div>

          {/* Custom animated arrow icon */}
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
          >
            {/* Triple arrow design */}
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white drop-shadow-lg"
            >
              {/* First arrow */}
              <motion.path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  y: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0
                }}
              />
              
              {/* Second arrow */}
              <motion.path
                d="M7 6l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  y: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
              
              {/* Third arrow */}
              <motion.path
                d="M7 2l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  y: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.4
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>

      {/* Enhanced glow effect with color */}
        <motion.div
          className="absolute inset-0 w-38 h-38 rounded-full bg-gradient-to-br from-[#FABA1E]/10 to-white/5 blur-2xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
        
      {/* Particle effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FABA1E] rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
              y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}