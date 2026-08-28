"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Mic2, Handshake, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass rounded-[24px] p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 relative z-10">
              
              {/* Left Side - Info */}
              <div className="lg:col-span-5 flex flex-col">
                <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Contact Us <span className="inline-block hover:rotate-12 transition-transform origin-bottom-right cursor-default">🤝</span>
                  </h2>
                  <p className="text-xl text-primary font-medium mb-6">
                    Let's Start the Conversation.
                  </p>
                  <p className="text-muted leading-relaxed mb-10">
                    Whether you're interested in being a guest, collaborating, sponsoring an episode, or simply want to connect, we'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <Mail className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                                              <p className="text-sm text-muted">Email</p>
                      <p className="text-white font-medium"><a href="mailto:grandhihemanthkumar19@gmail.com" className="text-white hover:underline">grandhihemanthkumar19@gmail.com</a></p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <MapPin className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Location</p>
                        <p className="text-white font-medium">Hyderabad, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <Mic2 className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Partnership</p>
                        <p className="text-white font-medium">Podcast Collaborations</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <Handshake className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Business</p>
                        <p className="text-white font-medium">Brand Partnerships</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <Mail className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Email</p>
                        <p className="text-white font-medium"><a href="mailto:grandhihemanthkumar19@gmail.com" className="text-white hover:underline">grandhihemanthkumar19@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
