import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { PageCard } from './PageCard';
import { ImageWithFallback } from './ImageWithFallback';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  introText: string;
  ctaText?: string;
  onCtaClick?: () => void;
  breadcrumbs?: BreadcrumbItem[];
  relatedPages?: Array<{
    title: string;
    description: string;
    image?: string;
    onClick: () => void;
  }>;
  children?: React.ReactNode;
}

export function PageTemplate({
  title,
  subtitle,
  heroImage,
  introText,
  ctaText = 'Learn More',
  onCtaClick,
  breadcrumbs = [],
  relatedPages = [],
  children
}: PageTemplateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="">
      {/* Hero Section - Full bleed with breadcrumbs inside */}
      <section className="relative min-h-[40vh] md:min-h-[65vh] bg-[#1a5336] overflow-hidden flex flex-col">
        {heroImage ? (
          <>
            <div className="absolute inset-0">
              <ImageWithFallback
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay for readability - WCAG AA contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a5336] to-[#14432b]" />
        )}
        
        {/* Breadcrumbs inside Hero - positioned below header */}
        {breadcrumbs.length > 0 && (
          <nav 
            className="relative z-20 w-full px-4 md:px-20 pt-3 pb-2"
            style={{ marginTop: '76px' }}
            aria-label="Breadcrumb"
          >
            <div className="max-w-[1200px] mx-auto flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />}
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className=" text-sm text-[#fffae9]/90 hover:text-[#fffae9] transition-colors focus:outline-none focus:text-[#fffae9] focus:underline whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className=" text-sm text-[#fffae9]/70 whitespace-nowrap">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
        
        {/* Hero Content - constrained width, proper spacing */}
        <div className="relative z-10 w-full px-4 md:px-20 max-w-[1200px] mx-auto flex-1 flex flex-col justify-center pb-16 md:pb-24" style={{ paddingTop: breadcrumbs.length > 0 ? '16px' : '32px' }}>
          <motion.h1
            className=" text-white text-[32px] md:text-[48px] mb-4 max-w-[22ch]"
            style={{ lineHeight: '1.24' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className=" text-white/95 text-[16px] md:text-[18px] max-w-[65ch]"
              style={{ lineHeight: '1.5' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {/* Intro Section - centered, proper max-width */}
      <section className="py-12 md:py-16 px-4 md:px-20">
        <div className="max-w-[760px] mx-auto text-center">
          <motion.p
            className=" text-[#212121] mb-8"
            style={{ lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {introText}
          </motion.p>
          
          {/* Primary CTA - proper height 44-48px, radius = 0 */}
          {onCtaClick && (
            <motion.button
              onClick={onCtaClick}
              className="px-8 h-12 bg-[#1a5336] text-white  font-bold hover:bg-[#14432b] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.button>
          )}
        </div>
      </section>

      {/* Content Section - proper container width */}
      {children && (
        <section ref={ref} className="py-12 md:py-16 px-4 md:px-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {children}
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Pages Section */}
      {relatedPages.length > 0 && (
        <section className="py-16 md:py-24 px-4 md:px-20 ">
          <div className="max-w-[1200px] mx-auto">
            <h2 className=" text-[32px] md:text-[40px] text-[#1a5336] mb-12 text-center">
              Explore Related
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PageCard {...page} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}