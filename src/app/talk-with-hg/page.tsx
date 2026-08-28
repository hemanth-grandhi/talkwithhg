import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Talk With HG — Home',
  description: 'Explore insightful conversations hosted by Hemanth Grandhi.',
  openGraph: {
    title: 'Talk With HG — Home',
    description: 'Explore insightful conversations hosted by Hemanth Grandhi.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg`,
    type: 'website',
    siteName: 'Talk With HG',
  },
};

export default function TalkWithHGHome() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
