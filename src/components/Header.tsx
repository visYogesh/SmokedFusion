import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Clock, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-900 text-white ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Info */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <img
                  src="public/images/logo.png"
                  alt="CarNation Elite Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                
                <h1 className="text-2xl font-bold">CarNation Elite</h1>
                <a href="https://maps.app.goo.gl/1HGyPV5X8BBshuXCA" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:underline">

                <p className="text-xs text-white">13610, FLOYD CIRCLE, DALLAS,TX 75243</p>
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#sales-rentals"
                className="hover:text-blue-400 transition-colors"
              >
                Sales & Rentals
              </a>
              <a
                href="#testimonials"
                className="hover:text-blue-400 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <a
                href="#blogs"
                className="hover:text-blue-400 transition-colors"
              >
                Blogs
              </a>
            </nav>

            {/* Desktop Contact Info */}
            <div className="hidden sm:flex items-center gap-8 p-4 bg-slate-800 border border-slate-700 rounded-lg shadow-sm">
              {/* WhatsApp */}
              <a
                href="https://wa.me/12145974922"
                target="_blank"
                title="Contact us on WhatsApp"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={20} />
                <span className="font-medium text-cyan-200">
                  Contact
                </span>
              </a>

              {/* Hours */}
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-cyan-500" />
                <span className="font-medium text-cyan-200">
                  Mon–Sat | 9:00 – 5:00
                </span>
              </div>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/1HGyPV5X8BBshuXCA"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit us on Google Maps"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <MapPin size={20} className="text-cyan-500" />
                <span className="font-medium text-cyan-200">
                  Maps
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div ref={menuRef}>
            <nav className="md:hidden bg-slate-800 px-4 py-4 space-y-4">
              <a href="#home" className="block text-white hover:text-blue-400">
                Home
              </a>
              <a href="#about" className="block text-white hover:text-blue-400">
                About
              </a>
              <a
                href="#services"
                className="block text-white hover:text-blue-400"
              >
                Services
              </a>
              <a
                href="#sales-rentals"
                className="block text-white hover:text-blue-400"
              >
                Sales & Rentals
              </a>
              <a
                href="#testimonials"
                className="block text-white hover:text-blue-400"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-blue-400"
              >
                Contact
              </a>
              <a href="#blogs" className="block text-white hover:text-blue-400">
                Blogs
              </a>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700 text-sm space-y-1">
                <a
                  href="https://wa.me/12145974922"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us on WhatsApp"
                  className="text-cyan-600 font-semibold hover:underline block"
                >
                  +1 (214) 597-4922 (Chat with us on WhatsApp{" "}
                  <FaWhatsapp className="inline text-green-500" />)
                </a>
                <p className="text-cyan-600 font-semibold">
                  MON-SAT | 9.00 - 5.00
                </p>

                <a
                  href="https://maps.app.goo.gl/1HGyPV5X8BBshuXCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold hover:underline block"
                >
                  13610, FLOYD CIRCLE, DALLAS, TX 75243
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="pt-[84px]" />
    </>
  );
};

export default Header;
