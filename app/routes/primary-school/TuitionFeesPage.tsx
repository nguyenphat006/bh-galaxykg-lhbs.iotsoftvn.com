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
  Calculator,
  FileText,
  CreditCard,
  DollarSign,
  Calendar,
  Award,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router';

export default function PrimarySchoolTuitionFeesPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const navigate = useNavigate();
  
  const onNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative ">
      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* Summary Cards */}
      <SummaryCardsSection />
      
      {/* Tuition Tables */}
      <TuitionTablesSection />
      
      {/* Included/Excluded */}
      <IncludedExcludedSection />
      
      {/* Optional Services */}
      <OptionalServicesSection />
      
      {/* Payment Plans */}
      <PaymentPlansSection />
      
      {/* Scholarships & Aid */}
      <ScholarshipsAidSection onNavigate={onNavigate} />
      
      {/* Refund Policy */}
      <RefundPolicySection />
      
      {/* Calculator CTA */}
      <CalculatorCTASection onShowCalculator={() => setShowCalculator(true)} />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Downloads & Contacts */}
      <DownloadsContactsSection onNavigate={onNavigate} />
      
      {/* Sticky Helper (Desktop) */}
      <StickyHelper />
      
      {/* Calculator Modal */}
      {showCalculator && (
        <CalculatorModal onClose={() => setShowCalculator(false)} />
      )}
    </div>
  );
}

