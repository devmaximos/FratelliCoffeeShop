import './globals.css';
import type { Metadata } from 'next';
import { Inter, Caveat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-script',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fratellicafe.gr'),
  title: 'Fratelli Cafe | Σέρρες',
  description: 'Ένα ζεστό, οικογενειακό καφέ στη καρδιά των Σερρών. Απολαύστε εξαιρετικό καφέ και χαλαρή ατμόσφαιρα.',
  openGraph: {
    title: 'Fratelli Cafe | Σέρρες',
    description: 'Ένα ζεστό, οικογενειακό καφέ στη καρδιά των Σερρών. Απολαύστε εξαιρετικό καφέ και χαλαρή ατμόσφαιρα.',
    locale: 'el_GR',
    type: 'website',
    url: 'https://fratellicafe.gr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fratelli Cafe | Σέρρες',
    description: 'Ένα ζεστό, οικογενειακό καφέ στη καρδιά των Σερρών. Απολαύστε εξαιρετικό καφέ και χαλαρή ατμόσφαιρα.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="scroll-smooth">
      <body className={`${inter.variable} ${caveat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
