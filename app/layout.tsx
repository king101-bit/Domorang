import type { Metadata } from 'next';
import { Inter, Montserrat, Geist } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <main>{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
