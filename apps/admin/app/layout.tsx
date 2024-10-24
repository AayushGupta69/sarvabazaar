import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@sarvabazaar/ui/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SarvaBazaar - Admin Dashboard",
  description:
    "A feature rich admin interface for SarvaBazaar with powerful CMS capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