// ==================== HERO SECTION ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const tfHeroTitle = "Transparent Tuition & Fees";
  const tfHeroSub = "Investment in World-Class Bilingual Education";
  const reassurance = "Clear pricing with no hidden fees. Flexible payment plans and financial aid available for qualified families.";

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
                  onClick={() => onNavigate('/primary-school')}
                  className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
                >
                  Primary School
                </button>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />
              </li>
              <li className="text-[#fffae9] ">Tuition & Fees</li>
            </ol>
          </nav>
          
          {/* Subhead */}
          <p className=" text-sm md:text-base text-[#FABA1E] mb-4 tracking-wide uppercase">
            {tfHeroSub}
          </p>
          
          {/* Title */}
          <h1 className=" text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6">
            {tfHeroTitle}
          </h1>
          
          {/* Reassurance */}
          <p className=" text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed">
            {reassurance}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const calculatorSection = document.getElementById('calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              CALCULATE YOUR FEES
            </button>
            
            <a
              href="/downloads/tuition-fees-policy-2025.pdf"
              download
              className="px-12 h-12 bg-transparent text-[#fffae9] font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl rounded-lg"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD POLICY (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SUMMARY CARDS SECTION ====================
function SummaryCardsSection() {
  const summaryCards = [
    {
      title: "Tuition by Division",
      icon: DollarSign,
      items: [
        "Galaxy KG: 180M - 190M VND/year",
        "Primary: 220M - 230M VND/year",
        "Middle School: 240M - 250M VND/year",
        "High School: 260M - 280M VND/year"
      ]
    },
    {
      title: "One-Time Fees",
      icon: FileText,
      items: [
        "Application Fee: 5M VND",
        "Registration Fee: 20M VND",
        "Building Fund: 50M VND",
        "Security Deposit: 10M VND (refundable)"
      ]
    },
    {
      title: "Payment Plans",
      icon: CreditCard,
      items: [
        "Full Year: Save 5% discount",
        "Per Term: 3 instalments/year",
        "Monthly: 10 instalments (Sept-June)",
        "Interest-free payment plans"
      ]
    },
    {
      title: "Scholarships & Aid",
      icon: Award,
      items: [
        "Merit Scholarship: Up to 50%",
        "Bilingual Award: Up to 30%",
        "Need-Based Aid: Up to 70%",
        "Sibling Discount: 10% per child"
      ]
    }
  ];

  return (
    <section id="summary" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {summaryCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1a5336] flex items-center justify-center">
                <card.icon className="w-5 h-5 text-[#FABA1E]" />
              </div>
              <h3 className=" text-xl text-[#1a5336]">
                {card.title}
              </h3>
            </div>
            
            <ul className="space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FABA1E] mt-1">•</span>
                  <span className=" text-sm text-[#212121]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ==================== TUITION TABLES SECTION ====================
function TuitionTablesSection() {
  const [selectedTab, setSelectedTab] = useState('primary');

  const tuitionData = {
    kg: {
      name: 'Galaxy KG (Ages 3-5)',
      rows: [
        { grade: 'KG1 (Age 3)', annual: '180,000,000', term: '60,000,000', monthly: '18,000,000', included: 'Books, materials, snacks' },
        { grade: 'KG2 (Age 4)', annual: '185,000,000', term: '61,666,667', monthly: '18,500,000', included: 'Books, materials, snacks' },
        { grade: 'KG3 (Age 5)', annual: '190,000,000', term: '63,333,333', monthly: '19,000,000', included: 'Books, materials, snacks' }
      ]
    },
    primary: {
      name: 'Primary School (Grades 1-5)',
      rows: [
        { grade: 'Grade 1-2', annual: '220,000,000', term: '73,333,333', monthly: '22,000,000', included: 'Books, uniforms, field trips' },
        { grade: 'Grade 3-5', annual: '230,000,000', term: '76,666,667', monthly: '23,000,000', included: 'Books, uniforms, field trips' }
      ]
    },
    middle: {
      name: 'Middle School (Grades 6-9)',
      rows: [
        { grade: 'Grade 6-7', annual: '240,000,000', term: '80,000,000', monthly: '24,000,000', included: 'Books, lab fees, sports' },
        { grade: 'Grade 8-9', annual: '250,000,000', term: '83,333,333', monthly: '25,000,000', included: 'Books, lab fees, sports' }
      ]
    },
    high: {
      name: 'High School (Grades 10-12)',
      rows: [
        { grade: 'Grade 10', annual: '260,000,000', term: '86,666,667', monthly: '26,000,000', included: 'Books, lab fees, college prep' },
        { grade: 'Grade 11', annual: '270,000,000', term: '90,000,000', monthly: '27,000,000', included: 'Books, lab fees, college prep' },
        { grade: 'Grade 12', annual: '280,000,000', term: '93,333,333', monthly: '28,000,000', included: 'Books, lab fees, college counseling' }
      ]
    }
  };

  const tabs = [
    { key: 'kg', label: 'Galaxy KG' },
    { key: 'primary', label: 'Primary' },
    { key: 'middle', label: 'Middle School' },
    { key: 'high', label: 'High School' }
  ];

  return (
    <section id="tuition" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
          Tuition Fees by Division
        </h2>
        <p className=" text-base text-[#212121] max-w-[70ch] mx-auto mb-8">
          All fees are in Vietnamese Dong (VND). Prices may be adjusted annually with 60 days notice.
        </p>
        
        <a
          href="/downloads/tuition-fees-detailed-schedule-2025.pdf"
          download
          className="inline-flex items-center gap-2 px-8 h-12 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg"
        >
          <Download className="w-4 h-4" />
          Download Detailed Fee Schedule (PDF)
        </a>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-8 h-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg ${
              selectedTab === tab.key
                ? 'bg-[#1a5336] text-[#fffae9] shadow-lg'
                : 'text-[#1a5336] bg-gray-50 hover:bg-[#1a5336]/10 shadow-md hover:shadow-lg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <h3 className=" text-2xl text-[#1a5336] mb-6">
            {tuitionData[selectedTab as keyof typeof tuitionData].name}
          </h3>
          
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#1a5336] text-[#fffae9]">
                <th className="text-lg text-left p-4">Grade Level</th>
                <th className="text-lg text-right p-4">Annual (Full Year)</th>
                <th className="text-lg text-right p-4">Per Term (3 terms)</th>
                <th className="text-lg text-right p-4">Monthly (10 months)</th>
                <th className="text-lg text-left p-4">Included</th>
              </tr>
            </thead>
            <tbody>
              {tuitionData[selectedTab as keyof typeof tuitionData].rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="text-sm p-4">{row.grade}</td>
                  <td className="font-bold text-[#1a5336] text-right p-4">{row.annual}</td>
                  <td className="font-bold text-[#1a5336] text-right p-4">{row.term}</td>
                  <td className="font-bold text-[#1a5336] text-right p-4">{row.monthly}</td>
                  <td className="text-xs text-[#212121] p-4">{row.included}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Under-table note */}
      <div className="mt-6 bg-[#FABA1E]/10 p-4 rounded-lg">
        <p className=" text-sm text-[#212121]">
          <strong className="text-[#1a5336]">📋 Note:</strong> Tuition fees are subject to annual review. 
          Any adjustments will be communicated at least 60 days in advance. All payments are non-refundable 
          after the term start date, except as outlined in our refund policy.
        </p>
      </div>
    </section>
  );
}

// ==================== INCLUDED/EXCLUDED SECTION ====================
function IncludedExcludedSection() {
  const included = [
    'Core curriculum instruction (Vietnamese & English)',
    'Textbooks and learning materials',
    'Access to libraries and learning resources',
    'PE and basic sports programs',
    'School events and celebrations',
    'Parent-teacher conferences',
    'Digital learning platforms and apps',
    'Health room and basic first aid'
  ];

  const excluded = [
    'School bus transportation',
    'Daily lunch and snacks',
    'School uniforms and PE kits',
    'After-school clubs and activities',
    'Summer programs and camps',
    'International exam fees (IELTS, SAT, etc.)',
    'Field trips and educational tours',
    'Private tutoring or learning support'
  ];

  return (
    <section id="included" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto ">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
          What's Included in Tuition?
        </h2>
        <p className=" text-base text-[#212121] max-w-[70ch] mx-auto mb-8">
          Clear breakdown of what your tuition covers and optional add-on services.
        </p>
        
        <button
          onClick={() => {
            const downloadsSection = document.getElementById('downloads');
            if (downloadsSection) {
              downloadsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-8 h-12 bg-gray-50 text-[#1a5336] font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1a5336] rounded-lg shadow-md hover:shadow-lg"
        >
          <FileText className="w-4 h-4" />
          View Complete Fee Breakdown
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Included */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#FABA1E]" />
            </div>
            <h3 className=" text-2xl text-[#1a5336]">
              Included in Tuition
            </h3>
          </div>
          
          <ul className="space-y-3">
            {included.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span className=" text-sm text-[#212121]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#1a5336] flex items-center justify-center">
              <X className="w-6 h-6 text-[#FABA1E]" />
            </div>
            <h3 className=" text-2xl text-[#1a5336]">
              Optional Add-On Services
            </h3>
          </div>
          
          <ul className="space-y-3">
            {excluded.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#1a5336]/40 mt-0.5">—</span>
                <span className=" text-sm text-[#212121]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ==================== OPTIONAL SERVICES SECTION ====================
function OptionalServicesSection() {
  const services = [
    {
      title: 'School Bus Service',
      description: 'Safe, air-conditioned buses with GPS tracking and experienced drivers',
      priceRows: [
        { label: 'Zone 1 (0-5km)', price: '6,000,000 VND/year' },
        { label: 'Zone 2 (5-10km)', price: '8,000,000 VND/year' },
        { label: 'Zone 3 (10-15km)', price: '10,000,000 VND/year' },
        { label: 'Zone 4 (15km+)', price: '12,000,000 VND/year' }
      ],
      note: 'Pro-rated for mid-year enrollment. One-way option available at 60% of round-trip price.'
    },
    {
      title: 'Lunch Program',
      description: 'Nutritious meals prepared on-campus with vegetarian and allergy-friendly options',
      priceRows: [
        { label: 'KG Meal Plan', price: '12,000,000 VND/year' },
        { label: 'Primary Meal Plan', price: '15,000,000 VND/year' },
        { label: 'Middle/High Meal Plan', price: '18,000,000 VND/year' }
      ],
      note: 'Includes daily lunch and afternoon snack. Menu reviewed by nutritionist.'
    },
    {
      title: 'School Uniforms',
      description: 'Complete uniform sets including PE kits and seasonal variations',
      priceRows: [
        { label: 'KG Uniform Set', price: '2,500,000 VND' },
        { label: 'Primary Uniform Set', price: '3,000,000 VND' },
        { label: 'Middle/High Uniform Set', price: '3,500,000 VND' },
        { label: 'PE Kit (all levels)', price: '1,200,000 VND' }
      ],
      note: 'One-time purchase. Additional items available separately.'
    },
    {
      title: 'After-School Programs',
      description: 'Enrichment activities including arts, sports, STEM, and languages',
      priceRows: [
        { label: 'Single Club (1x/week)', price: '3,000,000 VND/term' },
        { label: 'Two Clubs Package', price: '5,500,000 VND/term' },
        { label: 'Unlimited Clubs', price: '12,000,000 VND/year' }
      ],
      note: 'Over 30 clubs available. Schedule changes each term.'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
          Optional Services
        </h2>
        <p className=" text-base text-[#212121] max-w-[70ch] mx-auto mb-8">
          Enhance your child's experience with our convenient add-on services.
        </p>
        
        <a
          href="/downloads/optional-services-price-list-2025.pdf"
          download
          className="inline-flex items-center gap-2 px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
        >
          <Download className="w-4 h-4" />
          Download Full Price List (PDF)
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className=" text-2xl text-[#1a5336] mb-3">
              {service.title}
            </h3>
            
            <p className=" text-sm text-[#212121] mb-6">
              {service.description}
            </p>
            
            <div className="space-y-3 mb-6">
              {service.priceRows.map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 hover:bg-gray-50/50 transition-colors duration-200 rounded px-2">
                  <span className="text-sm text-[#212121]">{row.label}</span>
                  <span className="font-bold text-[#1a5336]">{row.price}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-[#FABA1E]/15 p-4 rounded-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FABA1E] rounded-l-lg"></div>
              <p className=" text-xs text-[#212121]">
                {service.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==================== PAYMENT PLANS SECTION ====================
function PaymentPlansSection() {
  const plans = [
    {
      title: 'Full Year Payment',
      badge: 'SAVE 5%',
      badgeColor: 'bg-[#FABA1E] text-[#1a5336]',
      description: 'Pay entire year upfront and receive 5% discount',
      features: ['One payment at start of year', '5% discount applied', 'No payment fees', 'Peace of mind'],
      recommended: true
    },
    {
      title: 'Per Term Payment',
      badge: 'FLEXIBLE',
      badgeColor: 'bg-[#1a5336] text-[#fffae9]',
      description: 'Split into 3 equal instalments per academic year',
      features: ['3 payments per year', 'Due at start of each term', 'Small admin fee (1%)', 'Balance flexibility'],
      recommended: false
    },
    {
      title: 'Monthly Instalments',
      badge: 'EASY',
      badgeColor: 'bg-[#1a5336] text-[#fffae9]',
      description: 'Spread over 10 monthly payments (Sept-June)',
      features: ['10 monthly payments', 'Auto-debit available', 'Admin fee (2%)', 'Budget-friendly'],
      recommended: false
    }
  ];

  const paymentMethods = [
    'Bank transfer (preferred)',
    'Credit/Debit card (Visa, Mastercard)',
    'Payment gateway (Momo, ZaloPay, VNPay)',
    'Cash (by appointment only)',
    'International wire transfer'
  ];

  return (
    <section id="payment" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto ">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
          Payment Plans & Methods
        </h2>
        <p className=" text-base text-[#212121] max-w-[70ch] mx-auto mb-8">
          Choose the payment plan that works best for your family budget.
        </p>
        
        <button
          onClick={() => {
            const downloadsSection = document.getElementById('downloads');
            if (downloadsSection) {
              downloadsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-8 h-12 text-[#1a5336] font-bold bg-gray-50 hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg"
        >
          <FileText className="w-4 h-4" />
          View Payment Documents
        </button>
      </div>

      {/* Payment Plans Timeline */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`p-6 bg-white relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              plan.recommended ? 'ring-2 ring-[#FABA1E]' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[#FABA1E] text-[#1a5336]  text-xs font-bold rounded">
                MOST POPULAR
              </div>
            )}
            
            <div className={`inline-block px-3 py-1 ${plan.badgeColor}  text-xs font-bold mb-4 rounded`}>
              {plan.badge}
            </div>
            
            <h3 className=" text-2xl text-[#1a5336] mb-3">
              {plan.title}
            </h3>
            
            <p className=" text-sm text-[#212121] mb-6">
              {plan.description}
            </p>
            
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className=" text-sm text-[#212121]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Payment Methods Block */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-6 h-6 text-[#1a5336]" />
            <h3 className=" text-2xl text-[#1a5336]">
              Accepted Payment Methods
            </h3>
          </div>
          
          <ul className="space-y-3">
            {paymentMethods.map((method, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                <span className=" text-sm text-[#212121]">{method}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-[#1a5336]" />
            <h3 className=" text-2xl text-[#1a5336]">
              Invoice & Receipt
            </h3>
          </div>
          
          <div className="space-y-4">
            <p className=" text-sm text-[#212121]">
              <strong className="text-[#1a5336]">Official Invoices:</strong> Issued within 24-48 hours of payment confirmation
            </p>
            
            <p className=" text-sm text-[#212121]">
              <strong className="text-[#1a5336]">VAT Receipts:</strong> Red invoice (Hóa đơn đỏ) available for all payments
            </p>
            
            <p className=" text-sm text-[#212121]">
              <strong className="text-[#1a5336]">Payment Tracking:</strong> Access payment history via parent portal
            </p>
            
            <p className=" text-sm text-[#212121]">
              <strong className="text-[#1a5336]">Late Payment:</strong> 5% penalty fee applied after 7 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SCHOLARSHIPS & AID SECTION ====================
function ScholarshipsAidSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const scholarships = [
    {
      title: 'Merit Scholarship',
      amount: 'Up to 50% tuition',
      criteria: ['GPA ≥ 3.8/4.0', 'Leadership demonstrated', 'Entrance test excellence'],
      documents: ['Transcripts', 'Recommendation letters', 'Awards'],
      deadline: 'March 31, 2025'
    },
    {
      title: 'Bilingual Achievement Award',
      amount: 'Up to 30% tuition',
      criteria: ['Bilingual proficiency', 'Cultural bridge-building', 'Language assessments'],
      documents: ['Language tests', 'Portfolio', 'Video introduction'],
      deadline: 'April 15, 2025'
    },
    {
      title: 'Need-Based Financial Aid',
      amount: 'Up to 70% tuition',
      criteria: ['Financial need demonstrated', 'Academic promise', 'Complete documentation'],
      documents: ['Financial application', 'Income verification', 'Tax documents'],
      deadline: 'Rolling basis'
    },
    {
      title: 'Siblings & Loyalty Discount',
      amount: '10% per additional child',
      criteria: ['2+ siblings enrolled', 'Or 3+ years continuous', 'Good standing'],
      documents: ['Enrollment verification', 'Family form'],
      deadline: 'Automatic at enrollment'
    }
  ];

  return (
    <section id="scholarships" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Overview */}
        <div>
          <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-6">
            Special Programmes
          </h2>
          
          <p className=" text-base text-[#212121] mb-6 leading-relaxed">
            Quality bilingual education should be accessible to all talented students. We offer comprehensive 
            scholarships and financial aid programs to support deserving families.
          </p>
          
          <div className="bg-[#FABA1E]/10 p-6 mb-8 rounded-lg">
            <p className=" text-sm text-[#212121]">
              <strong className="text-[#1a5336]">💡 Can be combined:</strong> Students may qualify for multiple awards. 
              For example, a high-achieving student with siblings could receive both merit scholarship and sibling discount.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a
              href="/downloads/scholarship-policy-2025.pdf"
              download
              className="px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold flex items-center justify-center gap-2 hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <Download className="w-4 h-4" />
              Scholarship Policy (PDF)
            </a>
            
            <button
              onClick={() => onNavigate('/admissions/scholarship-application')}
              className="px-8 h-12 text-[#1a5336] font-bold bg-gray-50 hover:bg-[#1a5336] hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg"
            >
              Apply for Scholarship
            </button>
          </div>
        </div>
        
        {/* Right: Accordion */}
        <div className="space-y-4">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg"
              >
                <div className="flex-1">
                  <h3 className=" text-xl text-[#1a5336] mb-1">
                    {scholarship.title}
                  </h3>
                  <p className=" text-sm text-[#FABA1E]">
                    {scholarship.amount}
                  </p>
                </div>
                
                {openAccordion === index ? (
                  <ChevronUp className="w-6 h-6 text-[#1a5336]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#1a5336]" />
                )}
              </button>
              
              {openAccordion === index && (
                <div className="p-6 pt-0 bg-gray-50/50">
                  <div className="mb-4">
                    <h4 className=" font-bold text-sm text-[#1a5336] mb-2">Criteria:</h4>
                    <ul className="space-y-1">
                      {scholarship.criteria.map((c, i) => (
                        <li key={i} className=" text-sm text-[#212121]">• {c}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className=" font-bold text-sm text-[#1a5336] mb-2">Documents:</h4>
                    <ul className="space-y-1">
                      {scholarship.documents.map((d, i) => (
                        <li key={i} className=" text-sm text-[#212121]">• {d}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 mb-4 rounded">
                    <span className=" text-sm text-[#212121]">
                      <strong>Deadline:</strong> {scholarship.deadline}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => onNavigate('/admissions/scholarship-application')}
                    className="w-full px-8 h-10 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== REFUND POLICY SECTION ====================
function RefundPolicySection() {
  const policies = [
    {
      title: 'Full Refund',
      items: [
        'Application cancelled before term starts: 100% refund (minus application fee)',
        'School unable to provide placement: Full refund including all fees'
      ]
    },
    {
      title: 'Partial Refund',
      items: [
        'Withdrawal within first 2 weeks of term: 80% tuition refund',
        'Withdrawal within first month of term: 50% tuition refund',
        'Medical/family emergency: Case-by-case review with documentation'
      ]
    },
    {
      title: 'No Refund',
      items: [
        'Withdrawal after first month of term: No tuition refund',
        'Suspension or expulsion for conduct: No refund',
        'One-time fees (Registration, Building Fund): Non-refundable'
      ]
    },
    {
      title: 'Service Pro-Ration',
      items: [
        'School bus: Pro-rated monthly if cancelled mid-year',
        'Lunch program: Pro-rated monthly if cancelled mid-year',
        'After-school clubs: No refund after club registration'
      ]
    }
  ];

  return (
    <section id="refund" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto ">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
          Refund & Withdrawal Policy
        </h2>
        <p className=" text-base text-[#212121] max-w-[70ch] mx-auto mb-8">
          Clear guidelines for tuition refunds and service cancellations.
        </p>
        
        <button
          onClick={() => {
            const downloadsSection = document.getElementById('downloads');
            if (downloadsSection) {
              downloadsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336] rounded-lg"
        >
          <Download className="w-4 h-4" />
          Download Policy Documents
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {policies.map((policy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className=" text-xl text-[#1a5336] mb-4">
              {policy.title}
            </h3>
            
            <ul className="space-y-3">
              {policy.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-0.5" />
                  <span className=" text-sm text-[#212121]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#1a5336]/5 p-6 rounded-lg">
        <p className=" text-sm text-[#212121] mb-3">
          <strong className="text-[#1a5336]">⏰ Seat Deposit:</strong> Your enrollment deposit of 20M VND 
          secures your child's place. This deposit is fully refundable if you withdraw your application 
          <strong className="text-[#1a5336]"> within 14 days</strong> of payment. After 14 days, the deposit 
          is non-refundable but will be applied to your first tuition payment.
        </p>
        
        <p className=" text-sm text-[#212121]">
          All refund requests must be submitted in writing to admissions@lhbs.edu.vn. Processing time: 15-30 business days.
        </p>
      </div>
    </section>
  );
}

// ==================== CALCULATOR CTA SECTION ====================
function CalculatorCTASection({ onShowCalculator }: { onShowCalculator: () => void }) {
  const [division, setDivision] = useState('primary');
  const [plan, setPlan] = useState('annual');
  const [bus, setBus] = useState(false);
  const [lunch, setLunch] = useState(false);

  const tuition = {
    kg: 185000000,
    primary: 225000000,
    middle: 245000000,
    high: 270000000
  };

  const calculateTotal = () => {
    let total = tuition[division as keyof typeof tuition];
    
    if (plan === 'annual') {
      total *= 0.95; // 5% discount
    } else if (plan === 'monthly') {
      total *= 1.02; // 2% admin fee
    }
    
    if (bus) total += 8000000;
    if (lunch) total += 15000000;
    
    return total.toLocaleString('vi-VN');
  };

  return (
    <section id="calculator" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a5336] mb-4">
              <Calculator className="w-8 h-8 text-[#FABA1E]" />
            </div>
            
            <h2 className=" text-3xl md:text-4xl text-[#1a5336] mb-4">
              Quick Fee Estimator
            </h2>
            
            <p className=" text-sm text-[#212121]">
              Get an instant estimate of your total annual costs
            </p>
          </div>

          {/* Quick Form */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block  text-sm text-[#1a5336] mb-2">
                Select Division
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full h-10 px-4 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:bg-white transition-all duration-200"
              >
                <option value="kg">Galaxy KG</option>
                <option value="primary">Primary School</option>
                <option value="middle">Middle School</option>
                <option value="high">High School</option>
              </select>
            </div>

            <div>
              <label className="block  text-sm text-[#1a5336] mb-2">
                Payment Plan
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full h-10 px-4 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:bg-white transition-all duration-200"
              >
                <option value="annual">Full Year (Save 5%)</option>
                <option value="term">Per Term</option>
                <option value="monthly">Monthly (+ 2% fee)</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={bus}
                  onChange={(e) => setBus(e.target.checked)}
                  className="w-5 h-5 bg-gray-50 rounded focus:ring-2 focus:ring-[#FABA1E] checked:bg-[#1a5336] checked:text-white transition-all duration-200"
                />
                <span className=" text-sm text-[#212121]">
                  School Bus Service (+8,000,000 VND)
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={lunch}
                  onChange={(e) => setLunch(e.target.checked)}
                  className="w-5 h-5 bg-gray-50 rounded focus:ring-2 focus:ring-[#FABA1E] checked:bg-[#1a5336] checked:text-white transition-all duration-200"
                />
                <span className=" text-sm text-[#212121]">
                  Lunch Program (+15,000,000 VND)
                </span>
              </label>
            </div>
          </div>

          {/* Result */}
          <div className="bg-[#1a5336] p-6 mb-6">
            <div className="text-center">
              <p className=" text-sm text-[#fffae9]/80 mb-2">
                Estimated Annual Cost
              </p>
              <div className=" text-4xl md:text-5xl text-[#FABA1E] font-bold">
                {calculateTotal()} VND
              </div>
              <p className=" text-xs text-[#fffae9]/70 mt-3">
                *Estimate only. Does not include one-time fees or uniforms.
              </p>
            </div>
          </div>

          {/* Full Calculator Button */}
          <button
            onClick={onShowCalculator}
            className="w-full px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
          >
            Open Detailed Calculator
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ SECTION ====================
function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'When is tuition payment due?',
      answer: 'Tuition is due before the start of each term. For annual payment, full amount is due by August 1. For term payment, instalments are due August 1, December 1, and April 1. Monthly payments are due on the 1st of each month from September to June.'
    },
    {
      question: 'Can I change my payment plan mid-year?',
      answer: 'Yes, you can switch to a different payment plan at the start of any new term. However, discounts are only applied to the remaining balance based on your new plan. Contact the finance office to make changes.'
    },
    {
      question: 'What happens if I pay late?',
      answer: 'A 5% late penalty fee is applied to payments received more than 7 days after the due date. Students with outstanding balances for more than 30 days may be unable to attend classes until the account is cleared.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees. Our tuition includes all core educational services, books, and materials. Optional add-ons like bus service, lunch, and after-school programs are clearly listed with transparent pricing.'
    },
    {
      question: 'How do I apply for financial aid?',
      answer: 'Complete the Financial Aid Application Form (available on our website or admissions office) along with required financial documentation. Applications are reviewed confidentially by our scholarship committee. Decisions are typically made within 2-3 weeks.'
    },
    {
      question: 'Can siblings attend LHBS at the same time?',
      answer: 'Absolutely! We offer a 10% sibling discount for the second child and each additional child enrolled simultaneously. The discount applies to the lower tuition amount(s).'
    },
    {
      question: 'Do you offer payment plans for one-time fees?',
      answer: 'One-time fees (Registration and Building Fund) can be paid in 2 instalments: 50% upon acceptance and 50% before the first day of school. However, enrollment is not confirmed until full payment is received.'
    },
    {
      question: 'What currency do you accept?',
      answer: 'Tuition and fees are priced in Vietnamese Dong (VND). We accept payment in VND via bank transfer, card, or approved payment gateways. International wire transfers are accepted and will be converted at the prevailing bank rate on the day of receipt.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto ">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl md:text-5xl text-[#1a5336] mb-4">
          Frequently Asked Questions
        </h2>
        <p className=" text-base text-[#212121] max-w-[70ch] mx-auto mb-8">
          Common questions about tuition, payments, and financial policies
        </p>
        
        <button
          onClick={() => {
            const downloadsSection = document.getElementById('downloads');
            if (downloadsSection) {
              downloadsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-6 h-10 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg text-sm"
        >
          <FileText className="w-4 h-4" />
          More Documents
        </button>
      </div>

      <div className="max-w-[900px] mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full p-6 flex items-start justify-between text-left hover: transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg"
            >
              <div className="flex-1 flex items-start gap-4">
                <HelpCircle className="w-5 h-5 text-[#FABA1E] flex-shrink-0 mt-1" />
                <span className=" text-lg text-[#1a5336]">
                  {faq.question}
                </span>
              </div>
              
              {openFaq === index ? (
                <ChevronUp className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
              )}
            </button>
            
            {openFaq === index && (
              <div className="px-6 pb-6 bg-gray-50/30">
                <div className="pl-9">
                  <p className=" text-sm text-[#212121] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ==================== DOWNLOADS & CONTACTS SECTION ====================
function DownloadsContactsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const downloads = [
    { name: 'Full Tuition & Fees Schedule 2025-2026', url: '/downloads/tuition-fees-2025.pdf', size: '2.4 MB' },
    { name: 'Scholarship Application & Policy', url: '/downloads/scholarship-policy-2025.pdf', size: '1.8 MB' },
    { name: 'Optional Services Price List', url: '/downloads/optional-services-2025.pdf', size: '890 KB' },
    { name: 'Payment Methods & Banking Details', url: '/downloads/payment-methods.pdf', size: '450 KB' }
  ];

  return (
    <section id="downloads" className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Downloads */}
        <div>
          <h2 className=" text-3xl text-[#1a5336] mb-6">
            Download Documents
          </h2>
          
          <p className=" text-sm text-[#212121] mb-8">
            Access detailed fee schedules, policies, and payment information
          </p>
          
          <div className="space-y-4">
            {downloads.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                download
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="flex items-center gap-4 flex-1">
                  <FileText className="w-6 h-6 text-[#1a5336] flex-shrink-0" />
                  <div>
                    <div className=" text-sm text-[#1a5336] group-hover:text-[#FABA1E]">
                      {doc.name}
                    </div>
                    <div className=" text-xs text-[#212121]/60">
                      PDF • {doc.size}
                    </div>
                  </div>
                </div>
                <Download className="w-5 h-5 text-[#1a5336] flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Help Card (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-[#1a5336] p-8 text-[#fffae9] rounded-lg">
            <h3 className=" text-2xl mb-4">
              Need Help?
            </h3>
            
            <p className=" text-sm text-[#fffae9]/90 mb-6">
              Our finance team is here to assist you with any questions about tuition, payment plans, or financial aid.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+84283771456"
                className="flex items-center gap-3 text-[#fffae9] hover:text-[#FABA1E] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className=" text-sm">+84 (28) 3771 4568</span>
              </a>
              
              <a
                href="mailto:finance@lhbs.edu.vn"
                className="flex items-center gap-3 text-[#fffae9] hover:text-[#FABA1E] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className=" text-sm">finance@lhbs.edu.vn</span>
              </a>
              
              <a
                href="https://wa.me/84901234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#fffae9] hover:text-[#FABA1E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className=" text-sm">WhatsApp / Zalo</span>
              </a>
              
              <div className="flex items-start gap-3 text-[#fffae9]/80">
                <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className=" text-sm">
                  <div>Mon-Fri: 8:00 AM - 5:00 PM</div>
                  <div>Sat: 8:00 AM - 12:00 PM</div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('/contact/finance-appointment')}
                className="w-full px-6 h-10 bg-[#FABA1E] text-[#1a5336]  font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9]"
              >
                Schedule Consultation
              </button>
              
              <button
                onClick={() => onNavigate('/admissions/apply-now')}
                className="w-full px-6 h-10 bg-transparent text-[#fffae9] font-bold hover:bg-[#FABA1E] hover:text-[#1a5336] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] rounded-lg shadow-md hover:shadow-lg"
              >
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== STICKY HELPER (DESKTOP) ====================
function StickyHelper() {
  return (
    <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-[#1a5336] p-4 shadow-lg w-[200px] rounded-lg">
        <p className=" text-lg text-[#fffae9] mb-4">
          Need Help?
        </p>
        
        <div className="space-y-3">
          <a
            href="tel:+84283771456"
            className="flex items-center gap-2 text-[#fffae9] hover:text-[#FABA1E] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className=" text-xs">Call Us</span>
          </a>
          
          <a
            href="https://wa.me/84901234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 h-8 bg-[#FABA1E] text-[#1a5336]  text-xs font-bold hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ==================== CALCULATOR MODAL ====================
function CalculatorModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a5336]/80">
      <div className="bg-white max-w-[600px] w-full max-h-[90vh] overflow-y-auto rounded-lg">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className=" text-2xl text-[#1a5336]">
              Detailed Fee Calculator
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-[#1a5336]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
            >
              <X className="w-6 h-6 text-[#1a5336]" />
            </button>
          </div>
          
          <p className=" text-sm text-[#212121] mb-6">
            Coming soon: Interactive calculator with detailed breakdown of all fees, payment schedules, 
            and scholarship applications.
          </p>
          
          <button
            onClick={onClose}
            className="w-full px-8 h-12 bg-[#1a5336] text-[#fffae9]  font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}