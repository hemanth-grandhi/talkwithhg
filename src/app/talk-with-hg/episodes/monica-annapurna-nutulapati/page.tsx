import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Talk With HG — Monica Annapurna Nutulapati',
  description: 'A conversation with Monica Annapurna Nutulapati from Microsoft about career journeys and tech insights.',
  openGraph: {
    title: 'Talk With HG — Monica Annapurna Nutulapati',
    description: 'A conversation with Monica Annapurna Nutulapati from Microsoft about career journeys and tech insights.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app'}/talk-with-hg/episodes/monica-annapurna-nutulapati`,
    type: 'article',
    siteName: 'Talk With HG',
  },
};

export default function MonicaEpisodePage() {
  return (
    <section className="py-20 container mx-auto px-6 lg:px-12">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
        Monica Annapurna Nutulapati
      </h1>
      <div className="border border-border rounded-xl p-6 bg-black/30 max-w-3xl mx-auto">
        <p className="mb-4 text-muted">
          A conversation with Monica Annapurna Nutulapati from Microsoft about career journeys and tech insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
}
