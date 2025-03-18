import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
});

const fontSpaceMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${fontSpaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
