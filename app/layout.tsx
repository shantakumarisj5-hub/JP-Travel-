import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amazing Vietnam | Luxury Travel Experience",
  description:
    "Discover Vietnam through a beautifully curated 3 Nights / 4 Days travel experience.",
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