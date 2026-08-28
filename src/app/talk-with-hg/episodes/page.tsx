import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Talk With HG — Episodes',
  description: 'Explore all episodes of Talk With HG podcast, featuring conversations with entrepreneurs and tech leaders.',
  openGraph: {
    title: 'Talk With HG — Episodes',
    description: 'Explore all episodes of Talk With HG podcast.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg/episodes`,
    type: 'website',
    siteName: 'Talk With HG',
  },
};

export default function EpisodesPage() {
  return (
    <section className="py-20 container mx-auto px-6 lg:px-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">Episodes</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-border rounded-xl p-6 bg-black/30">
          <h2 className="font-semibold text-2xl mb-4">Monica Annapurna Nutulapati</h2>
          <p className="mb-4 text-muted">
            A conversation with Monica Annapurna Nutulapati from Microsoft about career journeys and tech insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://www.youtube.com/@TalkWithHG"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-black rounded hover:bg-primary/80 transition"
            >
              Watch on YouTube
            </Link>
            <Link
              href="https://open.spotify.com/episode/23Gq52A4HNzjMPwReo4OvX?si=d077493da8064a32"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-black rounded hover:bg-primary/80 transition"
            >
              Listen on Spotify
            </Link>
            <Link
              href="/talk-with-hg/episodes/monica-annapurna-nutulapati"
              className="px-4 py-2 bg-primary/20 text-primary border border-primary rounded hover:bg-primary/10 transition"
            >
              Episode Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
