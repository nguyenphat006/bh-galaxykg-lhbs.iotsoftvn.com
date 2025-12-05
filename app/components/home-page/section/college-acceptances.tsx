import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

// University logos data with placeholder images
const universityLogos = [
  { name: 'Harvard University', logo: '/images/universities/harvard.png' },
  { name: 'MIT', logo: '/images/universities/mit.png' },
  { name: 'Stanford University', logo: '/images/universities/stanford.png' },
  { name: 'Oxford University', logo: '/images/universities/oxford.png' },
  { name: 'Cambridge University', logo: '/images/universities/cambridge.png' },
  { name: 'National University Singapore', logo: '/images/universities/nus.png' }
];

interface CollegeAcceptancesSectionProps {
  onNavigate: (path: string) => void;
}

export function CollegeAcceptancesSection({ onNavigate }: CollegeAcceptancesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleFullListClick = () => {
    onNavigate('/academics/college-acceptances');
  };

  return (
    <motion.section
      id="college-acceptances-section"
      ref={ref}
      className="relative mx-auto bg-white overflow-hidden flex justify-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative icon motif - bottom right */}
      <div 
        className="absolute bottom-8 right-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none"
        aria-hidden="true"
      >
        🎯
      </div>

      <div className="max-w-[1440px] grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: University Logos Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-24 px-4 md:px-20"
        >
          <div className="grid grid-cols-2 gap-6">
            {universityLogos.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-center justify-center aspect-square group hover:border-[#1a5336]/20"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to a placeholder with university name
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text text-[#1a5336] font-bold text-sm text-center leading-tight';
                        fallback.textContent = university.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-24 px-4 md:px-20"
        >
          <h2 
            className="text-[#1a5336] mb-6 font-['SVN-Gotham']"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {/* Section label
            <span 
              className="block mb-3 text-[#FABA1E] tracking-[0.1em] uppercase font-medium"
              style={{
                fontSize: '22px',
                letterSpacing: '2px'
              }}
            >
              Academic Excellence:
            </span> */}

            {/* Main title */}
            <span className="block text-[#1a5336]">
              College Acceptances
            </span>
          </h2>

          {/* Body content */}
          <div className="text-base md:text-lg text-[#212121] mb-8 leading-relaxed max-w-[70ch]">
            <p className="mb-6">
              Year after year, LHBS learners are welcomed into renowned international universities, a testament to our strong academic foundation and comprehensive counseling support.
            </p>
          </div>

          {/* Full List Button */}
          <motion.button
            onClick={handleFullListClick}
            className="rounded-full flex items-center justify-center px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full List
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CollegeAcceptancesSection;
