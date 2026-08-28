import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

// Reuse same JSON-LD as root layout for PodcastSeries
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'PodcastSeries',
      '@id': `${siteUrl}/#podcast`,
      name: 'Talk With HG',
      url: siteUrl,
      description: "India's Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.",
      author: {
        '@type': 'Person',
        name: 'Hemanth Grandhi'
      }
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Talk With HG',
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      sameAs: [
        'https://www.linkedin.com/company/talk-with-hg/',
        'https://www.instagram.com/talk_with_hg',
        'https://www.youtube.com/@TalkWithHG'
      ]
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Hemanth Grandhi',
      jobTitle: 'Founder & Host',
      worksFor: { '@id': `${siteUrl}/#organization` }
    }
  ]
};

export default function TalkWithHGLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="sBB3tfuydOSKB7guG0UbRhZQh0B3lM7g0OyB1rC5-jg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
