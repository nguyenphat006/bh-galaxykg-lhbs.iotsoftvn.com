import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface AnimatedHighlightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  backgroundColor?: string;
  triggerOnView?: boolean;
}

export function AnimatedHighlight({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  backgroundColor = '#95F371',
  triggerOnView = true
}: AnimatedHighlightProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Determine when to start animation
  const shouldAnimate = triggerOnView ? isInView : true;

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Animated highlight background */}
      <motion.span
        className="absolute inset-0 -bottom-1"
        style={{ 
          backgroundColor,
          zIndex: 0,
          originX: 0 // Animation starts from left
        }}
        initial={{ scaleX: 0 }}
        animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ 
          duration,
          delay: shouldAnimate ? delay : 0,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
        }}
      />
      {/* Text content */}
      <span className="relative ">{children}</span>
    </span>
  );
}

// Utility class variant for direct Tailwind usage
export const animatedHighlightClasses = {
  container: 'relative inline-block',
  background: 'absolute inset-0 -left-3 -right-3 md:-left-4 md:-right-4 -top-1 -bottom-1 origin-left',
  text: 'relative'
};