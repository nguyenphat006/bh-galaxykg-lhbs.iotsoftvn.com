import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from '~/components/ImageWithFallback';

interface Testimonial {
  quote: string;
  avatar: string;
  avatarAlt: string;
  name: string;
  role: string;
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials: Testimonial[] = [
     {
        quote: "LHBS has been an incredible experience for our family. Our daughter has grown confident and expressive in both English and Vietnamese. We truly appreciate how the school nurtures her character as much as her academic progress.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        avatarAlt: "Mrs. Nguyen Thi Lan, parent",
        name: "Mrs. Nguyen Thi Lan",
        role: "Parent of Grade 8 Student"
      },
      {
        quote: "We chose LHBS for its bilingual program, and it has exceeded all expectations. Our son now communicates naturally in two languages, and we love how the teachers encourage creativity and global awareness every day.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        avatarAlt: "Mr. Tran Van Hung, parent",
        name: "Mr. Tran Van Hung",
        role: "Parent of Grade 5 Student"
      },
      {
        quote: "The teachers at LHBS truly care about every child. They create a supportive and inspiring environment that helps our kids discover their strengths and become confident learners prepared for the future.",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
        avatarAlt: "Mrs. Le Thi Thu Ha, parent",
        name: "Mrs. Le Thi Thu Ha",
        role: "Parent of Grade 3 and Grade 7 Students"
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
      {/* Header - Centered */}
      <div className="text-center mb-16">
        <motion.h2
          className=" text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            Sharing From Parents
        </motion.h2>
        
        <motion.p
          className=" text-sm text-[#212121] max-w-[720px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
           These are heartfelt testimonials from parents who have entrusted LHBS with their children's education — 
    sharing how our bilingual learning environment has nurtured growth, confidence, and academic excellence.
        </motion.p>
      </div>

      {/* Cards Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <T_Card {...testimonial} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
// ==================== T_CARD COMPONENT ====================
interface T_CardProps extends Testimonial {}

function T_Card({ quote, avatar, avatarAlt, name, role }: T_CardProps) {
  return (
    <div className="bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-3">
        <Quote className="w-6 h-6 md:w-7 md:h-7 text-[#FABA1E]" />
      </div>

      {/* Quote Text */}
      <blockquote className=" text-base text-[#212121] mb-4 leading-relaxed flex-grow">
        "{quote}"
      </blockquote>

      {/* Author Block */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#1a5336]/10">
        {/* Avatar */}
        <div className="w-12 h-12 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={avatar}
            alt={avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <div className="flex-1 min-w-0">
          <p className=" text-sm text-[#1a5336] font-semibold truncate">
            {name}
          </p>
          <p className=" text-xs text-[#212121]/70 line-clamp-2">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
