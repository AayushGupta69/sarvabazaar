import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@sarvabazaar/ui/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const font = Urbanist({
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
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
