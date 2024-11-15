import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@sarvabazaar/ui/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SarvaBazaar - Store",
  description:
    "Explore a wide range of products, categories, and promotions on SarvaBazaar, your ultimate online marketplace for all your shopping needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
