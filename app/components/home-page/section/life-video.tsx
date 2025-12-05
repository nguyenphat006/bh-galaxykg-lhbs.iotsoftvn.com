import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { X } from 'lucide-react';
import lifeBgImage from '@/images/home-page/section-01.jpg';

export function LHBSLifeVideoSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const lifeTitle = "LHBS Virtual Tour";
const lifeBody =
  "Explore LHBS through our immersive 360° virtual tour. Navigate classrooms, facilities, and learning spaces as if you were here in person, and experience the vibrant bilingual environment that shapes our students’ daily life.";

  const videoUrl = "https://www.youtube.com/embed/O7iVtgnbww4?si=1va8KPa_buOZUXJV"; // Updated with correct YouTube embed URL
  const playAriaLabel = "Play LHBS Life video";
  return (
    <>
      <motion.section
        ref={ref}
        className="relative overflow-hidden content-center"
        style={{ minHeight: '590px' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          aria-hidden="true"
        >
          <img
            src={lifeBgImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        />

        {/* Content Group - Centered */}
        <div className="relative z-10 h-full min-h-[640px] flex items-center justify-center px-4 md:px-20 py-24">
          <motion.div
            className="max-w-[880px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Title */}
            <h2 className=" text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              {lifeTitle}
            </h2>
            
            {/* Body */}
            <p className=" text-base md:text-lg text-[#fffae9]/90 mb-12 leading-relaxed max-w-[70ch] mx-auto">
              {lifeBody}
            </p>
            

            {/* <motion.button
              onClick={() => setShowVideoModal(true)}
              className="group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-black/50"
              aria-label={playAriaLabel}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg 
                width="96" 
                height="96" 
                viewBox="0 0 96 96" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
              >
                <circle cx="48" cy="48" r="48" fill="#fffae9" />
                <path 
                  d="M38 32L38 64L66 48L38 32Z" 
                  fill="#1a5336"
                />
              </svg>
              <span className="sr-only">{playAriaLabel}</span>
            </motion.button> */}

            <motion.a
              href="https://360.lhu.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-black/50 flex items-center justify-center"
              aria-label={playAriaLabel}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg 
                width="96" 
                height="96" 
                viewBox="0 0 96 96" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
              >
                <circle cx="48" cy="48" r="48" fill="#fffae9" />
                <path 
                  d="M38 32L38 64L66 48L38 32Z" 
                  fill="#1a5336"
                />
              </svg>
              <span className="sr-only">{playAriaLabel}</span>
            </motion.a>

          </motion.div>
        </div>
      </motion.section>

      {/* Video Modal */}
      {showVideoModal && (
        <VideoModal 
          videoUrl={videoUrl} 
          onClose={() => setShowVideoModal(false)} 
        />
      )}
    </>
  );
}

// ==================== VIDEO MODAL COMPONENT ====================
interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  // Handle Escape key
  useState(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  });

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl bg-black"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] p-2"
          aria-label="Close video"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            title="LHBS Life Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
