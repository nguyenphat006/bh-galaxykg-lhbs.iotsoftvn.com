import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { AnimatedHighlight } from '~/components/animated-highlight';
import bgadmissionsCTA from '@/images/home-page/bg-admissionsCTA.png'

export default function LetsBeginCTA({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const lbTitle = `Let's Begin`;
  const lbSubcopy = "Begin your child's journey to bilingual excellence and global citizenship today";
  const lbCtaText = "LET'S START";
  const lbCtaLink = "/admissions/apply-now";

  return (
    
    
    <motion.section
      ref={ref}
      className="relative overflow-hidden"
      style={{ 
        minHeight: '180px',
        background: 'linear-gradient(180deg, #1A5336 0%, #14432B 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      
      {/* Background Admissions CTA Image */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${bgadmissionsCTA})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Group - Centered */}
      <div className="relative z-30 h-full min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center justify-center px-4 md:px-20 py-12">
        <motion.div
          className="max-w-[720px] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >

         {/* Title */}
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-[#fffae9] mb-4">
            {lbTitle}
          </h2>
          {/* Subcopy */}
          <p className=" text-base md:text-lg font-medium text-[#fffae9]/90 mb-8 leading-relaxed">
            {lbSubcopy}
          </p>
          
          {/* CTA Button */}
          <motion.button
            onClick={() => onNavigate(lbCtaLink)}
            className="px-12 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold cursor-pointer hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336] w-full md:w-auto"
            aria-label={lbCtaText}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {lbCtaText}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
