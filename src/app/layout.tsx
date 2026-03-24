import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NMS Tech Group — Software & DevOps',
  description:
    'NMS Tech Group es una empresa de desarrollo de software especializada en soluciones fullstack modernas. Creadores de Speedrun Delivery, PortalTI, Finance Pro y más.',
  keywords: [
    'NMS Tech Group',
    'nmsdev',
    'desarrollo de software',
    'fullstack',
    'devops',
    'next.js',
    'nestjs',
    'docker',
    'typescript',
    'santiago chile',
    'speedrun delivery',
    'portalti',
  ],
  authors: [{ name: 'NMS Tech Group', url: 'https://nmsdev.tech' }],
  creator: 'NMS Tech Group',
  metadataBase: new URL('https://nmsdev.tech'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nmsdev.tech',
    title: 'NMS Tech Group — Software & DevOps',
    description:
      'Empresa de desarrollo de software especializada en soluciones fullstack modernas. Creadores de Speedrun Delivery, PortalTI y Finance Pro.',
    siteName: 'NMS Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NMS Tech Group — Software & DevOps',
    description:
      'Empresa de desarrollo de software especializada en soluciones fullstack modernas. Creadores de Speedrun Delivery, PortalTI y Finance Pro.',
    creator: '@nmsdev',
  },
  icons: {
    icon: '/icon.svg',
  },
  alternates: {
    canonical: 'https://nmsdev.tech',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-[#050505] text-gray-100 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
