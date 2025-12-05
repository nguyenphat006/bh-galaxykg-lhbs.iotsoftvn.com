import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import lhbslogo from "@/images/base/logo.png"
const statsData = [
  {
    number: "100%",
    description: "Years of excellence"
  },
  {
    number: "250",
    description: "Experienced Teachers"
  },
  {
    number: "2,600",
    description: "Students of all grades"
  }
];

// University/College logos for the carousel
const universityLogos = [
  {
    id: 1,
    name: "University Logo 1",
    image: "https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Truong-Dai-hoc-Greenwich-Viet-Nam.png"
  },
  {
    id: 2,
    name: "Harvard University",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png"
  },
  {
    id: 3,
    name: "Pomona College",
    image: "https://1000logos.net/wp-content/uploads/2018/02/Stanford-University-Logo.png"
  },
  {
    id: 4,
    name: "Dartmouth College",
    image: "https://1000logos.net/wp-content/uploads/2022/10/Dartmouth-College-Logo.png"
  },
  {
    id: 5,
    name: "LHBS",
    image: lhbslogo
  }
];

export default function TheNumbers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="container mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-4 leading-tight bg-gradient-to-b from-[#FF9500] to-[#FFD267] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #FF9500 0%, #FFD267 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            By the numbers
          </h2>

        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-20"
        >
          {statsData.map((stat, index) => (
            <div key={index} className={`relative flex flex-col items-center text-center ${index < 2 ? 'md:border-r md:border-gray-400' : ''}`}>
              
              {/* Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="mb-4"
              >
                <span 
                  className="block text-7xl lg:text-8xl font-black leading-none"
                  style={{ 
                    color: '#00602F',
                    fontSize: '72px',
                    fontWeight: '900'
                  }}
                >
                  {stat.number}
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                <p 
                  className="text-lg md:text-[28px] font-light max-w-xs"
                  style={{ 
                    color: '#212121',
                    fontWeight: '350'
                  }}
                >
                  {stat.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* University Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <Carousel
            className="w-full px-20 mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {universityLogos.map((logo) => (
                <CarouselItem key={logo.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center h-24 md:h-28 lg:h-32 transition-all duration-200"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="max-h-full max-w-full object-contain p-2"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="w-12 h-12 absolute left-4 top-1/2 -translate-y-1/2 border-0" />
            <CarouselNext className="w-12 h-12  absolute right-4 top-1/2 -translate-y-1/2 border-0" />
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
