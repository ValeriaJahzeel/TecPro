import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TagManagerScript from "@/components/metricas/tag_manager";
import GoogleAnalytics from "@/components/metricas/analythisc";

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
      <head>
        <GoogleAnalytics />
        <TagManagerScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased bg-fondo`}
      >
        {children}
      </body>
    </html>
  );
}