import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavigationLoader from "../components/NavigationLoader";

import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CalculatorsHub - Essential Calculators Collection | Free & No Limits",
  description:
    "A comprehensive collection of essential calculators including percentage calculators, date/time tools, financial calculators, and unit converters. All tools work locally in your browser.",
  keywords:
    "calculatorshub, calculators, percentage calculator, percentage increase, discount calculator, tip calculator, age calculator, date difference, unix time converter, vat calculator, gst calculator, loan calculator, fraction to decimal, ratio simplifier, unit converter, length converter, mass converter, temperature converter",
  openGraph: {
    title: "CalculatorsHub - Essential Calculators Collection",
    description:
      "A comprehensive collection of essential calculators including percentage calculators, date/time tools, financial calculators, and unit converters.",
    url: "https://calculatorshub.tech",
    type: "website",
    siteName: "CalculatorsHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalculatorsHub - Essential Calculators Collection",
    description:
      "A comprehensive collection of essential calculators including percentage calculators, date/time tools, financial calculators, and unit converters.",
  },
  alternates: {
    canonical: "https://calculatorshub.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-00XNE91V6X" />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="CalculatorsHub" />
        <meta name="application-name" content="CalculatorsHub" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavigationLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
