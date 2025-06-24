import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Assessor Samurai: Curso para Assessores com IA e Estratégia',
  description: 'Forme-se assessor parlamentar com mentalidade estratégica, IA integrada e alto desempenho. Transforme gabinetes com presença digital e resultado real.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
