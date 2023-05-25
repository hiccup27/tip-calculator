import './globals.css'
import { Space_Mono } from 'next/font/google'

const space_Mono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['700']
})

export const metadata = {
  title: 'Splitter',
  description: 'Frontend Mentor - Tip calculator app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>{children}</body>
    </html>
  )
}
