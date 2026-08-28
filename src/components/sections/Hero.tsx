"use client";

import { motion } from 'framer-motion';
import { Play, Mic } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] flex items-center pt-24 pb-12 overflow-hidden bg-[#050505]">
      
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center max-w-[1400px]">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col z-10"
        >
          {/* Titles */}
          <h1 className="font-display font-[800] text-[clamp(3.5rem,5vw,5.5rem)] leading-[1.1] mb-2 text-white tracking-tight">
            Real <br /> Conversations.
          </h1>
          <h2 className="font-display font-[600] text-[clamp(2.5rem,3.5vw,4rem)] leading-[1.1] mb-8 text-[#d4af37]">
            Inspiring Minds.
          </h2>

          {/* Paragraph */}
          <p className="text-[1.1rem] text-[#a0a0a0] max-w-[85%] mb-10 font-[300] leading-relaxed">
            India's Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <Link 
              href="/talk-with-hg/episodes"
              className="px-8 py-[1rem] rounded-lg bg-[#d4af37] text-black font-[600] flex items-center gap-3 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Play fill="currentColor" size={16} />
              Watch Episodes
            </Link>
            <Link 
              href="https://www.youtube.com/@TalkWithHG"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-[1rem] rounded-lg bg-transparent border border-white/10 text-white font-[600] flex items-center gap-3 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              <Play size={16} />
              Watch on YouTube
            </Link>
            <Link 
              href="https://open.spotify.com/episode/23Gq52A4HNzjMPwReo4OvX?si=d077493da8064a32"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-[1rem] rounded-lg bg-transparent border border-white/10 text-white font-[600] flex items-center gap-3 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Listen on Spotify
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col gap-2">
            <p className="text-[0.8rem] text-[#666] uppercase tracking-[1px] font-[600]">
              Available on all major platforms
            </p>
          </div>
        </motion.div>

        {/* Right Content - Minimal Text Block */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center items-end text-right w-full h-full lg:pr-[10%]"
        >
          <div className="flex flex-col items-end">
            <h3 className="font-display font-[700] text-[3rem] lg:text-[4rem] text-white tracking-tight leading-tight">
              Hemanth Grandhi
            </h3>
            <div className="w-[80px] h-[3px] bg-[#d4af37] my-6" />
            <span className="text-[1.1rem] text-[#a0a0a0] uppercase tracking-[3px] font-[600]">
              Founder & Host
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
