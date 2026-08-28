import type { Metadata } from 'next';
import About from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'About Talk With HG — Founded by Hemanth Grandhi',
  description: 'Learn about Talk With HG, its founder Hemanth Grandhi, and the mission of the podcast.',
  openGraph: {
    title: 'About Talk With HG — Founded by Hemanth Grandhi',
    description: 'Learn about Talk With HG, its founder Hemanth Grandhi, and the mission of the podcast.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg/about`,
    type: 'website',
    siteName: 'Talk With HG',
  },
};

export default function AboutPage() {
  return <About />;
}
