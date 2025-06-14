import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import TagManager from 'react-gtm-module'
import { useEffect } from "react";

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
  keywords: ["impresión 3D", "diseño 3D", "prototipos", "maquetas", "TecPro"],
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
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-M985PLB5',
    };
    
    TagManager.initialize(tagManagerArgs);
  },
  []);
 
  
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-0KYTB5PE7L" /> 

      </body>
    </html>
  );
}