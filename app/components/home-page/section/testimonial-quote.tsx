import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import tour360Image from '@/images/home-page/section-news/360.png';
import { Link } from 'react-router';

interface Testimonial {
  quote: string;
  parentName: string;
  parentWork: string;
}

interface TestimonialQuoteSectionProps {
  onNavigate: (path: string) => void;
}

export function TestimonialQuoteSection({ onNavigate }: TestimonialQuoteSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials: Testimonial[] = [
    {
      quote: "LHBS transformed our daughter's learning journey with excellent bilingual education and dedicated teachers.",
      parentName: "Mrs. Nguyen Thi Mai",
      parentWork: "Marketing Director"
    },
    {
      quote: "The holistic approach at LHBS develops students for life, building confidence and critical thinking skills.",
      parentName: "Mr. Le Van Duc",
      parentWork: "Software Engineer"
    },
    {
      quote: "LHBS combines international curriculum with Vietnamese values, giving children the best of both worlds.",
      parentName: "Mrs. Tran Thi Lan",
      parentWork: "Doctor"
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="py-14 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32">
        
        {/* Quote Section with Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full pr-92"
        >
          
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-start md:gap-2 lg:gap-4 p-6">
                    
                    {/* Quote Icon */}
                    <motion.div
                      className="shrink-0"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
                          <path d="M20.541 9.6665C14.5349 9.6665 9.66602 14.5354 9.66602 20.5415V56.7915C9.66602 62.7974 14.5349 67.6665 20.541 67.6665H29.9266L39.0829 85.0636C39.7097 86.2545 40.9448 87.0003 42.2907 87.0003C43.6366 87.0003 44.8717 86.2545 45.4986 85.0636L54.6547 67.6665H64.041C70.0469 67.6665 74.916 62.7974 74.916 56.7915V20.5415C74.916 14.5354 70.0469 9.6665 64.041 9.6665H20.541ZM26.5827 30.2082C26.5827 28.2062 28.2057 26.5832 30.2077 26.5832H37.4577C39.4597 26.5832 41.0827 28.2062 41.0827 30.2082C41.0827 40.6061 34.8573 47.6017 32.7709 49.688C31.3553 51.1036 29.0601 51.1036 27.6444 49.688C26.2288 48.2725 26.2288 45.9772 27.6444 44.5616C28.6148 43.5912 30.6046 41.3632 32.067 38.154C31.5234 38.4795 30.8873 38.6665 30.2077 38.6665C28.2057 38.6665 26.5827 37.0435 26.5827 35.0415V30.2082ZM45.916 30.2082C45.916 28.2062 47.539 26.5832 49.541 26.5832H56.791C58.793 26.5832 60.416 28.2062 60.416 30.2082C60.416 40.6061 54.1907 47.6017 52.1041 49.688C50.6884 51.1036 48.3936 51.1036 46.9778 49.688C45.5621 48.2725 45.5621 45.9772 46.9778 44.5616C47.9481 43.5912 49.9378 41.3632 51.4004 38.154C50.8567 38.4795 50.2206 38.6665 49.541 38.6665C47.539 38.6665 45.916 37.0435 45.916 35.0415V30.2082ZM13.291 79.7498H30.8244L34.6401 86.9998H13.291C11.289 86.9998 9.66602 85.3768 9.66602 83.3748C9.66602 81.3729 11.289 79.7498 13.291 79.7498ZM102.708 86.9998H49.9412L53.7571 79.7498H102.708C104.71 79.7498 106.333 81.3729 106.333 83.3748C106.333 85.3768 104.71 86.9998 102.708 86.9998ZM9.66602 102.708C9.66602 100.706 11.289 99.0832 13.291 99.0832H71.291C73.293 99.0832 74.916 100.706 74.916 102.708C74.916 104.71 73.293 106.333 71.291 106.333H13.291C11.289 106.333 9.66602 104.71 9.66602 102.708Z" fill="#16482E"/>
                        </svg>
                      </div>
                    </motion.div>

                    {/* Quote Text and Author */}
                    <div className="flex-1">
                      <blockquote className="text-xs md:text-medium lg:text-xl xl:text-2xl text-[#212121] leading-relaxed font-medium mb-6 lg:mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Author Info */}
                      <div className="flex justify-end">
                        <div className="text-right">
                          <p className="text-[#1a5336] font-semibold text-lg md:text-xl">
                            {testimonial.parentName}
                          </p>
                          <p className="text-[#666666] text-sm md:text-base">
                            {testimonial.parentWork}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white shadow-lg hover:shadow-xl border-0 text-[#1a5336] hover:bg-[#F8F9FA] focus:ring-2 focus:ring-[#FABA1E]" />
            <CarouselNext className="z-50 absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white shadow-lg hover:shadow-xl border-0 text-[#1a5336] hover:bg-[#F8F9FA] focus:ring-2 focus:ring-[#FABA1E]" />
          </Carousel>

        </motion.div>
        
      </div>

      {/* 360 Tour Image - Bottom Right */}
      <div className="absolute bottom-0 right-0">
        <a href="https://360.lhu.edu.vn/" target="_blank" rel="noopener noreferrer">
          <img 
            src={tour360Image} 
            alt="360 Tour"
            className="w-full h-full object-fit  max-w-none cursor-pointer"
          />
        </a>
      </div>
    </motion.section>
  );
}

export default TestimonialQuoteSection;
