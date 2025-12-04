import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Calendar, Clock, ArrowRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from "react-router"

export default function PathToPassion() {
    const navigate = useNavigate();
    const onNavigate = (path: string) => {
      navigate(path)
    }
  return (
    <div className="relative" id="experiences">
      {/* Section 1: Hero */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* Section 2: Inspiring Opportunities */}
      <InspiringOpportunitiesSection />
      
      {/* Section 3: Collaborations */}
      <CollaborationsSection />
      
      {/* Section 4: Discovering Talents */}
      <DiscoveringTalentsSection />
      
      {/* Section 5: Passion Areas */}
      <PassionAreasSection />
      
      {/* Section 6: Beyond the Classroom */}
      <BeyondTheClassroomSection />
      
      {/* Section 7: Extra Programs */}
      <ExtraProgramsSection />
      
      {/* Section 8: Student Wellbeing */}
      <StudentWellbeingSection />
      
      {/* Section 9: Social Purpose */}
      <SocialPurposeSection />
      
      {/* Section 10: Surroundings Made for Learning */}
      <SurroundingsMadeForLearningSection />
    </div>
  );
}

// ==================== SECTION 1: HERO ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzMDg3NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
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
            <li className="text-[#fffae9] font-medium">Path To Passion</li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
            OUTSTANDING EXPERIENCES
          </p>
          <h1 
            className="font-['SVN-Gotham'] text-white mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            Path To Passion
          </h1>
          <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
            Discover transformative learning opportunities beyond the classroom that inspire passion, 
            build character, and prepare our students for an extraordinary future.
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
              onClick={() => onNavigate('/student-life/clubs-activities')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
            >
              Explore Activities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SECTION 2: INSPIRING OPPORTUNITIES ====================
function InspiringOpportunitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="inspiring-opportunities"
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-[#1a5336] mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Inspiring Opportunities Await
            </h2>
            <p className="text-[#212121] text-lg leading-relaxed mb-6">
              At LHBS, we believe that true learning happens when students step outside their comfort zones 
              and embrace new challenges. Our comprehensive outdoor education program provides students with 
              opportunities to develop resilience, leadership skills, and a deep connection with nature.
            </p>
            <p className="text-[#212121] text-base leading-relaxed mb-8">
              From wilderness expeditions to environmental conservation projects, our students discover their 
              potential while building lifelong friendships and unforgettable memories.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-[#1a5336] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0f3021] transition-colors"
            >
              Discover More
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
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYmljeWNsZXxlbnwxfHx8fDE3NjMwODc0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Student exploring nature on bicycle"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: COLLABORATIONS ====================
function CollaborationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const collaborations = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      title: 'The Juilliard School',
      description: 'Our collaboration with the world\'s most renowned arts institution enriches our students\' love of dance, drama and music.',
      ctaText: 'Learn More',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center',
      title: 'MIT',
      description: 'The MIT-Nord Anglia STEAM programme helps our students to develop their creativity and problem-solving skills by tackling interdisciplinary challenges facing the world today.',
      ctaText: 'Learn More',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop&crop=center',
      title: 'UNICEF',
      description: 'Students are challenged to make a difference locally and globally by tackling the Sustainable Development Goals.',
      ctaText: 'Learn More',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
      title: 'IMG Academy',
      description: 'IMG Academy\'s sports and wellbeing programme helps students build confidence, resilience, and leadership skills through world-class athletic training, personal development, and elite coaching.',
      ctaText: 'Learn More',
      ctaLink: '#'
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="collaborations"
      className="py-32 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.2' }}
          >
            COLLABORATIONS
          </h2>
          <p className="text-base md:text-lg text-[#212121] max-w-4xl mx-auto leading-relaxed">
            We help our students succeed through our partnerships with world-leading organisations.
          </p>
        </motion.div>

        {/* Collaboration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {collaborations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex-grow flex flex-col">
                <div className="w-32 h-32 mx-auto mb-8 mt-8 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1a5336] mb-6">
                  {item.title}
                </h3>
                <p className="text-[#212121] text-base leading-relaxed mb-8 px-4 flex-grow">
                  {item.description}
                </p>
              </div>
              <div className="mb-8">
                <button className="px-8 py-3 bg-[#b8e6d9] text-[#1a5336] font-medium text-sm hover:bg-[#a3d9c9] transition-colors border-0">
                  <span className="mr-2">+</span>
                  {item.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-10 py-4 border-2 border-[#1a5336] text-[#1a5336] font-medium text-sm hover:bg-[#1a5336] hover:text-white transition-colors uppercase tracking-wider">
            MORE ABOUT OUR COLLABORATIONS
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 4: DISCOVERING TALENTS ====================
function DiscoveringTalentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="discovering-talents"
      className="py-24 px-4 md:px-20 bg-[#1a5336] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzYzMDg3NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Students discovering their talents"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 
              className="text-white mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Discovering Hidden Talents
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Every student possesses unique talents waiting to be discovered and nurtured. Our diverse 
              program offerings and personalized approach ensure that each child finds their passion 
              and develops their natural abilities.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Through mentorship, exploration, and hands-on experiences, we guide students on a journey 
              of self-discovery that builds confidence and ignites lifelong learning.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
            >
              Explore Talents
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: PASSION AREAS ====================
function PassionAreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const passionAreas = [
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center',
      title: 'Sports & Athletics',
      description: 'Develop teamwork, discipline, and physical excellence through our comprehensive sports programs.',
      ctaText: 'Join Sports',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center',
      title: 'Music & Performance',
      description: 'Express creativity and build confidence through music, drama, and performing arts.',
      ctaText: 'Explore Music',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop&crop=center',
      title: 'Visual Arts',
      description: 'Unleash artistic potential through painting, sculpture, digital arts, and creative design.',
      ctaText: 'Create Art',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop&crop=center',
      title: 'Community Service',
      description: 'Make a positive impact through volunteer work and social responsibility projects.',
      ctaText: 'Get Involved',
      ctaLink: '#'
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="passion-areas"
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
            Passion Areas to Explore
          </h2>
          <p className="text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed">
            Discover your passion and develop your talents through our diverse range of activities 
            designed to inspire and challenge every student.
          </p>
        </motion.div>

        {/* Passion Area Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passionAreas.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#1a5336]/10 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a5336] mb-3">
                {item.title}
              </h3>
              <p className="text-[#212121] text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <a
                href={item.ctaLink}
                className="inline-flex items-center gap-2 text-[#1a5336] font-medium text-sm hover:text-[#FABA1E] transition-colors"
              >
                {item.ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 6: BEYOND THE CLASSROOM ====================
function BeyondTheClassroomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="beyond-classroom"
      className="py-24 px-4 md:px-20 bg-[#1a5336] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-white mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Learning Beyond the Classroom
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Real-world learning experiences that extend far beyond traditional classroom walls. 
              Our students engage in field studies, internships, and community projects that bring 
              academic concepts to life.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              These immersive experiences develop critical thinking, problem-solving skills, and 
              cultural awareness while preparing students for success in an interconnected world.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
            >
              Learn More
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
              src="https://images.unsplash.com/photo-1540479859555-17af45c78602?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMGtpZHN8ZW58MHx8MHx8fDA%3D"
              alt="Students learning in outdoor field study"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 7: EXTRA PROGRAMS ====================
function ExtraProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const extraPrograms = [
    {
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop&crop=center',
      title: 'Duke of Edinburgh Award',
      description: 'Internationally recognized program developing self-reliance, perseverance, and responsibility through adventurous journeys.',
      ctaText: 'Join Program',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop&crop=center',
      title: 'NASA Space Center',
      description: 'Exclusive STEM education partnerships providing hands-on space exploration and technology experiences.',
      ctaText: 'Explore Space',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      title: 'Expedition Trips',
      description: 'Life-changing adventure expeditions to diverse ecosystems around the world for environmental learning.',
      ctaText: 'Plan Trip',
      ctaLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
      title: 'Residential Programs',
      description: 'Immersive residential experiences fostering independence, leadership, and personal growth.',
      ctaText: 'Apply Now',
      ctaLink: '#'
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="programs"
      className="py-24 px-4 md:px-20 bg-[#e8f4f1]"
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
            Extraordinary Programs
          </h2>
          <p className="text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed">
            Specialized programs that challenge students to push their boundaries and achieve 
            extraordinary personal and academic growth.
          </p>
        </motion.div>

        {/* Extra Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {extraPrograms.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                <h3 className="text-xl font-bold text-[#1a5336] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#212121] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href={item.ctaLink}
                  className="inline-flex items-center gap-2 text-[#1a5336] font-medium text-sm hover:text-[#FABA1E] transition-colors"
                >
                  {item.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 8: STUDENT WELLBEING ====================
function StudentWellbeingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="wellbeing"
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd2VsbGJlaW5nfGVufDF8fHx8MTc2MzA4NzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Students practicing mindfulness and wellbeing"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 
              className="text-[#1a5336] mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Student Wellbeing & Support
            </h2>
            <p className="text-[#212121] text-lg leading-relaxed mb-6">
              The physical, emotional, and mental wellbeing of our students is our highest priority. 
              Our comprehensive support system ensures every student feels valued, safe, and empowered 
              to reach their full potential.
            </p>
            <p className="text-[#212121] text-base leading-relaxed mb-8">
              From counseling services and peer support programs to wellness activities and mindfulness 
              training, we provide the resources students need to thrive academically and personally.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-[#1a5336] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0f3021] transition-colors"
            >
              Support Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 9: SOCIAL PURPOSE ====================
function SocialPurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="social-purpose"
      className="py-24 px-4 md:px-20 bg-[#e8f4f1]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-[#1a5336] mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Education with Social Purpose
            </h2>
            <p className="text-[#212121] text-lg leading-relaxed mb-6">
              We believe education should extend beyond academic achievement to include social 
              responsibility and global citizenship. Our students learn to be compassionate leaders 
              who make positive impacts in their communities.
            </p>
            <p className="text-[#212121] text-base leading-relaxed mb-8">
              Through service learning, environmental initiatives, and social justice projects, 
              students develop empathy, cultural awareness, and the skills to address real-world challenges.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
            >
              Make Impact
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
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzA4NzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Students engaged in community service"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 10: SURROUNDINGS MADE FOR LEARNING ====================
function SurroundingsMadeForLearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="surroundings"
      className="py-24 px-4 md:px-20 bg-[#1a5336]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
         style={{ 
        minHeight: '420px',
        backgroundColor: '#064e29ff'
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-white mb-6"
              style={{ fontSize: '36px', lineHeight: '1.2' }}
            >
              Surroundings Made for Learning
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Our campus is thoughtfully designed to inspire curiosity, creativity, and collaboration. 
              From cutting-edge laboratories to peaceful outdoor spaces, every environment supports 
              different aspects of student learning and development.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Natural lighting, flexible learning spaces, and sustainable design principles create 
              an atmosphere that promotes focus, wellbeing, and academic excellence.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
            >
              Tour Campus
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
              src="https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXN8ZW58MXx8fHwxNzYzMDg3NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beautiful school campus designed for learning"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}