import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Geist_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TecPro | Servicios de Impresión 3D",
  description: "TecPro ofrece servicios de impresión 3D de alta calidad para proyectos industriales, artísticos y arquitectónicos",
  keywords: ["impresión 3D CDMX", "diseño 3D CDMX", "prototipos", "servicio de impresión 3D", "TecPro"],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
    shortcut: '/logo.svg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_TAG_MANAGER_ID && (
          <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_TAG_MANAGER_ID} />
            {console.log('Google Tag Manager initialized successfully')}
          </>
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            {console.log('Google Analytics initialized successfully')}
          </>
        )}
      </body>
    </html>
  );
}