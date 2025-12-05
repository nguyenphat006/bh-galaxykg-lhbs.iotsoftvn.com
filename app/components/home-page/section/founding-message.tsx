import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImQuotesRight } from "react-icons/im";
import bgAcademicBilingual from '@/images/home-page/section-03-bg.png'
import founderImage from '@/images/home-page/section-03.png';



// ==================== SECTION 2: Founding Message ====================
export default function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      data-section="founding-message"
      className="h-screen mx-auto bg-[#1a5336] flex align-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {/* Background Academic Bilingual Image */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${bgAcademicBilingual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="grid md:grid-cols-2 gap-16 items-stretch relative z-20">
        {/* Left: Portrait Image - 6 columns */}
        <motion.div
          className="relative h-[500px] md:h-auto overflow-hidden order-2 md:order-1 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={founderImage}
            alt="The late People's Teacher, Dr. Do Huu Tai - Founder of LHBS"
            className="w-full h-full object-cover object-center max-w-full max-h-full"
            loading="lazy"
          />
        </motion.div>
        
        {/* Right: Content with Green Background - 6 columns */}
        <motion.div
          className="relative p-8 md:p-12 flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative quote mark */}
          <div className="text-[#E5A812] text-xl md:text-7xl mb-4 leading-none">
            <ImQuotesRight/>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#fffae9] mb-6">
            <span className="block whitespace-nowrap">
              Vietnamese 
                Identity
            </span>
            Global Vision 
          </h2>
          
          {/* Body copy */}
          <p className="font-medium text-base md:text-xl text-[#fffae9]/90 mb-8 leading-relaxed">
            LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate Vietnamese heritage and 
             {' '}
 identity 
 while embracing global knowledge, skills, and citizenship—contributing positively to themselves, their communities, and society.
          </p>
          
          {/* Attribution */}
          <div className="mb-8">
            <p className=" text-sm md:text-xl text-[#fffae9] font-semibold mb-1">
              The late People's Teacher, Dr. Do Huu Tai
            </p>
            <p className=" text-xs md:text-sm text-[#fffae9]/70">
              Founder of Lac Hong Bilingual Primary - Secondary - High School
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <motion.button
              onClick={() => onNavigate('/our-school/about-us')}
              className="rounded-full px-8 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold cursor-pointer hover: hover:text-[#1a5336] transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}