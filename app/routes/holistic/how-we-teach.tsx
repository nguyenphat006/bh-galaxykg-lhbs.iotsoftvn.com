import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import {useNavigate} from 'react-router'

export default function HowWeTeachPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <div className="w-full">
      {/* Section 1: Header */}
      <Sec_Header_HowWeTeach onNavigate={onNavigate} />
      
      {/* Section 2: About Teachers */}
      <Sec_AboutTeachers />
      
      {/* Section 3: Meet Our Team */}
      <Sec_MeetTeam />
      
      {/* Section 4: Teacher-Led Technology */}
      <Sec_TeacherLedTechnology onNavigate={onNavigate} />
      
      {/* Section 5: Teacher Quality */}
      <Sec_TeacherQuality />
      
      {/* Section 6: Quote */}
      <Sec_Quote />
      
      {/* Section 7: International Standards */}
      <Sec_InternationalStandards />
      
      {/* Section 8: Working With Us */}
      <Sec_WorkingWithUs onNavigate={onNavigate} />
      
      {/* Section 9: Welcome Message */}
      <Sec_WelcomeMessage onNavigate={onNavigate} />
    </div>
  );
}

// ==================== SECTION 1: Header ====================
function Sec_Header_HowWeTeach({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeTab, setActiveTab] = useState<'academic' | 'future'>('academic');

  const HDR_TITLE = "How We Teach";
  const HDR_SUBHEAD = "Educational Excellence Through Innovation";
  const HDR_DESC = "At LHBS, our teaching methodology combines proven educational practices with innovative approaches, creating an environment where every student can thrive academically, socially, and personally.";
  const HDR_CTA_TEXT = "Explore Our Curriculum";
  const HDR_CTA_LINK = "/academics/overview";

  return (
    <section 
      className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29taW5nJTIwc2Nob29sJTIwdGVhY2h8ZW58MHx8MHx8fDA%3D)`,
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
                className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                Home
              </button>
            </li>
            <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
            <li>
              <button 
                onClick={() => onNavigate('/academics/overview')}
                className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                Academics
              </button>
            </li>
            <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
            <li className="text-[#fffae9] ">How We Teach</li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
            EDUCATIONAL METHODOLOGY
          </p>
          <h1 
            className="font-['SVN-Gotham'] text-white mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {HDR_TITLE}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#fffae9]/90 mb-6 font-light">
            {HDR_SUBHEAD}
          </h2>
          <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
            {HDR_DESC}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(HDR_CTA_LINK)}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
            >
              {HDR_CTA_TEXT}
            </button>
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SECTION 2: About Teachers ====================
function Sec_AboutTeachers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const AT_TITLE = "Exceptional Educators, Exceptional Results";
  const AT_DESC_1 = "Our teachers are more than instructors—they are mentors, innovators, and passionate advocates for student success. Each educator brings specialized expertise, international qualifications, and a deep commitment to fostering both academic excellence and character development.";
  const AT_DESC_2 = "Through continuous professional development and collaborative teaching practices, our faculty stays at the forefront of educational innovation, ensuring that every lesson is engaging, relevant, and impactful.";

  return (
    <motion.section 
      id="about-teachers"
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZXhjZWxsZW5jZXxlbnwxfHx8fDE3NjMxMDc3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="LHBS teachers collaborating and planning innovative lessons for student success"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {AT_TITLE}
          </h2>
          
          <p className="text-base md:text-lg text-[#212121] mb-6 leading-relaxed">
            {AT_DESC_1}
          </p>
          
          <p className="text-base md:text-lg text-[#212121] mb-8 leading-relaxed">
            {AT_DESC_2}
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            {[
              'International teaching qualifications',
              'Bilingual education specialists',
              'Continuous professional development',
              'Student-centered pedagogical approaches'
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              >
                <span className="text-[#FABA1E] text-xl mt-1">•</span>
                <span className="text-[#212121]">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: Meet Our Team ====================
function Sec_MeetTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const MT_TITLE = "Meet Our Dedicated Educators";
  const MT_SUBHEAD = "Passionate professionals committed to student success";

  const teachers = [
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NjMxMDc3NzN8MA&ixlib=rb-4.1.0&q=80&w=400",
      name: "Ms. Sarah Johnson",
      role: "Head of Primary Education",
      bio: "With over 15 years of international teaching experience, Ms. Johnson specializes in early childhood development and bilingual education.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXQlMjBtYW58ZW58MXx8fHwxNzYzMTA3Nzc0fDA&ixlib=rb-4.1.0&q=80&w=400",
      name: "Mr. David Chen",
      role: "Mathematics & Science Coordinator",
      bio: "Mr. Chen brings innovative STEM teaching methodologies from his background in engineering and educational technology.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXQlMjBtYW58ZW58MXx8fHwxNzYzMTA3Nzc0fDA&ixlib=rb-4.1.0&q=80&w=400",
      name: "Ms. Emily Rodriguez",
      role: "English Language Arts Specialist",
      bio: "Specializing in literacy development and creative writing, Ms. Rodriguez helps students express themselves confidently in English.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NjMxMDc3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
      name: "Mrs. Linh Nguyen",
      role: "Vietnamese Language & Culture Director",
      bio: "Mrs. Nguyen ensures students maintain strong connections to Vietnamese heritage while developing global perspectives.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXQlMjBtYW58ZW58MXx8fHwxNzYzMTA3Nzc1fDA&ixlib=rb-4.1.0&q=80&w=400",
      name: "Mr. James Wilson",
      role: "Physical Education & Wellness",
      bio: "Promoting healthy lifestyles and team building through sports and physical activities that build character and confidence.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NjMxMDc3NzZ8MA&ixlib=rb-4.1.0&q=80&w=400",
      name: "Ms. Anna Thompson",
      role: "Arts & Creative Development",
      bio: "Fostering creativity and self-expression through visual arts, music, and drama programs that inspire and engage students.",
      link: "#"
    }
  ];

  return (
    <motion.section 
      id="meet-team"
      ref={ref}
      className="py-24 px-4 md:px-20"
      style={{ backgroundColor: '#FABA1E' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 
            className="text-[#1a5336] mb-4"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {MT_TITLE}
          </h2>
          <p className="text-lg text-[#1a5336]/80 max-w-2xl mx-auto">
            {MT_SUBHEAD}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 cursor-pointer hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            >
              <div className="mb-4">
                <img
                  src={teacher.image}
                  alt={`Portrait of ${teacher.name}, ${teacher.role} at LHBS`}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a5336] mb-1 text-center">
                {teacher.name}
              </h3>
              <p className="text-[#FABA1E] font-medium text-center mb-3">
                {teacher.role}
              </p>
              <p className="text-[#212121] text-sm leading-relaxed mb-4 text-center">
                {teacher.bio}
              </p>
              <button className="w-full px-4 py-2 border border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors text-sm">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 4: Teacher-Led Technology ====================
function Sec_TeacherLedTechnology({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const TLT_TITLE = "Technology-Enhanced Learning";
  const TLT_DESC_1 = "Our teachers expertly integrate cutting-edge educational technology to create immersive, interactive learning experiences. From smart classrooms to digital collaboration tools, technology amplifies our educators' ability to personalize instruction and engage students.";
  const TLT_DESC_2 = "Rather than replacing human connection, our technology enhances it, allowing teachers to focus on what they do best: inspiring, mentoring, and guiding students toward academic and personal excellence.";
  const TLT_CTA_TEXT = "Explore Our Facilities";
  const TLT_CTA_LINK = "/our-school/facilities";

  return (
    <motion.section 
      id="technology"
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxMDc3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="LHBS teacher using interactive technology in a modern classroom setting"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {TLT_TITLE}
          </h2>
          
          <p className="text-base md:text-lg text-[#212121] mb-6 leading-relaxed">
            {TLT_DESC_1}
          </p>
          
          <p className="text-base md:text-lg text-[#212121] mb-8 leading-relaxed">
            {TLT_DESC_2}
          </p>

          <motion.button
            onClick={() => onNavigate(TLT_CTA_LINK)}
            className="px-8 h-12 bg-[#1a5336] text-white font-bold cursor-pointer hover:bg-[#14432b] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {TLT_CTA_TEXT}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: Teacher Quality ====================
function Sec_TeacherQuality() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const TQ_TITLE = "Commitment to Excellence";
  const TQ_DESC = "Every LHBS educator undergoes rigorous selection and continuous professional development. Our teachers hold advanced degrees, international certifications, and bring diverse global perspectives to the classroom. We invest in ongoing training, research, and collaboration to ensure our teaching practices remain innovative and effective, creating an environment where both educators and students can reach their full potential.";

  return (
    <motion.section 
      id="quality"
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {TQ_TITLE}
          </h2>
          
          <p className="text-base md:text-lg text-[#212121] leading-relaxed">
            {TQ_DESC}
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcXVhbGl0eXxlbnwxfHx8fDE3NjMxMDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional development session with LHBS educators focusing on teaching excellence"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 6: Quote ====================
function Sec_Quote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const QT_IMAGE = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2lwYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxMDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=400";
  const QT_TEXT = "Our teachers don't just deliver curriculum—they inspire curiosity, nurture talents, and prepare students for a rapidly changing world. Every day, I witness the transformative power of passionate educators who see the potential in every child.";
  const QT_NAME = "Dr. Mai Phuong";
  const QT_ROLE = "Principal, LHBS";

  return (
    <motion.section 
      id="quote"
      ref={ref}
      className="py-24 px-4 md:px-20"
      style={{ backgroundColor: '#E8F4F8' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={QT_IMAGE}
              alt={`Portrait of ${QT_NAME}, ${QT_ROLE}`}
              className="w-64 h-64 rounded-full object-cover"
            />
          </motion.div>

          {/* Right: Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-6xl text-[#1a5336] opacity-20 mb-4 leading-none">"</div>
            <blockquote className="text-lg md:text-xl text-[#1a5336] mb-6 leading-relaxed italic">
              {QT_TEXT}
            </blockquote>
            <div>
              <p className="font-bold text-[#1a5336] text-lg">{QT_NAME}</p>
              <p className="text-[#666]">{QT_ROLE}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 7: International Standards ====================
function Sec_InternationalStandards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const IS_TITLE = "International Teaching Standards";
  const IS_DESC = "LHBS maintains the highest international educational standards through rigorous accreditation processes and continuous alignment with global best practices. Our curriculum meets both Vietnamese national standards and international benchmarks, ensuring our students are prepared for success anywhere in the world.";
  const IS_IMAGE = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzEwNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <motion.section 
      id="international"
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {IS_TITLE}
          </h2>
          
          <p className="text-base md:text-lg text-[#212121] leading-relaxed">
            {IS_DESC}
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={IS_IMAGE}
            alt="International education standards and global classroom environment at LHBS"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 8: Working With Us ====================
function Sec_WorkingWithUs({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const WWU_TITLE = "Join Our Teaching Community";
  const WWU_DESC = "Are you a passionate educator looking to make a meaningful impact? LHBS offers a collaborative, supportive environment where teachers can grow professionally while making a difference in students' lives. We provide competitive compensation, professional development opportunities, and the chance to be part of a truly innovative educational community.";
  const WWU_CTA_TEXT = "Explore Career Opportunities";
  const WWU_CTA_LINK = "/careers";

  return (
    <motion.section 
      id="working"
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {WWU_TITLE}
          </h2>
          
          <p className="text-base md:text-lg text-[#212121] mb-8 leading-relaxed">
            {WWU_DESC}
          </p>

          <motion.button
            onClick={() => onNavigate(WWU_CTA_LINK)}
            className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold cursor-pointer hover:bg-[#e5a812] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {WWU_CTA_TEXT}
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzEwNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="LHBS teaching community collaborating in a professional development session"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 9: Welcome Message ====================
function Sec_WelcomeMessage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const WM_TITLE = "Experience Our Teaching Excellence";
  const WM_DESC = "We invite you to visit our campus and witness firsthand how our exceptional educators create transformative learning experiences. See our teaching philosophy in action and discover why LHBS is the ideal choice for your child's educational journey.";
  const WM_CTA_TEXT = "Schedule a Campus Visit";
  const WM_CTA_LINK = "/admissions/campus-tour";
  const WM_IMAGE = "https://plus.unsplash.com/premium_photo-1661682746283-7838a6c38c04?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VsY29taW5nJTIwc2Nob29sfGVufDB8fDB8fHww";

  return (
    <motion.section 
      id="welcome"
      ref={ref}
      className="py-24 px-4 md:px-20"
      style={{ backgroundColor: '#FFFAE9' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              {WM_TITLE}
            </h2>
            
            <p className="text-base md:text-lg text-[#212121] mb-8 leading-relaxed">
              {WM_DESC}
            </p>

            <motion.button
              onClick={() => onNavigate(WM_CTA_LINK)}
              className="px-8 h-12 bg-[#1a5336] text-white font-bold cursor-pointer hover:bg-[#14432b] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {WM_CTA_TEXT}
            </motion.button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-[500px] md:h-[600px] overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={WM_IMAGE}
              alt="Welcoming LHBS campus environment with students and teachers in learning spaces"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}