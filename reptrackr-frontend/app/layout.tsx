import type { Metadata } from "next";
import "./globals.css";

import { Montserrat, Open_Sans, Roboto } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "RepTrackr",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${roboto.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
