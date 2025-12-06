import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  targetSectionId?: string;
}

export function ScrollIndicator({ targetSectionId = 'academic-divisions' }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const handleScrollClick = () => {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      // Get the current scroll position
      const currentScrollY = window.scrollY;
      // Add offset to scroll a bit higher than the target element
      const offset = 220; // Adjust this value to control how much higher to scroll
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
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer group flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleScrollClick}
    >
      {/* Mouse Icon */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="mb-2 opacity-90 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 18" fill="none">
          <path d="M6.51465 3.57129C6.92878 3.57129 7.26452 3.90719 7.26465 4.32129V6.32129C7.26465 6.7355 6.92886 7.07129 6.51465 7.07129C6.10043 7.07129 5.76465 6.7355 5.76465 6.32129V4.32129C5.76478 3.90719 6.10052 3.57129 6.51465 3.57129Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.84961 0.00878906C10.2916 0.18326 13.0293 3.02927 13.0293 6.51465V11.4854L13.0205 11.8213C12.8458 15.263 9.99975 17.9999 6.51465 18L6.17871 17.9912C2.73704 17.8164 0 14.9705 0 11.4854V6.51465C0 2.91692 2.91695 0.000131954 6.51465 0L6.84961 0.00878906ZM6.51465 1.5C3.74538 1.50013 1.5 3.74535 1.5 6.51465V11.4854C1.5 14.2546 3.74538 16.4999 6.51465 16.5C9.28391 16.4999 11.5293 14.2546 11.5293 11.4854V6.51465C11.5293 3.74535 9.28391 1.50013 6.51465 1.5Z" fill="white"/>
        </svg>
      </motion.div>

      {/* SCROLL Text */}
      <motion.span
        className="text-white text-[10px] font-semibold tracking-[0.15em] uppercase drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity"
        animate={{
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
        SCROLL
      </motion.span>
    </motion.div>
  );
}