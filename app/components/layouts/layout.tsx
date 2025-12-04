import { Outlet, useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import StickyHeader from './StickyHeader';
import Footer from './Footer';
import { FullScreenMenu } from '@/components/layouts/FullScreenMenu';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/');

  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handlers
  const handleMenuClick = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <FullScreenMenu 
        isOpen={menuOpen}
        onClose={handleMenuClose}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <StickyHeader
        scrolled={scrolled}
        onMenuClick={handleMenuClick}
        onMenuClose={handleMenuClose}
        menuOpen={menuOpen}
      />
      
      <main>
        <Outlet />
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </>
  );
}