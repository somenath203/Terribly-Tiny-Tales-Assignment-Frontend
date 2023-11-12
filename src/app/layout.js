import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile Page Assignment',
  description: 'This is a website that renders a profile page of a user.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/1b20c7f767.js" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
