import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Talk With HG',
    short_name: 'Talk With HG',
    description: 'India\'s Next Generation Podcast featuring entrepreneurs, founders, innovators, and leaders sharing their real journeys and valuable life lessons.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0B',
    theme_color: '#0B0B0B',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
