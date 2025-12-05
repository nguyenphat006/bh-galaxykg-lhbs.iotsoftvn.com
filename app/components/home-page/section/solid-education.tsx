import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import heroImage from '@/images/home-page/section-01.jpg';
import { AnimatedHighlight } from '~/components/animated-highlight'

// ==================== SECTION 1: Solid Education Foundation ====================
export function SolidEducationSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationLevels = [
    { label: 'Galaxy KG', link: '/academics/kindergarten' },
    { label: 'LHBS Primary School', link: '/academics/primary' },
    { label: 'LHBS Secondary School', link: '/academics/lower-secondary' },
    { label: 'LHBS High School', link: '/academics/upper-secondary' }
  ];

  return (
    <motion.section
      id="solid-education-section"
      ref={ref}
      className="relative mx-auto bg-white overflow-hidden flex justify-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative icon motif - bottom left */}
      <div 
        className="absolute bottom-8 left-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none"
        aria-hidden="true"
      >
        🎓
      </div>

      <div className="max-w-[1440px] grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content - 6 columns */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" py-24 px-4 md:px-20"
        >
      <h2 
        className="text-[#1a5336] mb-6 font-['SVN-Gotham']"
        style={{ fontSize: '48px', lineHeight: '1.24' }}
      >
        {/* Phần tiêu đề chính có sự khác biệt */}
        <span 
          className="block mb-3 text-[#FABA1E] tracking-[0.1em] uppercase font-medium"
          style={{
            fontSize: '22px',
            letterSpacing: '2px'
          }}
        >
          LHBS Holistic Education:
        </span>

        {/* Phần tiêu đề được nhấn mạnh bằng animation */}
        <AnimatedHighlight 
          delay={1.5} 
          duration={1.5}
          backgroundColor="#95F77E"
          className="text-[#1a5336]"
        >
          A Solid Education
        </AnimatedHighlight>

        <span className="block mt-2 text-[#1a5336]/90">
          for an Innovative Future
        </span>
      </h2>

          
          {/* Body copy */}
          <div className="text-base md:text-lg text-[#212121] mb-8 leading-relaxed max-w-[70ch]">
            <p className="mb-6">
              Lac Hong Bilingual School cultivates lifelong learning, 
              nurtures character, and builds global readiness
              through a holistic bilingual education
              that harmonizes Vietnamese cultural values with international excellence.
              The school empowers students to develop intellectually, emotionally, and globally,
              enabling them to live with compassion, confidence, and a strong sense of
              contribution to society.
            </p>
          </div>
          
          {/* Education levels list */}
          <div className="space-y-3">
            {educationLevels.map((level, index) => (
              <EducationLevelItem
                key={index}
                label={level.label}
                link={level.link}
                onNavigate={onNavigate}
                delay={index * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Right: Image - 6 columns */}
        <motion.div
          className="relative h-full overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={heroImage}
            alt="Students engaged in hands-on learning activities with educational materials"
            className="w-full h-full object-left object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// Education Level Item Component
interface EducationLevelItemProps {
  label: string;
  link: string;
  onNavigate: (path: string) => void;
  delay: number;
  isInView: boolean;
}

function EducationLevelItem({ label, link, onNavigate, delay, isInView }: EducationLevelItemProps) {
  return (
    <motion.button
      onClick={() => onNavigate(link)}
      className="w-full flex items-center justify-between px-4 md:px-6 h-[52px] md:h-[56px] border border-[#1a5336] text-left cursor-pointer hover:bg-gray-50 transition-all group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 rounded-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + delay }}
      whileHover={{ borderColor: '#14432b' }}
    >
      <span className=" text-lg md:text-xl text-[#1a5336]">
        {label}
      </span>
      <motion.svg 
        className="w-5 h-5 text-[#1a5336]" 
        fill="none" 
        viewBox="0 0 24 24"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <path 
          d="M9 6L15 12L9 18" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </motion.svg>
    </motion.button>
  );
}
