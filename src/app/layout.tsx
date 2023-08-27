import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Adivina el Pokemon',
  description: 'Juego de Pokemones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
