import { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, Phone, Mail, Users, Calendar, FileText, CheckCircle, Award, Trophy, DollarSign, BookOpen, Target, Heart, Globe, Sparkles, Building, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useNavigate } from 'react-router';


export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate()
   const onNavigate = (path: string) => {
    navigate(path);
  };
  // Admissions Process Steps Data
  const admissionsSteps = [
    {
      id: 1,
      title: "Enquiry",
      description:
        "Parents contact LHBS via hotline, email, website, or in-person visit to learn more about our programmes, facilities, and admissions process. Our team is ready to answer all your questions.",
      hasImage: false,
      buttonText: "Request Consultation",
      buttonAction: () => onNavigate('/contact/contact-us'),
      timeLabel: "Step 1",
      timelineColor: "#1A5336",
      backgroundColor: "#fff",
    },
    {
      id: 2,
      title: "Assessment & Placement",
      description:
        "LHBS reviews the application and arranges assessments or interviews if needed. We evaluate each student's readiness and propose the most suitable class level to ensure their success and comfort in our learning environment.",
      image:
        "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwaW50ZXJ2aWV3JTIwYXNzZXNzbWVudHxlbnwwfHx8fDE3Mzc1NDQyNDh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Student during friendly assessment interview with teacher",
      hasImage: true,
      timeLabel: "Step 2",
      timelineColor: "#FABA1E",
      backgroundColor: "#FFCB00",
    },
    {
      id: 3,
      title: "School Tour",
      description:
        "The admissions team arranges a campus tour or online consultation so families can experience our learning environment, meet teachers, and see our facilities firsthand. This helps you understand what makes LHBS special.",
      hasImage: false,
      buttonText: "Book a Tour",
      buttonAction: () => onNavigate('/contact/book-tour'),
      timeLabel: "Step 3",
      timelineColor: "#FABA1E",
      backgroundColor: "#fff",
    },
     {
      id: 4,
      title: "Offer & Enrolment",
      description:
        "LHBS confirms the admission result. Parents complete registration fees and deposit within the given timeframe to secure the seat. Our admissions team guides you through the enrolment process and answers any final questions.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhY2NlcHRhbmNlJTIwbGV0dGVyfGVufDB8fHx8MTczNzU0NDI0OHww&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "Happy family receiving acceptance letter from school",
      hasImage: true,
      timeLabel: "Step 4",
      timelineColor: "#1A5336",
      backgroundColor: "#E8F5E8",
    },
    {
      id: 5,
      title: "Online Application",
      description:
        "Parents complete the online application via tuyensinh.lhbs.vn and submit required documents (student information, previous academic reports, health certificate, etc.). Our system guides you through each step.",
      hasImage: false,
      buttonText: "Apply Online",
      buttonAction: () => window.open('https://tuyensinh.lhbs.vn', '_blank'),
      timeLabel: "Step 5",
      timelineColor: "#1A5336",
      backgroundColor: "#fff",
    },
    {
      id: 6,
      title: "Orientation & First School Day",
      description:
        "The school prepares orientation activities so students can familiarise themselves with the campus, meet teachers and classmates, and feel confident before or during their first days at LHBS. Welcome to the LHBS family!",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBvcmllbnRhdGlvbiUyMGZhbWlseXxlbnwwfHx8fDE3Mzc1NDQyNDh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      alt: "New students and families at school orientation welcome event",
      hasImage: true,
      timeLabel: "Step 6",
      timelineColor: "#FABA1E",
      backgroundColor: "#FEF7ED",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which grade levels does LHBS admit for the 2025–2026 school year?",
      answer: "LHBS admits students to Grade 1, Grade 6, Grade 10, and accepts transfers to other grades. Each level has specific intake quotas and admissions run from 17/02/2025 until quotas are filled. Parents are encouraged to apply early to secure a place for their child."
    },
    {
      question: "What documents are required for the application?",
      answer: "The application requires: admission form, birth certificate (copy), household registration book (copy), academic records or school reports from the most recent year, health certificate, and 4 passport photos (3x4). Parents can submit applications online via tuyensinh.lhbs.vn or in person at the school."
    },
    {
      question: "Does the school offer semi-boarding and school bus services?",
      answer: "Yes, LHBS provides a safe semi-boarding programme with modern facilities for learning, play, and rest. Additionally, the school operates a comprehensive transportation system covering multiple routes in Bien Hoa and surrounding areas, ensuring safety and convenience for students."
    },
    {
      question: "How is the Bilingual Programme at LHBS different from public schools?",
      answer: "LHBS Bilingual Programme combines the MOET curriculum with Cambridge English and enrichment subjects. Students study both Vietnamese and English daily, developing critical thinking, 21st-century skills, and preparing for international pathways including Dual Diploma, 2+2 programmes, and study abroad opportunities."
    },
    {
      question: "If my child transfers mid-year, will they be able to catch up with the programme?",
      answer: "LHBS teachers assess each student's abilities and create personalised learning plans to help them integrate quickly. The school offers supplementary classes and support programmes to ensure transfer students can catch up and thrive in their new environment."
    },
    {
      question: "Does LHBS offer scholarships?",
      answer: "Yes, LHBS provides scholarships based on academic achievement, family circumstances, and community contribution. Parents can find detailed information on the Scholarships page or contact the Admissions Office to learn more about eligibility criteria and application deadlines."
    }
  ];

  return (
    <div className="w-full ">

      
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://lhbs.edu.vn/wp-content/uploads/2022/05/IMG_8667-scaled.jpg)`,
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
              <li className="text-[#fffae9] ">Admissions</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
              ADMISSIONS
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-4"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              LHBS ADMISSIONS
            </h1>
            <p className="text-[#FABA1E] mb-6 text-xl">
              A strong foundation to become global citizens
            </p>
            <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
              LHBS offers holistic bilingual education from Primary to High School, combining strong academic foundations with life skills, English proficiency, and 21st-century competencies to prepare students for global success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://tuyensinh.lhbs.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors flex items-center justify-center rounded-full"
              >
                Apply Online
              </a>
              <button 
                onClick={() => onNavigate('/contact/contact-us')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
              >
                Contact Admissions Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOMING YOU FROM THE START */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Welcome to Lac Hong Bilingual School
              </h2>
              <p className="text-[#212121] text-lg leading-relaxed mb-6">
                Choosing an education environment means building the foundation for your child's future. At LHBS, we understand this responsibility and are committed to providing a comprehensive learning journey from Primary to High School.
              </p>
              <p className="text-[#212121] text-lg leading-relaxed mb-6">
                Our bilingual programme combines strong academic knowledge, creative thinking, practical life skills, and a global citizenship mindset. We create an environment where students thrive academically, socially, and emotionally.
              </p>
              <p className="text-[#212121] text-lg leading-relaxed">
                LHBS is more than a school—it's a safe, dynamic, and supportive community for both students and parents. We welcome families who share our vision of nurturing confident, compassionate, and capable young leaders.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/434818564_404521965543283_4252110783277038068_n.jpg"
                alt="Families visiting LHBS campus during school tour"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO CAN JOIN - ENTRY REQUIREMENTS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-4">
            <p className="text-[#FABA1E] mb-2 uppercase tracking-wider text-sm">
              ENTRY REQUIREMENTS
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-12"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Who Can Join LHBS?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className="text-[#212121] text-lg leading-relaxed mb-8">
                LHBS admits students across key levels—<strong>Kindergarten (Ages 3-5), Grade 1, Grade 6, Grade 10</strong>, and transfer students to other grades—for the new school year. Admissions open from <strong>17/02/2025 until intake quotas are filled</strong>. Seats are limited, so we encourage parents to complete applications early.
              </p>

              {/* Intake Cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 border-l-4 border-[#FABA1E] rounded-r">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Kindergarten</h3>
                    <span className="px-3 py-1 bg-[#FABA1E] text-[#1a5336] text-xs ">150 students</span>
                  </div>
                  <p className="text-[#212121]/70 text-sm">
                    Admissions from 17/02/2025 until quotas are filled - Ages 3-5
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#1a5336] rounded-r">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Grade 1</h3>
                    <span className="px-3 py-1 bg-[#1a5336] text-[#fffae9] text-xs ">224 students</span>
                  </div>
                  <p className="text-[#212121]/70 text-sm">
                    Admissions from 17/02/2025 until quotas are filled
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#1a5336] rounded-r">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Grade 6</h3>
                    <span className="px-3 py-1 bg-[#1a5336] text-[#fffae9] text-xs ">224 students</span>
                  </div>
                  <p className="text-[#212121]/70 text-sm">
                    Admissions from 17/02/2025 until quotas are filled
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#1a5336] rounded-r">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336]">Grade 10</h3>
                    <span className="px-3 py-1 bg-[#1a5336] text-[#fffae9] text-xs ">180 students</span>
                  </div>
                  <p className="text-[#212121]/70 text-sm">
                    Admissions from 17/02/2025 until quotas are filled
                  </p>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#FABA1E] rounded-r">
                  <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-2">Transfer to Other Grades</h3>
                  <p className="text-[#212121]/70 text-sm">
                    Admissions until quotas are filled. Contact for more details.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => onNavigate('/admissions/announcement')}
                  className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
                >
                  View Full Admissions Announcement 2025–2026
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-full">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2024/08/M0M_1370.jpg"
                alt="Student registration and admissions forms"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPEAK TO OUR ADMISSIONS TEAM */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-4">
            <p className="text-[#FABA1E] mb-2 uppercase tracking-wider text-sm">
              HERE TO HELP
            </p>
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              We're Here to Support Your Family
            </h2>
            <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto mb-12">
              Our admissions team provides personalised guidance to help parents understand our programmes, intake timelines, and documentation requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className=" p-6 flex items-start gap-4">
                <Users className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Personalized Consultation Process</h3>
                  <p className="text-[#212121]/70 text-sm">
                    Each family receives tailored support aligned with their child's needs and goals
                  </p>
                </div>
              </div>

              <div className=" p-6 flex items-start gap-4">
                <Globe className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Bilingual Support</h3>
                  <p className="text-[#212121]/70 text-sm">
                    Consultation available in both Vietnamese and English throughout the admissions process
                  </p>
                </div>
              </div>

              <div className=" p-6 flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Detailed Information</h3>
                  <p className="text-[#212121]/70 text-sm">
                    Information about academic programmes, admissions timeline, tuition fees, and scholarships
                  </p>
                </div>
              </div>

              <div className=" p-6 flex items-start gap-4">
                <Heart className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-2">Support from Start to Finish</h3>
                  <p className="text-[#212121]/70 text-sm">
                    Assistance from application submission to official enrolment
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-[#1a5336] p-8 text-center rounded-lg">
              <h3 className="font-['SVN-Gotham'] text-2xl text-[#fffae9] mb-6">Contact Admissions Office</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#FABA1E]" />
                  <span className="text-[#fffae9] text-lg">0251 3952 953</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#FABA1E]" />
                  <a href="mailto:tuyensinh@lhbs.vn" className="text-[#fffae9] text-lg hover:text-[#FABA1E] transition-colors">
                    tuyensinh@lhbs.vn
                  </a>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('/contact/contact-us')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
              >
                Request Admissions Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEP-BY-STEP ADMISSIONS PROCESS */}
      <section className="bg-[#FAF5ED] py-24 md:py-32">
        <div className="w-full px-6 md:px-12">
          {/* Title & Description - Moved to top */}
          <div className="text-center mb-16">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Step-by-Step Admissions Process
            </h2>
            <p className="text-[#212121] font-medium text-lg max-w-3xl mx-auto">
              We've designed a clear, supportive admissions journey to make the process smooth for every family.
            </p>
          </div>

          {/* Carousel - Full width */}
          <div className="relative max-w-screen-2xl mx-auto">
              <Carousel className="relative" style={{ overflow: 'initial' }}>
                <CarouselContent className="-ml-6" style={{ overflow: 'initial' }}>
                  {admissionsSteps.map((step, index) => (
                    <CarouselItem key={step.id} className="pl-6 basis-auto" style={{ overflow: 'initial' }}>
                      {/* Card Container with fixed height for alignment */}
                      <div className="relative" style={{ overflow: 'initial' }}>
                        {/* Card positioned in center of container */}
                        <div className="flex items-center justify-center" style={{ height: '457px' }}>
                          {step.hasImage ? (
                            /* Card with Image */
                            <Card className="bg-white shadow-lg border border-gray-200 w-[374px] h-[457px] overflow-hidden">
                              <CardContent className="p-0 h-full">
                                <div className="relative h-[250px] overflow-hidden">
                                  <img
                                    src={step.image}
                                    alt={step.alt}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div 
                                  className="p-6 h-[207px] flex flex-col"
                                  style={{ backgroundColor: step.backgroundColor }}
                                >
                                  <h3 className="font-['SVN-Gotham'] text-xl text-black mb-3">
                                    {step.title}
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
                                    {step.description}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          ) : (
                            /* Card without Image - with Button - Centered in container */
                            <Card 
                              className="bg-white shadow-lg border border-gray-200 w-[374px] overflow-hidden"
                              style={{ backgroundColor: step.backgroundColor }}
                            >
                              <CardContent className="p-6 flex flex-col justify-center" style={{ minHeight: '300px' }}>
                                <h3 className="font-['SVN-Gotham'] text-xl text-black mb-4 text-center">
                                  {step.title}
                                </h3>
                                <p className="text-black/70 text-sm leading-relaxed mb-6">
                                  {step.description}
                                </p>
                                {step.buttonText && (
                                  <button 
                                    onClick={step.buttonAction}
                                    className="px-6 py-3 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors rounded-full w-full"
                                  >
                                    {step.buttonText}
                                  </button>
                                )}
                              </CardContent>
                            </Card>
                          )}
                        </div>

                        {/* Vertical line - different positioning for image vs non-image cards */}
                        {step.hasImage ? (
                          /* Vertical line for image cards - positioned at bottom of fixed height card */
                          <div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 z-30"
                            style={{ 
                              top: '457px', // Fixed height for image cards
                              height: '25px',
                              backgroundColor: step.timelineColor === "#1A5336" ? 'rgba(26, 83, 54, 0.8)' : 'rgba(250, 186, 30, 0.8)',
                              overflow: 'visible'
                            }}
                          ></div>
                        ) : (
                          /* Vertical line for non-image cards - positioned relative to card center */
                          <div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 z-30"
                            style={{ 
                              top: 'calc(50% + 150px)', // Positioned relative to centered card
                              height: '110px',
                              backgroundColor: step.timelineColor === "#1A5336" ? 'rgba(26, 83, 54, 0.8)' : 'rgba(250, 186, 30, 0.8)',
                              overflow: 'visible'
                            }}
                          ></div>
                        )}
                      </div>

                      {/* Timeline Elements positioned below card */}
                      <div className="flex flex-col items-center mt-6 relative z-30" style={{ overflow: 'visible' }}>
                        {/* Timeline dot positioned at the center */}
                        <div 
                          className="w-4 h-4 rounded-full border-4 border-white shadow-lg relative z-30"
                          style={{ 
                            backgroundColor: step.timelineColor,
                            overflow: 'visible'
                          }}
                        ></div>
                        
                        {/* Timeline label below dot */}
                        <div className="text-center mt-1 relative z-30" style={{ overflow: 'visible' }}>
                          <p className="text-[#212121] text-sm uppercase whitespace-nowrap font-medium">{step.timeLabel}</p>
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
      </section>

      {/* 6. KEY DATES */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Key Admissions & School Dates
            </h2>
            <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto">
              Important milestones for the 2025–2026 school year to help you plan ahead.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className=" p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-[#1a5336]/20">
                  <Calendar className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-2">Admissions 2025–2026 School Year</h3>
                    <p className="text-[#212121]/70">
                      <strong>From 17/02/2025 until quotas are filled</strong> – Grade 1, 6, 10, and transfer to other grades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-[#1a5336]/20">
                  <Calendar className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-2">New School Year Begins</h3>
                    <p className="text-[#212121]/70">
                      August 2025 (details will be announced upon official academic calendar release)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-2">Recommended Application Deadline</h3>
                    <p className="text-[#212121]/70">
                      Submit application before <strong>30/06/2025</strong> to secure a place and allow sufficient preparation time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => onNavigate('/academics/calendar')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                View Academic Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TUITION FEES */}
    <section className="py-24 md:py-32">
  <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">

    <div className="text-center mb-12">
      <h2
        className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
        style={{ fontSize: "48px", lineHeight: "1.24" }}
      >
        Tuition Fees
      </h2>
      <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto">
        LHBS provides a transparent fee structure aligned with our quality education.
      </p>
    </div>

    {/* GRID ÉP TẤT CẢ ITEM BẰNG CHIỀU CAO */}
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

      {/* CARD */}
      <div className="bg-white p-8 border-t-4 border-[#1a5336] rounded-lg h-full flex flex-col">
        <div className="flex flex-col flex-1 text-center">
          <DollarSign className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
          <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-4">
            Primary–Lower Secondary–High School Fees
          </h3>
          <p className="text-[#212121]/70 text-sm">
            Tuition fees for Primary, Lower Secondary, and High School levels
          </p>
        </div>

        <button
          onClick={() => onNavigate("/admissions/tuition-fees")}
          className="mt-auto px-6 h-10 bg-[#1a5336] text-[#fffae9] text-sm hover:bg-[#14432b] transition-colors w-full"
        >
          View Details
        </button>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 border-t-4 border-[#1a5336] rounded-lg h-full flex flex-col">
        <div className="flex flex-col flex-1 text-center">
          <BookOpen className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
          <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-4">
            Kindergarten Bien Hoa Fees
          </h3>
          <p className="text-[#212121]/70 text-sm">
            Tuition fees for Kindergarten at Bien Hoa campus
          </p>
        </div>

        <button
          onClick={() => onNavigate("/admissions/tuition-fees")}
          className="mt-auto px-6 h-10 bg-[#1a5336] text-[#fffae9] text-sm hover:bg-[#14432b] transition-colors w-full"
        >
          View Details
        </button>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 border-t-4 border-[#1a5336] rounded-lg h-full flex flex-col">
        <div className="flex flex-col flex-1 text-center">
          <Building className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
          <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-4">
            Kindergarten Long Khanh Fees
          </h3>
          <p className="text-[#212121]/70 text-sm">
            Tuition fees for Kindergarten at Long Khanh campus
          </p>
        </div>

        <button
          onClick={() => onNavigate("/admissions/tuition-fees")}
          className="mt-auto px-6 h-10 bg-[#1a5336] text-[#fffae9] text-sm hover:bg-[#14432b] transition-colors w-full"
        >
          View Details
        </button>
      </div>

    </div>
  </div>
</section>


      {/* 8. SCHOLARSHIPS & SPECIAL PROGRAMMES */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Scholarships & Special Programmes
            </h2>
            <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto">
              LHBS offers scholarship opportunities based on academic achievement, family circumstances, and community contribution. We encourage parents to check scholarship conditions and application timelines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto  p-12 text-center">
            <Trophy className="w-16 h-16 text-[#FABA1E] mx-auto mb-6" />
            <h3 className="font-['SVN-Gotham'] text-2xl text-[#1a5336] mb-4">LHBS Scholarships</h3>
            <p className="text-[#212121]/70 mb-8 max-w-2xl mx-auto">
              Scholarships based on academic achievement, family circumstances, special talents, and community contribution. Support ranges from partial to full tuition coverage, helping students from challenging backgrounds access quality education.
            </p>
            <button 
              onClick={() => onNavigate('/admissions/scholarships')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
            >
              View Scholarship Information
            </button>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE LHBS */}
      <section className=" py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-4">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Why Choose LHBS?
            </h2>
            <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto mb-16">
              A dynamic, caring bilingual environment for holistic development.
            </p>
          </div>

          {/* Advantage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-8 text-center">
              <Users className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
              <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-3">Dynamic, Friendly Learning Environment</h3>
              <p className="text-[#212121]/70 text-sm">
                Diverse, safe community that encourages creativity and holistic development
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <Sparkles className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
              <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-3">Active, Creative Learning Methods</h3>
              <p className="text-[#212121]/70 text-sm">
                Enhanced English, IT, STEM, and 21st-century skills
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <Building className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
              <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-3">Green Spaces, Modern Facilities</h3>
              <p className="text-[#212121]/70 text-sm">
                Well-invested classrooms, labs, libraries, and sports areas
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <Target className="w-12 h-12 text-[#FABA1E] mx-auto mb-4" />
              <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] mb-3">Clear Graduate Pathways</h3>
              <p className="text-[#212121]/70 text-sm">
                Progression from Primary → Lower Secondary → High School → University in Vietnam or abroad
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="bg-[#1a5336] p-12 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-['SVN-Gotham'] text-4xl text-[#FABA1E] mb-2">2,600+</div>
                <div className="text-[#fffae9]/80 text-sm">Students</div>
              </div>
              <div>
                <div className="font-['SVN-Gotham'] text-4xl text-[#FABA1E] mb-2">170+</div>
                <div className="text-[#fffae9]/80 text-sm">Teachers</div>
              </div>
              <div>
                <div className="font-['SVN-Gotham'] text-4xl text-[#FABA1E] mb-2">100%</div>
                <div className="text-[#fffae9]/80 text-sm">High School Graduates</div>
              </div>
              <div>
                <div className="font-['SVN-Gotham'] text-4xl text-[#FABA1E] mb-2">52</div>
                <div className="text-[#fffae9]/80 text-sm">Quality Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. QUESTIONS (FAQ) */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Questions About Admissions
            </h2>
            <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto">
              Here are answers to common questions from parents about the LHBS admissions process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className=" border border-[#1a5336]/20 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-white/50 transition-colors"
                >
                  <h3 className="font-['SVN-Gotham'] text-lg text-[#1a5336] flex-1">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#FABA1E] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#FABA1E] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#212121]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-[#212121]/70 mb-4">
              Need more detailed information?
            </p>
            <button 
              onClick={() => onNavigate('/resources/parent-handbook')}
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
            >
              Download Parent Handbook
            </button>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA - READY TO APPLY */}
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
            Ready to Apply?
          </h2>
          <p className="text-[#fffae9]/90 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Admissions for the 2025–2026 school year are now open. We are ready to partner with families in choosing the best learning environment for your child.
          </p>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://tuyensinh.lhbs.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors flex items-center justify-center rounded-full"
            >
              Apply Online
            </a>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover: hover:text-[#1a5336] transition-colors"
            >
              Request Admissions Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}