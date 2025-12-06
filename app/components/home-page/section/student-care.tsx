import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState, useCallback } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import cardlhbs from '@/images/home-page/section-studentcare/card-lhbs.png';
import bgoverplay from '@/images/home-page/section-studentcare/bg-overplay.png';

const studentCareItems = [
  {
    id: 1,
    icon: Users,
    title: "The companion on the journey of growing up",
    description: "Children need not only teachers but also guides. We play the role of companions, helping children to explore themselves, learn from the smallest things, and gradually conquer their dreams.",
  },
  {
    id: 2,
    icon: Users,
    title: "The companion on the journey of growing up",
    description: "Children need not only teachers but also guides. We play the role of companions, helping children to explore themselves, learn from the smallest things, and gradually conquer their dreams.",
  },
  {
    id: 3,
    icon: Users,
    title: "The companion on the journey of growing up",
    description: "Children need not only teachers but also guides. We play the role of companions, helping children to explore themselves, learn from the smallest things, and gradually conquer their dreams.",
  },
];

export default function StudentCareSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [emblaApi, setEmblaApi] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background Overlay Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgoverplay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 container mx-auto px-6">

        {/* TITLE */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#15452C] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Student Care
          </h1>

          <p className="text-sm md:text-base text-[#212121] font-medium max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor sed velit magna porta auctor. Sit a non fames non. Et fames egestas etiam nisl. Arcu eu turpis viverra felis erat ornare semper lacus metus.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-4xl mx-auto px-20">
          <Carousel
            setApi={setEmblaApi}
            opts={{ 
              loop: true, 
              align: "center",
              containScroll: false,
              startIndex: 1
            }}
            // plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="">
              {studentCareItems.map((item, index) => {
                const Icon = item.icon
                const isActive = index === selectedIndex
                
                // Calculate rotation based on position relative to active
                let rotateClass = ""
                if (!isActive) {
                  const diff = (index - selectedIndex + studentCareItems.length) % studentCareItems.length
                  if (diff === 1 || diff === -2) {
                    rotateClass = "rotate-[8deg]" // Next card
                  } else if (diff === 2 || diff === -1) {
                    rotateClass = "-rotate-[8deg]" // Previous card
                  }
                }

                return (
                  <CarouselItem key={item.id} className="pl-2 basis-[95%] md:basis-[80%] lg:basis-[65%]">
                    <div className="p-1">
                      <motion.div
                      className={cn(
                        "relative rounded-3xl shadow-lg overflow-hidden transition-all duration-500",
                        isActive
                          ? "bg-white scale-100 opacity-100 z-20"
                          : "bg-gray-100 scale-85 opacity-40 blur-[1px] z-0", // <-- nền xám nhạt
                        rotateClass
                      )}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >

                        {/* Card Content - Centered */}
                        <div className="flex flex-col items-center text-center p-8 pb-20">
                          {/* Icon */}
                          <div className="mb-6">
                            <div className="w-16 h-16 bg-[#E91E63] rounded-full flex items-center justify-center">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-[#15452C] text-xl font-bold mb-4 leading-tight">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[#212121] text-sm leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>

                        {/* LHBS decoration bottom - Full width */}
                        <div className="absolute bottom-0 left-0 right-0 w-full h-auto pointer-events-none">
                          <img
                            src={cardlhbs}
                            alt="LHBS decoration"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="absolute top-1/2 -left-16 -translate-y-1/2 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors shadow-lg z-10" />
            <CarouselNext className="absolute top-1/2 -right-16 -translate-y-1/2 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors shadow-lg z-10" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}
