import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle, 
  X, 
  ChevronDown, 
  ChevronUp,
  ChevronRight,
  Award,
  Target,
  Users,
  TrendingUp,
  FileText,
  Calendar,
  DollarSign,
  RefreshCw,
  Layers,
  Clock,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router';
export default function ScholarshipsPage() {
  const navigate = useNavigate()
  const onNavigate = (path : string) => {
    navigate(path)
  }
  return (
    <div className="relative ">
      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* Summary Cards */}
      <SummaryCardsSection />
      
      {/* Who Should Apply */}
      <WhoShouldApplySection />
      
      {/* Criteria Matrix */}
      <CriteriaMatrixSection />
      
      {/* Process Timeline */}
      <ProcessTimelineSection />
      
      {/* Document Checklist */}
      <DocumentChecklistSection />
      
      {/* Key Dates */}
      <KeyDatesSection />
      
      {/* Award & Renewal */}
      <AwardRenewalSection />
      
      {/* Stacking & Payment */}
      <StackingPaymentSection />
      
      {/* Need-Based Aid */}
      <NeedBasedAidSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Downloads & Contact */}
      <DownloadsContactSection onNavigate={onNavigate} />
      
      {/* Sticky Helper (Desktop) */}
      <StickyHelper />
    </div>
  );
}

