import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remind Voice | Just speak.",
  description: "Set reminders just by speaking. No typing. No stress. Just say it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen text-slate-50 antialiased bg-[#0B0516] selection:bg-purple-500/30 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
