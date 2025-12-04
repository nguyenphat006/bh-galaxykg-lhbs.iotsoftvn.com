import { MapPin, Phone, Mail } from 'lucide-react';
import logoImage from '@/images/base/logo-head.png';

export default function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  // Footer content data
  const footerTagline = "Trường Tiểu học - Trung học cơ sở - Trung học phổ thông Song ngữ Lạc Hồng";
  
  const addressLine = "152/16 Huỳnh Văn Nghệ, KP Tân Lại, P. Trấn Biên, Đồng Nai.";
  const phone = "+0251 3952 953";
  const email = "tuyensinh@lhbs.vn";
  
  const aboutLinks = [
    { label: 'About Us', url: '/our-school/about-us' },
    { label: 'Academics', url: '/academics' },
    { label: 'Admissions', url: '/admissions' },
    { label: 'News & Events', url: '/news-events' },
    { label: 'Careers', url: '/contact/careers' },
    { label: 'Contact', url: '/contact' }
  ];
  
  const programLinks = [
    { label: 'Early Years (Galaxy KG)', url: '/academics/kindergarten' },
    { label: 'Primary School', url: '/academics/primary' },
    { label: 'Middle School', url: '/academics/lower-secondary' },
    { label: 'High School', url: '/academics/upper-secondary' }
  ];
  
  const socialCopy = "Follow us on social media to stay connected with the latest news, events, and achievements from our school community.";
  
  const socialLinks = [
    { 
      platform: 'Facebook', 
      url: 'https://facebook.com/lhbs', 
      ariaLabel: 'Open our Facebook page',
      icon: 'facebook'
    },
    { 
      platform: 'Instagram', 
      url: 'https://instagram.com/lhbs', 
      ariaLabel: 'Open our Instagram profile',
      icon: 'instagram'
    },
    { 
      platform: 'Twitter', 
      url: 'https://twitter.com/lhbs', 
      ariaLabel: 'Open our Twitter profile',
      icon: 'twitter'
    },
    { 
      platform: 'LinkedIn', 
      url: 'https://linkedin.com/company/lhbs', 
      ariaLabel: 'Open our LinkedIn page',
      icon: 'linkedin'
    }
  ];
  
  const copyrightText = "© 2025 Lac Hong Bilingual School. All rights reserved.";
  
  const legalLinks = [
    { label: 'Privacy Policy', url: '/legal/privacy-policy' },
    { label: 'Terms of Use', url: '/legal/terms-of-use' },
    { label: 'Accessibility', url: '/legal/accessibility' }
  ];

  return (
    <footer className="bg-[#1a5336] text-[#fffae9] relative z-50">
      {/* Footer Top - 4 Columns */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Brand & Address */}
          <div className="lg:mr-8">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="LHBS - Lac Hong Bilingual School" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Tagline */}
            <p className=" text-sm text-[#fffae9]/90 mb-6 leading-relaxed">
              {footerTagline}
            </p>
            
            {/* Info List */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin 
                  className="w-5 h-5 text-[#fffae9]/50 flex-shrink-0 mt-0.5" 
                  aria-hidden="true"
                />
                <span className=" text-sm text-[#fffae9]/90 whitespace-pre-line">
                  {addressLine}
                </span>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone 
                  className="w-5 h-5 text-[#fffae9]/50 flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className=" text-sm text-[#fffae9]/90 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
                >
                  {phone}
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail 
                  className="w-5 h-5 text-[#fffae9]/50 flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href={`mailto:${email}`}
                  className=" text-sm text-[#fffae9]/90 hover:text-[#fffae9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: About LHBS */}
          <div>
            <h3 className=" text-xl text-[#fffae9] mb-6">
              About LHBS
            </h3>
            
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.url)}
                    className=" text-sm text-[#fffae9]/90 hover:text-[#fffae9] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336] text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Our Programs */}
          <div>
            <h3 className=" text-xl text-[#fffae9] mb-6">
              Our Programs
            </h3>
            
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.url)}
                    className=" text-sm text-[#fffae9]/90 hover:text-[#fffae9] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336] text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Connect With Us */}
          <div>
            <h3 className=" text-xl text-[#fffae9] mb-6">
              Connect With Us
            </h3>
            
            <p className=" text-sm text-[#fffae9]/90 mb-6 leading-relaxed">
              {socialCopy}
            </p>
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <SocialIcon 
                  key={index}
                  platform={social.icon}
                  url={social.url}
                  ariaLabel={social.ariaLabel}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Divider */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="h-[1px] /20" />
      </div>
      
      {/* Footer Bottom - Copyright & Legal Links */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Copyright */}
          <p className=" text-xs text-[#fffae9]/70">
            {copyrightText}
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <span key={index} className="flex items-center gap-6">
                <button
                  onClick={() => onNavigate(link.url)}
                  className=" text-xs text-[#fffae9]/70 hover:text-[#fffae9] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
                >
                  {link.label}
                </button>
                {index < legalLinks.length - 1 && (
                  <span className="text-[#fffae9]/40" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== SOCIAL ICON COMPONENT ====================
interface SocialIconProps {
  platform: string;
  url: string;
  ariaLabel: string;
}

function SocialIcon({ platform, url, ariaLabel }: SocialIconProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
      aria-label={ariaLabel}
    >
      {/* SVG Circle with Icon - Vector Shape, not border-radius */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-opacity duration-300"
      >
        {/* Circle Background */}
        <circle 
          cx="20" 
          cy="20" 
          r="20" 
          fill="#fffae9" 
          opacity="0.15"
          className="group-hover:opacity-25 transition-opacity duration-300"
        />
        
        {/* Social Icon */}
        {platform === 'facebook' && (
          <path
            d="M22.5 21L23.063 17.625H19.875V15.375C19.875 14.387 20.363 13.425 21.937 13.425H23.2V10.575C23.2 10.575 21.75 10.35 20.363 10.35C17.475 10.35 15.625 12.037 15.625 14.975V17.625H12.7V21H15.625V28.5H19.875V21H22.5Z"
            fill="#fffae9"
          />
        )}
        
        {platform === 'instagram' && (
          <g>
            <path
              d="M20 16.5C17.925 16.5 16.25 18.175 16.25 20.25C16.25 22.325 17.925 24 20 24C22.075 24 23.75 22.325 23.75 20.25C23.75 18.175 22.075 16.5 20 16.5ZM20 22.5C18.75 22.5 17.75 21.5 17.75 20.25C17.75 19 18.75 18 20 18C21.25 18 22.25 19 22.25 20.25C22.25 21.5 21.25 22.5 20 22.5Z"
              fill="#fffae9"
            />
            <path
              d="M23.875 17.375C24.4963 17.375 25 16.8713 25 16.25C25 15.6287 24.4963 15.125 23.875 15.125C23.2537 15.125 22.75 15.6287 22.75 16.25C22.75 16.8713 23.2537 17.375 23.875 17.375Z"
              fill="#fffae9"
            />
            <path
              d="M25.875 12.625C24.625 11.375 23 11 20 11C17 11 15.375 11.375 14.125 12.625C12.875 13.875 12.5 15.5 12.5 18.5V22C12.5 25 12.875 26.625 14.125 27.875C15.375 29.125 17 29.5 20 29.5C23 29.5 24.625 29.125 25.875 27.875C27.125 26.625 27.5 25 27.5 22V18.5C27.5 15.5 27.125 13.875 25.875 12.625ZM26 22C26 24.75 25.75 25.875 24.875 26.75C24 27.625 22.875 27.875 20 27.875C17.125 27.875 16 27.625 15.125 26.75C14.25 25.875 14 24.75 14 22V18.5C14 15.75 14.25 14.625 15.125 13.75C16 12.875 17.125 12.625 20 12.625C22.875 12.625 24 12.875 24.875 13.75C25.75 14.625 26 15.75 26 18.5V22Z"
              fill="#fffae9"
            />
          </g>
        )}
        
        {platform === 'twitter' && (
          <path
            d="M28.5 13.875C27.75 14.2 26.95 14.425 26.1 14.525C26.975 14 27.65 13.175 27.975 12.175C27.175 12.65 26.275 13 25.325 13.2C24.55 12.375 23.475 11.875 22.275 11.875C20 11.875 18.15 13.725 18.15 16C18.15 16.325 18.2 16.65 18.275 16.95C14.8 16.775 11.75 15.125 9.7 12.675C9.35 13.275 9.15 14 9.15 14.75C9.15 16.175 9.875 17.45 11 18.175C10.325 18.15 9.7 17.975 9.15 17.675V17.725C9.15 19.725 10.575 21.4 12.45 21.775C12.125 21.875 11.75 21.925 11.375 21.925C11.1 21.925 10.85 21.9 10.6 21.85C11.125 23.5 12.65 24.675 14.45 24.725C13.025 25.825 11.25 26.475 9.325 26.475C9 26.475 8.675 26.45 8.35 26.425C10.15 27.575 12.3 28.25 14.625 28.25C22.275 28.25 26.4 22 26.4 16.5V15.95C27.2 15.35 27.9 14.675 28.5 13.875Z"
            fill="#fffae9"
          />
        )}
        
        {platform === 'linkedin' && (
          <g>
            <path
              d="M15.375 17.5H12.25V27.5H15.375V17.5Z"
              fill="#fffae9"
            />
            <path
              d="M13.8125 12.5C12.8125 12.5 12 13.3125 12 14.3125C12 15.3125 12.8125 16.125 13.8125 16.125C14.8125 16.125 15.625 15.3125 15.625 14.3125C15.625 13.3125 14.8125 12.5 13.8125 12.5Z"
              fill="#fffae9"
            />
            <path
              d="M21.75 17.25C20.125 17.25 19.125 18.125 18.75 18.875V17.5H16V27.5H18.75V22.25C18.75 20.875 19.25 19.75 20.75 19.75C22.25 19.75 22.5 21.125 22.5 22.375V27.5H25.25V21.75C25.25 19.375 24.75 17.25 21.75 17.25Z"
              fill="#fffae9"
            />
          </g>
        )}
      </svg>
    </button>
  );
}
