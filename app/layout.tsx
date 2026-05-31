import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Barangay Tugbok | Davao City",
    template: "%s | Brgy. Tugbok",
  },
  description:
    "Barangay Tugbok official governance portal — transparency, community participation, and digital governance initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © 2026 Barangay Tugbok, Tugbok District, Davao City, Philippines
        </footer>
      </body>
    </html>
  );
}
