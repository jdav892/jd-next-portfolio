import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio of Justin Davila",
  description: "Developer Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange 
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
