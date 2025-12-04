import { PageTemplate } from '~/components/PageTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';


export default function ParentEssentialsPage() {

  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path)
  }

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Parents', onClick: () => onNavigate('/parents') },
    { label: 'Parent Essentials' }
  ];

  return (
    <div id="parent-essentials" className="w-full">
      {/* HERO SECTION */}
      <section 
        className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(https://lhbs.edu.vn/wp-content/uploads/2025/09/333A9396a.jpg)`,
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
                  onClick={() => onNavigate('/parents')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Parents
                </button>
              </li>
              <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
              <li className="text-[#fffae9]">Parent Essentials</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
              PARENT RESOURCES · SUPPORT & GUIDANCE
            </p>
            <h1 
              className="font-['SVN-Gotham'] text-white mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              Parent Essentials
            </h1>
            <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
              Everything you need to know to support your child's journey at LHBS. From important dates to essential documents, we've got you covered with comprehensive resources and guidance.
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
                className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Term Dates Section */}
      <section id="term-dates" className="relative py-16 md:py-24  bg-[#FFFAE9] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-0 w-96 h-96">
            <div className="grid grid-cols-8 gap-3">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a5336] rounded-full opacity-30"></div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-[#1a5336]">
              <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-tight mb-8 text-[#1a5336]">
                KEY TERM DATES:<br />
                2025-2026
              </h2>
              
              <p className="text-[18px] leading-relaxed mb-8 text-[#1a5336]">
                Here are the most important dates for your diary in the upcoming school year.
              </p>
              
              <div className="mb-8">
                <p className="text-[16px] mb-4 text-[#1a5336]">Download academic calendars here:</p>
                <div className="space-y-2">
                  <button className="block text-left text-[16px] font-medium border-b border-[#1a5336]/30 pb-1 hover:border-[#1a5336] transition-colors text-[#1a5336]">
                    Academic Year 2025 - 2026
                  </button>
                  <button className="block text-left text-[16px] font-medium border-b border-[#1a5336]/30 pb-1 hover:border-[#1a5336] transition-colors text-[#1a5336]">
                    Academic Year 2026 - 2027
                  </button>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-transparent border-2 border-[#1a5336] text-[#1a5336] font-medium hover:bg-[#1a5336] hover:text-white transition-colors rounded-lg">
                ADD TO MY CALENDAR
              </button>
            </div>

            {/* Right Content - Term Dates Card */}
            <div className="bg-white/95 rounded-xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Term 1</h3>
                  <p className="text-[14px] text-gray-600">Thursday 14 Aug to Wednesday 17 Dec 2025</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Christmas holidays</h3>
                  <p className="text-[14px] text-gray-600">Thursday 18 Dec 2025 to Monday 05 Jan 2026</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Term 2</h3>
                  <p className="text-[14px] text-gray-600">Tuesday 06 Jan to Friday 17 Apr 2026</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Tet Holidays</h3>
                  <p className="text-[14px] text-gray-600">Monday 09 Feb to Tuesday 24 Feb 2026</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Easter holidays</h3>
                  <p className="text-[14px] text-gray-600">Monday 20 Apr to Friday 01 May 2026</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Term 3</h3>
                  <p className="text-[14px] text-gray-600">Monday 04 May to Friday 19 Jun 2026</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-[20px] font-bold text-[#1a5336] mb-2">Summer holiday begins</h3>
                  <p className="text-[14px] text-gray-600">Monday 22 Jun 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Documents Section */}
      <section id="documents" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="text-[40px] md:text-[48px] text-[#1a5336] font-bold mb-16 text-center">
            Essential Documents & Resources
          </h2>

          {/* Parent Handbooks */}
          <div id="handbooks" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[32px] text-[#1a5336] font-bold mb-6">Parent Handbooks</h3>
                <p className="text-[16px] text-[#666] leading-relaxed mb-6">
                  Our comprehensive handbooks contain everything you need to know about school policies, 
                  procedures, and expectations. Download the relevant handbook for your child's year group.
                </p>
                <div className="space-y-3">
                  <button className="block w-full text-left px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1a5336]">Primary School Handbook</span>
                      <span className="text-[#FABA1E]">→</span>
                    </div>
                  </button>
                  <button className="block w-full text-left px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1a5336]">Secondary School Handbook</span>
                      <span className="text-[#FABA1E]">→</span>
                    </div>
                  </button>
                  <button className="block w-full text-left px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1a5336]">New Parent Guide</span>
                      <span className="text-[#FABA1E]">→</span>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBoYW5kYm9va3MlMjBkb2N1bWVudHMlMjBwYXJlbnRzfGVufDB8fHx8MTY5NDUxNDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Parent Handbooks and School Documents"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lunch Menus */}
          <div id="lunch-menus" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYWZldGVyaWElMjBsdW5jaCUyMGZvb2R8ZW58MHx8fHwxNjk0NTE0MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Healthy School Lunch Menu and Cafeteria"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[32px] text-[#1a5336] font-bold mb-6">Lunch Menus</h3>
                <p className="text-[16px] text-[#666] leading-relaxed mb-6">
                  View our nutritious and delicious lunch menus prepared by our catering team. 
                  We offer balanced meals with options for various dietary requirements.
                </p>
                <div className="space-y-3">
                  <button className="block w-full text-left px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1a5336]">This Week's Menu</span>
                      <span className="text-[#FABA1E]">→</span>
                    </div>
                  </button>
                  <button className="block w-full text-left px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1a5336]">Monthly Menu Plan</span>
                      <span className="text-[#FABA1E]">→</span>
                    </div>
                  </button>
                  <button className="block w-full text-left px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1a5336]">Special Dietary Options</span>
                      <span className="text-[#FABA1E]">→</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Uniforms */}
          <div id="uniforms" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[32px] text-[#1a5336] font-bold mb-6">School Uniforms</h3>
                <p className="text-[16px] text-[#666] leading-relaxed mb-6">
                  Our school uniform policy promotes equality and school pride. Find detailed information 
                  about uniform requirements, suppliers, and guidelines for each year group.
                </p>
                <button className="px-8 py-4 bg-[#FABA1E] text-[#1a5336] font-semibold hover:bg-[#e5a812] transition-colors">
                  View Uniform Guide
                </button>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjB1bmlmb3JtJTIwc3R1ZGVudHN8ZW58MHx8fHwxNjk0NTE0MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="School Uniform Guidelines and Students"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Parent Seminars */}
          <div id="seminars" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjB3b3Jrc2hvcCUyMHNlbWluYXIlMjBlZHVjYXRpb24lMjBtZWV0aW5nfGVufDB8fHx8MTY5NDUxNDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Parent Workshop and Educational Seminars"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[32px] text-[#1a5336] font-bold mb-6">Parent Seminars</h3>
                <p className="text-[16px] text-[#666] leading-relaxed mb-6">
                  Join our regular parent seminars covering topics such as child development, 
                  supporting learning at home, and navigating adolescence. Expert speakers and 
                  practical workshops designed for busy parents.
                </p>
                <button className="px-8 py-4 bg-[#FABA1E] text-[#1a5336] font-semibold hover:bg-[#e5a812] transition-colors">
                  Register for Seminars
                </button>
              </div>
            </div>
          </div>

          {/* Meet Our Teachers */}
          <div id="teachers">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[32px] text-[#1a5336] font-bold mb-6">Meet Our Teachers</h3>
                <p className="text-[16px] text-[#666] leading-relaxed mb-6">
                  Get to know the dedicated professionals who teach and inspire your children every day. 
                  Learn about their qualifications, teaching philosophy, and how to best communicate 
                  with your child's teachers.
                </p>
                <button className="px-8 py-4 bg-[#FABA1E] text-[#1a5336] font-semibold hover:bg-[#e5a812] transition-colors">
                  View Teacher Profiles
                </button>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwbWVldGluZyUyMHNjaG9vbCUyMGVkdWNhdGlvbnxlbnwwfHx8fDE2OTQ1MTQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Meet Our Teachers - Professional Educators"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] text-[#1a5336] font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  What are the school hours?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  School hours are 8:00 AM to 3:30 PM for all year groups. Early drop-off is available 
                  from 7:30 AM and after-school care until 6:00 PM for working parents.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  How do I communicate with my child's teacher?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  You can contact teachers via the parent portal, email, or schedule a meeting through 
                  the school office. Teachers respond to emails within 48 hours during school days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  What is the homework policy?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  Homework varies by year group: 15-20 minutes for Years 1-2, 30 minutes for Years 3-4, 
                  45 minutes for Years 5-6, and 1-2 hours for secondary students. Quality over quantity is emphasized.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  How are parent-teacher conferences scheduled?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  Formal conferences occur twice per year in November and March. Additional meetings 
                  can be requested anytime through the parent portal or by contacting the school office.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  What support is available for students with additional needs?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  We have a dedicated Learning Support team that works with students who need additional 
                  academic, social, or emotional support. Individual education plans are created as needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  How do I access the parent portal?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  Login details are provided during enrollment. The portal gives access to grades, 
                  attendance, school calendar, and direct messaging with teachers. Reset passwords 
                  through the school office if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  What extracurricular activities are available?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  We offer over 30 clubs and activities including sports, music, drama, coding, 
                  languages, and academic clubs. Activities vary by term and age group. Sign-ups 
                  occur at the start of each term.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-gray-200 bg-white px-6">
                <AccordionTrigger className="text-[18px] text-[#1a5336] font-medium text-left">
                  What is the school's absence reporting policy?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#666] leading-relaxed">
                  Please report absences by 9:00 AM on the day of absence via the parent portal or 
                  by calling the school office. Medical appointments should be scheduled outside 
                  school hours when possible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="news" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[40px] md:text-[48px] text-[#1a5336] font-bold">
              Latest News & Events
            </h2>
            <button 
              onClick={() => onNavigate('/news-events')}
              className="px-6 py-3 text-[#1a5336] border border-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors"
            >
              View All News
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <article className="bg-white border border-gray-200 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjByZWFkaW5nJTIwd29ya3Nob3AlMjBjaGlsZHJlbnxlbnwwfHx8fDE2OTQ1MTQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Parent Workshop: Supporting Reading at Home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-[14px] text-[#FABA1E] font-medium">November 15, 2024</time>
                <h3 className="text-[20px] text-[#1a5336] font-semibold mt-2 mb-3">
                  Parent Workshop: Supporting Reading at Home
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  Join us for an interactive workshop on how to support your child's reading development. 
                  Expert tips and practical strategies for parents.
                </p>
                <button className="text-[14px] text-[#FABA1E] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>

            {/* News Item 2 */}
            <article className="bg-white border border-gray-200 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxlJTIwYWNhZGVtaWMlMjB5ZWFyfGVufDB8fHx8MTY5NDUxNDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Academic Calendar and Term Dates"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-[14px] text-[#FABA1E] font-medium">November 12, 2024</time>
                <h3 className="text-[20px] text-[#1a5336] font-semibold mt-2 mb-3">
                  Term 2 Academic Calendar Released
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  Important dates for the upcoming term including parent conferences, assessment weeks, 
                  and holiday schedules. Download the full calendar.
                </p>
                <button className="text-[14px] text-[#FABA1E] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>

            {/* News Item 3 */}
            <article className="bg-white border border-gray-200 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBwb3J0YWwlMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwwfHx8fDE2OTQ1MTQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="New Parent Portal Features and Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-[14px] text-[#FABA1E] font-medium">November 8, 2024</time>
                <h3 className="text-[20px] text-[#1a5336] font-semibold mt-2 mb-3">
                  New Parent Portal Features
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  Enhanced communication tools now available in the parent portal including real-time 
                  notifications and improved grade tracking features.
                </p>
                <button className="text-[14px] text-[#FABA1E] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section id="enrollment" className="py-16 md:py-24 bg-[#1a5336] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-bold leading-tight mb-6">
                Ready to Join the LHBS Family?
              </h2>
              <p className="text-[18px] text-white/90 leading-relaxed mb-8">
                Discover how LHBS can provide your child with an exceptional bilingual education 
                in a nurturing, challenging environment. Our admissions team is here to guide you 
                through every step of the enrollment process.
              </p>
              <button 
                onClick={() => onNavigate('/admissions/apply-now')}
                className="px-8 py-4 bg-[#FABA1E] text-[#1a5336] font-semibold hover:bg-[#e5a812] transition-colors"
              >
                Start Application Process
              </button>
            </div>
            <div>
              <div className="aspect-square overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBqb2luaW5nJTIwc2Nob29sJTIwZW5yb2xsbWVudHxlbnwwfHx8fDE2OTQ1MTQwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Join the LHBS Family - School Enrollment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}