import { ChevronRight, Check, BookOpen, Users, Globe, Target, Lightbulb, Heart, Beaker, Award, Brain, Sparkles, Building, GraduationCap, Trophy, Briefcase, DollarSign, Languages } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export default function HighSchoolPage() {
  const navigate = useNavigate();
  
  const onNavigate = (path: string) => {
    navigate(path);
  };

  const dailyActivities = [
  {
    id: 1,
    title: "Start strong, stay focused",
    description:
      "High school students begin the day with homeroom and advisory sessions to review goals, plan assignments, and reflect on progress. These moments help them stay focused, organized, and ready for a productive day.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(4).jpg?h=4000&iar=0&w=6000&rev=3eb563f8079645d0b5c7ee7ec1d8acda&extension=webp&hash=7CF74FAF838DCCF306526D9F7B2A908A",
    alt: "High school students preparing for morning advisory",
    timeLabel: "Morning advisory",
    timelineColor: "#1A5336",
    backgroundColor: "#E8F5E8",
  },
  {
    id: 2,
    title: "Academic excellence in action",
    description:
      "Morning lessons focus on IGCSE and A-Level courses, where students develop deep subject mastery and critical thinking. They engage in discussions, labs, and problem-solving activities that prepare them for university-level challenges.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(5).jpg?h=4000&iar=0&w=6000&rev=33d45eb048f140ddb46c7e46e4b8f161&extension=webp&hash=3649DA0EDBEB8F7EB05AB7C2EBF92E48",
    alt: "High school students engaged in academic lessons",
    timeLabel: "Morning classes",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFF7CC",
  },
  {
    id: 3,
    title: "Recharge and connect",
    description:
      "Lunchtime offers students the chance to recharge and build friendships. Many also take part in student-led clubs or discussions about projects, competitions, or community initiatives.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/dsc03911_11zon/33-eyfs11zon/dsc03897_11zon.jpg?h=5065&iar=0&w=7594&rev=7bd0a9ff989d4c3f966eed75045762d6&extension=webp&hash=6513642867256C811423751D51655AF4",
    alt: "Students having lunch and sharing ideas with peers",
    timeLabel: "Lunch break",
    timelineColor: "#1A5336",
    backgroundColor: "#F0FDF4",
  },
  {
    id: 4,
    title: "Beyond the classroom",
    description:
      "Afternoons feature extended learning — from research projects, leadership workshops, and global issue seminars to creativity and innovation labs. Students learn to lead, collaborate, and make meaningful impact.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(3).jpg?h=4158&iar=0&w=6234&rev=65e1c9b4f5ec464590dcaf0fabfe74a7&extension=webp&hash=79B3720A41ED262F520F77A1A7CBAC46",
    alt: "High school students in leadership and innovation projects",
    timeLabel: "Afternoon sessions",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFF1CC",
  },
  {
    id: 5,
    title: "Pathways to the future",
    description:
      "After school, students focus on university preparation — attending mentorship sessions, career counseling, or advanced academic clubs. Many also pursue arts, sports, or service projects to strengthen their personal portfolios.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/early-year-3511zon.jpg?h=6240&iar=0&w=4162&rev=2c0b6a46fb804d5cb089bf6b31c6c80c&extension=webp&hash=4A853B427858573CD456248656D18F10",
    alt: "Students participating in university prep and after-school clubs",
    timeLabel: "After school",
    timelineColor: "#FABA1E",
    backgroundColor: "#FEF7ED",
  },
];


  return (
    <div className="w-full ">
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2023/02/IMG_3025-2048x1227.jpg)`,
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
              <li className="text-[#fffae9] ">High School</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              AGES 16 TO 18 · HIGH SCHOOL
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS High School – Grades 10 to 12
            </h1>
            <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
              At LHBS High School, we uphold values of integrity and respect, creating a nurturing environment where students grow into responsible global citizens. Our comprehensive programme develops independence, critical thinking, and leadership qualities, preparing the next generation of leaders for university and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Book a School Tour
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

      {/* 2. OUR HIGH SCHOOL CURRICULUM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Our High School Curriculum
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto">
              The LHBS High School programme (Grades 10–12) strictly follows the Vietnamese Ministry of Education curriculum while enriching and deepening content to ensure students gain comprehensive knowledge. We offer specialised thematic classes for career orientation and university entrance exam preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: Core Curriculum */}
            <div className=" p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                Core Curriculum
              </h3>
              <p className=" text-[#212121]/70 mb-6 leading-relaxed">
                Students follow the full Vietnamese national curriculum for Grades 10–12, with enhanced content to strengthen their foundation:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Mathematics (advanced problem-solving)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Vietnamese Literature</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Physics, Chemistry, Biology</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">History & Geography</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Civic Education</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Physical Education & Arts</span>
                </li>
              </ul>
              <p className=" text-[#212121]/70 text-sm mt-6 italic">
                Knowledge is enriched and strengthened to give students a solid foundation for the National High School Graduation Exam and university entrance exams.
              </p>
            </div>

            {/* Card 2: Specialised & Orientation Classes */}
            <div className=" p-8 border-l-4 border-[#FABA1E]">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                Specialised & Orientation Classes
              </h3>
              <p className=" text-[#212121]/70 mb-4 leading-relaxed">
                Students explore major fields through specialised thematic classes aligned with their interests and career goals:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70"><strong>Economics</strong> – Business, Finance, Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70"><strong>Engineering & Technology</strong> – Applied sciences, IT, Robotics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70"><strong>Languages & Humanities</strong> – International relations, Communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70"><strong>Sciences</strong> – Medicine, Biotechnology, Research</span>
                </li>
              </ul>
              <div className="bg-white p-4 border-l-4 border-[#1a5336]">
                <p className=" text-[#212121]/70 text-sm">
                  <strong>Career Guidance:</strong> Early, personalised support based on each student's strengths and market trends, helping with the transition to university.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BILINGUAL EDUCATION & ENGLISH PATHWAYS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-8"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Bilingual Education Framework
              </h2>

              {/* English Curriculum & Textbooks */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">English Curriculum & Textbooks</h3>
                </div>
                <p className=" text-[#212121]/70 leading-relaxed ml-9">
                  High School students use <strong>Complete IELTS</strong> and <strong>Bridge to IELTS</strong> textbook series, designed to enhance both communication and academic English skills. The curriculum prepares students for internationally recognized certifications.
                </p>
              </div>

              {/* English Central Online Platform */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Languages className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">English Central Online Platform</h3>
                </div>
                <p className=" text-[#212121]/70 leading-relaxed ml-9">
                  Students access <strong>English Central</strong> 24/7 to practice Listening and Speaking skills through authentic video content and AI-powered feedback. This platform significantly strengthens IELTS and TOEFL readiness.
                </p>
              </div>

              {/* Certification & University Entry Goals */}
              <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Certification & University Entry Goals</h3>
                </div>
                <div className="ml-9">
                  <p className=" text-[#212121]/70 leading-relaxed mb-4">
                    The programme targets high-level English proficiency to meet admission requirements and scholarship criteria:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className=" text-[#212121]/70 text-sm"><strong>IELTS</strong> (International English Language Testing System)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className=" text-[#212121]/70 text-sm"><strong>TOEFL iBT</strong> (Test of English as a Foreign Language)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className=" text-[#212121]/70 text-sm">Entry to domestic & international universities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                      <span className=" text-[#212121]/70 text-sm">Qualification for scholarships and study abroad programmes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[700px] lg:h-[800px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2025/01/333A0863.jpg"
                alt="High School students engaged in bilingual education and IELTS preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIFE SKILLS & EXTRACURRICULAR PROGRAM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/10/333A9221.jpg"
                alt="Students participating in leadership and extracurricular activities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Life Skills Program
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our Life Skills Programme develops soft skills, adaptability, and practical life competencies. Students build self-respect, respect for others, and cultivate a positive, humble attitude essential for university and career success.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Through extracurricular activities, clubs, and leadership roles within the school, students prepare for scholarship interviews, cultural exchanges, and real-world challenges.
              </p>

              {/* Clubs & Student Leadership */}
              <div className=" p-6 border-l-4 border-[#FABA1E] mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Clubs & Student Leadership</h3>
                </div>
                <p className=" text-[#212121]/70 text-sm leading-relaxed ml-9">
                  Lower and Upper Secondary students participate in diverse clubs—academic, sports, arts, and life skills—to discover their passions, build confidence, and strengthen their character and resilience.
                </p>
              </div>

              {/* Key Areas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#FABA1E]" />
                  <span className=" text-[#212121]/70 text-sm">Character Building</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-[#FABA1E]" />
                  <span className=" text-[#212121]/70 text-sm">Goal Setting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#FABA1E]" />
                  <span className=" text-[#212121]/70 text-sm">Teamwork</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#FABA1E]" />
                  <span className=" text-[#212121]/70 text-sm">Cultural Exchange</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEM & ENRICHMENT COURSES */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              STEM & Enrichment Courses
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto">
              Our STEM education helps students apply theoretical knowledge to hands-on, thematic projects, developing curiosity, observation skills, and creativity. Enrichment courses prepare students for the challenges of the 21st century.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            {/* Left: Text */}
            <div>
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-6">
                Enrichment Programme Highlights
              </h3>
              <p className=" text-[#212121]/70 leading-relaxed mb-6">
                Beyond core academics, LHBS offers specialized enrichment courses that build future-ready skills and global competencies:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Beaker className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-1">STEAM / STEM</h4>
                    <p className=" text-[#212121]/70 text-sm">Integrated science, technology, engineering, arts, and mathematics projects</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-1">Global Citizens</h4>
                    <p className=" text-[#212121]/70 text-sm">Understanding global issues, sustainability, and cross-cultural communication</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-1">AI – Robotics</h4>
                    <p className=" text-[#212121]/70 text-sm">Artificial intelligence, machine learning, and robotics engineering</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-1">Personal Financial Management</h4>
                    <p className=" text-[#212121]/70 text-sm">Budgeting, investing, financial literacy, and entrepreneurship</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-1">Skills Development Courses</h4>
                    <p className=" text-[#212121]/70 text-sm">Critical thinking, communication, collaboration, and creativity</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/DSC09904.jpg"
                alt="Students working on STEM and robotics projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. A TYPICAL DAY AT LHBS KINDERGARTEN */}
      <section className="bg-[#FAF5ED] py-24 md:py-32">
        <div className="w-full !mr-0 max-w-screen-2xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Title & Description - 30% width */}
            <div className="lg:col-span-4 my-auto">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A typical day at LHBS High School
              </h2>
              <p className="text-[#212121] font-medium text-lg">
                Each day combines rigorous academics, university preparation, and enriching experiences.
              </p>
            </div>

            {/* Right Column: Carousel - 70% width */}
            <div className="lg:col-span-8 relative">
              <Carousel className="relative" style={{ overflow: 'initial' }}>
                <CarouselContent className="-ml-6" style={{ overflow: 'initial' }}>
                  {dailyActivities.map((activity, index) => (
                    <CarouselItem key={activity.id} className="pl-6 basis-auto" style={{ overflow: 'initial' }}>
                      {/* Card with higher z-index */}
                      <div className="relative z-20" style={{ overflow: 'initial' }}>
                        <Card className="bg-white shadow-lg border border-gray-200 w-[374px] h-[457px] overflow-hidden">
                          <CardContent className="p-0 h-full">
                            <div className="relative h-[250px] overflow-hidden">
                              <img
                                src={activity.image}
                                alt={activity.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div 
                              className="p-6 h-[207px] flex flex-col"
                              style={{ backgroundColor: activity.backgroundColor }}
                            >
                              <h3 className="font-['SVN-Gotham'] text-xl text-black mb-3">
                                {activity.title}
                              </h3>
                              <p 
                                className="text-black/70 text-sm leading-relaxed flex-grow min-h-[80px] line-clamp-5 overflow-hidden"
                                style={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: 5,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                                }}
                              >
                                {activity.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Synchronized Timeline Elements positioned under each card */}
                      <div className="flex flex-col items-center mt-6 relative z-30" style={{ overflow: 'visible' }}>
                        {/* Vertical connecting line from card center to timeline */}
                        <div 
                          className="w-0.5 h-16 relative z-30"
                          style={{ 
                            backgroundColor: activity.timelineColor === "#1A5336" ? 'rgba(26, 83, 54, 0.8)' : 'rgba(250, 186, 30, 0.8)',
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline dot positioned at the center */}
                        <div 
                          className="w-4 h-4 rounded-full border-4 border-white shadow-lg relative z-30"
                          style={{ 
                            backgroundColor: activity.timelineColor,
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline label below dot */}
                        <div className="text-center mt-1 relative z-30" style={{ overflow: 'visible' }}>
                          <p className="text-[#212121] text-sm uppercase whitespace-nowrap font-medium">{activity.timeLabel}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Timeline line that moves with carousel */}
                <div className="absolute bottom-0 left-0 right-0 z-10" style={{ overflow: 'visible' }}>
                  <div className="relative h-0.5 bg-[#1a5336]/20" style={{ top: '-29px', overflow: 'visible' }}></div>
                </div>
                
                {/* Navigation Buttons positioned at top right */}
                <CarouselPrevious className="translate-x-0 translate-y-0 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
                <CarouselNext className="absolute right-2 translate-x-0 translate-y-0 h-12 w-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* 7. HIGHLY QUALIFIED TEACHERS & COUNSELORS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Highly Qualified Teachers & Counselors
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our teaching staff bring extensive experience, continuous professional development, and modern pedagogical approaches to every lesson. They integrate technology and AI tools to personalise learning and ensure High School students reach their full potential.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Academic counseling and career guidance support students closely as they build their university pathway. Teachers help students identify strengths, prepare for entrance exams, and navigate study abroad opportunities.
              </p>
              <div className="bg-white p-6 border-l-4 border-[#FABA1E] mb-8">
                <p className=" text-[#212121]/70 text-sm leading-relaxed">
                  <strong>Personalised Support:</strong> Each student receives one-on-one guidance to chart their academic roadmap—from university selection to exam preparation and scholarship applications.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('/our-school/leadership')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                Meet Our Teachers
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/454409330_478747051454107_457976828510559190_n.jpg"
                alt="LHBS teacher and counselor guiding High School students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FACILITIES – AN ENVIRONMENT MADE FOR LEARNING */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-[#FABA1E] mb-2  uppercase tracking-wider text-sm">
              OUR FACILITIES
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              An Environment Made for Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1600498148212-62bd3542ed63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBsaWJyYXJ5JTIwZmFjaWxpdGllc3xlbnwxfHx8fDE3NjMxMDQwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern LHBS library and learning facilities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our safe semi-boarding campus in Bien Hoa features modern classrooms, advanced science laboratories, comprehensive libraries, sports facilities, and technology-equipped learning spaces. Every facility is designed to support High School students' academic and personal growth.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                These purpose-built spaces enable students to conduct research, collaborate on projects, prepare for university exams, and develop the skills needed for success in higher education and beyond.
              </p>
              <div className=" p-6 mb-8">
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-4">Key Facilities:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm">Advanced science & computer labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm">Modern library & research center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm">Sports fields & fitness facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm">Technology-integrated classrooms</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('/our-school/facilities')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Explore Our Campus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INTERNATIONAL PATHWAYS & DUAL DIPLOMA */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              International Pathways
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto">
              LHBS provides multiple international pathways for students who aspire to study abroad, including prestigious partnerships with American and international institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Dual Diploma Program */}
            <div className="bg-white p-8 border-l-4 border-[#FABA1E]">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-[#FABA1E]" />
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336]">Dual Diploma Program</h3>
              </div>
              <p className=" text-[#212121]/70 leading-relaxed mb-4">
                Students can earn both a Vietnamese High School Diploma and an American High School Diploma accredited by <strong>AdvancED/ASI</strong> in the United States. This dual certification opens direct pathways to American universities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70 text-sm">Recognized by U.S. universities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70 text-sm">Competitive advantage in admissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70 text-sm">Smooth transition to U.S. higher education</span>
                </li>
              </ul>
            </div>

            {/* 2+2 Pathways */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-[#FABA1E]" />
                <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336]">2+2 Pathways</h3>
              </div>
              <p className=" text-[#212121]/70 leading-relaxed mb-4">
                LHBS partners with institutions like <strong>Truckee Meadows Community College</strong> and <strong>University of Nevada, Reno</strong>, offering 2+2 programmes where students complete two years at a partner college and transfer to complete their bachelor's degree.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70 text-sm">Cost-effective study abroad pathway</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70 text-sm">Guaranteed transfer agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70 text-sm">Support throughout the process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Undergraduate Roadmaps */}
          <div className="bg-white p-8 text-center">
            <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">Undergraduate Roadmaps</h3>
            <p className=" text-[#212121]/70 leading-relaxed max-w-3xl mx-auto mb-6">
              Our university counseling team guides students through every step—from choosing the right pathway, to standardized test preparation, application support, scholarship searches, and visa assistance.
            </p>
            <button 
              onClick={() => onNavigate('/academics/international-programs')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
            >
              Explore Our International Programs
            </button>
          </div>
        </div>
      </section>

      {/* 10. CLOSING TAGLINE & CTA */}
      <section className="bg-[#1a5336] py-24 md:py-32"
         style={{ 
        minHeight: '420px',
        backgroundColor: '#064e29ff'
      }}>
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 
            className="font-['SVN-Gotham'] text-[#fffae9] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            Shaping bilingual leaders for a changing world
          </h2>
          <p className=" text-[#fffae9]/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            LHBS High School provides a bilingual pathway that combines solid academic knowledge, 21st-century skills, English proficiency, and core values. Students graduate confident and prepared to excel in universities both domestically and internationally.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/contact/book-tour')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
            >
              Book a School Tour
            </button>
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
