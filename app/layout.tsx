import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andre Basilato | Full Stack Developer",
  description:
    "Full Stack Developer crafting performant, elegant digital experiences with modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Andre Basilato",
  ],
  authors: [{ name: "Andre Basilato" }],
  openGraph: {
    title: "Andre Basilato | Full Stack Developer",
    description:
      "Full Stack Developer crafting performant, elegant digital experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="noise-overlay font-[var(--font-inter)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
