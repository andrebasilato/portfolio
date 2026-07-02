import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";
import { pt } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: pt.meta.title,
  description: pt.meta.description,
  keywords: [
    "Engenheiro Full-Stack",
    "Tech Lead",
    "Fintech",
    "SaaS",
    "Pagamentos",
    "PIX",
    "CNAB",
    "TypeScript",
    "Node.js",
    "React Native",
    "Andre Basilato",
  ],
  authors: [{ name: "Andre Basilato" }],
  openGraph: {
    title: pt.meta.title,
    description: pt.meta.description,
    type: "website",
    locale: "pt_BR",
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
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className="noise-overlay font-[var(--font-inter)]">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
