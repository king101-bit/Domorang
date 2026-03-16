import type { Metadata } from 'next';
import { DM_Sans, Inter, Montserrat, Figtree } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat-google',
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter-google',
  subsets: ['latin'],
  display: 'swap',
});

const figTree = Figtree({
  variable: '--font-figtree-google',
  subsets: ['latin'],
  display: 'swap',
});

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: '../public/fonts/Satoshi-Bold.woff2', weight: '700' },
    { path: '../public/fonts/Satoshi-Black.woff2', weight: '900' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Domorang - Verified Houses in Abuja, No Hidden Fees',
  description:
    'Find verified houses in Abuja without stress or hidden fees. Real listings, transparent prices, trusted agents. Join 100+ on our waitlist.', // 146 chars
  metadataBase: new URL('https://www.domorang.com'),
  keywords: [
    'houses in Abuja',
    'rent in Abuja',
    'verified listings Abuja',
    'apartment rental Abuja',
    'real estate Abuja',
    'no agent fees',
  ],
  authors: [{ name: 'Domorang' }],
  creator: 'Domorang',
  publisher: 'Domorang',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Domorang - Verified Houses in Abuja, No Hidden Fees',
    description:
      'Find verified houses in Abuja without stress or hidden fees. Real listings, transparent prices, trusted agents. Join 100+ on our waitlist.',
    url: 'https://www.domorang.com',
    siteName: 'Domorang',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Domorang - Verified Houses in Abuja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domorang - Verified Houses in Abuja',
    description:
      'Verified houses in Abuja. No inspection fees, no fake listings, no stress.', // 76 chars - Twitter optimal
    images: ['/og-image.png'],
    creator: '@domora_ng',
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
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} ${inter.variable} ${satoshi.variable} ${figTree.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <main>{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
