import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Bus, Heart, BookOpen, UtensilsCrossed } from 'lucide-react';
import { useNavigate } from 'react-router';
export default function FacilitiesPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <div className="relative ">
      {/* Section 1: Hero */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* Section 2: Discover Our Facilities */}
      <DiscoverFacilitiesSection />
      
      {/* Section 3: Creativity & Arts */}
      <CreativitySection />
      
      {/* Section 4: Tech-Driven Learning */}
      <TechLearningSection />
      
      {/* Section 5: Sports */}
      <SportsSection />
      
      {/* Section 6: Support Services */}
      <ServicesSection />
      
      {/* Section 7: CTA - Visit Us */}
      <VisitCTASection onNavigate={onNavigate} />
    </div>
  );
}

// ==================== SECTION 1: HERO ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'LHBS Campus', onClick: () => onNavigate('/our-school') },
    { label: 'Facilities' }
  ];

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[65vh] md:min-h-[70vh] flex flex-col overflow-hidden mb-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lhbs.edu.vn/wp-content/uploads/2022/11/BL8Q8839-scaled.jpg"
          alt="LHBS Campus Facilities"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black" style={{ opacity: 0.4 }} />

      {/* Breadcrumbs inside Hero */}
      <nav 
        className="relative z-20 w-full px-4 md:px-20 pt-3 pb-2"
        style={{ marginTop: '76px' }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 flex-wrap">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />}
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className=" text-sm text-[#fffae9]/90 hover:text-[#FABA1E] transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className=" text-sm text-[#fffae9] font-medium">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex-1 flex items-center" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left spacer on desktop */}
          <div className="hidden lg:block lg:col-span-1" />
          
          {/* Right Content Column */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center py-12 lg:py-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Page Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className=" text-[#FABA1E] uppercase tracking-[0.15em]">
                Our Facilities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" text-white mb-6 md:mb-8"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS School Facilities
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" text-white/90 text-base md:text-lg leading-relaxed max-w-[600px]"
            >
              Lac Hong Bilingual School in Biên Hòa offers purpose-built learning spaces designed to nurture 
              global citizens. Our modern facilities provide a dynamic, supportive environment where students 
              can explore, create, and grow into confident future leaders.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== SECTION 2: DISCOVER OUR FACILITIES ====================
function DiscoverFacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="bg-[#fdfcf8] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 h-[1500px]">
        {/* Left: Text Content */}
        <motion.div
          className="h-full px-4 md:px-20 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            {/* Section Heading */}
            <h2 
              className=" text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.2' }}
            >
              Discover our facilities
            </h2>
            
            {/* Body Copy */}
            <div className="space-y-4  text-base md:text-lg text-[#212121] leading-relaxed">
              <p>
                Located in the green, peaceful surroundings of Đồng Nai province, LHBS provides a welcoming 
                campus where students from kindergarten through grade 12 can thrive. Our bilingual learning 
                environment combines Vietnamese heritage with international standards, creating spaces that 
                inspire curiosity and academic achievement.
              </p>
              <p>
                Every classroom, laboratory, and learning space is thoughtfully designed to support active, 
                student-centered education. From modern technology integration to comfortable study areas, 
                we ensure that our facilities meet the evolving needs of 21st-century learners.
              </p>
              <p>
                LHBS continuously invests in upgrading our infrastructure and services, maintaining high 
                standards that reflect our commitment to educational excellence and holistic student development.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Right: Image */}
        <motion.div
          className="relative h-[1200px] h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://lhbs.edu.vn/wp-content/uploads/2022/08/BL8Q9488-2048x1365.jpg"
            alt="LHBS Campus Overview"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: CREATIVITY & ARTS ====================
function CreativitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 h-[1200px]">
        {/* Left: Image */}
        <motion.div
          className="relative h-[1200px] h-full order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://lhbs.edu.vn/wp-content/uploads/2022/08/BL8Q9833-1024x683.jpg"
            alt="Students engaging in art and creative activities"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Right: Text Content */}
        <motion.div
          className="h-full px-4 md:px-20 flex items-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            {/* Section Heading */}
            <h2 
              className=" text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.2' }}
            >
              Unleashing creativity and self-expression
            </h2>
            
            {/* Body Copy */}
            <div className="space-y-4  text-base md:text-lg text-[#212121] leading-relaxed">
              <p>
                At LHBS, we believe the arts are essential to a well-rounded education. Our dedicated art rooms, 
                music studios, and performance spaces encourage students to explore their creative talents through 
                painting, sculpture, music, drama, and dance.
              </p>
              <p>
                Throughout the year, students participate in school festivals, concerts, exhibitions, and 
                competitions where they can showcase their work and celebrate their achievements. These experiences 
                build confidence, cultural appreciation, and the ability to express ideas in diverse and meaningful ways.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 4: TECH-DRIVEN LEARNING ====================
function TechLearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative bg-[#fdfcf8]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 h-[1200px]">
        {/* Left: Text Content */}
        <motion.div
          className="h-full px-4 md:px-20 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            {/* Section Heading */}
            <h2 
              className=" text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.2' }}
            >
              Tech-driven learning environments
            </h2>
            
            {/* Body Copy */}
            <div className="space-y-4  text-base md:text-lg text-[#212121] leading-relaxed">
              <p>
                LHBS equips students with the skills they need for the digital age. Our STEAM and STEM labs 
                provide hands-on experiences in science, technology, engineering, arts, and mathematics, 
                fostering critical thinking and problem-solving abilities.
              </p>
              <p>
                Students explore robotics, AI, coding, and experimental science using modern computers, 
                specialized software, and innovative tools. Our language labs and ICT facilities further 
                support bilingual proficiency and digital literacy, preparing learners to excel in a 
                globally connected world.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Right: Image */}
        <motion.div
          className="relative h-[1200px] h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://lhbs.edu.vn/wp-content/uploads/2021/05/MG_5085.jpg"
            alt="Students working in robotics and technology lab"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: SPORTS ====================
function SportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 h-[1200px]">
        {/* Left: Image */}
        <motion.div
          className="relative h-[1200px] h-full order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://lhbs.edu.vn/wp-content/uploads/2021/05/MG_5222.jpg"
            alt="Students participating in sports and physical activities"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Right: Text Content */}
        <motion.div
          className="h-full px-4 md:px-20 flex items-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            {/* Section Heading */}
            <h2 
              className=" text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.2' }}
            >
              Sporting opportunities for all
            </h2>
            
            {/* Body Copy */}
            <div className="space-y-4  text-base md:text-lg text-[#212121] leading-relaxed">
              <p>
                Physical education is a vital part of student life at LHBS. Our campus features outdoor sports 
                fields, multi-purpose halls, and playgrounds where students can engage in a variety of athletic 
                activities—from team sports like football and basketball to individual pursuits like athletics 
                and fitness training.
              </p>
              <p>
                Regular PE classes, inter-school competitions, and sports clubs help students develop 
                resilience, teamwork, and a healthy lifestyle. These experiences teach discipline, 
                perseverance, and the value of collaboration—skills that benefit learners throughout their lives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 6: SUPPORT SERVICES ====================
