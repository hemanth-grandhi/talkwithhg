import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Talk With HG — YouTube',
  description: 'Subscribe to the Talk With HG YouTube channel for video episodes and behind‑the‑scenes content.',
  openGraph: {
    title: 'Talk With HG — YouTube',
    description: 'Subscribe to the Talk With HG YouTube channel for video episodes and behind‑the‑scenes content.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg/youtube`,
    type: 'website',
    siteName: 'Talk With HG',
  },
};

export default function YouTubePage() {
  return (
    <section className="py-20 container mx-auto px-6 lg:px-12 text-center">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">YouTube</h1>
      <p className="mb-6 text-muted max-w-2xl mx-auto">
        Watch all Talk With HG episodes on YouTube, get video highlights, and stay up‑to‑date with new content.
      </p>
      <Link
        href="https://www.youtube.com/@TalkWithHG"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-primary text-black rounded hover:bg-primary/80 transition"
      >
        Subscribe on YouTube
      </Link>
    </section>
  );
}
