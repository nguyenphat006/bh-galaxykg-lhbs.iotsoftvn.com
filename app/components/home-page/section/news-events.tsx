import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';

interface NewsEvent {
  image: string;
  imageAlt: string;
  tag?: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

export default function NewsEventsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const newsEvents: NewsEvent[] = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      imageAlt: 'LHBS students receiving academic excellence awards at annual ceremony',
      tag: 'ACHIEVEMENT',
      date: 'November 8, 2025',
      title: 'Grade 7 Students Of Lac Hong Bilingual School Explore Local Education – Learning From Tradition, Growing With Pride In Dong Nai',
      excerpt: 'Local Education – Learning from Tradition, Growing with Pride in Dong Nai As part of the Local Education Program, Grade 7 students of Lac...',
      link: '/news/national-science-competition-win'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
      imageAlt: 'Students celebrating cultural diversity at LHBS International Day festival',
      tag: 'EVENT',
      date: 'November 20, 2025',
      title: 'Lac Hong Bilingual School Annual Food Safety Training – Raising Awareness, Protecting Student Health',
      excerpt: 'Lac Hong Bilingual School Staff Enhance Knowledge and Professional Skills in Food Safety and Hygiene To ensure a safe, clean, and healthy learning environment,...',
      link: '/events/international-day-2025'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
      imageAlt: 'Families touring LHBS campus during open house event',
      tag: 'ADMISSIONS',
      date: 'December 7-8, 2025',
      title: 'Career Guidance Program: “Right Career – Bright Future”',
      excerpt: 'Career Orientation Program “Right Major – Bright Future” organized by the Department of Education & Training of Dong Nai Province',
      link: '/events/open-house-december-2025'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
        {/* Left: Title & Subtitle */}
        <div>
          <motion.h2
            className=" text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            News & Events
          </motion.h2>
          
          <motion.p
            className=" text-sm text-[#212121]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stay updated with the latest achievements, events, and announcements from LHBS
          </motion.p>
        </div>

        {/* Right: View All Link */}
        <motion.button
          onClick={() => onNavigate('/news-events')}
          className="flex items-center gap-2  text-sm text-[#1a5336] font-semibold group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 self-start md:self-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>View all news & calendar</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Cards Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {newsEvents.map((newsEvent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            <N_Card {...newsEvent} onNavigate={onNavigate} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
// ==================== N_CARD COMPONENT ====================
interface N_CardProps extends NewsEvent {
  onNavigate: (path: string) => void;
}
function N_Card({ image, imageAlt, tag, date, title, excerpt, link, onNavigate }: N_CardProps) {
  const handleClick = () => {
    onNavigate(link);
  };

  return (
    <div 
      className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group h-full flex flex-col"
      onClick={handleClick}
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Optional Tag Pill */}
        {tag && (
          <div className="absolute top-3 left-3 bg-[#FABA1E] px-3 py-1">
            <span className=" text-xs text-[#1a5336] font-semibold">
              {tag}
            </span>
          </div>
        )}
      </div>

      {/* Body Panel */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Meta Row - Date */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-[#1a5336]/60" />
          <span className=" text-xs text-[#212121]/70">
            {date}
          </span>
        </div>

        {/* Headline */}
        <h3 className=" text-xl md:text-2xl text-[#1a5336] mb-3 leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className=" text-sm text-[#212121] mb-4 leading-relaxed line-clamp-3 flex-grow">
          {excerpt}
        </p>

        {/* Read More Link */}
        <button
          className="flex items-center gap-2  text-sm text-[#1a5336] font-semibold group/link focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 self-start"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(link);
          }}
          aria-label={`Read more about ${title}`}
        >
          <span>Read more</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
