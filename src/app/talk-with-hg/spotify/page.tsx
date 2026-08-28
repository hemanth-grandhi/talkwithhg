import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Talk With HG — Spotify',
  description: 'Listen to Talk With HG episodes on Spotify.',
  openGraph: {
    title: 'Talk With HG — Spotify',
    description: 'Listen to Talk With HG episodes on Spotify.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg/spotify`,
    type: 'website',
    siteName: 'Talk With HG',
  },
};

export default function SpotifyPage() {
  return (
    <section className="py-20 container mx-auto px-6 lg:px-12 text-center">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Spotify</h1>
      <p className="mb-6 text-muted max-w-2xl mx-auto">
        Subscribe and listen to all Talk With HG episodes on Spotify.
      </p>
      <Link
        href="https://open.spotify.com/episode/23Gq52A4HNzjMPwReo4OvX?si=d077493da8064a32"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-primary text-black rounded hover:bg-primary/80 transition"
      >
        Listen on Spotify
      </Link>
    </section>
  );
}