function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: <Bus className="w-8 h-8 text-[#1a5336]" />,
      title: 'School Bus Service',
      description: 'Safe, reliable transportation for students across multiple routes in Đồng Nai and surrounding areas.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#1a5336]" />,
      title: 'Medical Care',
      description: 'On-campus medical room staffed by qualified healthcare professionals to support student wellbeing.'
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-[#1a5336]" />,
      title: 'School Meals & Canteen',
      description: 'Nutritious, balanced meal plans prepared in clean facilities to fuel healthy growth and learning.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#1a5336]" />,
      title: 'Library & Counselling',
      description: 'Comprehensive library resources and counselling services to support academic success and personal development.'
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto "
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 
          className=" text-[#1a5336] mb-4"
          style={{ fontSize: '48px', lineHeight: '1.2' }}
        >
          Services that support every family
        </h2>
        <p className=" text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed">
          Beyond classrooms and labs, LHBS provides comprehensive support services designed to make 
          school life convenient, safe, and enriching for students and families.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 p-8 bg-white border border-[#1a5336]/10 hover:border-[#1a5336]/30 transition-colors rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <div className="flex-shrink-0 mt-1">
              {service.icon}
            </div>
            <div>
              <h3 className=" text-2xl text-[#1a5336] mb-3">
                {service.title}
              </h3>
              <p className=" text-[#212121] text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// ==================== SECTION 7: VISIT CTA ====================
function VisitCTASection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative py-32 px-4 md:px-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1687709644302-8eceed73f2dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBmYWNpbGl0aWVzJTIwb3ZlcnZpZXd8ZW58MXx8fHwxNzYzMDg3NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="LHBS Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[#1a5336]" style={{ opacity: 0.85 }} />

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className=" text-white mb-6"
          style={{ fontSize: '48px', lineHeight: '1.2' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Come and see our school facilities
        </motion.h2>

        {/* Body Text */}
        <motion.p
          className=" text-white/90 text-base md:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We invite you to visit our campus in Biên Hòa and experience LHBS firsthand. Tour our classrooms, 
          laboratories, sports facilities, and meet our dedicated academic team. Discover how our modern 
          infrastructure supports every student's journey to success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => onNavigate('/admissions/apply-now')}
            className="px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a School Tour
          </motion.button>
          
          <motion.button
            onClick={() => onNavigate('/admissions')}
            className="px-8 h-12 border-2 border-white text-white  font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#1a5336] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn About Admissions
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}