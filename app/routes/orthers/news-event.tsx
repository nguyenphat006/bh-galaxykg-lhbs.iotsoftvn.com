import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Calendar, Clock, ArrowRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NewsEventsPage() {
  
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <div className="relative" id="news-detail">
      {/* Section 1: Hero */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* Section 2: Weekly Highlights */}
      <WeeklyHighlightsSection />
      
      {/* Section 3: News Highlight 1 */}
      <NewsHighlight1Section />
      
      {/* Section 4: News Highlight 2 */}
      <NewsHighlight2Section />
      
      {/* Section 5: Featured Story */}
      <FeaturedStorySection />
      
      {/* Section 6: Latest News Grid */}
      <LatestNewsGridSection />
      
      {/* Section 7: Pagination */}
      <PaginationSection />
      
      {/* Section 8: Newsletter CTA */}
      <NewsletterCTASection />
    </div>
  );
}

// ==================== SECTION 1: HERO ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'News', onClick: () => onNavigate('/news-events') },
    { label: 'School Updates', onClick: () => onNavigate('/news-events') },
    { label: 'Weekly Highlights' }
  ];

  return (
    <section 
      className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2025/10/571245925_802836849045124_2591148448699073034_n.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

        <div className="relative w-full max-w-screen-xl mx-auto px-6 md:px-12 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-[#fffae9]/90 hover:text-[#FABA1E] transition-colors"
                >
                  Home
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li className="text-[#fffae9] font-medium">News & Events</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
              NEWS & EVENTS
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Weekly Highlights & School Updates
            </h1>
            <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
              Stay updated with the latest news, events, and achievements from our LHBS community. 
              Discover inspiring stories from our students, faculty, and upcoming campus activities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Apply Now
              </button>
              <button 
                onClick={() => onNavigate('/our-school/facilities')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
              >
                Explore Campus
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}

// ==================== SECTION 2: WEEKLY HIGHLIGHTS CARD ====================
function WeeklyHighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="weekly-highlights"
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-[#e8f4f1] overflow-hidden">
          {/* Left: Text Content */}
          <motion.div
            className="p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 bg-[#1a5336] text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              NEWS
            </div>
            <h2 
              className="text-[#1a5336] mb-4"
              style={{ fontSize: '32px', lineHeight: '1.2' }}
            >
              Weekly Highlights 14/11/2025
            </h2>
            <p className="text-[#212121] text-base leading-relaxed mb-6">
              Weekly Highlights is a weekly newsletter sent by the LHBS Leadership Team to parents, providing updates on notable news and activities at the school. The newsletter consists of three main sections: updates from the Principal, Head of Primary, and Head of Secondary.
            </p>
            <button className="px-6 py-2 bg-[#1a5336] text-white text-sm font-medium hover:bg-[#0f3021] transition-colors w-fit">
              WEEKLY HIGHLIGHTS
            </button>
          </motion.div>
          
          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg"
              alt="Students participating in school activities"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: NEWS HIGHLIGHT 1 ====================
function NewsHighlight1Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="news-highlight-1"
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://lhbs.edu.vn/wp-content/uploads/2025/10/572262221_803658985629577_1981257385305393448_n.jpg"
              alt="Students presenting science fair projects"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#1a5336]" />
              <span className="text-sm text-[#1a5336] font-medium">December 10, 2024</span>
            </div>
            <div className="inline-block px-3 py-1 bg-[#1a5336] text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              ACHIEVEMENT
            </div>
            <h2 
              className="text-[#1a5336] mb-4"
              style={{ fontSize: '28px', lineHeight: '1.3' }}
            >
              LHBS Students Excel in International Science Fair
            </h2>
            <p className="text-[#212121] text-base leading-relaxed">
              Our Grade 10 students brought home three gold medals from the Regional Science and Technology Fair, 
              showcasing innovative projects in renewable energy, AI applications, and sustainable agriculture.
            </p>
            <button className="inline-flex items-center px-6 py-2 bg-[#FABA1E] text-[#1a5336] text-sm font-medium hover:bg-[#e5a812] transition-colors">
              READ FULL STORY
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 4: NEWS HIGHLIGHT 2 ====================
function NewsHighlight2Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="news-highlight-2"
      className="py-24 px-4 md:px-20 bg-[#e8f4f1]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#1a5336]" />
              <span className="text-sm text-[#1a5336] font-medium">December 8, 2024</span>
            </div>
            <div className="inline-block px-3 py-1 bg-[#1a5336] text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              SPORTS
            </div>
            <h3 
              className="text-[#1a5336] mb-4"
              style={{ fontSize: '28px', lineHeight: '1.3' }}
            >
              Annual Sports Day Celebrates Athletic Excellence
            </h3>
            <p className="text-[#212121] text-base leading-relaxed">
              Our students showcased their athletic talents and team spirit during the annual LHBS Sports Day. 
              From track and field events to team sports, students demonstrated perseverance and fair play.
            </p>
            <button className="inline-flex items-center px-6 py-2 bg-[#FABA1E] text-[#1a5336] text-sm font-medium hover:bg-[#e5a812] transition-colors">
              VIEW PHOTO GALLERY
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://lhbs.edu.vn/wp-content/uploads/2025/10/571428052_803656362296506_9197451681763964301_n.jpg"
              alt="Students participating in sports day activities"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: FEATURED STORY ====================
function FeaturedStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="featured-story"
      className="py-24 px-4 md:px-20 bg-[#e8f4f1]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#FABA1E] inline-block px-4 py-1 text-[#1a5336] text-sm font-bold uppercase tracking-wider mb-4">
              Featured Story
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#1a5336]" />
              <span className="text-sm text-[#1a5336] font-medium">December 5, 2024</span>
            </div>
            
            <h2 
              className="text-[#1a5336] mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Parent-Teacher Conference: Building Stronger Partnerships
            </h2>
            
            <p className="text-base md:text-lg text-[#212121] leading-relaxed mb-8">
              Our recent Parent-Teacher Conference brought together families and educators to discuss student 
              progress, celebrate achievements, and plan for continued academic growth. These partnerships 
              are essential to our students' success and well-being.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
          
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://lhbs.edu.vn/wp-content/uploads/2025/10/571581337_803653715630104_1682710536098559455_n.jpg"
              alt="Parent-teacher conference meeting"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 6: LATEST NEWS GRID ====================
function LatestNewsGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const newsItems = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1663090643334-63ff2ed9c3e8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D',
      tag: 'Academic',
      title: 'New Digital Learning Platform Launch',
      date: 'December 3, 2024',
      description: 'LHBS introduces cutting-edge digital tools to enhance student learning experiences.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaG9vbCUyMGtpZHN8ZW58MHx8MHx8fDA%3D',
      tag: 'Arts',
      title: 'Student Art Exhibition Opening Night',
      date: 'December 1, 2024',
      description: 'Celebrate creativity and artistic expression at our annual student art showcase.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMGNsZWFuJTIwa2lkc3xlbnwxfHx8fDE3NjMwODc0NTN8MA&ixlib=rb-4.1.0&q=80&w=600',
      tag: 'Community',
      title: 'Environmental Cleanup Initiative',
      date: 'November 28, 2024',
      description: 'Students join hands to protect our local environment through community service.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1684145344923-d56aa3db8b12?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNjaG9vbCUyMGtpZHN8ZW58MHx8MHx8fDA%3D',
      tag: 'Academic',
      title: 'International Student Exchange Program',
      date: 'November 25, 2024',
      description: 'LHBS partners with schools worldwide to broaden students\' global perspectives.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXB1dGVyfGVufDF8fHx8MTc2MzA4NzQ1M3ww&ixlib=rb-4.1.0&q=80&w=600',
      tag: 'Technology',
      title: 'Coding Workshop Series Begins',
      date: 'November 22, 2024',
      description: 'Students dive into programming and computational thinking skills development.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG11c2ljfGVufDF8fHx8MTc2MzA4NzQ1M3ww&ixlib=rb-4.1.0&q=80&w=600',
      tag: 'Arts',
      title: 'Winter Concert Preparations Underway',
      date: 'November 20, 2024',
      description: 'Music students prepare for the annual winter concert performance.',
      link: '#'
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="latest-news"
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="text-[#1a5336] mb-4"
            style={{ fontSize: '48px', lineHeight: '1.2' }}
          >
            Latest News & Updates
          </h2>
          <p className="text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed">
            Stay connected with the latest happenings, achievements, and upcoming events 
            in our vibrant LHBS community.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              className="bg-white border border-[#1a5336]/10 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#e8f4f1] text-[#1a5336] text-xs font-bold uppercase tracking-wider mb-3">
                  {item.tag}
                </div>
                <h3 className="text-xl font-bold text-[#1a5336] mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#1a5336]" />
                  <span className="text-sm text-[#1a5336]">{item.date}</span>
                </div>
                <p className="text-[#212121] text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#1a5336] font-medium text-sm hover:text-[#FABA1E] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 7: PAGINATION ====================
function PaginationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="pagination"
      className="py-12 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="inline-flex items-center gap-2 px-4 py-2 text-[#1a5336] hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 bg-[#1a5336] text-white font-medium">1</button>
            <button className="w-10 h-10 text-[#1a5336] hover:bg-gray-100 transition-colors">2</button>
            <button className="w-10 h-10 text-[#1a5336] hover:bg-gray-100 transition-colors">3</button>
            <button className="w-10 h-10 text-[#1a5336] hover:bg-gray-100 transition-colors">4</button>
            <button className="w-10 h-10 text-[#1a5336] hover:bg-gray-100 transition-colors">5</button>
          </div>
          
          <button className="inline-flex items-center gap-2 px-4 py-2 text-[#1a5336] hover:bg-gray-100 transition-colors">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 8: NEWSLETTER CTA ====================
function NewsletterCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="newsletter"
      className="py-24 px-4 md:px-20 bg-[#1a5336]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Newsletter Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-white mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Stay Connected with LHBS News
            </h2>
            
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
              Subscribe to our newsletter and never miss important updates, events, and stories 
              from our school community. Get weekly highlights delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-[#212121] bg-white focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              />
              <motion.button
                className="px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://lhbs.edu.vn/wp-content/uploads/2025/10/571581337_803653715630104_1682710536098559455_n.jpg"
              alt="Students learning and staying connected"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}