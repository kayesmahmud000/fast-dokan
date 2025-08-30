import { Geist, Geist_Mono } from 'next/font/google';

import '../globals.css';


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

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        
        {children}
        {/* <div className="md:hidden">
          <MobileBottomMenu />
        </div> */}
      </body>
    </html>
  );
}