// ==================== HERO SECTION ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const scHeroTitle = "Scholarships & Financial Aid";
  const scHeroSub = "Empowering Deserving Students";
  const reassurance = "We believe every talented student deserves access to world-class education. Our comprehensive scholarship program supports academic excellence, creative potential, and financial need.";

  return (
    <section className="relative min-h-[50vh] flex items-center bg-[#1a5336] overflow-hidden">
      {/* Background Motif */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #FABA1E 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
        aria-hidden="true"
      />
      
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
                >
                  Home
                </button>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/admissions')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Admissions
                </button>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
              </li>
              <li className="text-[#fffae9] ">Scholarships</li>
            </ol>
          </nav>
          
          {/* Subhead */}
          <p className=" text-sm md:text-base text-[#FABA1E] mb-4 tracking-wide uppercase">
            {scHeroSub}
          </p>
          
          {/* Title */}
          <h1 className=" text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
            {scHeroTitle}
          </h1>
          
          {/* Reassurance */}
          <p className=" text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed">
            {reassurance}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const criteriaSection = document.getElementById('criteria');
                criteriaSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9]"
              aria-label="View scholarship eligibility criteria"
            >
              CHECK ELIGIBILITY
            </button>
            
            <button
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-12 h-12 bg-transparent text-[#fffae9] font-bold shadow-lg hover:shadow-xl hover:bg-[#fffae9] hover:text-[#1a5336] transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              aria-label="Start scholarship application"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SUMMARY CARDS ====================
function SummaryCardsSection() {
  const cards = [
    {
      icon: Award,
      title: "Scholarship Types",
      desc: "Academic Excellence, Creative Talent, Leadership, Sports, Need-Based"
    },
    {
      icon: DollarSign,
      title: "Award Value",
      desc: "10% to 100% tuition coverage based on merit and need"
    },
    {
      icon: Users,
      title: "Available Seats",
      desc: "Approx. 30-40 scholarships awarded per academic year"
    },
    {
      icon: RefreshCw,
      title: "Renewal Option",
      desc: "Annual renewal available for students maintaining criteria"
    },
    {
      icon: Layers,
      title: "Stacking Allowed",
      desc: "Combine multiple scholarships up to 100% tuition"
    }
  ];

  return (
    <section id="summary" className="relative py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-all rounded-lg"
              >
                <Icon className="w-10 h-10 text-[#FABA1E] mb-4" />
                <h3 className=" text-xl text-[#1a5336] mb-2">
                  {card.title}
                </h3>
                <p className=" text-sm text-[#1a5336]/80 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== WHO SHOULD APPLY ====================
function WhoShouldApplySection() {
  const whoList = [
    "Students with outstanding academic achievements (GPA 3.5+ or equivalent)",
    "Creative talents in arts, music, design, or performance",
    "Demonstrated leadership in school or community activities",
    "Athletes with provincial or national-level achievements",
    "Students with strong intrinsic motivation and growth mindset",
    "Families with documented financial need seeking support",
    "Applicants with unique life experiences or challenges overcome",
    "Students committed to contributing to LHBS community"
  ];

  return (
    <section id="who" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="max-w-[900px] mx-auto">
          <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4 text-center">
            Who Should Apply?
          </h2>
          <p className=" text-lg text-[#1a5336]/70 mb-12 text-center">
            We encourage applications from diverse students who demonstrate excellence, potential, and motivation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {whoList.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <p className=" text-[#1a5336]">{item}</p>
              </div>
            ))}
          </div>
          
          {/* Reassurance Note */}
          <div className="bg-white relative p-6 shadow-lg hover:shadow-xl transition-all rounded-lg">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#FABA1E] rounded-l-lg"></div>
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
              <p className=" text-sm text-[#1a5336]/80 leading-relaxed">
                <strong>Not sure if you qualify?</strong> We encourage you to apply anyway. Our admissions team reviews each application holistically, considering potential alongside current achievements. Contact our scholarship office for guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ==================== CRITERIA MATRIX ====================
function CriteriaMatrixSection() {
  const weights = [
    { label: "Academic", value: 40, color: "#1a5336" },
    { label: "Portfolio", value: 25, color: "#FABA1E" },
    { label: "Interview", value: 20, color: "#1a5336" },
    { label: "Recommendations", value: 10, color: "#FABA1E" },
    { label: "Community", value: 5, color: "#1a5336" }
  ];

  const scholarshipTypes = [
    {
      type: "Academic Excellence",
      criteria: "GPA 3.8+, standardized test scores top 10%, academic awards",
      maxValue: "Up to 100%",
      seats: "10-15",
      renewal: "GPA 3.7+"
    },
    {
      type: "Creative Talent",
      criteria: "Portfolio review, audition/performance, competition awards",
      maxValue: "Up to 75%",
      seats: "5-8",
      renewal: "Continued participation + GPA 3.5+"
    },
    {
      type: "Leadership",
      criteria: "Leadership roles, community impact, recommendation letters",
      maxValue: "Up to 50%",
      seats: "8-10",
      renewal: "Active leadership + GPA 3.5+"
    },
    {
      type: "Sports Excellence",
      criteria: "Provincial/national competition results, coach recommendation",
      maxValue: "Up to 50%",
      seats: "3-5",
      renewal: "Team participation + GPA 3.0+"
    },
    {
      type: "Need-Based Aid",
      criteria: "Demonstrated financial need + GPA 3.0+",
      maxValue: "Up to 100%",
      seats: "5-7",
      renewal: "Annual financial review + GPA 3.0+"
    }
  ];

  return (
    <section id="criteria" className="relative py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4 text-center">
          Scholarship Criteria & Selection
        </h2>
        <p className=" text-lg text-[#1a5336]/70 mb-12 text-center max-w-[800px] mx-auto">
          Our selection process evaluates multiple dimensions of student excellence and potential.
        </p>
        
        {/* Weighting Bar */}
        <div className="mb-12 max-w-[900px] mx-auto">
          <h3 className=" text-2xl text-[#1a5336] mb-4">
            Evaluation Weighting
          </h3>
          <div className="flex h-16 shadow-lg rounded-lg overflow-hidden">
            {weights.map((weight, idx) => (
              <div
                key={idx}
                      style={{
        flexBasis: `${weight.value}%`,
        flexGrow: weight.value,     // giữ tỷ lệ rộng hợp lý
        minWidth: "120px",           // 👈 CHỐT – label luôn nhìn thấy
        backgroundColor: weight.color,
      }}
                className="flex flex-col items-center justify-center text-[#fffae9] relative group"
              >
                <span className=" font-bold text-sm md:text-base">{weight.value}%</span>
                <span className=" text-xs hidden md:block">{weight.label}</span>
                
                {/* Mobile tooltip */}
                <span className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#1a5336] whitespace-nowrap">
                  {weight.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#1a5336] text-[#fffae9]">
                <th className="p-4 text-left text-xl">
                  Scholarship Type
                </th>
                <th className="p-4 text-left text-xl">
                  Key Criteria
                </th>
                <th className="p-4 text-left text-xl">
                  Max Value
                </th>
                <th className="p-4 text-left text-xl">
                  Seats
                </th>
                <th className="p-4 text-left text-xl">
                  Renewal
                </th>
              </tr>
            </thead>
            <tbody>
              {scholarshipTypes.map((scholarship, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-[#1a5336]">
                    {scholarship.type}
                  </td>
                  <td className="p-4 text-sm text-[#1a5336]/80">
                    {scholarship.criteria}
                  </td>
                  <td className="p-4 text-[#1a5336]">
                    {scholarship.maxValue}
                  </td>
                  <td className="p-4 text-[#1a5336]">
                    {scholarship.seats}
                  </td>
                  <td className="p-4 text-sm text-[#1a5336]/80">
                    {scholarship.renewal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-white relative p-6 shadow-lg rounded-lg">
          <div className="absolute left-0 top-0 w-1 h-full bg-[#FABA1E] rounded-l-lg"></div>
          <p className=" text-sm text-[#1a5336]/80 leading-relaxed">
            <strong>Note:</strong> All scholarship recipients must maintain good academic standing and conduct. Specific renewal criteria may vary by scholarship type. Awards are reviewed annually and are not automatically guaranteed for subsequent years.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== PROCESS TIMELINE ====================
function ProcessTimelineSection() {
  const steps = [
    {
      label: "Submit Application",
      desc: "Complete online form with all required documents",
      sla: "Day 0",
      cta: "Start Application",
      ctaAction: "apply"
    },
    {
      label: "Initial Review",
      desc: "Admissions team reviews academic and portfolio materials",
      sla: "Week 1-2",
      cta: null,
      ctaAction: null
    },
    {
      label: "Interview & Assessment",
      desc: "Shortlisted candidates invited for interview or audition",
      sla: "Week 3-4",
      cta: null,
      ctaAction: null
    },
    {
      label: "Committee Decision",
      desc: "Scholarship committee evaluates all candidates holistically",
      sla: "Week 5-6",
      cta: null,
      ctaAction: null
    },
    {
      label: "Award Notification",
      desc: "Successful candidates receive offer letter with award details",
      sla: "Week 7-8",
      cta: null,
      ctaAction: null
    }
  ];

  return (
    <section id="process" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4 text-center">
          Application Process
        </h2>
        <p className=" text-lg text-[#1a5336]/70 mb-12 text-center">
          A transparent 5-step journey from application to award notification
        </p>
        
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#1a5336]/20" aria-hidden="true" />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-[#1a5336] shadow-lg hover:shadow-xl transition-all rounded-lg flex items-center justify-center ring-4 ring-[#FABA1E]">
                    <span className=" text-3xl text-[#fffae9]">{idx + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className=" text-xl text-[#1a5336] mb-2">
                      {step.label}
                    </h3>
                    <p className=" text-sm text-[#1a5336]/70 mb-2 leading-relaxed">
                      {step.desc}
                    </p>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FABA1E] text-[#1a5336] rounded">
                      <Clock className="w-3 h-3" />
                      <span className=" text-xs font-bold">{step.sla}</span>
                    </div>
                    
                    {step.cta && (
                      <button className="mt-4 px-6 h-10 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]">
                        {step.cta}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-[#1a5336] shadow-lg rounded-lg flex items-center justify-center ring-4 ring-[#FABA1E]">
                <span className=" text-2xl text-[#fffae9]">{idx + 1}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6 border-b-2 border-[#1a5336]/10 last:border-b-0">
                <h3 className=" text-xl text-[#1a5336] mb-2">
                  {step.label}
                </h3>
                <p className=" text-sm text-[#1a5336]/70 mb-3 leading-relaxed">
                  {step.desc}
                </p>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FABA1E] text-[#1a5336] rounded mb-3">
                  <Clock className="w-3 h-3" />
                  <span className=" text-xs font-bold">{step.sla}</span>
                </div>
                
                {step.cta && (
                  <button className="block px-6 h-10 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]">
                    {step.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== DOCUMENT CHECKLIST ====================
function DocumentChecklistSection() {
  const requiredDocs = [
    "Completed scholarship application form",
    "Academic transcripts (most recent 2 years)",
    "Standardized test scores (if applicable)",
    "2 recommendation letters from teachers",
    "Personal statement (500-800 words)",
    "Portfolio or work samples (for creative/talent scholarships)"
  ];

  const optionalDocs = [
    "Awards and certificates",
    "Community service records",
    "Athletic achievements documentation",
    "Additional recommendation from community leader",
    "Video introduction (2-3 minutes)",
    "Financial need documentation (for need-based aid)"
  ];

  return (
    <section id="docs" className="relative py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4 text-center">
          Document Checklist
        </h2>
        <p className=" text-lg text-[#1a5336]/70 mb-12 text-center">
          Prepare these materials before starting your application
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Required Documents */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a5336] rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#FABA1E]" />
              </div>
              <h3 className=" text-2xl text-[#1a5336]">
                Required Documents
              </h3>
            </div>
            
            <ul className="space-y-3">
              {requiredDocs.map((doc, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a5336] flex-shrink-0 mt-0.5" />
                  <span className=" text-[#1a5336]">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Optional Documents */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg ring-2 ring-[#FABA1E]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FABA1E] rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-[#1a5336]" />
              </div>
              <h3 className=" text-2xl text-[#1a5336]">
                Optional (Recommended)
              </h3>
            </div>
            
            <ul className="space-y-3">
              {optionalDocs.map((doc, idx) => (
                <li key={idx} className="flex gap-3">
                  <Star className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className=" text-[#1a5336]">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Document Note */}
        <div className="mt-8 max-w-[1000px] mx-auto bg-white relative p-6 shadow-lg rounded-lg">
          <div className="absolute left-0 top-0 w-1 h-full bg-[#1a5336] rounded-l-lg"></div>
          <h4 className=" text-xl text-[#1a5336] mb-3">
            Document Guidelines
          </h4>
          <ul className="space-y-2  text-sm text-[#1a5336]/80">
            <li className="flex gap-2">
              <span>•</span>
              <span>All documents in Vietnamese must include certified English translations</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Accepted formats: PDF, JPG, PNG (max 10MB per file)</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Transcripts must be official and stamped by issuing institution</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Portfolio submissions: up to 10 images or 1 video (max 5 minutes)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ==================== KEY DATES ====================
function KeyDatesSection() {
  const rounds = [
    {
      name: "Round 1 (Early Decision)",
      deadline: "November 30, 2025",
      notification: "January 15, 2026",
      badge: "Priority Review",
      badgeColor: "bg-[#FABA1E] text-[#1a5336]"
    },
    {
      name: "Round 2 (Regular Decision)",
      deadline: "February 28, 2026",
      notification: "April 15, 2026",
      badge: "Standard",
      badgeColor: "bg-[#1a5336] text-[#fffae9]"
    },
    {
      name: "Final Round (Rolling)",
      deadline: "May 31, 2026",
      notification: "Within 4 weeks",
      badge: "Subject to Availability",
      badgeColor: "bg-[#1a5336]/60 text-[#fffae9]"
    }
  ];

  return (
    <section id="dates" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Left: Header & Description */}
          <div>
            <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
              Key Application Dates
            </h2>
            <p className=" text-lg text-[#1a5336]/70 mb-6 max-w-[600px]">
              We accept applications in three rounds. Early Decision applicants receive priority review and earlier notification.
            </p>
            <p className=" text-sm text-[#1a5336]/60 mb-6">
              <strong>Note:</strong> Applications are reviewed on a rolling basis. Apply early to maximize your chances, especially for limited scholarship categories.
            </p>
          </div>
          
          {/* Right: Calendar Link */}
          <a
            href="/downloads/scholarship-calendar-2025-26.ics"
            download
            className="flex items-center gap-2 px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            ADD TO CALENDAR
          </a>
        </div>
        
        {/* Date Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {rounds.map((round, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-lg hover:shadow-xl transition-all p-6 relative rounded-lg"
            >
              {/* Badge */}
              <div className={`absolute top-0 right-0 px-3 py-1 ${round.badgeColor} rounded-bl`}>
                <span className=" text-xs font-bold">{round.badge}</span>
              </div>
              
              <h3 className=" text-2xl text-[#1a5336] mb-6 pr-20">
                {round.name}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className=" text-xs text-[#1a5336]/60 uppercase mb-1">
                    Application Deadline
                  </p>
                  <p className=" font-bold text-[#1a5336]">
                    {round.deadline}
                  </p>
                </div>
                
                <div>
                  <p className=" text-xs text-[#1a5336]/60 uppercase mb-1">
                    Notification Date
                  </p>
                  <p className=" font-bold text-[#1a5336]">
                    {round.notification}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== AWARD & RENEWAL ====================
function AwardRenewalSection() {
  return (
    <section id="renewal" className="relative py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-12 text-center">
          Award Application & Renewal
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* How Awards Are Applied */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg">
            <h3 className=" text-2xl text-[#1a5336] mb-6">
              How Awards Are Applied
            </h3>
            <ul className="space-y-3  text-[#1a5336]">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Scholarships are applied directly to tuition fees each term</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Awards cannot be converted to cash or transferred</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Remaining balance due within payment plan schedule</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Does not cover registration fees, deposits, or optional services</span>
              </li>
            </ul>
          </div>
          
          {/* Renewal Rules */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg">
            <h3 className=" text-2xl text-[#1a5336] mb-6">
              Annual Renewal Requirements
            </h3>
            <ul className="space-y-3  text-[#1a5336]">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Maintain minimum GPA specified in award letter</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>90%+ attendance rate with no unexcused absences</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Good conduct record with no major disciplinary issues</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span>Submit annual renewal application by deadline</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Performance Requirements Table */}
        <div className="mt-8 max-w-[1100px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#1a5336] p-4">
            <h3 className=" text-2xl text-[#fffae9]">
              Minimum Performance Standards
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FABA1E] mx-auto mb-3 flex items-center justify-center">
                  <span className=" text-3xl text-[#1a5336]">3.0+</span>
                </div>
                <p className=" text-sm text-[#1a5336]/70">Minimum GPA</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FABA1E] rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className=" text-3xl text-[#1a5336]">90%</span>
                </div>
                <p className=" text-sm text-[#1a5336]/70">Attendance Rate</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FABA1E] rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#1a5336]" />
                </div>
                <p className=" text-sm text-[#1a5336]/70">Good Conduct</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mentoring Note */}
        <div className="mt-8 max-w-[1100px] mx-auto bg-white relative p-6 shadow-lg rounded-lg">
          <div className="absolute left-0 top-0 w-1 h-full bg-[#FABA1E] rounded-l-lg"></div>
          <h4 className=" text-xl text-[#1a5336] mb-3">
            Scholarship Mentoring Program
          </h4>
          <p className=" text-sm text-[#1a5336]/80 leading-relaxed">
            All scholarship recipients are paired with a faculty mentor who provides academic guidance, monitors progress, and offers support throughout the school year. Quarterly check-ins help ensure students stay on track for renewal and maximize their LHBS experience.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== STACKING & PAYMENT ====================
function StackingPaymentSection() {
  return (
    <section id="stacking" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-12 text-center">
          Scholarship Stacking & Payment
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* Stacking Rules */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg">
            <h3 className=" text-2xl text-[#1a5336] mb-6">
              Combining Multiple Scholarships
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className=" font-bold text-[#1a5336] mb-2">
                  ✓ Allowed Combinations
                </h4>
                <ul className="space-y-2  text-sm text-[#1a5336]/80">
                  <li>• Academic + Creative Talent</li>
                  <li>• Leadership + Sports</li>
                  <li>• Any merit scholarship + Need-Based Aid</li>
                  <li>• External scholarships (with documentation)</li>
                </ul>
              </div>
              
              <div className="bg-white border-l-4 border-[#FABA1E] p-4 rounded-r">
                <p className=" text-sm text-[#1a5336]/80">
                  <strong>Maximum Total:</strong> Combined scholarships cannot exceed 100% of tuition fees. If total awards exceed tuition, the excess is not refundable or transferable.
                </p>
              </div>
              
              <div>
                <h4 className=" font-bold text-[#1a5336] mb-2">
                  Examples
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <p className=" text-[#1a5336] mb-1">
                      Academic 50% + Creative 25% = <strong>75% total</strong>
                    </p>
                    <p className=" text-xs text-[#1a5336]/60">
                      Family pays remaining 25%
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg">
                    <p className=" text-[#1a5336] mb-1">
                      Leadership 40% + Need-Based 60% = <strong>100% total</strong>
                    </p>
                    <p className=" text-xs text-[#1a5336]/60">
                      Full tuition coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment & Refund */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg">
            <h3 className=" text-2xl text-[#1a5336] mb-6">
              How Discounts Apply
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className=" font-bold text-[#1a5336] mb-2">
                  Term-by-Term Application
                </h4>
                <p className=" text-sm text-[#1a5336]/80 mb-3">
                  Scholarships are divided equally across 3 terms per year:
                </p>
                <div className="bg-white p-4 border border-[#1a5336]/20 rounded-lg">
                  <p className=" text-sm text-[#1a5336] mb-2">
                    <strong>Example:</strong> 60% annual scholarship
                  </p>
                  <ul className="space-y-1  text-sm text-[#1a5336]/80">
                    <li>• Term 1: 20% discount applied</li>
                    <li>• Term 2: 20% discount applied</li>
                    <li>• Term 3: 20% discount applied</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className=" font-bold text-[#1a5336] mb-2">
                  Mid-Year Withdrawal
                </h4>
                <p className=" text-sm text-[#1a5336]/80">
                  If a student withdraws mid-year, the scholarship is forfeited for remaining terms. Families are responsible for any balance owed according to the standard refund policy.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-[#1a5336] p-4 rounded-r">
                <p className=" text-sm text-[#1a5336]/80">
                  <strong>Important:</strong> Scholarships do not apply to registration fees, deposits, uniforms, meals, or transportation. These must be paid separately.
                </p>
              </div>
              
              <div>
                <h4 className=" font-bold text-[#1a5336] mb-2">
                  Payment Plans Available
                </h4>
                <p className=" text-sm text-[#1a5336]/80">
                  Remaining balance after scholarships can be paid via:
                </p>
                <ul className="mt-2 space-y-1  text-sm text-[#1a5336]/80">
                  <li>• Full year (5% discount)</li>
                  <li>• Per term (3 installments)</li>
                  <li>• Monthly (10 installments)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== NEED-BASED AID ====================
function NeedBasedAidSection() {
  return (
    <section id="aid" className="relative py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 md:p-12 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-[#FABA1E] rounded-lg flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-8 h-8 text-[#1a5336]" />
              </div>
              <div>
                <h2 className=" text-3xl md:text-4xl text-[#1a5336] mb-3">
                  Need-Based Financial Aid
                </h2>
                <p className=" text-lg text-[#1a5336]/70">
                  Supporting families who demonstrate financial need
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className=" text-xl text-[#1a5336] mb-3">
                  What is Need-Based Aid?
                </h3>
                <p className=" text-[#1a5336]/80 leading-relaxed">
                  Need-based financial aid is awarded to students whose families demonstrate genuine financial need but whose children show strong academic potential and motivation to succeed. Awards range from 25% to 100% of tuition based on documented financial circumstances and available funding.
                </p>
              </div>
              
              <div>
                <h3 className=" text-xl text-[#1a5336] mb-3">
                  Eligibility Requirements
                </h3>
                <ul className="space-y-2  text-[#1a5336]/80">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span>Student maintains minimum GPA of 3.0 or demonstrates strong potential</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span>Family submits complete financial documentation package</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span>Household income and assets fall below LHBS need-based thresholds</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                    <span>No outstanding tuition balance from previous schools (if applicable)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className=" text-xl text-[#1a5336] mb-3">
                  Required Financial Documentation
                </h3>
                <ul className="space-y-2  text-sm text-[#1a5336]/80">
                  <li>• Tax returns or income statements (most recent 2 years)</li>
                  <li>• Bank statements (all accounts, last 6 months)</li>
                  <li>• Property ownership documentation</li>
                  <li>• Employer verification letters</li>
                  <li>• Additional financial obligations (medical, eldercare, etc.)</li>
                  <li>• Explanation letter describing financial circumstances</li>
                </ul>
              </div>
              
              {/* Confidentiality Highlight */}
              <div className="bg-white shadow-lg p-6 rounded-lg ring-2 ring-[#FABA1E]/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#FABA1E] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className=" font-bold text-[#1a5336] mb-2">
                      Strict Confidentiality
                    </h4>
                    <p className=" text-sm text-[#1a5336]/80 leading-relaxed">
                      All financial information is reviewed by our Financial Aid Committee only and kept strictly confidential. Student identities are anonymized during review. Your financial situation will never be shared with faculty, staff, or other families.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="pt-6 border-t-2 border-[#1a5336]/10">
                <a
                  href="/downloads/financial-aid-application-guide.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD FINANCIAL AID GUIDE (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ ====================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I apply for multiple scholarship types at once?",
      a: "Yes! You can apply for any scholarship type you qualify for. Our admissions team will review your application for all relevant categories and offer you the best possible combination."
    },
    {
      q: "When will I know if I've received a scholarship?",
      a: "Notification timelines vary by application round. Early Decision applicants receive notification within 6-7 weeks. Regular Decision within 8 weeks, and Rolling admissions typically within 4 weeks of application submission."
    },
    {
      q: "What happens if I don't maintain the renewal requirements?",
      a: "We understand that challenges can arise. If your GPA or attendance drops, you'll receive a warning and academic support plan. Scholarships may be reduced or placed on probation for one term, with opportunity to restore full award by meeting targets."
    },
    {
      q: "Can I combine LHBS scholarships with external scholarships?",
      a: "Absolutely! External scholarships from corporations, foundations, or community organizations can be combined with LHBS awards, as long as the total doesn't exceed 100% tuition. Please notify us of any external funding."
    },
    {
      q: "Are scholarships available for transfer students?",
      a: "Yes, transfer students are eligible for all scholarship types. We review your academic record from previous schools and can consider mid-year applications for exceptional candidates."
    },
    {
      q: "Do I need to reapply for scholarships every year?",
      a: "You'll need to submit a simplified renewal application each year, along with updated transcripts and a brief progress report. The full document package is only required for initial applications."
    },
    {
      q: "What if my family's financial situation changes mid-year?",
      a: "Please contact our Financial Aid Office immediately. We can review emergency aid requests for families experiencing unexpected financial hardship (job loss, medical emergency, etc.) and may adjust awards accordingly."
    },
    {
      q: "Are scholarships available for kindergarten students?",
      a: "Limited scholarships are available for kindergarten (ages 3-5), primarily for exceptional creative talent or significant financial need. Most scholarships begin from Grade 1 onwards when academic performance can be better assessed."
    }
  ];

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className=" text-lg text-[#1a5336]/70 mb-12 text-center">
          Common questions about LHBS scholarship program
        </p>
        
        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white shadow-lg hover:shadow-xl transition-all rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-[#1a5336]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FABA1E]"
                  aria-expanded={isOpen}
                >
                  <span className=" text-xl text-[#1a5336]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className=" text-[#1a5336]/80 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className=" text-[#1a5336]/70 mb-4">
            Have more questions about scholarships?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('downloads');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
          >
            CONTACT SCHOLARSHIP OFFICE
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== DOWNLOADS & CONTACT ====================
function DownloadsContactSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const downloads = [
    {
      title: "Scholarship Policy 2025-26",
      desc: "Complete policy document with all terms and conditions",
      size: "245 KB",
      file: "scholarship-policy-2025-26.pdf"
    },
    {
      title: "Recommendation Letter Template",
      desc: "Template for teachers and community leaders",
      size: "128 KB",
      file: "recommendation-template.docx"
    },
    {
      title: "Portfolio Submission Guide",
      desc: "How to prepare creative work samples",
      size: "892 KB",
      file: "portfolio-guide.pdf"
    },
    {
      title: "Financial Aid Application Form",
      desc: "For need-based scholarship applicants",
      size: "167 KB",
      file: "financial-aid-form.pdf"
    }
  ];

  return (
    <section id="downloads" className="relative py-16 md:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-12 text-center">
          Downloads & Contact
        </h2>
        
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Left: Downloads */}
          <div>
            <h3 className=" text-2xl text-[#1a5336] mb-6">
              Helpful Resources
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {downloads.map((doc, idx) => (
                <a
                  key={idx}
                  href={`/downloads/${doc.file}`}
                  download
                  className="bg-white shadow-lg hover:shadow-xl p-6 transition-all group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg hover:ring-2 hover:ring-[#FABA1E]/20"
                >
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-[#1a5336] group-hover:text-[#FABA1E] transition-colors flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className=" font-bold text-[#1a5336] mb-1 group-hover:text-[#FABA1E] transition-colors">
                        {doc.title}
                      </h4>
                      <p className=" text-xs text-[#1a5336]/60 mb-2">
                        {doc.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <Download className="w-3 h-3 text-[#1a5336]/40" />
                        <span className=" text-xs text-[#1a5336]/40">
                          {doc.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right: Contact Card */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-all p-8 rounded-lg h-fit lg:sticky lg:top-24">
            <h3 className=" text-2xl text-[#1a5336] mb-6">
              Need Help?
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className=" text-sm text-[#1a5336]/60 uppercase mb-3">
                  Scholarship Office
                </h4>
                
                <div className="space-y-4">
                  <a
                    href="tel:+842838989898"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-[#FABA1E] rounded-lg flex items-center justify-center group-hover:bg-[#1a5336] transition-colors">
                      <Phone className="w-5 h-5 text-[#1a5336] group-hover:text-[#FABA1E]" />
                    </div>
                    <div>
                      <p className=" text-xs text-[#1a5336]/60">
                        Hotline
                      </p>
                      <p className=" font-bold text-[#1a5336]">
                        +84 28 3898 9898
                      </p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:scholarships@lhbs.edu.vn"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-[#FABA1E] rounded-lg flex items-center justify-center group-hover:bg-[#1a5336] transition-colors">
                      <Mail className="w-5 h-5 text-[#1a5336] group-hover:text-[#FABA1E]" />
                    </div>
                    <div>
                      <p className=" text-xs text-[#1a5336]/60">
                        Email
                      </p>
                      <p className=" font-bold text-[#1a5336] text-sm">
                        scholarships@lhbs.edu.vn
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex gap-3">
                    <a
                      href="https://zalo.me/lhbsscholarships"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 h-10 bg-gray-50 text-[#1a5336] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors shadow hover:shadow-lg rounded-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className=" text-xs font-bold">Zalo</span>
                    </a>
                    
                    <a
                      href="https://wa.me/842838989898"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 h-10 bg-gray-50 text-[#1a5336] hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors shadow hover:shadow-lg rounded-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className=" text-xs font-bold">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-[#1a5336]/10">
                <h4 className=" text-sm text-[#1a5336]/60 uppercase mb-3">
                  Office Hours
                </h4>
                <p className=" text-sm text-[#1a5336]/80 mb-4">
                  Monday - Friday: 8:00 - 17:00<br />
                  Saturday: 8:00 - 12:00
                </p>
                
                <a
                  href="/contact/book-tour"
                  className="block text-center px-6 h-10 bg-gray-50 text-[#1a5336] font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] flex items-center justify-center shadow hover:shadow-lg rounded-lg"
                >
                  BOOK 15-MIN CONSULTATION
                </a>
              </div>
              
              <div className="pt-6 border-t-2 border-[#1a5336]/10">
                <button
                  onClick={() => onNavigate('/admissions/apply-now')}
                  className="w-full px-6 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
                  aria-label="Start your scholarship application"
                >
                  START APPLICATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== STICKY HELPER ====================
function StickyHelper() {
  return (
    <div className="hidden xl:block fixed bottom-8 right-8 z-40">
      <div className="bg-[#1a5336] ring-4 ring-[#FABA1E] p-6 w-[280px] shadow-2xl rounded-lg">
        <h3 className=" text-xl text-[#fffae9] mb-4">
          Quick Help
        </h3>
        
        <div className="space-y-3">
          <a
            href="tel:+842838989898"
            className="flex items-center gap-3 text-[#fffae9] hover:text-[#FABA1E] transition-colors group"
          >
            <Phone className="w-5 h-5" />
            <div>
              <p className=" text-xs opacity-70">Hotline</p>
              <p className=" text-sm font-bold">+84 28 3898 9898</p>
            </div>
          </a>
          
          <a
            href="mailto:scholarships@lhbs.edu.vn"
            className="flex items-center gap-3 text-[#fffae9] hover:text-[#FABA1E] transition-colors group"
          >
            <Mail className="w-5 h-5" />
            <div>
              <p className=" text-xs opacity-70">Email</p>
              <p className=" text-sm font-bold">scholarships@...</p>
            </div>
          </a>
          
          <button
            onClick={() => {
              const criteriaSection = document.getElementById('criteria');
              criteriaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full mt-4 px-4 h-10 bg-[#FABA1E] text-[#1a5336]  font-bold hover: transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9]"
          >
            CHECK ELIGIBILITY
          </button>
        </div>
      </div>
    </div>
  );
}
