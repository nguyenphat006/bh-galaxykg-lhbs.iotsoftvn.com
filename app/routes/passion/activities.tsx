import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ArrowRight, Download, Users, Calendar, FileText } from 'lucide-react';
import { ImageWithFallback } from '~/components/ImageWithFallback';
import { useNavigate } from 'react-router';

export default function ExtracurricularActivitiesPage() {
   const navigate = useNavigate();
    const onNavigate = (path: string) => {
      navigate(path)
    }
  return (
    <div className="w-full" id="eca">
      {/* 1. HERO SECTION */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* 2. DISCOVERING TALENTS SECTION */}
      <DiscoveringTalentsSection />
      
      {/* 3. ECA ENROLLMENT SECTION */}
      <ECAEnrollmentSection />
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
        backgroundImage: `linear-gradient(rgba(26, 83, 54, 0.85), rgba(26, 83, 54, 0.85)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN3aW1taW5nJTIwc3BvcnRzfGVufDF8fHx8MTc2MzA4NzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080)`,
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
                onClick={() => onNavigate('/paths-to-passion')}
                className="text-[#fffae9]/70 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E]"
              >
                Path To Passion
              </button>
            </li>
            <li><ChevronRight className="w-4 h-4 text-[#fffae9]/70" /></li>
            <li className="text-[#fffae9]">Extracurricular Activities</li>
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
                        Clubs & Activities
          </p>
          <h1 
            className="font-['SVN-Gotham'] text-white mb-4"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            {/* {HDR_TITLE} */}
            EXTRACURRICULAR ACTIVITIES
          </h1>
          <p className="text-[#FABA1E] mb-6 text-xl">
            Discover your passion beyond the classroom
          </p>
          <p className="text-[#fffae9]/90 mb-8 text-lg leading-relaxed max-w-2xl">
            {/* {HDR_LEAD} */}
            At LHBS, we believe learning extends far beyond textbooks. Our comprehensive extracurricular program offers students opportunities to explore their interests, develop new skills, and build lasting friendships through diverse clubs and activities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('/admissions/apply-now')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold hover:bg-[#e5a812] transition-colors"
            >
              Apply Now
            </button>
            <button 
              onClick={() => onNavigate('/contact/contact-us')}
              className="px-8 h-12 bg-transparent text-[#fffae9] border-2 border-[#fffae9] font-bold hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 2: DISCOVERING TALENTS ====================
function DiscoveringTalentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="discovering-talents"
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
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FABA1E] font-bold text-sm">01 — 05</span>
            </div>
            
            <h2 
              className="font-['SVN-Gotham'] text-[#1a5336] mb-6"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              {/* {DT_TITLE} */}
              Discovering Hidden Talents
            </h2>
            
            <div className="space-y-4 text-[#212121] text-lg leading-relaxed">
              {/* {DT_DESC} */}
              <p>
                Every student possesses unique talents waiting to be discovered and nurtured. Our diverse range of extracurricular activities provides the perfect platform for students to explore their interests, develop new skills, and uncover hidden passions.
              </p>
              <p>
                From creative arts and music to robotics and swimming, our comprehensive program ensures that every student finds their niche. Through dedicated mentorship and supportive peer communities, we guide students on a journey of self-discovery that builds confidence and ignites lifelong learning.
              </p>
              <p>
                Our experienced instructors and modern facilities create an environment where creativity flourishes, teamwork thrives, and individual talents shine. Whether your child is interested in competitive sports, artistic expression, or technological innovation, we have the right program to help them excel.
              </p>
            </div>

            <button 
              className="inline-flex items-center px-8 py-3 bg-[#1a5336] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0f3021] transition-colors mt-8"
            >
              Explore All Activities
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
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG11c2ljJTIwYXJ0JTIwcm9ib3RpY3N8ZW58MXx8fHwxNzYzMDg3NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="{DT_IMAGE} Students participating in diverse activities including art, music, robotics, and swimming"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: ECA ENROLLMENT ====================
function ECAEnrollmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="how-to-enrol"
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
              {/* {EN_TITLE} */}
              How to Enrol in ECAs
            </h2>
            
            <div className="space-y-4 text-[#212121] text-lg leading-relaxed mb-8">
              {/* {EN_DESC} */}
              <p>
                Enrolling your child in extracurricular activities at LHBS is simple and straightforward. Our enrollment process is designed to be accessible to all families, ensuring every student can participate in activities that interest them.
              </p>
              <p>
                Registration typically opens at the beginning of each semester, with detailed information about schedules, requirements, and fees provided in advance. Our student support team is always available to help families choose the most suitable activities based on their child's interests and availability.
              </p>
              <p>
                We offer flexible scheduling options and financial assistance programs to ensure that participation in extracurricular activities is accessible to all students, regardless of their circumstances.
              </p>
            </div>

            {/* Download Section */}
            <div className="bg-white p-8 border-l-4 border-[#1a5336]">
              <h3 className="font-['SVN-Gotham'] text-xl text-[#1a5336] mb-6 uppercase tracking-wider">
                DOWNLOAD
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-[#FABA1E]" />
                  <div>
                    <a 
                      href="#" 
                      className="text-[#1a5336] font-medium hover:text-[#FABA1E] transition-colors"
                    >
                      {/* {EN_DOWNLOAD_1_TEXT} */}
                      ECA Registration Form 2025-2026
                    </a>
                    <p className="text-[#212121]/70 text-sm">Complete enrollment form for all extracurricular activities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-[#FABA1E]" />
                  <div>
                    <a 
                      href="#" 
                      className="text-[#1a5336] font-medium hover:text-[#FABA1E] transition-colors"
                    >
                      {/* {EN_DOWNLOAD_2_TEXT} */}
                      ECA Schedule & Activity Guide
                    </a>
                    <p className="text-[#212121]/70 text-sm">Detailed schedules and descriptions for all available activities</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="inline-flex items-center px-8 py-3 bg-[#1a5336] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0f3021] transition-colors mt-8"
            >
              Register Today
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
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNpZ25pbmclMjB1cCUyMHRlYWNoZXIlMjBoZWxwaW5nfGVufDF8fHx8MTc2MzA4NzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="{EN_IMAGE} Students signing up for activities with teacher assistance"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}