import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { ChevronRight, Phone, Mail, MapPin, X } from 'lucide-react'
import { useNavigate } from 'react-router'

export default function OurSchoolPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <div className='relative'>
      {/* Section 1: Hero */}
      <HeroSection onNavigate={onNavigate} />

      {/* Section 2: Who We Are and What We Do */}
      {/* <IntroSection /> */}

      {/* Section 3: Who We Are and What We Do (Repeated with different content) */}
      <WhoWeAreSection />

      {/* Section 6: Campus Life Video */}
      <CampusLifeVideoSection />

      {/* Section 4: History and Heritage */}
      <HistoryHeritageSection />

      {/* Section 5: Leadership Quote */}
      <LeadershipQuoteSection />

      {/* Section 7: Facilities Grid */}
      {/* <FacilitiesSection /> */}

      {/* Section 8: Accreditations & Memberships */}
      <AccreditationsSection />

      {/* Section 9: Welcome CTA */}
      <WelcomingCTASection onNavigate={onNavigate} />
    </div>
  )
}

// ==================== SECTION 1: HERO ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'LHBS School', onClick: () => onNavigate('/our-school') },
    { label: 'About Our School' }
  ]

  return (
    <section ref={ref} className='relative w-full min-h-[65vh] md:min-h-[70vh] flex flex-col overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src='https://lhbs.edu.vn/wp-content/uploads/2025/09/4.jpg'
          alt='LHBS Campus'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 z-10 bg-black' style={{ opacity: 0.3 }} />

      {/* Breadcrumbs inside Hero */}
      <nav
        className='relative z-20 w-full px-4 md:px-20 pt-3 pb-2'
        style={{ marginTop: '76px' }}
        aria-label='Breadcrumb'
      >
        <div className='max-w-[1440px] mx-auto flex items-center gap-2 flex-wrap'>
          {breadcrumbs.map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              {index > 0 && <ChevronRight className='w-4 h-4 text-[#fffae9]/70' />}
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className=' text-sm text-[#fffae9]/90 hover:text-[#FABA1E] transition-colors'
                >
                  {item.label}
                </button>
              ) : (
                <span className=' text-sm text-[#fffae9] font-medium'>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Content Container */}
      <div
        className='relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex-1 flex items-center'
        style={{ paddingTop: '16px', paddingBottom: '48px' }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 w-full'>
          {/* Left spacer on desktop */}
          <div className='hidden lg:block lg:col-span-1' />

          {/* Right Content Column */}
          <motion.div
            className='lg:col-span-6 lg:col-start-7 flex flex-col justify-center py-12 lg:py-0'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Page Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mb-4'
            >
              <span className=' text-[#FABA1E] uppercase tracking-[0.15em]'>Our School</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=' text-white mb-6 md:mb-8'
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              An environment made for lifelong learning
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=' text-white/90 text-base md:text-lg leading-relaxed max-w-[600px]'
            >
              Established in 2011 in Biên Hòa, Lac Hong Bilingual School offers a modern bilingual education that
              empowers students to unlock their full potential. Our comprehensive K–12 program blends Vietnamese
              national curriculum standards with international best practices, preparing learners for success in a
              globalized world.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== SECTION 2: INTRO / ABOUT ====================
// function IntroSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <motion.section
//       ref={ref}
//       className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#E8F4FD]"
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <p className="text-base md:text-lg text-[#212121] leading-relaxed mb-8">
//             With a leading international school located in the heart city and one of the
//             most vibrant and exciting cities in Vietnam, LHBS is a dynamic and
//             multi-cultural place to learn and work. We offer a world-class British-based
//             education for children aged 3 to 18 that embraces the very best of
//             Vietnamese culture while preparing students to be global citizens of the
//             future.
//           </p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// ==================== SECTION 3: WHO WE ARE ====================
function WhoWeAreSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className='text-[#1a5336] mb-6' style={{ fontSize: '48px', lineHeight: '1.2' }}>
            WHO WE ARE AND WHAT WE DO
          </h2>

          <div className='space-y-4 text-base md:text-lg text-[#212121] leading-relaxed'>
            <p>
              We help students discover, prepare to pursue, and align students the early stages of their academic
              pursuits.
            </p>
            <p>
              With more than thirteen years of experience in creating amazing journeys, our well qualified and
              experienced teachers and staff offer high-level expertise in all areas from KG to year twelve including
              Mathematics, Vietnamese, Geography and Science.
            </p>
            <p>
              Our school employs the finest curriculum for Kindergarten through grade 12, with teachers who understand
              that students have different characteristics that need to be accommodated with different strategies
              tailored to help them succeed and eventually graduating school.
            </p>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className='relative h-[400px] md:h-[500px] overflow-hidden rounded-lg'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src='https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjMwNTg2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
            alt='Teacher and student interaction at LHBS'
            className='w-full h-full object-cover object-center'
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

// ==================== SECTION 4: HISTORY AND HERITAGE ====================
function HistoryHeritageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-gray-50'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        {/* Left: Image */}
        <motion.div
          className='relative h-[400px] md:h-[500px] overflow-hidden rounded-lg'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src='https://lhbs.edu.vn/wp-content/uploads/2022/05/IMG_8460-1024x683.jpg'
            alt='LHBS School building showcasing our heritage'
            className='w-full h-full object-cover object-center'
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className='mb-4'>
            <span className='text-[#FABA1E] text-sm font-semibold uppercase tracking-wider'>ABOUT LHBS</span>
          </div>

          <h2 className='text-[#1a5336] mb-6' style={{ fontSize: '48px', lineHeight: '1.2' }}>
            HISTORY AND HERITAGE
          </h2>

          <div className='space-y-4 text-base md:text-lg text-[#212121] leading-relaxed'>
            <p>
              LHBS school opened in March 2011, The reason for the school's establishment is the passion for education.
            </p>
            <p>
              Established by Lac Hong Construction Corporation, the story of the building of the school here and there
              in the location in our new buildings.
            </p>
            <p>
              Built on 1.8 hectares, our secondary and higher campus provides a natural environment on the outskirts of
              the city, while also convenient. Both also provide for our current and prospective students and family
              with state-of-the-art facilities offering a great learning environment in which students can flourish and
              grow.
            </p>
            <p>
              In our teaching methodology, we combine Eastern and Western approaches to provide high quality bilingual
              education which is both deeply rooted in Vietnamese culture and globally competitive.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ==================== SECTION 5: LEADERSHIP QUOTE ====================
function LeadershipQuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        {/* Left: Quote Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-[#E8F4FD] p-8 md:p-12 rounded-lg'
        >
          <div className='mb-6'>
            <p className='text-2xl md:text-3xl text-[#1a5336] font-medium leading-relaxed mb-6'>
              "Success at LHBS is not just measured by grades and awards, but by the growth of each individual student.
              We also prioritise developing a lifelong enjoyment for learning that incorporates a compassion and empathy
              towards others."
            </p>

            <div className='border-t border-[#1a5336]/20 pt-4'>
              <p className='text-[#1a5336] font-semibold'>Ms. Hoang Thi Diem Trang</p>
              <p className='text-[#1a5336]/70 text-sm'>
                Principal of Lac Hong Bilingual Primary – Secondary – High School
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          className='relative h-full'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className='relative w-full h-[620px] rounded-lg overflow-hidden'>
            <img
              src='https://lhbs.edu.vn/wp-content/uploads/2025/08/z6919167807030_50bfac5d1dbb89531e6e5552034497ae.jpg'
              alt='Ms. Hoang Thi Diem Trang'
              className='w-full h-full object-cover object-top'
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ==================== SECTION 8: ACCREDITATIONS ====================
function AccreditationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-gray-50'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className='text-[#1a5336] mb-6' style={{ fontSize: '48px', lineHeight: '1.2' }}>
            OUR ACCREDITATIONS & MEMBERSHIPS
          </h2>

          <div className='space-y-4 text-base md:text-lg text-[#212121] leading-relaxed mb-8'>
            <p>
              Our academic achievements, policy and governance is governed and maintained by high standards educational
              authority and organizations have great impact on Vietnamese Education.
            </p>
            <p>
              Teaching excellence and student learning are prioritized on our academic roadmap, with the goal to become
              one of the best schools in Vietnam that meets international standards.
            </p>
          </div>
        </motion.div>

        {/* Right: Happy Students Image */}
        <motion.div
          className='relative h-[400px] md:h-[500px] overflow-hidden rounded-lg'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src='https://lhbs.edu.vn/wp-content/uploads/2024/08/DSC09904.jpg'
            alt='Happy students at LHBS celebrating achievements'
            className='w-full h-full object-cover object-center'
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

// ==================== SECTION 3: FACILITIES ====================
function FacilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const facilities = [
    { icon: '🏫', text: 'Modern classrooms equipped with interactive learning technology' },
    { icon: '🔬', text: 'Fully equipped science laboratories for hands-on experiments' },
    { icon: '💻', text: 'STEAM / STEM innovation labs with robotics and coding equipment' },
    { icon: '📚', text: 'Comprehensive library and quiet self-study spaces' },
    { icon: '⚽', text: 'Sports fields, multi-purpose hall, and physical education facilities' },
    { icon: '🎨', text: 'Dedicated arts, music, and performance studios' },
    { icon: '🍽️', text: 'Clean cafeteria with nutritious meal options' },
    { icon: '🩺', text: 'On-campus medical care room with qualified staff' },
    { icon: '🚌', text: 'Safe and reliable school bus transportation services' },
    { icon: '🌳', text: 'Green outdoor learning spaces and recreation areas' }
  ]

  return (
    <motion.section
      ref={ref}
      className='relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <motion.div
        className='text-center mb-12'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className=' text-[#1a5336] mb-4' style={{ fontSize: '48px', lineHeight: '1.2' }}>
          Our modern facilities
        </h2>
        <p className=' text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed'>
          LHBS campuses are designed to inspire learning and support holistic development. From state-of-the-art
          classrooms to dynamic recreation spaces, every facility is built with our students' success in mind.
        </p>
      </motion.div>

      {/* Facilities Grid */}
      <div className='grid md:grid-cols-2 gap-6'>
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className='flex items-start gap-4 p-6 border border-[#1a5336]/20  hover:border-[#1a5336]/40 transition-colors'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
          >
            <div className='text-3xl flex-shrink-0'>{facility.icon}</div>
            <p className=' text-[#212121] text-base leading-relaxed'>{facility.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

// ==================== SECTION 4: EXPERIENCE & SPACES ====================
function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const experiences = [
    {
      image:
        'https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MzA1ODYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Engaging bilingual classrooms',
      description:
        'Active, student-centered learning with experienced Vietnamese and international teachers, fostering 21st-century skills and critical thinking.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzAxMDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'STEAM & innovation labs',
      description:
        'Cutting-edge STEM education with robotics, AI, and hands-on experiments that prepare students for the digital future.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGZpZWxkfGVufDF8fHx8MTc2MzA0MTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sports & wellbeing',
      description:
        'Comprehensive PE programs, competitive sports teams, and wellness activities that promote healthy, balanced lifestyles.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1576495348486-f033d68e99b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNsYXNzcm9vbSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzA4NjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Arts & creativity',
      description:
        'Rich programs in music, visual arts, drama, and performance, nurturing self-expression and cultural appreciation.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1595315343110-9b445a960442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzMDg2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Student achievements',
      description:
        'Outstanding results in national and international competitions, standardized exams, and university admissions worldwide.'
    }
  ]

  return (
    <motion.section
      ref={ref}
      className='relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto '
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className=' text-[#1a5336]' style={{ fontSize: '48px', lineHeight: '1.2' }}>
          A learning environment like no other
        </h2>
      </motion.div>

      {/* Experience Cards Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className='group cursor-pointer overflow-hidden bg-white'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {/* Image */}
            <div className='relative h-64 overflow-hidden'>
              <img
                src={experience.image}
                alt={experience.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>

            {/* Content */}
            <div className='p-6'>
              <h3 className=' text-2xl text-[#1a5336] mb-3'>{experience.title}</h3>
              <p className=' text-[#212121] text-sm leading-relaxed'>{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

// ==================== SECTION 4.5: CAMPUS LIFE VIDEO ====================
function CampusLifeVideoSection() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const videoTitle = 'Experience Our Campus'
  const videoBody =
    'Take a virtual tour of our modern facilities and see how our students engage in daily learning activities. Discover the vibrant campus life that makes LHBS a special place to grow and learn.'
  const videoUrl = 'https://www.youtube.com/embed/O7iVtgnbww4'
  const thumbnailImage = 'https://lhbs.edu.vn/wp-content/uploads/2023/10/IMG_6953.jpg'
  const playAriaLabel = 'Play Campus Life video'

  return (
    <>
      <motion.section
        ref={ref}
        className='relative overflow-hidden'
        style={{ minHeight: '790px' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className='absolute inset-0' aria-hidden='true'>
          <img src={thumbnailImage} alt='' className='w-full h-full object-cover' />
        </div>

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/50' aria-hidden='true' />

        {/* Content Group - Centered */}
        <div className='relative z-10 h-full min-h-[640px] flex items-center justify-center px-4 md:px-20 py-24'>
          <motion.div
            className='max-w-[880px] text-center'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Title */}
            <h2 className='text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6 font-bold'>{videoTitle}</h2>

            {/* Body */}
            <p className='text-base md:text-lg text-[#fffae9]/90 mb-12 leading-relaxed max-w-[70ch] mx-auto'>
              {videoBody}
            </p>

            {/* Play Button */}
            <motion.button
              onClick={() => setShowVideoModal(true)}
              className='group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-black/50'
              aria-label={playAriaLabel}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                width='96'
                height='96'
                viewBox='0 0 96 96'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl'
              >
                {/* White Circle */}
                <circle cx='48' cy='48' r='48' fill='#fffae9' />

                {/* Green Play Triangle */}
                <path d='M38 32L38 64L66 48L38 32Z' fill='#1a5336' />
              </svg>

              {/* Visually hidden label */}
              <span className='sr-only'>{playAriaLabel}</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Modal */}
      {showVideoModal && <VideoModal videoUrl={videoUrl} onClose={() => setShowVideoModal(false)} />}
    </>
  )
}

// ==================== VIDEO MODAL COMPONENT ====================
interface VideoModalProps {
  videoUrl: string
  onClose: () => void
}

function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  // Handle Escape key
  useState(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  })

  return (
    <motion.div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className='relative w-full max-w-5xl bg-black rounded-lg overflow-hidden'
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute -top-12 right-0 text-white hover:text-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] p-2 z-10'
          aria-label='Close video'
        >
          <X className='w-8 h-8' />
        </button>

        {/* Video Container */}
        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
          <iframe
            className='absolute inset-0 w-full h-full'
            src={videoUrl}
            title='LHBS Campus Life Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

// ==================== SECTION 5: WELCOMING CTA ====================
function WelcomingCTASection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='relative py-32 px-4 md:px-20 overflow-hidden'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1558696149-f2cf87eb99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHMlMjBoYXBweXxlbnwxfHx8fDE3NjMwNDgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
          alt='LHBS Community'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 z-10 bg-[#1a5336]' style={{ opacity: 0.85 }} />

      {/* Content */}
      <div className='relative z-20 max-w-3xl mx-auto text-center'>
        {/* Heading */}
        <motion.h2
          className=' text-white mb-6'
          style={{ fontSize: '48px', lineHeight: '1.2' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcoming you from the start
        </motion.h2>

        {/* Body Text */}
        <motion.p
          className=' text-white/90 text-base md:text-lg leading-relaxed mb-10'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We invite you to discover more about LHBS admissions, tuition and fees, scholarship opportunities, and our
          enrollment process. Connect with our counselling team to learn how LHBS can support your child's educational
          journey from kindergarten through high school graduation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => onNavigate('/admissions')}
            className='px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More About Admissions
          </motion.button>

          <motion.button
            onClick={() => onNavigate('/admissions/apply-now')}
            className='px-8 h-12 border-2 border-white text-white  font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#1a5336] transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a School Tour
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ==================== SECTION 6: CONTACT ====================
function ContactSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='relative py-16 px-4 md:px-20 max-w-[1440px] mx-auto '
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='grid md:grid-cols-3 gap-8'>
        {/* Contact Info Item */}
        <motion.div
          className='flex items-start gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MapPin className='w-6 h-6 text-[#1a5336] flex-shrink-0 mt-1' />
          <div>
            <h3 className=' text-xl text-[#1a5336] mb-2'>Our Location</h3>
            <p className=' text-[#212121] text-sm leading-relaxed'>Đồng Nai Province, Vietnam</p>
          </div>
        </motion.div>

        <motion.div
          className='flex items-start gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Phone className='w-6 h-6 text-[#1a5336] flex-shrink-0 mt-1' />
          <div>
            <h3 className=' text-xl text-[#1a5336] mb-2'>Call Us</h3>
            <p className=' text-[#212121] text-sm leading-relaxed'>+84 (028) 3836 5555</p>
          </div>
        </motion.div>

        <motion.div
          className='flex items-start gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Mail className='w-6 h-6 text-[#1a5336] flex-shrink-0 mt-1' />
          <div>
            <h3 className=' text-xl text-[#1a5336] mb-2'>Email</h3>
            <p className=' text-[#212121] text-sm leading-relaxed'>admissions@lhbs.edu.vn</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
