import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

// Use an environment variable for the site URL, fallback to Vercel for production
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://talk-with-hg.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Talk With HG – India\'s Business & Technology Podcast',
    template: '%s | Talk With HG'
  },
  description: 'India\'s Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.',
  keywords: [
    'Talk With HG',
    'Talk With HG Podcast',
    'Business Podcast India',
    'Technology Podcast India',
    'Startup Podcast India',
    'Entrepreneurship Podcast',
    'AI Podcast India',
    'Founder Stories',
    'Business Leaders Podcast',
    'Hemanth Grandhi'
  ],
  authors: [{ name: 'Hemanth Grandhi' }],
  creator: 'Hemanth Grandhi',
  publisher: 'Talk With HG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Talk With HG – India\'s Business & Technology Podcast',
    description: 'India\'s Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.',
    url: siteUrl,
    siteName: 'Talk With HG',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talk With HG – India\'s Business & Technology Podcast',
    description: 'India\'s Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.',
    creator: '@talkwithhg', // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

// Generate JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'PodcastSeries',
      '@id': `${siteUrl}/#podcast`,
      name: 'Talk With HG',
      url: siteUrl,
      description: 'India\'s Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.',
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
        'https://www.youtube.com/@TalkWithHG',
        'https://twitter.com/placeholder' // Placeholder
      ]
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Hemanth Grandhi',
      jobTitle: 'Founder & Host',
      worksFor: {
        '@id': `${siteUrl}/#organization`
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} ${outfit.variable} bg-background text-foreground min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
