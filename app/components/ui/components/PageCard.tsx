import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

interface PageCardProps {
  title: string;
  description: string;
  image?: string;
  onClick: () => void;
}

export function PageCard({ title, description, image, onClick }: PageCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left  overflow-hidden hover:shadow-xl transition-all cursor-pointer border-2 border-[#1a5336] group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden bg-[#1a5336]/10">
        {image ? (
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#1a5336]/30  text-2xl">
            {title}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className=" text-[24px] md:text-[28px] text-[#1a5336] mb-3 group-hover:text-[#FABA1E] transition-colors">
          {title}
        </h3>
        <p className=" text-sm text-[#666] mb-4" style={{ lineHeight: '1.5' }}>
          {description}
        </p>
        <div className="flex items-center gap-2 text-[#1a5336] group-hover:text-[#FABA1E] transition-colors">
          <span className=" font-bold text-sm">Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}