import { Geist, Geist_Mono } from 'next/font/google';

import '../globals.css';
import { DashboardSidebar } from '@/components/shared/Sidebar';



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
        <div className='grid grid-cols-12 gap-2 '>
          <div className='col-span-2'>
<DashboardSidebar/>
          </div>
          <div className='col-span-10'>
{children}
        </div>
        </div>
        
        
        {/* <div className="md:hidden">
          <MobileBottomMenu />
        </div> */}
      </body>
    </html>
  );
}
