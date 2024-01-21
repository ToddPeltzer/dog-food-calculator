import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "./components/TanstackProvider";
import NavBar from "./components/NavBar";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dog Food Calculator",
  description: "Dog food calculator based on weight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <TanstackProvider>
            {children}
          </TanstackProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
