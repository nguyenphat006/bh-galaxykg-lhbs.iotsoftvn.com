import { ChevronRight, Check, BookOpen, Users, Globe, Target, Lightbulb, Heart, Beaker, Activity, Clock, MessageCircle, Award, Brain, Sparkles, Building } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export default function SecondarySchoolPage() {
  const navigate = useNavigate();
  
  const onNavigate = (path: string) => {
    navigate(path);
  };

   const dailyActivities = [
  {
    id: 1,
    title: "Morning focus and preparation",
    description:
      "Secondary students start the day by organizing their materials, reviewing key lessons, and setting learning goals. This helps them take ownership of their studies and build strong independent learning habits.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(4).jpg?h=4000&iar=0&w=6000&rev=3eb563f8079645d0b5c7ee7ec1d8acda&extension=webp&hash=7CF74FAF838DCCF306526D9F7B2A908A",
    alt: "Secondary students preparing for class in the morning",
    timeLabel: "Morning preparation",
    timelineColor: "#1A5336",
    backgroundColor: "#E8F5E8",
  },
  {
    id: 2,
    title: "Academic exploration",
    description:
      "Students dive into core subjects like Mathematics, Literature, and Science, combining analytical thinking with hands-on experiments and discussions. Lessons are designed to spark curiosity and connect theory with real-life applications.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(5).jpg?h=4000&iar=0&w=6000&rev=33d45eb048f140ddb46c7e46e4b8f161&extension=webp&hash=3649DA0EDBEB8F7EB05AB7C2EBF92E48",
    alt: "Secondary students engaged in academic group discussions",
    timeLabel: "Morning lessons",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFF7CC",
  },
  {
    id: 3,
    title: "Lunch and social connection",
    description:
      "During lunch, students enjoy balanced meals while socializing with peers. It’s also a time to relax, share ideas, and recharge before the afternoon sessions.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/dsc03911_11zon/33-eyfs11zon/dsc03897_11zon.jpg?h=5065&iar=0&w=7594&rev=7bd0a9ff989d4c3f966eed75045762d6&extension=webp&hash=6513642867256C811423751D51655AF4",
    alt: "Students having lunch and connecting with classmates",
    timeLabel: "Lunch time",
    timelineColor: "#1A5336",
    backgroundColor: "#F0FDF4",
  },
  {
    id: 4,
    title: "Creative and global learning",
    description:
      "Afternoons are filled with creative subjects like Art, Design, Music, and Global Perspectives. Students work on collaborative projects that encourage leadership, communication, and cultural awareness.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/eyfs-chuong-trnh-mam-non-quoc-te-bvis-hcmc-(3).jpg?h=4158&iar=0&w=6234&rev=65e1c9b4f5ec464590dcaf0fabfe74a7&extension=webp&hash=79B3720A41ED262F520F77A1A7CBAC46",
    alt: "Students collaborating on creative and global learning projects",
    timeLabel: "Afternoon activities",
    timelineColor: "#FABA1E",
    backgroundColor: "#FFF1CC",
  },
  {
    id: 5,
    title: "After-school enrichment",
    description:
      "After classes, students participate in sports, robotics, debate clubs, and community service programs. These experiences help them develop leadership, teamwork, and a balanced school-life mindset.",
    image:
      "https://www.nordangliaeducation.com/bvis-hcmc/-/media/british-vietnamese-hcmc/academic-excellence/fy22-23/early-year-3511zon.jpg?h=6240&iar=0&w=4162&rev=2c0b6a46fb804d5cb089bf6b31c6c80c&extension=webp&hash=4A853B427858573CD456248656D18F10",
    alt: "Secondary students in after-school enrichment programs",
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
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2024/07/IMG_8049.jpg)`,
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
              <li className="text-[#fffae9] ">Secondary School</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4  uppercase tracking-wider text-sm">
              AGES 11 TO 15 · LOWER SECONDARY
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS Lower Secondary (Grades 6–9)
            </h1>
            <p className="text-[#fffae9]/90 mb-8  text-lg leading-relaxed max-w-2xl">
              Students follow the Vietnamese Ministry of Education curriculum combined with Cambridge English, building a solid foundation of knowledge, 21st-century skills, and English proficiency. Our programme develops core competencies so students become responsible global citizens and future leaders.
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

      {/* 2. OUR LOWER SECONDARY CURRICULUM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Our Lower Secondary Curriculum
            </h2>
            <p className=" text-[#212121]/70 text-lg max-w-3xl mx-auto">
              Lower Secondary at LHBS (Grades 6–9) combines the Vietnamese National Curriculum with a comprehensive Cambridge English programme, delivering a well-rounded education that builds strong academic foundations, 21st-century skills, English fluency, and core values that shape responsible global citizens and future leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: Core Subjects in Vietnamese */}
            <div className=" p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                Core Subjects in Vietnamese
              </h3>
              <p className=" text-[#212121]/70 mb-6 leading-relaxed">
                Students study the full Vietnamese National Curriculum following MOET standards and provincial requirements:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Mathematics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Vietnamese Literature</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-1" />
                  <span className=" text-[#212121]/70">Natural Sciences (Physics, Chemistry, Biology)</span>
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
            </div>

            {/* Card 2: English & Enrichment Programmes */}
            <div className=" p-8 border-l-4 border-[#FABA1E]">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">
                English & Enrichment Programmes
              </h3>
              <p className=" text-[#212121]/70 mb-4 leading-relaxed">
                Our combined Cambridge English and enrichment curriculum develops bilingual excellence:
              </p>
              <div className="mb-6">
                <p className=" text-[#212121] mb-2">
                  <strong>Cambridge Assessment English:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FABA1E]">•</span>
                    <span className=" text-[#212121]/70 text-sm">Grades 6–8: Cambridge Key for Schools (KET)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FABA1E]">•</span>
                    <span className=" text-[#212121]/70 text-sm">Grade 9: Cambridge Preliminary for Schools (PET)</span>
                  </li>
                </ul>
              </div>
              <p className=" text-[#212121]/70 text-sm mb-6 leading-relaxed">
                English lessons are personalised by level, focusing on self-study skills, project work, and 21st-century competencies.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">English</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">STEM</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">AI–Robotics</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Skills Education</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Library</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Financial Management</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Experiential Learning</span>
                <span className="px-3 py-1 bg-white text-[#1a5336] text-xs  border border-[#1a5336]/20">Community Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR ENGLISH PROGRAMME */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-8"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Our English Programme
              </h2>

              {/* Learning Outcomes */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Learning Outcomes</h3>
                </div>
                <p className=" text-[#212121]/70 leading-relaxed ml-9">
                  Students work toward Cambridge KET (Grades 6–8) and PET (Grade 9) certifications, aligning with pathways for future study in Vietnam or abroad. These internationally recognized qualifications open doors to High School programmes and university preparation.
                </p>
              </div>

              {/* Teaching Approach */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Teaching Approach</h3>
                </div>
                <p className=" text-[#212121]/70 leading-relaxed ml-9 mb-3">
                  We provide personalised learning pathways that build self-study habits through personal study plans and regular reflection. Students engage in activities like sharing passions and talents, journaling, and collaborative projects that develop 21st-century competencies and positive behaviour.
                </p>
                <p className=" text-[#212121]/70 leading-relaxed ml-9">
                  Throughout the year, language events give students authentic opportunities to practice English in real-life contexts.
                </p>
              </div>

              {/* Materials and Tools */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Materials and Tools</h3>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm"><strong>I-learn Smart World</strong> textbook combined with selected Cambridge materials to develop the four skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm"><strong>D.E.A.R (Drop Everything And Read)</strong> programme using Macmillan graded readers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-1" />
                    <span className=" text-[#212121]/70 text-sm"><strong>English Central</strong> software for 24/7 listening and speaking practice</span>
                  </li>
                </ul>
              </div>

              {/* Learning Pathways */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Learning Pathways</h3>
                </div>
                <div className="ml-9 space-y-3">
                  <p className=" text-[#212121]/70 text-sm">
                    <strong>For high-performing, motivated learners:</strong> "Me – Us – The World" project-based learning pathway
                  </p>
                  <p className=" text-[#212121]/70 text-sm">
                    <strong>For developing learners:</strong> Gradual progression with rich, engaging activities
                  </p>
                  <p className=" text-[#212121]/70 text-sm italic">
                    Examples: "Periods without walls", "Hobbies and talents", "Dear my journal"
                  </p>
                </div>
              </div>

              {/* English Writing Club */}
              <div className="bg-white p-6 border-l-4 border-[#FABA1E]">
                <div className="flex items-start gap-3 mb-2">
                  <Award className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">English Writing Club</h3>
                </div>
                <p className=" text-[#212121]/70 text-sm ml-9">
                  The LHBS Writers Club provides a creative space for students who love writing and publishing English stories.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[700px] lg:h-[800px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/07/IMG_8013.jpg"
                alt="Students engaged in English reading and learning activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. UNLOCKING EACH STUDENT'S POTENTIAL */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-8 text-center"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Unlocking Each Student's Potential
            </h2>
            
            <p className=" text-[#212121] text-lg leading-relaxed mb-6 text-center">
              LHBS values integrity and respect, creating a learning environment where students strive to become responsible global citizens and future leaders. Our mission is to nurture well-rounded individuals who contribute positively to society.
            </p>
            
            <p className=" text-[#212121] text-lg leading-relaxed mb-12 text-center">
              Lower Secondary education at LHBS emphasises personal growth: self-awareness, independent learning, teamwork, critical thinking, creativity, and empathy. Students are supported by dedicated homeroom teachers, school counselling services, and a safe semi-boarding environment.
            </p>

            {/* Key Qualities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className=" p-6 text-center">
                <Heart className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Integrity</h3>
                <p className=" text-[#212121]/70 text-sm">Acting with honesty and strong moral principles</p>
              </div>

              <div className=" p-6 text-center">
                <Sparkles className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Confidence</h3>
                <p className=" text-[#212121]/70 text-sm">Believing in abilities and taking initiative</p>
              </div>

              <div className=" p-6 text-center">
                <Globe className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Global Mindset</h3>
                <p className=" text-[#212121]/70 text-sm">Understanding diverse cultures and perspectives</p>
              </div>

              <div className=" p-6 text-center">
                <Users className="w-10 h-10 text-[#FABA1E] mx-auto mb-3" />
                <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Leadership</h3>
                <p className=" text-[#212121]/70 text-sm">Inspiring and guiding others positively</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* 5. A TYPICAL DAY AT LHBS KINDERGARTEN */}
      <section className="bg-[#FAF5ED] py-24 md:py-32">
        <div className="w-full !mr-0 max-w-screen-2xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Title & Description - 30% width */}
            <div className="lg:col-span-4 my-auto">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                A typical day at LHBS Lower Secondary
              </h2>
              <p className="text-[#212121] font-medium text-lg">
                Each day offers a rich blend of personalised learning, academic rigour, and meaningful experiences.
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

      {/* 6. HIGHLY QUALIFIED TEACHERS WHO INSPIRE */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Highly Qualified Teachers Who Inspire
              </h2>
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our experienced teaching staff bring passion and expertise to every lesson. They engage in continuous professional development and employ modern teaching methods, including technology and AI integration, to personalise learning for Lower Secondary students.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                Teachers play a dual role: strengthening Vietnamese academic excellence while advancing English language skills, ensuring students are well-prepared for both local and international pathways.
              </p>
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
                src="https://lhbs.edu.vn/wp-content/uploads/2024/05/IMG_1381.jpg"
                alt="LHBS teacher inspiring Lower Secondary students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. AN ENVIRONMENT MADE FOR LEARNING */}
      <section className=" py-24 md:py-32">
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
                src="https://lhbs.edu.vn/wp-content/uploads/2024/05/IMG_0552.jpg"
                alt="Modern LHBS campus facilities designed for learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="order-1 lg:order-2">
              <p className=" text-[#212121] text-lg leading-relaxed mb-6">
                Our purpose-built campus in Bien Hoa provides modern classrooms, well-equipped science laboratories, comprehensive libraries, sports facilities, and a safe semi-boarding environment. Every space is designed to support active learning and collaboration.
              </p>
              <p className=" text-[#212121] text-lg leading-relaxed mb-8">
                These facilities empower Lower Secondary students to explore their strengths, work collaboratively on projects, and develop respect for culture, language, and global citizenship in a secure, inspiring setting.
              </p>
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

      {/* 8. CLOSING TAGLINE & CTA */}
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
            Shaping bilingual leaders for the future
          </h2>
          <p className=" text-[#fffae9]/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            LHBS Lower Secondary combines Vietnamese values, bilingual excellence, and 21st-century skills to prepare students for High School and international pathways—including Dual Diploma programmes and overseas study opportunities.
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
