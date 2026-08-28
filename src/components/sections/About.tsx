"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#050505]">
      
      <div className="container mx-auto px-6 lg:px-12 max-w-[1000px]">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center items-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Behind the <span className="text-[#d4af37]">Mic</span>
          </h2>
          <h3 className="text-xl text-[#d4af37] font-medium mb-12 font-display">
            Meet Hemanth Grandhi
          </h3>
          
          <div className="space-y-8 text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                Hemanth Grandhi is an entrepreneur, founder, and creator based in India, with interests spanning technology, entrepreneurship, education, digital products, and media. He is the Founder and Host of Talk With HG, a podcast and interview platform created to bring conversations with professionals, entrepreneurs, technology leaders, creators, and accomplished individuals to a wider audience.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                Through his work, Hemanth is interested in understanding how people build their careers, businesses, ideas, and experiences. Talk With HG grew from this curiosity into a platform where guests can share the knowledge they have gained through their own journeys.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                Hemanth initiated Talk With HG with a conversation featuring Monica Annapurna Nutulapati, a professional at Microsoft. That conversation became the starting point for his effort to bring more guests from different professional and personal backgrounds to the platform.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                As the host, Hemanth focuses on conversations that go beyond job titles and professional achievements. His interviews explore the experiences behind a person's journey — including career decisions, challenges, opportunities, technology, entrepreneurship, education, personal growth, and lessons learned along the way.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                Hemanth is also the Founder of Versuzo, a technology company focused on building software and digital products. His experience working across technology, entrepreneurship, and content creation influences the conversations he brings to Talk With HG.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                At the heart of Talk With HG is a simple idea: every person has something valuable to share. A professional experience can help a student make a better decision, a founder's journey can inspire another entrepreneur, and a lesson learned through failure can help someone else avoid the same mistake.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                Hemanth's goal with Talk With HG is therefore not simply to conduct interviews, but to create conversations through which people can learn from one another.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                From technology and careers to entrepreneurship, education, business, and personal development, Talk With HG continues to explore the stories, ideas, and experiences of people from different fields.
              </p>
              <p className="text-[#a0a0a0] text-[1.1rem] md:text-[1.25rem] font-light leading-[1.8] max-w-4xl text-left md:text-center mx-auto">
                Talk With HG is founded and hosted by Hemanth Grandhi — built around conversations, experiences, and the belief that everyone has something worth sharing.
              </p>
          </div>
          
          {/* Subtle Accent Line */}
          <div className="w-[100px] h-[2px] bg-[#d4af37]/50 mt-16 mb-12 mx-auto" />

          {/* Follow Us Section */}
          <div className="flex flex-col items-center">
            <h4 className="font-display text-2xl font-semibold mb-6 text-white tracking-wide">Follow Us</h4>
            <div className="flex items-center gap-8">
              <a 
                href="https://www.youtube.com/@GbrtvEducationTelugu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/talk_with_hg?igsh=MWtna2piMWNxNjJnZg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/talk-with-hg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
