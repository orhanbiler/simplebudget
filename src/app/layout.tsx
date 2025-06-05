import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Budget - Privacy Policy",
  description: "Privacy Policy for Simple Budget iOS app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 