import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import backgroundImage from '@/images/home-page/section-news/Layer_5.png';

export default function NewsEventsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Column 1: TIN TỨC (News) - 1 main image + 2 text items
  const newsItems = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      date: '06/09/2025',
      title: 'A Letter to LHBS Students on the Opening Day of the New School Year',
      link: '/news/1'
    },
    {
      date: '04/09/2025',
      title: 'LHBS Launches Professional Educational Expert Network',
      link: '/news/2'
    },
    {
      date: '29/05/2025',
      title: 'What is Bilingual Education? Benefits of Bilingual Schools',
      link: '/news/3'
    }
  ];

  // Column 2: SỰ KIỆN (Events) - 1 main image + 2 small images with titles
  const eventItems = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
      date: '22/04/2025',
      title: 'How Long Does the Terrible Twos Last? Parenting Tips',
      link: '/events/1'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
      title: '10 Effective Study Methods for Students',
      link: '/events/2'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      title: 'What is Holistic Education? Key Elements',
      link: '/events/3'
    }
  ];

  // Column 3: HÌNH ẢNH (Gallery) - 1 large image
  const galleryItem = {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    title: 'LHBS Students Engaging in Holistic Educational Activities',
    link: '/gallery/1'
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 max-w-[1200px] mx-auto relative px-4"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          top: '0%',
        }}
      />
      
      {/* Content with relative z-index */}
      <div className="relative z-10">
        {/* Centered Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-5xl text-[#1a5336] mb-16 text-center font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         ACTIVITIES AT LHBS SCHOOL
        </motion.h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: TIN TỨC */}
          <motion.div
            className="border-l border-gray-300 pl-6 flex flex-col relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute -left-[1px] top-0 w-[3px] h-10 bg-[#e5a812]"></div>
            <h3 className="text-2xl font-bold text-[#1a5336] mb-6">NEWS</h3>
            
            {/* Main Image Item */}
            <div className="mb-6 cursor-pointer group" onClick={() => onNavigate(newsItems[0].link)}>
              <div className="relative overflow-hidden">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.0) 60%)"
                  }}
                />
                {/* Text overlay */}
                <div className="absolute left-3 bottom-3 right-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col text-center leading-none shrink-0">
                      <span className="text-3xl font-bold leading-none drop-shadow-md mb-2">{newsItems[0].date.split('/')[0]}</span>
                      <span className="text-xs font-medium leading-none drop-shadow-md">{newsItems[0].date.split('/')[1]}-{newsItems[0].date.split('/')[2]}</span>
                    </div>
                    <div className="w-0.5 h-12 bg-white opacity-80" />
                    <h4 className="text-sm font-bold leading-tight line-clamp-2 drop-shadow-md">{newsItems[0].title}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Text-only Items */}
            {newsItems.slice(1).map((item, index) => (
              <div 
                key={index}
                className="mb-4 p-4 cursor-pointer bg-[#f4f6ff] transition-colors"
                onClick={() => onNavigate(item.link)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-3xl font-bold text-[#1a5336]">{item.date.split('/')[0]}</span>
                    <span className="text-xs text-gray-600">{item.date.split('/')[1]}-{item.date.split('/')[2]}</span>
                  </div>
                  <h4 className="text-sm font-medium text-[#1a5336] line-clamp-2">{item.title}</h4>
                </div>
              </div>
            ))}

            {/* View More Button */}
            <button
              onClick={() => onNavigate('/news')}
              className="mt-auto w-fit flex items-center gap-2 px-6 py-2 bg-[#1a5336] text-white rounded-full hover:bg-[#1a5336]/90 transition-colors"
            >
              <span>XEM THÊM</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Column 2: SỰ KIỆN */}
          <motion.div
            className="border-l border-gray-300 pl-6 flex flex-col relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute -left-[1px] top-0 w-[3px] h-10 bg-[#e5a812]"></div>
            <h3 className="text-2xl font-bold text-[#1a5336] mb-6">EVENTS</h3>
            {/* Main Image Item */}
            <div className="mb-6 cursor-pointer group" onClick={() => onNavigate(eventItems[0].link)}>
              <div className="relative overflow-hidden">
                <img
                  src={eventItems[0].image}
                  alt={eventItems[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.0) 60%)"
                  }}
                />
                {/* Text overlay */}
                <div className="absolute left-3 bottom-3 right-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col text-center leading-none shrink-0">
                      <span className="text-3xl font-bold leading-none drop-shadow-md mb-2">{eventItems[0].date.split('/')[0]}</span>
                      <span className="text-xs font-medium leading-none drop-shadow-md">{eventItems[0].date.split('/')[1]}-{eventItems[0].date.split('/')[2]}</span>
                    </div>
                    <div className="w-0.5 h-12 bg-white opacity-80" />
                    <h4 className="text-sm font-bold leading-tight line-clamp-2 drop-shadow-md">{eventItems[0].title}</h4>
                  </div>
                </div>
              </div>
            </div>


            {/* 2 Small Image Items */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {eventItems.slice(1).map((item, index) => (
                <div 
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => onNavigate(item.link)}
                >
                  <div className="relative overflow-hidden mb-2 aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-[#1a5336] line-clamp-2">{item.title}</h4>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <button
              onClick={() => onNavigate('/events')}
              className="mt-auto w-fit flex items-center gap-2 px-6 py-2 bg-[#1a5336] text-white rounded-full hover:bg-[#1a5336]/90 transition-colors"
            >
              <span>XEM THÊM</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Column 3: HÌNH ẢNH */}
          <motion.div
            className="border-l border-gray-300 pl-6 flex flex-col relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="absolute -left-[1px] top-0 w-[3px] h-10 bg-[#e5a812]"></div>
            <h3 className="text-2xl font-bold text-[#1a5336] mb-6">IMAGE</h3>
            
            {/* Large Image */}
            <div className="cursor-pointer group flex-grow" onClick={() => onNavigate(galleryItem.link)}>
              <div className="relative overflow-hidden mb-3 aspect-[4/4.4]">
                <img
                  src={galleryItem.image}
                  alt={galleryItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.0) 60%)"
                  }}
                />
              </div>
              <h4 className="text-base font-semibold text-[#1a5336] line-clamp-2 mb-6">{galleryItem.title}</h4>
            </div>

            {/* View More Button */}
          <button
  onClick={() => onNavigate('/gallery')}
  className="mt-auto flex items-center gap-2 w-fit px-6 py-2 bg-[#1a5336] text-white rounded-full hover:bg-[#1a5336]/90 transition-colors"
>
  <span>XEM THÊM</span>
  <ChevronRight className="w-4 h-4" />
</button>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
