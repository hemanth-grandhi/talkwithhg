"use client";

import Link from 'next/link';

export default function Footer() {
  const socials = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/talk-with-hg/' },
    { name: 'Instagram', href: 'https://www.instagram.com/talk_with_hg?igsh=MWtna2piMWNxNjJnZg==' },
    { name: 'YouTube', href: 'https://www.youtube.com/@TalkWithHG' }
  ];

  return (
    <footer className="bg-[#020202] border-t border-border pt-24 pb-12 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-wide">
                Talk With <span className="text-primary">HG</span>
              </span>
            </Link>
            <p className="text-muted text-sm mb-6 max-w-xs">
              Real conversations. Inspiring minds. Join us on the journey of discovery and growth.
            </p>
            <div className="flex items-center gap-4 mb-8">
              {socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-4 py-2 rounded-full glass hover:bg-primary hover:text-black transition-all">
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="glass p-8 rounded-3xl border-primary/20 bg-primary/5">
              <h4 className="font-display font-semibold text-xl mb-2 text-primary">Never Miss an Episode</h4>
              <p className="text-muted text-sm mb-6">Get notified about new episodes, exclusive insights, and behind-the-scenes content.</p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-black/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white"
                />
                <button 
                  type="submit"
                  className="bg-gradient-gold text-black font-semibold px-6 py-3 rounded-xl whitespace-nowrap hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Talk With HG. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300">Privacy Policy</Link>
            <span className="opacity-30">•</span>
            <Link href="/terms-of-service" className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
