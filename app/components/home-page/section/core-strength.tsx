import { motion, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { AnimatedHighlight } from '~/components/animated-highlight';
import core2 from '@/images/home-page/core2.jpg';

// ==================== SECTION 2.75: Core Strengths - 5 Pillars ====================
interface CoreStrengthsSectionProps {
  showModal: { title: string; description: string; points: string[]; image: string; alt: string } | null;
  setShowModal: (modal: { title: string; description: string; points: string[]; image: string; alt: string } | null) => void;
}

export function CoreStrengthsSection({ showModal, setShowModal }: CoreStrengthsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const pillars = [
    {
      title: 'LIFELONG LEARNING',
      description: 'We cultivate curiosity and a lifelong passion for learning and self-growth.',
      points: [
        'Research and inquiry-based learning',
        'Critical thinking development',
        'Self-directed learning skills',
        'Growth mindset cultivation'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <circle cx="32" cy="32" r="20" />
          <path d="M32 12 L32 52" />
          <path d="M22 22 L42 22" />
          <path d="M22 32 L42 32" />
          <path d="M22 42 L42 42" />
        </svg>
      ),
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/1-1.jpg'
    },
    {
      title: 'INTEGRITY',
      description: 'We act with honesty, ethics, and consistency in thought, word, and deed.',
      points: [
        'Character education programs',
        'Ethical decision-making skills',
        'Personal accountability',
        'Respect and honesty principles'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <path d="M32 12 L52 22 L52 42 C52 48 42 54 32 54 C22 54 12 48 12 42 L12 22 Z" strokeLinejoin="round" />
          <path d="M22 32 L28 38 L42 24" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      image: core2
    },
    {
      title: 'CREATIVITY',
      description: 'We think independently and flexibly, daring to innovate and make positive change.',
      points: [
        'Arts and creative expression',
        'Innovation and design thinking',
        'Problem-solving creativity',
        'Artistic skill development'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <path d="M22 32 L32 12 L42 32 L52 22 L42 42 L32 52 L22 42 L12 22 Z" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="4" fill="#1a5336" />
        </svg>
      ),
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg'
    },
    {
      title: 'COMPASSION',
      description: 'We live with empathy, kindness, and respect for diversity, caring for others and our community.',
      points: [
        'Empathy and emotional intelligence',
        'Community service programs',
        'Peer support systems',
        'Social awareness development'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <path d="M32 52 C32 52 12 36 12 24 C12 18 16 14 22 14 C26 14 30 16 32 20 C34 16 38 14 42 14 C48 14 52 18 52 24 C52 36 32 52 32 52 Z" strokeLinejoin="round" />
        </svg>
      ),
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/01/333A8447.jpg'
    },
    {
      title: 'RESPONSIBILITY',
      description: 'We take initiative and accountability for ourselves, our society, and our planet, acting for sustainable development.',
      points: [
        'Leadership development programs',
        'Environmental stewardship',
        'Social responsibility awareness',
        'Personal accountability skills'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <circle cx="32" cy="32" r="20" />
          <path d="M32 12 L32 32 L42 42" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="2" fill="#1a5336" />
        </svg>
      ),
      image: 'https://lhbs.edu.vn/wp-content/uploads/2019/10/MG_4900-450x450.jpg'
    }
  ];

  const handleImageClick = (pillar: typeof pillars[0]) => {
    setShowModal({
      title: pillar.title,
      description: pillar.description,
      points: pillar.points,
      image: pillar.image,
      alt: `${pillar.title} at LHBS`
    });
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          className="font-['SVN-Gotham'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Solid foundation for growth.
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl text-[#1a5336] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our Students are{' '}
          <AnimatedHighlight delay={0.6} duration={0.8} backgroundColor="#95F77E">
            Prepared and confident
          </AnimatedHighlight>
        </motion.p>
        
        <motion.p
          className="text-base md:text-lg text-[#212121]/80 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Our Holistic educational programs equip our students with the essential life values necessary for personal growth and success.
        </motion.p>
      </div>

      {/* 5 Vertical Pillar Cards */}
      <div className="py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1440px] mx-auto">
          {pillars.map((pillar, index) => (
            <motion.button
              key={index}
              onClick={() => handleImageClick(pillar)}
              className="bg-[#fffae9] flex flex-col rounded-lg relative overflow-hidden cursor-pointer hover:bg-[#f5f3e7] hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FABA1E]/50 text-left"
              style={{ minHeight: '520px' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              {/* Title at top-left */}
              <div className="p-4 md:p-6 pb-3 md:pb-4">
                <h3 className="text-center font-['SVN-Gotham'] text-xs sm:text-sm md:text-xl lg:text-xl xl:text-xl tracking-wide md:tracking-wider text-[#1a5336] font-semibold leading-tight">
                  {pillar.title}
                </h3>
              </div>

              {/* Icon in middle */}
              <div className="flex-1 flex items-center justify-center relative z-10 py-4">
                <div className="transform scale-125">
                  {pillar.icon}
                </div>
              </div>

              {/* Circular photo overlapping bottom of icon */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div 
                  className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white group-hover:border-[#FABA1E] transition-all duration-300"
                  style={{
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                  }}
                >
                  <img 
                    src={pillar.image} 
                    alt={`${pillar.title} at LHBS`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="h-24"></div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
// ==================== CORE STRENGTH MODAL ====================
interface CoreStrengthModalProps {
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
  onClose: () => void;
}
export function CoreStrengthModal({ title, description, points, image, alt, onClose }: CoreStrengthModalProps) {
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - Top Half */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content - Bottom Half */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a5336] mb-4">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-[#212121] leading-relaxed mb-8">
            {description}
          </p>

          <h3 className="text-2xl font-bold text-[#1a5336] mb-6">Key Features:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#FABA1E] text-xl font-bold">✓</span>
                <span className="text-[#212121] text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}