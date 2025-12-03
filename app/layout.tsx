import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PagePrefetcher from '@/components/PagePrefetcher'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '杭州夕上·虎跑1934酒店 | 民国风情人文度假酒店',
  description: '夕上虎跑1934度假酒店，位于杭州市西湖风景区，民国风格的花园别墅，始建于1934年。修旧不守旧、历史即当下，体验新旧交融、时尚与历史相映衬的人文度假酒店。',
  keywords: '杭州酒店,西湖酒店,虎跑1934,民国风格酒店,度假酒店,杭州夕上酒店',
  openGraph: {
    title: '杭州夕上·虎跑1934酒店',
    description: '民国风情人文度假酒店，体验历史与当下的完美融合',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>
          <Navigation />
          <PagePrefetcher />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

