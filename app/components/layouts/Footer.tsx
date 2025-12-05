import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';
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
    { label: 'Primary School', url: '/primary-school' },
    { label: 'Middle School', url: '/secondary-school' },
    { label: 'High School', url: '/high-school' }
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
    <footer className="footer text-[#fffae9] relative z-50">
      {/* Action Buttons Row - Above Footer Content */}
      <div className="max-w-[800px] mx-auto px-4 md:px-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Inquire Button */}
          <button
            onClick={() => onNavigate('/contact/inquire')}
            className="rounded-none! flex flex-col items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              background: 'linear-gradient(180deg, #1D5036 0%, #1C613E 100%)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="mb-4">
              <mask id="mask0_2290_4770" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <rect width="36" height="36" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_2290_4770)">
                <path d="M18.2335 26.4229C18.6618 26.4229 19.0235 26.2751 19.3188 25.9796C19.614 25.6839 19.7616 25.3218 19.7616 24.8932C19.7616 24.465 19.6138 24.1033 19.318 23.808C19.0223 23.513 18.6602 23.3655 18.232 23.3655C17.8038 23.3655 17.442 23.5134 17.1467 23.8091C16.8515 24.1049 16.7039 24.4669 16.7039 24.8951C16.7039 25.3234 16.8518 25.6851 17.1475 25.9804C17.4433 26.2754 17.8053 26.4229 18.2335 26.4229ZM17.1711 21.0518H19.2828C19.302 20.3135 19.4101 19.7236 19.6071 19.2821C19.8044 18.8409 20.2828 18.2559 21.0423 17.5271C21.702 16.8674 22.2073 16.2581 22.558 15.6994C22.909 15.1409 23.0845 14.4813 23.0845 13.7205C23.0845 12.4293 22.6206 11.4206 21.6929 10.6946C20.7649 9.96888 19.6673 9.606 18.4 9.606C17.148 9.606 16.112 9.94013 15.292 10.6084C14.4718 11.2766 13.8866 12.0636 13.5366 12.9694L15.4634 13.7423C15.6461 13.2443 15.9586 12.7591 16.4009 12.2869C16.8431 11.8149 17.4999 11.5789 18.3711 11.5789C19.2576 11.5789 19.9129 11.8216 20.3369 12.3071C20.7611 12.7929 20.9733 13.327 20.9733 13.9095C20.9733 14.4192 20.828 14.8856 20.5375 15.3086C20.2473 15.7316 19.8771 16.1402 19.4271 16.5345C18.4424 17.423 17.8202 18.1318 17.5607 18.6608C17.301 19.1895 17.1711 19.9865 17.1711 21.0518ZM18.2526 32.25C16.2816 32.25 14.429 31.876 12.6947 31.128C10.9605 30.38 9.452 29.3649 8.16925 28.0826C6.8865 26.8004 5.87087 25.2925 5.12237 23.559C4.37412 21.8255 4 19.9734 4 18.0026C4 16.0316 4.374 14.179 5.122 12.4447C5.87 10.7105 6.88513 9.202 8.16738 7.91925C9.44963 6.6365 10.9575 5.62087 12.691 4.87237C14.4245 4.12412 16.2766 3.75 18.2474 3.75C20.2184 3.75 22.071 4.124 23.8053 4.872C25.5395 5.62 27.048 6.63513 28.3308 7.91738C29.6135 9.19963 30.6291 10.7075 31.3776 12.441C32.1259 14.1745 32.5 16.0266 32.5 17.9974C32.5 19.9684 32.126 21.821 31.378 23.5553C30.63 25.2895 29.6149 26.798 28.3326 28.0808C27.0504 29.3635 25.5425 30.3791 23.809 31.1276C22.0755 31.8759 20.2234 32.25 18.2526 32.25ZM18.25 30C21.6 30 24.4375 28.8375 26.7625 26.5125C29.0875 24.1875 30.25 21.35 30.25 18C30.25 14.65 29.0875 11.8125 26.7625 9.4875C24.4375 7.1625 21.6 6 18.25 6C14.9 6 12.0625 7.1625 9.7375 9.4875C7.4125 11.8125 6.25 14.65 6.25 18C6.25 21.35 7.4125 24.1875 9.7375 26.5125C12.0625 28.8375 14.9 30 18.25 30Z" fill="white"/>
              </g>
            </svg>
            <span className="text-white font-semibold text-lg">Inquire</span>
          </button>

          {/* Apply Button */}
          <button
            onClick={() => onNavigate('/admissions/apply')}
            className="rounded-none! flex flex-col items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              background: 'linear-gradient(180deg, #1D5036 0%, #1C613E 100%)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="mb-4">
              <mask id="mask0_2290_4775" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <rect width="36" height="36" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_2290_4775)">
                <path d="M7.5 28.5V7.5V13.9961V13.2116V28.5ZM10.875 19.125H18.7875C18.828 18.7192 18.917 18.3289 19.0545 17.9539C19.1918 17.5789 19.3624 17.2192 19.5664 16.875H10.875V19.125ZM10.875 25.125H16.4306C16.7691 24.7402 17.1461 24.4158 17.5616 24.1515C17.9769 23.887 18.4124 23.6692 18.8681 23.4982C18.8066 23.4058 18.7528 23.3057 18.7065 23.1982C18.6605 23.0905 18.6221 22.9827 18.5914 22.875H10.875V25.125ZM10.875 13.125H25.125V10.875H10.875V13.125ZM7.96163 30.75C7.20388 30.75 6.5625 30.4875 6.0375 29.9625C5.5125 29.4375 5.25 28.7961 5.25 28.0384V7.96163C5.25 7.20387 5.5125 6.5625 6.0375 6.0375C6.5625 5.5125 7.20388 5.25 7.96163 5.25H28.0384C28.7961 5.25 29.4375 5.5125 29.9625 6.0375C30.4875 6.5625 30.75 7.20387 30.75 7.96163V16.1077C30.4673 15.65 30.1408 15.2456 29.7705 14.8946C29.4005 14.5436 28.977 14.2441 28.5 13.9961V7.96163C28.5 7.84612 28.4519 7.74037 28.3556 7.64437C28.2596 7.54812 28.1539 7.5 28.0384 7.5H7.96163C7.84613 7.5 7.74038 7.54812 7.64438 7.64437C7.54813 7.74037 7.5 7.84612 7.5 7.96163V28.0384C7.5 28.1539 7.54813 28.2596 7.64438 28.3556C7.74038 28.4519 7.84613 28.5 7.96163 28.5H15.0461C15.0309 28.5923 15.0194 28.6845 15.0116 28.7768C15.0039 28.8693 15 28.9616 15 29.0539V30.75H7.96163ZM25.4134 23.25C24.4789 23.25 23.6828 22.9211 23.025 22.2634C22.3673 21.6056 22.0384 20.8095 22.0384 19.875C22.0384 18.9403 22.3673 18.1441 23.025 17.4866C23.6828 16.8289 24.4789 16.5 25.4134 16.5C26.3481 16.5 27.1443 16.8289 27.8018 17.4866C28.4595 18.1441 28.7884 18.9403 28.7884 19.875C28.7884 20.8095 28.4595 21.6056 27.8018 22.2634C27.1443 22.9211 26.3481 23.25 25.4134 23.25ZM18.2884 30.75V29.025C18.2884 28.4923 18.4254 28.0033 18.6994 27.558C18.9736 27.113 19.3598 26.7924 19.8578 26.5961C20.7288 26.2309 21.6311 25.9569 22.5649 25.7741C23.4986 25.5914 24.4481 25.5 25.4134 25.5C26.3596 25.5 27.2995 25.5914 28.233 25.7741C29.1668 25.9569 30.0789 26.2309 30.9694 26.5961C31.4674 26.7924 31.8534 27.113 32.1274 27.558C32.4014 28.0033 32.5384 28.4923 32.5384 29.025V30.75H18.2884Z" fill="white"/>
              </g>
            </svg>
            <span className="text-white font-semibold text-lg">Apply</span>
          </button>

          {/* Visit Button */}
          <button
            onClick={() => onNavigate('/visit')}
            className="rounded-none! flex flex-col items-center justify-center py-4 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              background: 'linear-gradient(180deg, #1D5036 0%, #1C613E 100%)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className="mb-4">
              <mask id="mask0_2290_4780" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <rect width="36" height="36" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_2290_4780)">
                <path d="M18.0024 17.7979C18.7486 17.7979 19.3866 17.5321 19.9164 17.0006C20.4464 16.4691 20.7114 15.8302 20.7114 15.084C20.7114 14.3377 20.4456 13.6996 19.9141 13.1696C19.3826 12.6399 18.7436 12.375 17.9971 12.375C17.2509 12.375 16.6129 12.6408 16.0831 13.1723C15.5531 13.7038 15.2881 14.3428 15.2881 15.0893C15.2881 15.8355 15.5539 16.4735 16.0854 17.0033C16.6169 17.533 17.2559 17.7979 18.0024 17.7979ZM17.9997 29.2703C20.9342 26.6432 23.1799 24.1235 24.7366 21.711C26.2934 19.2985 27.0717 17.1855 27.0717 15.372C27.0717 12.6375 26.203 10.3895 24.4655 8.628C22.728 6.8665 20.5727 5.98575 17.9997 5.98575C15.4267 5.98575 13.2715 6.8665 11.534 8.628C9.79648 10.3895 8.92773 12.6375 8.92773 15.372C8.92773 17.1855 9.70611 19.2985 11.2629 21.711C12.8196 24.1235 15.0652 26.6432 17.9997 29.2703ZM17.9997 32.2643C14.2247 28.9932 11.394 25.9491 9.50748 23.1319C7.62098 20.3144 6.67773 17.7277 6.67773 15.372C6.67773 11.9105 7.79736 9.10812 10.0366 6.96487C12.2761 4.82162 14.9305 3.75 17.9997 3.75C21.069 3.75 23.7234 4.82162 25.9629 6.96487C28.2021 9.10812 29.3217 11.9105 29.3217 15.372C29.3217 17.7277 28.3785 20.3144 26.492 23.1319C24.6055 25.9491 21.7747 28.9932 17.9997 32.2643Z" fill="white"/>
              </g>
            </svg>
            <span className="text-white font-semibold text-lg">Visit</span>
          </button>
        </div>
      </div>

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
            {/* <p className=" text-sm text-[#fffae9]/90 mb-6 leading-relaxed">
              {footerTagline}
            </p> */}
            
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
