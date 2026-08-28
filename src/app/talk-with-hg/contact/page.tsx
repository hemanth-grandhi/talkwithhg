import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Talk With HG — Contact',
  description: 'Get in touch with Talk With HG for collaborations, guest appearances, or any inquiries.',
  openGraph: {
    title: 'Talk With HG — Contact',
    description: 'Get in touch with Talk With HG for collaborations, guest appearances, or any inquiries.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg/contact`,
    type: 'website',
    siteName: 'Talk With HG',
  },
};

export default function ContactPage() {
  return <Contact />;
}
