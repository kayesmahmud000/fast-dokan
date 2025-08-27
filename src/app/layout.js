import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/custom/Navbar';
import './globals.css';
import Footer from '@/components/custom/Footer';
import MobileBottomMenu from '@/components/common/MobileBottomMenu';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Online Dokan',
  description:
    'Online dokan helps customer to purchess their needed products online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
        <div className="md:hidden">
          <MobileBottomMenu />
        </div>
      </body>
    </html>
  );
}
