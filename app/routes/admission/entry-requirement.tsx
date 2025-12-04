import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Plus, Minus, Phone, Mail, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { useNavigate } from 'react-router';
export default function EntryRequirementsPage() {
  const navigate = useNavigate()
  const onNavigate = (path : string) => {
    navigate(path)
  }
  return (
    <div className="w-full" id="entry-requirements">
      {/* 1. HERO SECTION */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* 2. HOW TO APPLY INTRO SECTION */}
      <HowToApplyIntroSection />
      
      {/* 3. APPLICATION PROCESS ACCORDION */}
      <ApplicationProcessSection />
      
      {/* 4. IMPORTANT NOTES SECTION */}
      <ImportantNotesSection />
      
      {/* 5. ADMISSIONS HELP SECTION */}
      <AdmissionsHelpSection onNavigate={onNavigate} />
    </div>
  );
}

// ==================== SECTION 1: HERO ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-[65vh] md:min-h-[40vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/576872304_810927521569390_990693962335074842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeELHd7R2B_ZV7bjPWu4OHAiy3EtHgyJlfLLcS0eDImV8sV2dt5wLLFUukqUEEzcgI39kYxPIEbikW8IoPsIAmA-&_nc_ohc=HqM2hNzNu9cQ7kNvwGy0pPW&_nc_oc=Adk7W1U9tbC0Gn1jyWFmD19FZUpOmi2ae5zuUq3gA8Qc2DDjtJ02Mt-ZbMcXcZRUD-4&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=sMP_M0sv5xoQ_kMdvJ0_2Q&oh=00_AfixxmT26zzbTi_QQK_f70RBJCcsVaMrmQTm26hJJtRI9g&oe=6921A541)`,
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
            <li className="text-[#fffae9] font-['Lexend_Deca']">Entry Requirements</li>
          </ol>
        </nav>

        {/* Hero Content */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#FABA1E] mb-4 uppercase tracking-wider text-sm">
            {/* {HDR_TAGLINE} */}
            ENTRY REQUIREMENTS
          </p>
          <h1 
            className="font-['SVN-Gotham'] text-white mb-4"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {/* {HDR_TITLE} */}
            How to Apply to LHBS
          </h1>
          <p className="text-[#FABA1E] mb-6 text-xl">
            Your pathway to joining our learning community
          </p>
          <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
            {/* {HDR_LEAD} */}
            Discover the straightforward steps to join LHBS and begin your child's journey toward academic excellence and personal growth. Our admissions team is here to guide you through every step of the process, ensuring a smooth transition to our bilingual learning community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://tuyensinh.lhbs.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#e5a812] transition-colors flex items-center justify-center"
            >
              Start Application
            </a>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-['Arial'] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
            >
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 2: HOW TO APPLY INTRO ====================
function HowToApplyIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="how-to-apply"
      className="py-24 md:py-32 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#FABA1E] mb-2 uppercase tracking-wider text-sm">
              {/* {HTA_EYEBROW} */}
              ADMISSIONS PROCESS
            </p>
            
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              {/* {HTA_TITLE} */}
              Simple Steps to Join LHBS
            </h2>
            
            <div className="space-y-4 text-[#212121] text-lg leading-relaxed">
              {/* {HTA_DESC} */}
              <p>
                At LHBS, we've designed our admissions process to be transparent, supportive, and accessible to all families. From initial enquiry to enrollment, our experienced admissions team provides personalized guidance every step of the way.
              </p>
              <p>
                We believe that choosing the right school is one of the most important decisions families make. That's why we take the time to understand each child's unique needs and ensure that LHBS is the perfect fit for their educational journey.
              </p>
              <p>
                Our admissions process is designed to be comprehensive yet efficient, allowing us to get to know your child while providing you with all the information needed to make an informed decision about their future.
              </p>
            </div>

            <button 
              className="inline-flex items-center px-8 py-3 bg-[#1a5336] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0f3021] transition-colors mt-8"
            >
              {/* {HTA_CTA_TEXT} */}
              Download Application Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative dots pattern */}
            <div className="absolute -top-8 -right-8 w-16 h-16 opacity-20 pointer-events-none hidden lg:block">
              <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#FABA1E] rounded-full"></div>
                ))}
              </div>
            </div>
            
            <ImageWithFallback 
              src="https://lhbs.edu.vn/wp-content/uploads/2023/02/Dieu-che-san-pham-xua-muoi-phong-chong-benh-sot-xuat-huyet-tu-tinh-dau-bach-dan-chanh.jpg"
              alt="{HTA_IMAGE} Student advisor helping family with application guidance and school enrollment process"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: APPLICATION PROCESS ACCORDION ====================
function ApplicationProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      title: "Step 1 – Enquiry",
      content: "Begin your LHBS journey by contacting our admissions team through our online enquiry form, phone, or email. We'll provide you with comprehensive information about our programs, facilities, and educational approach. Schedule an initial consultation to discuss your child's specific needs and interests."
    },
    {
      title: "Step 2 – Visit",
      content: "Experience LHBS firsthand through a personalized campus tour. Meet our teachers, explore our facilities, and observe our learning environment. We encourage families to attend our regular Open House events or schedule a private visit to see our bilingual education program in action."
    },
    {
      title: "Step 3 – Application",
      content: "Complete the official application form and submit required documents including academic records, birth certificate, health certificate, and passport photos. Our admissions team will review your application and guide you through any additional requirements specific to your child's grade level."
    },
    {
      title: "Step 4 – Admission Assessments",
      content: "Your child will participate in age-appropriate assessments designed to understand their academic level, learning style, and social development. These include informal observations, play-based activities for younger students, and academic assessments for older students, all conducted in a supportive, welcoming environment."
    },
    {
      title: "Step 5 – Offering Your Child a Place",
      content: "Upon successful completion of the admissions process, we'll extend a formal offer of enrollment. You'll receive detailed information about class placement, school policies, uniform requirements, and orientation schedules. Our team will support you through the enrollment finalization and preparation for your child's first day."
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="application-process"
      className="py-24 md:py-32 bg-[#e8f4f1]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {/* {AP_TITLE} */}
            Application Process
          </h2>
          <p className="text-[#212121]/70 text-lg max-w-3xl mx-auto">
            Follow these five simple steps to complete your child's application to LHBS
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#1a5336]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full !rounded-none text-left p-6 flex items-center justify-between hover:bg-[#e8f4f1] transition-colors"
              >
                <span className="font-['SVN-Gotham'] text-lg text-[#1a5336]">{step.title}</span>
                {openStep === index ? (
                  <Minus className="w-5 h-5 text-[#1a5336]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#1a5336]" />
                )}
              </button>
              {openStep === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-[#1a5336]/20 mb-4"></div>
                  <p className="text-[#212121] text-base leading-relaxed">
                    {step.content}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 4: IMPORTANT NOTES ====================
function ImportantNotesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="important-notes"
      className="py-24 md:py-32 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative dots pattern */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 opacity-20 pointer-events-none hidden lg:block">
              <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#FABA1E] rounded-full"></div>
                ))}
              </div>
            </div>
            
            <ImageWithFallback 
              src="https://lhbs.edu.vn/wp-content/uploads/2023/02/He-thong-cua-thong-minh.jpg"
              alt="{IN_IMAGE} Admissions staff helping parents during school visit and enrollment consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              {/* {IN_TITLE} */}
              Important Notes
            </h2>
            
            <div className="space-y-4 text-[#212121] text-lg leading-relaxed mb-8">
              {/* {IN_DESC} */}
              <p>
                Please note that admission to LHBS is competitive and places are limited. We encourage early application to secure your preferred enrollment date. All applications are reviewed in the order they are received.
              </p>
              <p>
                International students may require additional documentation and visa support. Our admissions team provides comprehensive guidance for international families throughout the application process.
              </p>
              <p>
                Students with special educational needs are welcome at LHBS. Please inform our admissions team during the application process so we can ensure appropriate support is available.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#e8f4f1] p-6 space-y-4">
              <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-4">Contact Admissions Office</h3>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FABA1E]" />
                <div>
                  <span className="text-[#212121] font-medium">
                    {/* {IN_EMAIL} */}
                    admissions@lhbs.edu.vn
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FABA1E]" />
                <div>
                  <span className="text-[#212121] font-medium">
                    {/* {IN_PHONE} */}
                    +84 251 3989 298
                  </span>
                </div>
              </div>
            </div>

            <button 
              className="inline-flex items-center px-8 py-3 bg-[#1a5336] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0f3021] transition-colors mt-8"
            >
              {/* {IN_CTA_TEXT} */}
              Schedule Campus Visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: ADMISSIONS HELP ====================
function AdmissionsHelpSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="admissions-help"
      className="py-24 md:py-32 bg-[#e8f4f1]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              {/* {AH_TITLE} */}
              Need Admissions Help?
            </h2>
            
            <div className="space-y-4 text-[#212121] text-lg leading-relaxed mb-8">
              {/* {AH_DESC} */}
              <p>
                Our dedicated admissions team is here to support you every step of the way. Whether you have questions about our programs, need help with the application process, or want to schedule a campus visit, we're ready to assist.
              </p>
              <p>
                We understand that choosing the right school for your child is a significant decision. That's why we offer personalized consultations to help you understand how LHBS can support your child's unique learning journey and future aspirations.
              </p>
              <p>
                Don't hesitate to reach out – we're here to make the admissions process as smooth and informative as possible for your family.
              </p>
            </div>

            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="inline-flex items-center px-8 py-3 bg-[#FABA1E] text-[#1a5336] font-bold text-sm uppercase tracking-wider hover:bg-[#e5a812] transition-colors"
            >
              {/* {AH_CTA_TEXT} */}
              Get Personalized Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageWithFallback 
              src="https://lhbs.edu.vn/wp-content/uploads/2025/02/COVER-WEB_TUYEN-SINH_2526_LHBS-09-1.png"
              alt="LHBS campus building and admissions office welcoming families to our learning community"
              className="w-full h-full object-cover object-right"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}