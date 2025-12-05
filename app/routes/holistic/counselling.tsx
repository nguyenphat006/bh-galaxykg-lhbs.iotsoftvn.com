import React from 'react';
import { ChevronRight, Download, Users, Award, Globe, Target } from 'lucide-react';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { useNavigate } from 'react-router';

export default function UniversityCareerCounsellingPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section 
        id="ucc"
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80)`,
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
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors"
                >
                  Home
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li>
                <button 
                  onClick={() => onNavigate('/academics/overview')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors"
                >
                  Academic Excellence
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li className="text-[#fffae9]">University and Career Counselling</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
              INTERNATIONAL UNIVERSITY GUIDANCE
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-4"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Study Abroad & University Counselling
            </h1>
            <p className="text-[#FABA1E] mb-6 text-xl">
              Your pathway to world-class universities
            </p>
            <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
              Our expert study abroad advisors provide comprehensive support for international university applications, helping LHBS students gain admission to prestigious institutions worldwide including Australia, Canada, UK, USA, and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors flex items-center justify-center rounded-full"
              >
                Book Study Abroad Consultation
              </button>
              <button 
                onClick={() => onNavigate('/contact/contact-us')}
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
              >
                Download University Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONALISED CONSULTATION SECTION */}
      <section id="personalised-support" className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Comprehensive University Application Support
              </h2>
              <p className="text-[#212121] text-lg leading-relaxed mb-6">
                Our dedicated study abroad advisors work closely with each student to navigate the complex international university application process. From selecting the right universities to crafting compelling personal statements, we provide expert guidance every step of the way.
              </p>
              <p className="text-[#212121] text-lg leading-relaxed mb-8">
                With deep knowledge of admission requirements across major study destinations, we help students maximize their chances of acceptance to their dream universities while ensuring they find the perfect academic and cultural fit.
              </p>

              {/* List Items */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FABA1E] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#212121]">University selection strategy based on academic profile and preferences</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FABA1E] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#212121]">Personal statement and essay writing workshops</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FABA1E] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#212121]">International scholarship and funding guidance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FABA1E] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#212121]">Visa application support and pre-departure preparation</p>
                </div>
              </div>
            </div>

            {/* Right: Image with dot pattern background */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Dot pattern background */}
              <div className="absolute -top-8 -right-8 w-32 h-32 opacity-10">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#1a5336] rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2688&q=80"
                alt="Student receiving personalised counselling guidance from academic advisor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARENTS AND ALUMNI SUPPORT SECTION */}
      <section id="parents-alumni" className="bg-[#f8f9fa] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with dot pattern background */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              {/* Dot pattern background */}
              <div className="absolute -top-8 -left-8 w-32 h-32 opacity-10">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#1a5336] rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Parents meeting with school counsellors and alumni mentors"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                Family & Alumni Study Abroad Network
              </h2>
              <p className="text-[#212121] text-lg leading-relaxed mb-6">
                Studying abroad is a family journey. We provide comprehensive support for parents throughout the application process, from understanding international education systems to managing finances and logistics. Our sessions help families make informed decisions about their child's global education path.
              </p>
              <p className="text-[#212121] text-lg leading-relaxed mb-8">
                Connect with our extensive network of LHBS alumni currently studying or working internationally. These mentors provide invaluable insights into university life, cultural adaptation, and academic success strategies in their respective countries.
              </p>

              <button 
                onClick={() => onNavigate('/parents/essentials')}
                className="px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors"
              >
                Study Abroad Parent Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section id="ucc-testimonial" className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Circular Portrait */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Portrait of Minh Nguyen, LHBS graduate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Quote Block */}
            <div className="order-1 lg:order-2">
              {/* Quote marks */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#FABA1E]" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <blockquote className="text-[#212121] text-xl leading-relaxed mb-8 font-medium">
                "The university guidance team at LHBS was instrumental in my successful application to the University of Melbourne. From helping me craft my personal statement to preparing for interviews, their expertise and support made all the difference. I couldn't have navigated the complex application process without their guidance."
              </blockquote>

              <div>
                <p className="text-[#1a5336] font-bold text-lg mb-1">Minh Nguyen</p>
                <p className="text-[#212121]/70">LHBS Graduate, Class of 2023 • University of Melbourne, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UNIVERSITY FAIR & NETWORKING SECTION */}
      <section id="university-fair" className="bg-[#f8f9fa] py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text with decorative elements */}
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-12 -left-12 w-24 h-24 border-4 border-[#FABA1E] rounded-full opacity-20"></div>
              
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                International University Fairs & Study Abroad Expo
              </h2>
              <p className="text-[#212121] text-lg leading-relaxed mb-6">
                LHBS annually hosts exclusive international university fairs where students meet directly with admissions representatives from top-tier universities across Australia, Canada, UK, USA, and other study destinations. These events provide firsthand information about programs, scholarships, and application requirements.
              </p>
              <p className="text-[#212121] text-lg leading-relaxed mb-8">
                Students gain valuable insights into university life, admission strategies, and study abroad experiences through interactive sessions, workshops, and one-on-one consultations with university representatives and current international students.
              </p>

              {/* Decorative line element */}
              <div className="absolute -bottom-8 right-0 w-16 h-1 bg-[#FABA1E]"></div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Students networking with university representatives at LHBS career fair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC EXCELLENCE & GRADUATE SUCCESS SECTION */}
      <section id="academic-excellence" className="bg-white py-24 md:py-32">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <ImageWithFallback 
                src="https://lhbs.edu.vn/wp-content/uploads/2022/11/Lac-Hong-Group-scaled.jpg"
                alt="LHBS graduation ceremony celebrating student achievement and university acceptances"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text */}
            <div>
              <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
                SUCCESS STORIES
              </p>
              <h2 
                className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
                style={{ fontSize: '48px', lineHeight: '1.24' }}
              >
                International University Admission Success Stories
              </h2>
              <p className="text-[#212121] text-lg leading-relaxed mb-6">
                LHBS students consistently gain admission to world-renowned universities including University of Melbourne, University of Toronto, Imperial College London, UCLA, and many more. Our comprehensive study abroad preparation program has helped hundreds of students achieve their international education dreams.
              </p>
              <p className="text-[#212121] text-lg leading-relaxed mb-8">
                With dedicated support for applications to universities in Australia, Canada, UK, USA, and beyond, we maintain strong relationships with international institutions and provide ongoing support from application to graduation and beyond.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1a5336] mb-1">95%</div>
                  <div className="text-sm text-[#212121]/70">University Acceptance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1a5336] mb-1">40+</div>
                  <div className="text-sm text-[#212121]/70">Partner Universities</div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => onNavigate('/academic-results')}
                  className="block w-full sm:w-auto px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
                >
                  View International University Acceptances
                </button>
                
                <div className="flex items-center gap-2 text-[#1a5336]">
                  <Download className="w-5 h-5" />
                  <button 
                    onClick={() => window.open('/resources/study-abroad-guide.pdf', '_blank')}
                    className="text-sm underline hover:no-underline"
                  >
                    Download Study Abroad Application Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}