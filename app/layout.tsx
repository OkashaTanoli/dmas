import { Footer, Header } from '@/components'
import './globals.css'
import { Nunito } from '@next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
