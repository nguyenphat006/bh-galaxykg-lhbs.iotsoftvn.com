import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import founderImage from '@/images/home-page/Section-Nutrion.png';

const nutritionCards = [
  {
    id: 1,
    title: "Nutrition 01",
    description: "LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate.",
    bgColor: "#1A5336",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF"
  },
  {
    id: 2,
    title: "Nutrition 01",
    description: "LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate.",
    bgColor: "#F5A623",
    titleColor: "#1A5336",
    descriptionColor: "#000000"
  },
  {
    id: 3,
    title: "Nutrition 01",
    description: "LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate.",
    bgColor: "#F5A623",
    titleColor: "#1A5336",
    descriptionColor: "#000000"
  },
  {
    id: 4,
    title: "Nutrition 01",
    description: "LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate.",
    bgColor: "#1A5336",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF"
  }
];

// ==================== SECTION 2: Founding Message ====================
export default function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      data-section="nutrition"
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${founderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="text-[#FABA1E] font-bold text-sm md:text-base uppercase tracking-wider">
              NUTRITIONAL REGIME
            </div>
            
            {/* Title */}
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Nutrition is the foundation of health for students
            </h2>
            
            {/* Description */}
            <p className="font-medium text-base md:text-lg text-white/90 mb-6 leading-relaxed">
              LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate.
            </p>

            {/* List */}
            <ul className="text-white text-sm md:text-base mb-8 space-y-2">
              <li>1. Lorem ipsum</li>
              <li>2. Lorem ipsum</li>
              <li>3. Lorem ipsum</li>
            </ul>
            
            {/* Read More Link */}
            <div>
              <button
                onClick={() => onNavigate('/our-school/about-us')}
                className="text-[#FABA1E] font-bold text-sm md:text-base hover:underline flex items-center gap-2"
              >
                Read more
                <span>→</span>
              </button>
            </div>
          </motion.div>
          
          {/* Right: 4 Cards Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {nutritionCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="rounded-3xl p-8 flex flex-col justify-between min-h-[240px] "
                style={{ 
                  backgroundColor: card.bgColor
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <h3 
                  className="font-bold text-xl md:text-2xl mb-4"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-sm md:text-base font-medium leading-relaxed"
                  style={{ color: card.descriptionColor }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}