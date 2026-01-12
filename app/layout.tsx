import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import IntlWrapper from '@dima-algebras/algebras-auto-intl/runtime/server'
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAERTAG IN | Партнёрство и реклама на YouTube",
  description: "Продвиньте свой бренд среди активной аудитории Армении и России. Партнёрские видео, интеграции и имиджевые кампании на YouTube-канале FAERTAG IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <IntlWrapper>
          <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
      </IntlWrapper>
    
    </html>
  );
}
