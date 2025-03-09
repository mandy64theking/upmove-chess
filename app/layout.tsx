import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Upmove Chess Academy",
  description: "Chess Mentorship for all ages and levels!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
