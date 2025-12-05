import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { EducationLevel, TheNumbers, TestimonialQuoteSection, EducationPillarsSection, CoreStrengthModal, CoreStrengthsSection, FoundingMessageSection, NewsEventsSection, TestimonialsSection, HeroCarousel, CollegeAcceptancesSection, EducationPillarModal } from '@/components/home-page'
import ScrollToTop from '@/components/ui/components/ScrollToTop';
import { SolidEducationSection } from '@/components/home-page/section/solid-education';
import { LHBSLifeVideoSection } from '@/components/home-page/section/life-video';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'LHBS - Trường Song Ngữ Lạc Hồng' }, { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }]
}

export default function Home({onNavigate}: {onNavigate: (path: string) => void}) {
  const [showEducationModal, setShowEducationModal] = useState<{ image: string; alt: string; title?: string; subtitle?: string } | null>(null);
  const [showCoreStrengthModal, setShowCoreStrengthModal] = useState<{ title: string; description: string; points: string[]; image: string; alt: string } | null>(null);

    return(
    <>
    
      <HeroCarousel onNavigate={onNavigate} />
      {/* <SolidEducationSection onNavigate={onNavigate} />
      <EducationPillarsSection showModal={showEducationModal} setShowModal={setShowEducationModal}/>
      {showEducationModal && (
        <EducationPillarModal 
          image={showEducationModal.image}
          alt={showEducationModal.alt}
          title={showEducationModal.title || ''}
          subtitle={showEducationModal.subtitle || ''}
          onClose={() => setShowEducationModal(null)}
        />
      )}
      <CollegeAcceptancesSection onNavigate={onNavigate} /> */}
      <EducationLevel />
      <TheNumbers/>
      {/* Section xxx: Founding Message */}
      <FoundingMessageSection onNavigate={onNavigate} />
      {/* Section xxx: Core Strengths - 5 Pillars */}
      {/* <CoreStrengthsSection showModal={showCoreStrengthModal} setShowModal={setShowCoreStrengthModal} />
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
      <LHBSLifeVideoSection/> */}
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      <ScrollToTop/>
    </>
  )
}
