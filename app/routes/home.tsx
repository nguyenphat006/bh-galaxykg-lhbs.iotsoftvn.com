import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { CoreStrengthModal, CoreStrengthsSection, FoundingMessageSection, NewsEventsSection, TestimonialsSection, VideoHero, CollegeAcceptancesSection } from '@/components/home-page'
import Footer from '@/components/layouts/Footer'
import ScrollToTop from '@/components/ui/components/ScrollToTop';
import StickyHeader from '@/components/layouts/StickyHeader';
import { FullScreenMenu } from '@/components/ui/components/FullScreenMenu';
import { SolidEducationSection } from '@/components/home-page/section/solid-education';
import EducationPillarsSectionComponent from '@/components/home-page/section/education-pillar';
import { LHBSLifeVideoSection } from '@/components/home-page/section/life-video';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'LHBS - Trường Song Ngữ Lạc Hồng' }, { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }]
}

export default function Home({onNavigate}: {onNavigate: (path: string) => void}) {
  const [showEducationModal, setShowEducationModal] = useState<{ image: string; alt: string; title?: string; subtitle?: string } | null>(null);
  const [showCoreStrengthModal, setShowCoreStrengthModal] = useState<{ title: string; description: string; points: string[]; image: string; alt: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  
  // Handle scroll to update header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    setMenuOpen(false);
  };
  return(
    <>
      <StickyHeader
        scrolled={scrolled}
        onMenuClick={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
        onLogoClick={() => handleNavigate('/')}
        onEnquireClick={() => handleNavigate('/admissions/apply-now')}
        menuOpen={menuOpen}
      />
       <FullScreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
        currentPath={currentPath}
      />

      <VideoHero onNavigate={onNavigate} />

      <SolidEducationSection onNavigate={onNavigate} />
      <EducationPillarsSectionComponent/>
      <CollegeAcceptancesSection onNavigate={onNavigate} />
      {/* Section xxx: Founding Message */}
      <FoundingMessageSection onNavigate={onNavigate} />
      {/* Section xxx: Core Strengths - 5 Pillars */}
      <CoreStrengthsSection showModal={showCoreStrengthModal} setShowModal={setShowCoreStrengthModal} />
      {showCoreStrengthModal && (
        <CoreStrengthModal 
          title={showCoreStrengthModal.title}
          description={showCoreStrengthModal.description}
          points={showCoreStrengthModal.points}
          image={showCoreStrengthModal.image}
          alt={showCoreStrengthModal.alt}
          onClose={() => setShowCoreStrengthModal(null)}
        />
      )}

      <TestimonialsSection />
      <LHBSLifeVideoSection/>
      <NewsEventsSection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate}/>
      <ScrollToTop/>
    </>
  )
}
