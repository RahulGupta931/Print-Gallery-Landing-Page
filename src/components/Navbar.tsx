import { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Box, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
}

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <img
              src="/logo.png"
              alt="Print Gallery Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg border border-slate-200 p-0.5 bg-slate-50 object-cover shadow-sm group-hover:border-amber-500 transition-colors flex-shrink-0"
            />

            <div className="min-w-0">
              <span className="block text-base sm:text-xl font-black text-black tracking-tight leading-none">
                PRINT<span className="text-amber-500">GALLERY</span>
              </span>
              <p className="mt-0.5 text-[9px] sm:text-[11px] text-black font-mono truncate">
                Precision Cardboard Boxes & Printing
              </p>
            </div>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+919810466405"
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-amber-600 px-3 py-2 rounded-lg hover:bg-slate-50 border border-slate-200 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>+91 9810466405</span>
            </a>

            <a
              href="https://wa.me/919810466405"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              {/* <Box className="w-4 h-4 text-slate-950" /> */}
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2 ml-auto">
            <a
              href="#contact"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-bold text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg shadow-sm"
            >
              {/* <Box className="w-3.5 h-3.5" /> */}
              <span>Quote</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-amber-600 py-2.5 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="tel:+919810466405"
                className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 py-2.5 rounded-lg"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call +91 9810466405</span>
              </a>

              <a
                href="https://wa.me/919810466405"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 py-2.5 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-bold text-slate-950 bg-amber-500 py-2.5 rounded-lg shadow-sm"
              >
                <span>Contact Factory Sales</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}