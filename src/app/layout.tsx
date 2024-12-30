import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next';
const inter = Inter({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: 'Remindr',
  description: 'Remind to Grind.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Remindr',
  },
  icons: {
    icon: [
      { url: '/icon512_rounded.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon512_maskable.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/icon512_rounded.png', sizes: '512x512', type: 'image/png' }
    ]
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#26222b',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}