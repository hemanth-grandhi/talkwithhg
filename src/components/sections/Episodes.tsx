"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

const episodes = [
  {
    id: 1,
    title: "Building the Future of Indian Fintech",
    guest: "Rajan Anandan",
    company: "Peak XV",
    duration: "1:15:20",
    image: "/host_portrait.png" // Placeholder
  },
  {
    id: 2,
    title: "From 0 to $100M ARR: The SaaS Playbook",
    guest: "Girish Mathrubootham",
    company: "Freshworks",
    duration: "58:40",
    image: "/host_portrait.png" // Placeholder
  },
  {
    id: 3,
    title: "Navigating the AI Revolution",
    guest: "Nandan Nilekani",
    company: "Infosys",
    duration: "1:05:10",
    image: "/host_portrait.png" // Placeholder
  }
];

export default function Episodes() {
  return (
    <section id="episodes" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Episodes</span>
            </h2>
            <p className="text-muted text-lg">
              Dive into our most insightful conversations with industry titans and disruptors.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0 text-primary font-semibold hover:text-white transition-colors flex items-center gap-2"
          >
            View All Episodes &rarr;
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((ep, idx) => (
            <motion.div 
              key={ep.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 w-full bg-zinc-900 overflow-hidden">
                 {/* Placeholder for Guest Image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-primary/90 text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                 </div>
                 <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {ep.duration}
                 </div>
                 <div className="absolute top-4 left-4 z-20 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold">
                    EP {ep.id}
                 </div>
                 {/* Remove image for now or use host portrait as placeholder */}
                 <Image src={ep.image} alt={ep.guest} fill className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              
              <div className="p-8">
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {ep.title}
                </h3>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative border border-border">
                    <Image src={ep.image} alt={ep.guest} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{ep.guest}</p>
                    <p className="text-xs text-muted">{ep.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
