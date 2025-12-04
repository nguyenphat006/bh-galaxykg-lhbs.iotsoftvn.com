import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Download, 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Globe,
  Users,
  Award,
  Lightbulb,
  Target,
  Heart,
  Zap,
  GraduationCap,
  Languages,
  Microscope,
  Music,
  Palette,
  Calculator
} from 'lucide-react';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { useNavigate } from 'react-router';


export default function AcademicsOverviewPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <div className="relative ">
      {/* Section 1: Header */}
      <HeaderAcademics onNavigate={onNavigate} />
      
      {/* Section 2: Program Highlights */}
      <ProgramHighlightsSection />
      
      {/* Section 3: Curriculum Structure */}
      <CurriculumStructureSection onNavigate={onNavigate} />
      
      {/* Section 4: Pathways */}
      <PathwaysSection onNavigate={onNavigate} />
      
      {/* Section 5: Helper Footer */}
      <HelperFooterAcademics onNavigate={onNavigate} />
    </div>
  );
}

// ==================== SECTION 1: HEADER ACADEMICS ====================
function HeaderAcademics({ onNavigate }: { onNavigate: (path: string) => void }) {
  const AO_TITLE = "World-Class Bilingual Education";
  const AO_SUB = "Where Vietnamese Excellence Meets Global Standards";
  const AO_LEAD = "Our rigorous academic program seamlessly blends Vietnamese national curriculum with international best practices, preparing students for success in both local and global contexts. Every lesson is designed to develop bilingual mastery, critical thinking, and cultural fluency.";
  
  const AO_STAT_CLASS = { value: "15:1", label: "Student-Teacher Ratio" };
  const AO_STAT_TEACHERS = { value: "100%", label: "Bilingual Faculty" };
  const AO_STAT_OUTCOMES = { value: "96%", label: "University Acceptance" };

  return (
    <section className="relative min-h-[65vh] md:min-h-[50vh] flex items-center bg-[#1a5336] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://lhbs.edu.vn/wp-content/uploads/2025/02/BL8Q8839.jpg"
          alt="LHBS students engaged in bilingual learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a5336]/95 via-[#1a5336]/85 to-[#1a5336]/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 md:px-20 py-24">
        <div className="max-w-[720px]">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                  aria-label="Navigate to home page"
                >
                  Home
                </button>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
              </li>
              <li className="text-[#fffae9] ">Academics</li>
            </ol>
          </nav>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subhead */}
            <p className=" text-sm md:text-base text-[#FABA1E] mb-4 tracking-wide uppercase">
              {AO_SUB}
            </p>
            
            {/* Title */}
            <h1 className=" text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
              {AO_TITLE}
            </h1>
            
            {/* Lead */}
            <p className=" text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed">
              {AO_LEAD}
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <StatBadge value={AO_STAT_CLASS.value} label={AO_STAT_CLASS.label} />
              <StatBadge value={AO_STAT_TEACHERS.value} label={AO_STAT_TEACHERS.label} />
              <StatBadge value={AO_STAT_OUTCOMES.value} label={AO_STAT_OUTCOMES.label} />
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/downloads/lhbs-curriculum-guide-2025.pdf"
                download
                className="px-12 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] flex items-center justify-center gap-2 rounded-full"
                aria-label="Download curriculum guide PDF"
              >
                <Download className="w-4 h-4" />
                CURRICULUM GUIDE
              </a>
              
              <button
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-12 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold hover: hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                aria-label="Book a campus tour"
              >
                BOOK A TOUR
              </button>
            </div>
            
            {/* Tertiary Link */}
            <button
              onClick={() => onNavigate('/contact/academic-counselor')}
              className="flex items-center gap-2 text-[#fffae9]/90 hover:text-[#fffae9] transition-colors  text-sm focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              aria-label="Talk to academic counselor"
            >
              <Users className="w-4 h-4" />
              <span>Talk to an Academic Counselor</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="/10 backdrop-blur-sm border border-[#fffae9]/20 p-4 text-center rounded-lg">
      <div className=" text-2xl md:text-3xl text-[#FABA1E] mb-1">
        {value}
      </div>
      <div className=" text-xs text-[#fffae9]/80 leading-tight">
        {label}
      </div>
    </div>
  );
}

