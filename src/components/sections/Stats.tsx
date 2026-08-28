"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: "Episodes", value: 100, suffix: "+" },
  { label: "Listeners", value: 500, suffix: "k+" },
  { label: "Rating", value: 4.9, suffix: "/5" }
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-border bg-black/50 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="font-display font-extrabold text-5xl md:text-6xl text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
