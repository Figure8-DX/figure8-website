import { Geist, Geist_Mono, Tajawal } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Free stand-in for DIN Next LT Arabic, which is used first when its licensed
// files are present in public/fonts (see globals.css).
export const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  preload: false,
});

export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${tajawal.variable}`;
