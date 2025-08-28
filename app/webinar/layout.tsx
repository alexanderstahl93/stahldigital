import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webinar: Sichtbar in der KI-Ära - So wirst du von ChatGPT & Co. genannt | Stahl Digital',
  description: 'Lerne, wie du dein Business in der neuen KI-Ära sichtbar machst. Kostenloses Live-Webinar am 06.09.2025 um 14:00 Uhr.',
  keywords: 'KI-Webinar, ChatGPT Marketing, LLM Sichtbarkeit, KI-Ära Business, Stahl Digital',
  openGraph: { 
    title: 'Webinar: Sichtbar in der KI-Ära - ChatGPT Marketing',
    description: 'Kostenloses Live-Webinar: So wirst du von ChatGPT & Co. genannt',
    type: 'website',
    url: 'https://stahldigital.at/webinar',
    images: [
      {
        url: 'https://stahldigital.at/webinar-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Webinar: Sichtbar in der KI-Ära'
      }
    ]
  }
}

export const viewport = {
  themeColor: '#3B82F6',
  colorScheme: 'light',
}

export default function WebinarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
