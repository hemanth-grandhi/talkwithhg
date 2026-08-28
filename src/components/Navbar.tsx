"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/talk-with-hg' },
    { name: 'About', href: '/talk-with-hg/about' },
    { name: 'Episodes', href: '/talk-with-hg/episodes' },
    { name: 'Spotify', href: '/talk-with-hg/spotify' },
    { name: 'YouTube', href: '/talk-with-hg/youtube' },
    { name: 'Contact', href: '/talk-with-hg/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/talk-with-hg" className="flex items-center gap-2">
          <span className="font-display font-bold text-[1.5rem] tracking-wide text-white">
            Talk With <span className="text-[#d4af37]">HG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[0.9rem] font-medium text-white hover:text-[#d4af37] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Subscribe Button */}
        <div className="hidden md:block">
          <Link 
            href="https://www.youtube.com/@TalkWithHG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-white/20 text-[0.85rem] font-semibold text-white hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10 absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 text-white hover:text-[#d4af37]"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.youtube.com/@TalkWithHG"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-full border border-white/20 text-white font-semibold inline-block mx-auto"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
