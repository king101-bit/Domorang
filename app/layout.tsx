import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

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
    "Join Domorang's waitlist to get early access to verified, real houses in Abuja. Say goodbye to inspection fees and fake listings — find your dream home faster and hassle-free!",

  metadataBase: new URL('https://www.domorang.com'),

  openGraph: {
    title: 'Domorang - Verified Houses in Abuja, No Hidden Fees',
    description:
      "Join Domorang's waitlist to get early access to verified, real houses in Abuja. Say goodbye to inspection fees and fake listings — find your dream home faster and hassle-free!",
    url: 'https://www.domorang.com',
    siteName: 'Domorang',
    images: [
      {
        url: '/canvas-v2.png',
        width: 1200,
        height: 630,
        alt: 'Domorang — Verified Houses in Abuja',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Domorang - Verified Houses in Abuja, No Hidden Fees',
    description:
      'Verified houses in Abuja. No inspection fees. No fake listings.',
    images: ['/canvas-v2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
