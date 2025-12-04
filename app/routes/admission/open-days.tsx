import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
// Online images - using different sources to avoid repetition
const heroImage = 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D';
const admissionImage = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop&q=80';
const opportunitiesImage = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80';
const learningImage = 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=80';
import welcomingImage from '@/images/admissions/items-02.png';

export default function OpenDayPage() {
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path);
  }
  return (
    <div id="open-day" className="relative bg-white">
      {/* Section 1: Header */}
      <HeaderSection onNavigate={onNavigate} />
      
      {/* Section 2: Hero Visual */}
      <HeroVisualSection />
      
      {/* Section 3: Admission Offer */}
      <AdmissionOfferSection />
      
      {/* Section 4: Opportunities */}
      <OpportunitiesSection />
      

      
      {/* Section 6: Learning Without Limits */}
      <LearningWithoutLimitsSection />
      
      {/* Section 7: Success Stories */}
      <SuccessStoriesSection />
      
      {/* Section 8: Welcoming Message */}
      <WelcomingMessageSection onNavigate={onNavigate} />
            {/* Section 5: Registration Form */}
      <RegistrationFormSection />
    </div>
  );
}

// ==================== SECTION 1: Header ====================
function HeaderSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Content placeholders
  const HDR_TAGLINE = "SPECIAL EVENT";
  const HDR_TITLE = "LHBS Open Day 2025";
  const HDR_EVENT_DATE = "Saturday, March 15, 2025 | 9:00 AM - 4:00 PM";
  const HDR_LEAD = "Discover our bilingual education excellence, meet our dedicated teachers, explore our modern facilities, and see how we nurture global citizens ready for the future.";
  const HDR_CTA_TEXT = "REGISTER NOW";
  const HDR_CTA_LINK = "#registration";

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[65vh] md:min-h-[70vh] flex items-center  bg-[#1a5336]"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.8), rgba(26, 83, 54, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
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
                onClick={() => onNavigate('/admissions')}
                className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                Admissions
              </button>
            </li>
            <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
            <li className="text-[#fffae9]">Open Day</li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
            {HDR_TAGLINE}
          </p>
          <h1 
            className="font-['SVN-Gotham'] text-white mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {HDR_TITLE}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#fffae9]/90 mb-6 font-light">
            {HDR_EVENT_DATE}
          </h2>
          <p className="text-lg text-[#fffae9]/90 mb-8 leading-relaxed max-w-2xl">
            {HDR_LEAD}
          </p>
          
          {/* CTA Button */}
          <motion.button
            onClick={() => {
              const element = document.querySelector('#registration');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {HDR_CTA_TEXT}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 2: Hero Visual ====================
function HeroVisualSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Content placeholders
  const HV_SUBTITLE = "Experience Excellence in Bilingual Education";
  const HV_TIME = "9:00 AM - 4:00 PM";
  const HV_HIGHLIGHTS = [
    "Campus tours with student ambassadors",
    "Meet our international teaching faculty",
    "Interactive classroom demonstrations",
    "Information sessions for parents",
    "Student performance showcases",
    "Admissions guidance and Q&A"
  ];
  const HV_IMAGE = heroImage;

  return (
    <motion.section
      id="hero"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Large Event Title */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a5336] mb-6">
            OPEN DAY
          </h2>
          
          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl text-[#212121] mb-4">
            {HV_SUBTITLE}
          </h3>
          
          {/* Time */}
          <p className="text-xl text-[#1a5336] font-semibold mb-8">
            {HV_TIME}
          </p>
          
          {/* Highlights */}
          <div className="space-y-3">
            {HV_HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                <span className="w-2 h-2 bg-[#FABA1E] mt-3 flex-shrink-0"></span>
                <span className="text-lg text-[#212121]">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={learningImage}
            alt="Students engaged in interactive learning activities during Open Day"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: Admission Offer ====================
function AdmissionOfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Content placeholders
  const AO_TITLE = "Special Admission Offer";
  const AO_LIST_ITEMS = [
    "50% discount on application fee for registrations during Open Day",
    "Priority consideration for enrollment",
    "Complimentary assessment and consultation",
    "Early bird tuition discount available",
    "Free school supplies package for new students"
  ];
  const AO_NOTE = "This exclusive offer is valid only for families who register during our Open Day event. Limited spots available.";
  const AO_IMAGE = admissionImage;

  return (
    <motion.section
      id="admission-offer"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-[#fffae9]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          className="relative h-[400px] md:h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={AO_IMAGE}
            alt="Family meeting with LHBS admissions counselor"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Right: Content Box */}
        <motion.div
          className="bg-white p-8 md:p-12"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a5336] mb-8">
            {AO_TITLE}
          </h3>
          
          {/* List Items */}
          <ul className="space-y-4 mb-8">
            {AO_LIST_ITEMS.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              >
                <span className="w-2 h-2 bg-[#FABA1E] mt-3 flex-shrink-0"></span>
                <span className="text-lg text-[#212121]">{item}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Note */}
          <p className="text-sm text-[#666] italic">
            {AO_NOTE}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 4: Opportunities ====================
function OpportunitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Content placeholders
  const OP_TITLE = "Discover Endless Opportunities";
  const OP_LIST = [
    "Explore our state-of-the-art science laboratories",
    "Visit our creative arts and music studios",
    "Experience our sports facilities and swimming pool",
    "Tour our modern library and digital learning center",
    "Meet our international faculty and staff",
    "Learn about our global exchange programs"
  ];
  const OP_IMAGE = opportunitiesImage;

  return (
    <motion.section
      id="opportunities"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <motion.h3
          className="text-4xl md:text-5xl font-bold text-[#1a5336] mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {OP_TITLE}
        </motion.h3>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: List in Box */}
          <motion.div
            className="bg-[#fffae9] p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ul className="space-y-4">
              {OP_LIST.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                >
                  <span className="w-2 h-2 bg-[#FABA1E] mt-3 flex-shrink-0"></span>
                  <span className="text-lg text-[#212121]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Right: Image */}
          <motion.div
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={OP_IMAGE}
              alt="Students exploring various learning opportunities and facilities at LHBS"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: Registration Form ====================
function RegistrationFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    grade: '',
    message: '',
    consent: false
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Content placeholders
  const FORM_PARENT = "Parent/Guardian Name";
  const FORM_PHONE = "Phone Number";
  const FORM_EMAIL = "Email Address";
  const FORM_CHILD = "Child's Name";
  const FORM_GRADE = "Child's Age/Current Grade";
  const FORM_NOTE = "Additional Questions or Notes";
  const FORM_CONSENT = "I agree to receive communications about LHBS Open Day and admissions";
  const FORM_CTA_TEXT = "REGISTER FOR OPEN DAY";
  const FORM_SUCCESS_MSG = "Thank you! Your registration has been confirmed. We'll send you more details via email.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.section
      id="registration"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-[#fffae9]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[800px] mx-auto">
        <motion.div
          className="bg-white p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a5336] mb-8 text-center">
            Register for Open Day
          </h3>
          
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#FABA1E] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-[#1a5336]">✓</span>
              </div>
              <p className="text-lg text-[#212121]">{FORM_SUCCESS_MSG}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Name */}
              <div>
                <label className="block text-lg font-semibold text-[#212121] mb-2">
                  {FORM_PARENT} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#ddd] focus:border-[#1a5336] focus:outline-none text-lg"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="block text-lg font-semibold text-[#212121] mb-2">
                  {FORM_PHONE} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#ddd] focus:border-[#1a5336] focus:outline-none text-lg"
                />
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-lg font-semibold text-[#212121] mb-2">
                  {FORM_EMAIL} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#ddd] focus:border-[#1a5336] focus:outline-none text-lg"
                />
              </div>
              
              {/* Child Name */}
              <div>
                <label className="block text-lg font-semibold text-[#212121] mb-2">
                  {FORM_CHILD} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => handleInputChange('childName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#ddd] focus:border-[#1a5336] focus:outline-none text-lg"
                />
              </div>
              
              {/* Grade */}
              <div>
                <label className="block text-lg font-semibold text-[#212121] mb-2">
                  {FORM_GRADE} *
                </label>
                <select
                  required
                  value={formData.grade}
                  onChange={(e) => handleInputChange('grade', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#ddd] focus:border-[#1a5336] focus:outline-none text-lg"
                >
                  <option value="">Select Grade Level</option>
                  <option value="kindergarten">Kindergarten (3-5 years)</option>
                  <option value="primary">Primary School (6-10 years)</option>
                  <option value="secondary">Secondary School (11-14 years)</option>
                  <option value="high">High School (15-18 years)</option>
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-lg font-semibold text-[#212121] mb-2">
                  {FORM_NOTE}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#ddd] focus:border-[#1a5336] focus:outline-none text-lg resize-none"
                />
              </div>
              
              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#1a5336]"
                />
                <label className="text-sm text-[#212121]">
                  {FORM_CONSENT} *
                </label>
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-[#1a5336] text-[#fffae9] font-bold hover:bg-[#14432b] transition-colors text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {FORM_CTA_TEXT}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 6: Learning Without Limits ====================
function LearningWithoutLimitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Content placeholders
  const LWL_TITLE = "Learning Without Limits";
  const LWL_DESC = "At LHBS, we believe every child has unlimited potential. Our innovative curriculum and teaching methods break traditional boundaries, encouraging students to explore, create, and discover their passions.";
  const LWL_SUBTITLE = "Think Outside the Box";
  const LWL_SUBDESC = "Through project-based learning, interdisciplinary studies, and real-world applications, we prepare students for challenges that don't yet exist.";
  const LWL_IMAGES = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80', 
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % LWL_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + LWL_IMAGES.length) % LWL_IMAGES.length);
  };

  return (
    <motion.section
      id="learning"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Right: Image Carousel */}
        <motion.div
          className="relative h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={LWL_IMAGES[currentImageIndex]}
            alt="Students engaged in innovative learning activities"
            className="w-full h-full object-cover"
          />
          
          {/* Carousel Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a5336]" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-[#1a5336]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {LWL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 ${
                  index === currentImageIndex ? 'bg-[#FABA1E]' : 'bg-white bg-opacity-50'
                } transition-all`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
                {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#1a5336] mb-6">
            {LWL_TITLE}
          </h3>
          
          <p className="text-lg text-[#212121] mb-8 leading-relaxed">
            {LWL_DESC}
          </p>
          
          <div className="border-l-4 border-[#FABA1E] pl-6">
            <h4 className="text-2xl font-bold text-[#1a5336] mb-4">
              {LWL_SUBTITLE}
            </h4>
            <p className="text-lg text-[#212121] leading-relaxed">
              {LWL_SUBDESC}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 7: Success Stories ====================
function SuccessStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Content placeholders
  const SS_TITLE = "Success Stories";
  const SS_SUBTEXT = "Hear from our graduates and current students about their LHBS experience";
  
  const successStories = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      name: "Minh Nguyen",
      class: "Class of 2023 - Harvard University",
      description: "LHBS taught me to think globally while staying connected to my Vietnamese roots. The bilingual program prepared me perfectly for international university."
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Sarah Chen",
      class: "Grade 11 - IB Program",
      description: "The supportive environment and innovative teaching methods at LHBS help me excel in both Vietnamese and English. I'm confident about my future."
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
      name: "David Le",
      class: "Class of 2022 - Oxford University",
      description: "The critical thinking skills and global perspective I gained at LHBS were instrumental in my success at one of the world's top universities."
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80',
      name: "Emma Tran",
      class: "Grade 9 - Student Council President",
      description: "LHBS encourages leadership and creativity. I've grown so much personally and academically. This school truly prepares us for the future."
    }
  ];

  return (
    <motion.section
      id="success-stories"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-[#fffae9]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#1a5336] mb-4">
            {SS_TITLE}
          </h3>
          <p className="text-xl text-[#212121] max-w-2xl mx-auto">
            {SS_SUBTEXT}
          </p>
        </motion.div>
        
        {/* Success Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            >
              {/* Student Image */}
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name */}
              <h4 className="text-xl font-bold text-[#1a5336] mb-2">
                {story.name}
              </h4>
              
              {/* Class */}
              <p className="text-sm font-semibold text-[#FABA1E] mb-4">
                {story.class}
              </p>
              
              {/* Description */}
              <p className="text-sm text-[#212121] leading-relaxed italic">
                "{story.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 8: Welcoming Message ====================
function WelcomingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Content placeholders
  const WM_TITLE = "Welcome to Your Future";
  const WM_DESC = "Join our vibrant community of learners, innovators, and global citizens. At LHBS Open Day, you'll discover how we nurture each student's unique potential while building strong foundations for lifelong success.";
  const WM_CTA_TEXT = "LEARN MORE ABOUT LHBS";
  const WM_CTA_LINK = "/our-school/about-us";
  const WM_IMAGE = welcomingImage;

  return (
    <motion.section
      id="welcoming"
      ref={ref}
      className="py-24 px-4 md:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          className="relative h-[500px] md:h-[600px] order-2 md:order-1 "
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={WM_IMAGE}
            alt="Welcoming LHBS community celebrating student achievements"
            className="w-full h-full"
          />
        </motion.div>
        
        {/* Right: Content */}
        <motion.div
          className="flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#1a5336] mb-6">
            {WM_TITLE}
          </h3>
          
          <p className="text-lg text-[#212121] mb-8 leading-relaxed">
            {WM_DESC}
          </p>
          
          <motion.button
            onClick={() => onNavigate(WM_CTA_LINK)}
            className="px-8 py-4 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {WM_CTA_TEXT}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}