import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BookOpen, Award, Link2, GraduationCap } from 'lucide-react';
import img061 from "@/images/home-page/Section-06-1.png"
import img062 from "@/images/home-page/Section-06-2.png"
import img063 from "@/images/home-page/Section-06-3.jpg"



interface StatCardData {
  icon: React.ReactNode;
  value: string;
  body: string;
  isExtended?: boolean;
  minHeight?: string; // Thêm prop để điều chỉnh chiều cao
}

interface PhotoCardData {
  image: string;
  alt: string;
  heightRatio?: number;
  title?: string;
  subtitle?: string;
}

interface EducationPillarsSectionProps {
  showModal?: { image: string; alt: string; title?: string; subtitle?: string } | null;
  setShowModal?: (data: { image: string; alt: string; title?: string; subtitle?: string } | null) => void;
}

export default function EducationPillarsSectionComponent({ showModal, setShowModal }: EducationPillarsSectionProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Column 1: StatCard (cao hơn) + PhotoCard
  const col1: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Users className="w-16 h-16" />,
      value: '+6,000',
      body: 'Students have graduated from LHBS, equipped with bilingual excellence and global perspectives',
      isExtended: true,
      minHeight: '450px' // Tăng chiều cao StatCard
    } as StatCardData,
    {
      image: img061,
      alt: 'LHBS students winning NASA Space Apps Challenge with ATMOS GUARD project',
      heightRatio: 1,
      title: 'NASA Space Apps Challenge Winners',
      subtitle: 'LHBS students achieved remarkable success in the prestigious NASA Space Apps Challenge with their innovative ATMOS GUARD project, showcasing their scientific excellence and global competitiveness.'
    } as PhotoCardData
  ];

  // Column 2: PhotoCard + StatCard (cao hơn)
  const col2: (StatCardData | PhotoCardData)[] = [
    {
      image: img062,
      alt: 'Students engaged in collaborative computer-based learning activities',
      heightRatio: 1.2,
      title: 'Collaborative Digital Learning',
      subtitle: 'Students engage in innovative computer-based learning activities that promote collaboration, critical thinking, and 21st-century skills development in our modern classrooms.'
    } as PhotoCardData,
    {
      icon: <BookOpen className="w-16 h-16" />,
      value: '+10,000',
      body: 'Hours of bilingual instruction annually, ensuring fluency and cultural competence in both languages',
      isExtended: true,
      minHeight: '460px' // Tăng chiều cao StatCard
    } as StatCardData
  ];

  // Column 3: StatCard (cao hơn) + PhotoCard
  const col3: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Award className="w-16 h-16" />,
      value: '96.04%',
      body: 'University acceptance rate with students admitted to top institutions worldwide',
      isExtended: true,
      minHeight: '420px' // Tăng chiều cao StatCard
    } as StatCardData,
    {
      image: img063,
      alt: 'Students participating in hands-on STEM robotics project',
      heightRatio: 1,
      title: 'STEM Robotics Excellence',
      subtitle: 'Our students actively participate in hands-on STEM robotics projects, developing engineering skills, programming abilities, and innovative problem-solving techniques for the digital age.'
    } as PhotoCardData
  ];

  // Column 4: StatCard + PhotoCard + StatCard (giữ chiều cao bình thường)
  const col4: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Link2 className="w-16 h-16" />,
      value: '+6',
      body: 'Partnerships with international schools across Asia, Europe, and North America'
    } as StatCardData,
    {
      image: "https://lhbs.edu.vn/wp-content/uploads/2025/10/571224197_816046061447624_4563907960086315049_n.jpg",
      alt: 'LHBS graduation ceremony celebrating student achievements',
      heightRatio: 0.8,
      title: 'Graduation Excellence',
      subtitle: 'LHBS graduation ceremony celebrates outstanding student achievements, marking the successful completion of their bilingual education journey and readiness for global opportunities.'
    } as PhotoCardData,
    {
      icon: <GraduationCap className="w-16 h-16" />,
      value: '+980',
      body: 'Alumni pursuing higher education at prestigious universities globally each year'
    } as StatCardData
  ];

  const columns = [col1, col2, col3, col4];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto  overflow-hidden"
    >
      {/* Decorative motif - top left */}
      <div 
        className="absolute top-8 left-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        ✨
      </div>

      {/* Decorative motif - bottom right */}
      <div 
        className="absolute bottom-8 right-8 text-9xl text-[#1a5336] opacity-[0.06] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        🎯
      </div>

  <div className="text-center mb-16 relative z-10">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a5336]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Outstanding Academic and Holistic Achievements
        </motion.h2>
      </div>

      {/* Masonry 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + colIndex * 0.1 }}
          >
            {column.map((card, cardIndex) => (
              <div key={cardIndex}>
                {isStatCard(card) ? (
                  <StatCard {...card} />
                ) : (
                  <PhotoCard {...card} setShowModal={setShowModal} />
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Type guard
function isStatCard(card: StatCardData | PhotoCardData): card is StatCardData {
  return 'value' in card;
}

// ==================== STAT CARD COMPONENT ====================
function StatCard({ icon, value, body, isExtended, minHeight }: StatCardData) {
  return (
    <div 
      className={`bg-[#1a5336] p-6 md:p-8 flex flex-col justify-center items-center text-center ${isExtended ? 'min-h-[180px]' : ''}`}
      style={minHeight ? { minHeight } : {}}
    >
      {/* Icon - size lớn hơn */}
      <div className="text-[#fffae9] text-5xl md:text-6xl lg:text-7xl mb-4 scale-125 md:scale-150">
        {icon}
      </div>

      {/* Value - size lớn hơn */}
      <h3 className="font-serif text-5xl md:text-6xl lg:text-5xl text-white mb-4">
        {value}
      </h3>

      {/* Body - size lớn hơn */}
      <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-sm">
        {body}
      </p>
    </div>
  );
}

// ==================== PHOTO CARD COMPONENT ====================
function PhotoCard({ image, alt, heightRatio = 1.2, title, subtitle, setShowModal }: PhotoCardData & { setShowModal?: (data: { image: string; alt: string; title?: string; subtitle?: string } | null) => void }) {
  const handleClick = () => {
    if (setShowModal && title && subtitle) {
      setShowModal({ image, alt, title, subtitle });
    }
  };

  return (
    <div 
      className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-auto object-cover"
        style={{ aspectRatio: `1 / ${heightRatio}` }}
      />
      {title && (
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-white text-center p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

// Named export để tương thích với import hiện tại
export { EducationPillarsSectionComponent as EducationPillarsSection };