// ==================== SECTION 2: PROGRAM HIGHLIGHTS ====================
function ProgramHighlightsSection() {
  const highlights = [
    {
      icon: Languages,
      title: "True Bilingual Immersion",
      description: "50-50 Vietnamese-English instruction with native-speaking teachers in both languages"
    },
    {
      icon: Globe,
      title: "Global & Local Standards",
      description: "Aligned with Vietnamese national curriculum and international benchmarks (Cambridge, IB)"
    },
    {
      icon: Lightbulb,
      title: "Inquiry-Based Learning",
      description: "Students develop critical thinking through hands-on exploration and problem-solving"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 15:1 ratio ensures personalized attention and differentiated instruction"
    },
    {
      icon: Target,
      title: "Character Development",
      description: "Embedded values education focusing on integrity, resilience, and global citizenship"
    },
    {
      icon: Microscope,
      title: "STEAM Excellence",
      description: "Advanced Science, Technology, Engineering, Arts & Math programs with modern labs"
    },
    {
      icon: Award,
      title: "Exceptional Outcomes",
      description: "96% university acceptance rate with graduates attending top global institutions"
    },
    {
      icon: Heart,
      title: "Holistic Support",
      description: "Counselors, learning specialists, and well-being programs support every student"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="highlights" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto " ref={ref}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className=" text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          What Makes Our Program Exceptional
        </h2>
        <p className=" text-base md:text-lg text-[#212121] max-w-[70ch] mx-auto">
          Our bilingual curriculum is built on research-backed principles and 15 years of proven success in Vietnamese education.
        </p>
      </div>
      
      {/* 8 Feature Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-white border-2 border-[#1a5336] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center mb-4">
              <highlight.icon className="w-6 h-6 text-[#FABA1E]" aria-hidden="true" />
            </div>
            
            {/* Title */}
            <h3 className=" text-xl text-[#1a5336] mb-3">
              {highlight.title}
            </h3>
            
            {/* Description */}
            <p className=" text-sm text-[#212121] leading-relaxed">
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ==================== SECTION 3: CURRICULUM STRUCTURE ====================
function CurriculumStructureSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeTab, setActiveTab] = useState<'kg' | 'primary' | 'middle' | 'high'>('primary');

  const curriculumData = {
    kg: {
      name: "Galaxy KG (Ages 3-5)",
      overview: "Our early childhood program builds foundational skills through play-based, bilingual learning. Children develop language proficiency, social-emotional skills, and a love of learning in a nurturing environment.",
      subjects: "Vietnamese Language Arts, English Language Arts, Math Readiness, Science Exploration, Creative Arts (Music, Art, Drama), Physical Education, Character & Values",
      methods: "Play-based learning, Thematic units, Storytelling, Hands-on activities, Music & movement, Outdoor exploration, Parent-child engagement",
      allocation: [
        { subject: "Vietnamese", hours: "10 hrs/week" },
        { subject: "English", hours: "10 hrs/week" },
        { subject: "Math & Science", hours: "6 hrs/week" },
        { subject: "Arts & PE", hours: "6 hrs/week" }
      ],
      assess: "Ongoing observation, Portfolio documentation, Developmental checklists, Parent conferences (2x/year)",
      homework: "No formal homework. Families receive activity suggestions for home learning.",
      support: "Learning specialists, Bilingual coordinators, Transition support to Grade 1"
    },
    primary: {
      name: "Primary School (Grades 1-5)",
      overview: "Primary students master core academic skills in both languages while developing inquiry skills, creativity, and collaboration. Our curriculum meets Vietnamese national standards and incorporates international best practices.",
      subjects: "Vietnamese Language & Literature, English Language & Literature, Mathematics, Science, Social Studies, Arts (Visual, Music, Drama), Physical Education, ICT, Character Education",
      methods: "Inquiry-based learning, Project-based units, Collaborative learning, Differentiated instruction, Technology integration, Cross-curricular connections",
      allocation: [
        { subject: "Vietnamese", hours: "8 hrs/week" },
        { subject: "English", hours: "8 hrs/week" },
        { subject: "Math", hours: "6 hrs/week" },
        { subject: "Science", hours: "4 hrs/week" },
        { subject: "Other subjects", hours: "6 hrs/week" }
      ],
      assess: "Continuous assessment, Unit tests, Projects & presentations, Standardized tests (Grade 5), Report cards (3x/year)",
      homework: "30-45 min/day. Reading in both languages, Math practice, Project work",
      support: "ESL/Vietnamese support, Learning specialists, Enrichment programs, After-school tutoring"
    },
    middle: {
      name: "Middle School (Grades 6-9)",
      overview: "Middle school curriculum deepens academic rigor while supporting adolescent development. Students explore diverse subjects, develop critical thinking, and prepare for high school pathways including Vietnamese and international tracks.",
      subjects: "Vietnamese Language & Literature, English Language & Literature, Mathematics, Biology, Chemistry, Physics, History, Geography, Civics, Arts, PE, ICT, Life Skills",
      methods: "Inquiry & research-based, Problem-based learning, Debate & Socratic seminars, Lab-based science, Technology-enhanced, Student-led projects, Service learning",
      allocation: [
        { subject: "Vietnamese", hours: "5 hrs/week" },
        { subject: "English", hours: "5 hrs/week" },
        { subject: "Math", hours: "5 hrs/week" },
        { subject: "Sciences", hours: "6 hrs/week" },
        { subject: "Humanities & Others", hours: "11 hrs/week" }
      ],
      assess: "Continuous assessment, Term exams (3x/year), Research papers, Oral presentations, National exam prep (Grade 9)",
      homework: "60-90 min/day. Varied by subject, includes reading, problem sets, essays, research",
      support: "Academic advisors, University counseling starts Grade 9, Peer tutoring, Exam preparation"
    },
    high: {
      name: "High School (Grades 10-12)",
      overview: "Our high school offers dual pathways: Vietnamese National Track (preparing for university entrance exams) and International Track (IGCSE/A-Level or IB preparation). Both paths maintain bilingual excellence and lead to top universities worldwide.",
      subjects: "Vietnamese Track: Vietnamese Lit, English, Math, Physics, Chemistry, Biology, History, Geography, Civics, PE. International Track: English A, Vietnamese A, Math, Sciences (3), Humanities (2), Arts, TOK/Research",
      methods: "Advanced inquiry, Independent research, University-level seminars, Lab research, Extended essays, Internships, Community projects, Exam preparation coaching",
      allocation: [
        { subject: "Core subjects (Viet/Eng/Math)", hours: "15 hrs/week" },
        { subject: "Sciences & Humanities", hours: "12 hrs/week" },
        { subject: "Electives & PE", hours: "5 hrs/week" }
      ],
      assess: "Continuous assessment, Mock exams, Final exams (2x/year), National exams (Grade 12 Vietnamese track), IGCSE/A-Level/IB exams (International track)",
      homework: "2-3 hrs/day. University-level reading, problem sets, essays, research, exam practice",
      support: "University counselors, Subject tutors, Mental health support, Career guidance, Alumni mentorship"
    }
  };

  const activeData = curriculumData[activeTab];

  return (
    <section id="curriculum" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className=" text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          Curriculum Structure by Division
        </h2>
        <p className=" text-base md:text-lg text-[#212121] max-w-[70ch] mx-auto">
          Our curriculum evolves with students' developmental stages, maintaining bilingual excellence from early childhood through university preparation.
        </p>
      </div>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist" aria-label="Curriculum by division">
        {(['kg', 'primary', 'middle', 'high'] as const).map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`${tab}-panel`}
            onClick={() => setActiveTab(tab)}
            className={`px-8 h-12  transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] ${
              activeTab === tab
                ? 'bg-[#1a5336] text-[#fffae9]'
                : ' text-[#1a5336] border-2 border-[#1a5336] hover:bg-[#1a5336]/10'
            }`}
          >
            {curriculumData[tab].name}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div
        id={`${activeTab}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
        className="grid lg:grid-cols-2 gap-12"
      >
        {/* Left Column: Overview */}
        <div className="space-y-8">
          {/* Overview */}
          <div>
            <h3 className=" text-2xl text-[#1a5336] mb-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#FABA1E]" aria-hidden="true" />
              Program Overview
            </h3>
            <p className=" text-sm text-[#212121] leading-relaxed">
              {activeData.overview}
            </p>
          </div>
          
          {/* Core Subjects */}
          <div>
            <h3 className=" text-2xl text-[#1a5336] mb-4 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#FABA1E]" aria-hidden="true" />
              Core Subjects
            </h3>
            <p className=" text-sm text-[#212121] leading-relaxed">
              {activeData.subjects}
            </p>
          </div>
          
          {/* Teaching Methods */}
          <div>
            <h3 className=" text-2xl text-[#1a5336] mb-4 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-[#FABA1E]" aria-hidden="true" />
              Teaching Methods
            </h3>
            <p className=" text-sm text-[#212121] leading-relaxed">
              {activeData.methods}
            </p>
          </div>
        </div>
        
        {/* Right Column: At-a-Glance */}
        <div className="space-y-8">
          {/* Weekly Allocation */}
          <div className="border-2 border-[#1a5336] p-6 rounded-lg">
            <h3 className=" text-2xl text-[#1a5336] mb-4">
              Weekly Time Allocation
            </h3>
            <div className="space-y-3">
              {activeData.allocation.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-[#1a5336]/20 last:border-0">
                  <span className=" text-sm text-[#212121]">{item.subject}</span>
                  <span className=" text-sm text-[#1a5336] font-bold">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Assessment */}
          <div className=" p-6">
            <h4 className=" text-lg text-[#1a5336] mb-3">
              Assessment & Reporting
            </h4>
            <p className=" text-sm text-[#212121]">
              {activeData.assess}
            </p>
          </div>
          
          {/* Homework */}
          <div className=" p-6">
            <h4 className=" text-lg text-[#1a5336] mb-3">
              Homework Policy
            </h4>
            <p className=" text-sm text-[#212121]">
              {activeData.homework}
            </p>
          </div>
          
          {/* Support */}
          <div className=" p-6">
            <h4 className=" text-lg text-[#1a5336] mb-3">
              Learning Support
            </h4>
            <p className=" text-sm text-[#212121]">
              {activeData.support}
            </p>
          </div>
        </div>
      </div>
      
      {/* Download Link */}
      <div className="mt-12 text-center">
        <a
          href={`/downloads/${activeTab}-curriculum-detailed.pdf`}
          download
          className="inline-flex items-center gap-2 px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-full"
        >
          <Download className="w-4 h-4" />
          Download {activeData.name} Detailed Curriculum
        </a>
      </div>
    </section>
  );
}

// ==================== SECTION 4: PATHWAYS ====================
function PathwaysSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const pathways = [
    {
      image: "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_1315.jpg",
      title: "Vietnamese National Track",
      bullets: [
        "Complete Vietnamese national curriculum",
        "Prepares for Vietnamese university entrance exams",
        "Maintains 50% English instruction for bilingual fluency",
        "Pathway to top Vietnamese and international universities"
      ],
      tag: "Grades 10-12",
      link: "/academics/vietnamese-track"
    },
    {
      image: "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_1315.jpg",
      title: "International Baccalaureate (IB)",
      bullets: [
        "IB Diploma Programme (IBDP) pathway",
        "Globally recognized university preparation",
        "Bilingual IB with Vietnamese A and English A",
        "Access to universities worldwide"
      ],
      tag: "Grades 11-12",
      link: "/academics/ib-programme"
    },
    {
      image: "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_1315.jpg",
      title: "Cambridge IGCSE/A-Level",
      bullets: [
        "Cambridge International curriculum",
        "IGCSE (Grades 9-10), A-Level (Grades 11-12)",
        "Flexible subject combinations",
        "Strong pathway to UK, US, and Commonwealth universities"
      ],
      tag: "Grades 9-12",
      link: "/academics/cambridge-pathway"
    },
    {
      image: "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_1315.jpg",
      title: "Arts & Performing Arts Track",
      bullets: [
        "Specialized curriculum for arts-focused students",
        "Visual arts, music, drama, creative writing",
        "Portfolio development for arts university applications",
        "Balanced with academic core curriculum"
      ],
      tag: "Grades 9-12",
      link: "/academics/arts-track"
    },
    {
      image: "https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_1315.jpg",
      title: "STEAM Excellence Programme",
      bullets: [
        "Advanced Science, Technology, Engineering, Arts & Math",
        "Research projects, competitions, innovation labs",
        "Partnerships with universities and tech companies",
        "Prepares for STEM-focused university programs"
      ],
      tag: "Grades 6-12",
      link: "/academics/steam-programme"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.querySelector('.pathway-card')?.clientWidth || 0;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(pathways.length - 1, currentIndex + 1));
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scroll('left');
    } else if (e.key === 'ArrowRight') {
      scroll('right');
    }
  };

  return (
    <section id="pathways" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto ">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className=" text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
          Academic Pathways & Specializations
        </h2>
        <p className=" text-base md:text-lg text-[#212121] max-w-[70ch] mx-auto">
          Choose the pathway that best fits your goals—all paths maintain bilingual excellence and lead to university success.
        </p>
      </div>
      
      {/* Carousel Controls */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => scroll('left')}
          disabled={currentIndex === 0}
          className="w-12 h-12 bg-[#1a5336] text-[#fffae9] flex items-center justify-center hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous pathway"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Pathway navigation">
          {pathways.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={currentIndex === index}
              onClick={() => {
                setCurrentIndex(index);
                const container = carouselRef.current;
                if (container) {
                  const cardWidth = container.querySelector('.pathway-card')?.clientWidth || 0;
                  const gap = 24;
                  container.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
                }
              }}
              className={`w-3 h-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] ${
                currentIndex === index ? 'bg-[#1a5336]' : 'bg-[#1a5336]/30'
              }`}
              aria-label={`Go to pathway ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => scroll('right')}
          disabled={currentIndex === pathways.length - 1}
          className="w-12 h-12 bg-[#1a5336] text-[#fffae9] flex items-center justify-center hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next pathway"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Carousel */}
      <div
        ref={carouselRef}
        onKeyDown={handleKeyDown}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region"
        aria-live="polite"
        tabIndex={0}
      >
        {pathways.map((pathway, index) => (
          <div
            key={index}
            className="pathway-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
          >
            <div className="bg-white border-2 border-[#1a5336] h-full flex flex-col rounded-lg">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={pathway.image}
                  alt={`${pathway.title} pathway students`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Tag */}
                <div className="inline-block px-3 py-1 bg-[#FABA1E] text-[#1a5336]  text-xs font-bold uppercase mb-4 self-start">
                  {pathway.tag}
                </div>
                
                {/* Title */}
                <h3 className=" text-2xl text-[#1a5336] mb-4">
                  {pathway.title}
                </h3>
                
                {/* Bullets */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pathway.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#FABA1E] mt-1 flex-shrink-0">•</span>
                      <span className=" text-sm text-[#212121]">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button
                  onClick={() => onNavigate(pathway.link)}
                  className="w-full px-6 h-12 border-2 border-[#1a5336] text-[#1a5336]  font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                  aria-label={`Learn more about ${pathway.title}`}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="mt-12 text-center">
        <button
          onClick={() => onNavigate('/academics/pathways')}
          className="inline-flex items-center gap-2 text-[#1a5336] hover:text-[#FABA1E] transition-colors  focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
        >
          <span>Compare All Academic Pathways</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

// ==================== SECTION 5: HELPER FOOTER ====================
function HelperFooterAcademics({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="bg-[#1a5336] py-12 px-4 md:px-20"
       style={{ 
        minHeight: '420px',
        backgroundColor: '#064e29ff'
      }}>
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Header */}
        <h2 className=" text-3xl md:text-4xl text-[#fffae9] mb-4">
          Questions About Our Curriculum?
        </h2>
        <p className=" text-base text-[#fffae9]/90 mb-8 max-w-[60ch] mx-auto">
          Our academic counselors are here to help you understand our programs and find the right pathway for your child.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('/contact/academic-counselor')}
            className="px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9]"
            aria-label="Ask an academic counselor"
          >
            ASK A COUNSELOR
          </button>
          
          <button
            onClick={() => onNavigate('/contact/book-tour')}
            className="px-8 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold hover: hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            aria-label="Book a campus tour"
          >
            BOOK A TOUR
          </button>
          
          <a
            href="/downloads/lhbs-curriculum-guide-2025.pdf"
            download
            className="px-8 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold hover: hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] flex items-center justify-center gap-2 rounded-full"
            aria-label="Download curriculum guide"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD GUIDE
          </a>
        </div>
      </div>
    </section>
  );
}