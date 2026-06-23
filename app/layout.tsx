import type { Metadata } from "next";
import StripeProvider from '@/components/StripeProvider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Primerival International Pte Ltd | Premium Latex Products",
description: "Primerival International Pte Ltd specializes in innovative natural latex products including disposable gloves, ergonomic pillows, and premium mattresses. Trusted manufacturer and exporter serving global partners with quality, consistency, and excellence.",
    icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-synonym antialiased">
        <StripeProvider>
          {children}
        </StripeProvider>
      </body>
    </html>
  );
}