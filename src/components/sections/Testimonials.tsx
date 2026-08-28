"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React, { useMemo } from "react";

const NAMES = [
  "Sai Kiran Reddy", "Harsha Vardhan", "Sree Charan", "Akhil Kumar", "Teja Reddy",
  "Praneeth Kumar", "Nikhil Reddy", "Vamshi Krishna", "Karthik Reddy", "Rohith Kumar",
  "Abhinav Reddy", "Naveen Kumar", "Sandeep Reddy", "Pavan Kalyan", "Chaitanya Reddy",
  "Srikanth", "Yaswanth", "Bharath Kumar", "Manoj Reddy", "Vinay Kumar"
];

const PROFESSIONS = [
  "Software Engineer", "AI Engineer", "Startup Founder", "Product Manager", 
  "Entrepreneur", "UI/UX Designer", "Data Scientist", "Full Stack Developer", 
  "Digital Marketer", "Student", "Business Owner", "Content Creator"
];

const TESTIMONIALS = [
  "The insights shared in every episode are practical and inspiring. Highly recommended!",
  "One of the best business podcasts I've listened to. Amazing guests and conversations.",
  "Every episode gives actionable advice that I can apply immediately.",
  "Fantastic production quality and meaningful discussions.",
  "Talk With HG has become my go-to podcast for startup and technology insights.",
  "Absolutely brilliant! The level of depth in these conversations is unmatched.",
  "I've learned more here than from most premium courses. Exceptional value.",
  "A must-listen for any aspiring entrepreneur. Pure gold in every episode.",
  "The host asks exactly the right questions. Truly an eye-opening experience.",
  "So much wisdom packed into these episodes. It's my weekly dose of motivation."
];

// Generate 20 deterministic testimonials to prevent hydration errors
const generateTestimonials = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    const name = NAMES[i]; 
    const profession = PROFESSIONS[i % PROFESSIONS.length];
    const text = TESTIMONIALS[i % TESTIMONIALS.length];
    const initials = name.split(" ").map(n => n[0]).join("");
    // Deterministic width between 320px and 400px
    const width = 320 + ((i * 37) % 80);
    
    return { id: i, name, profession, text, initials, width };
  });
};

const TestimonialCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass glass-hover shrink-0 rounded-[20px] p-6 flex flex-col gap-4 relative overflow-hidden group cursor-pointer transition-all duration-300"
      style={{ width: item.width }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />
      
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">"{item.text}"</p>
      
      <div className="flex items-center gap-4 mt-2">
        <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-background font-bold text-sm shrink-0">
          {item.initials}
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
          <p className="text-xs text-muted">{item.profession}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const allCards = useMemo(() => generateTestimonials(), []);
  
  // Split into two rows
  const row1 = allCards.slice(0, 10);
  const row2 = allCards.slice(10, 20);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0B0B]" id="testimonials">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Loved by <span className="text-gradient">Thousands</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Join the community of innovators, builders, and creators who tune in every week.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left */}
        <div className="group flex overflow-hidden w-full pause-on-hover">
          <div className="flex gap-6 shrink-0 pr-6 w-max animate-marquee-left">
            {[...row1, ...row1].map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="group flex overflow-hidden w-full pause-on-hover">
          <div className="flex gap-6 shrink-0 pr-6 w-max animate-marquee-right">
            {[...row2, ...row2].map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
