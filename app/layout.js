import { Inter, Parkinsans, Manrope, Schibsted_Grotesk, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-parkinsans",
  display: "swap",
  adjustFontFallback: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
  adjustFontFallback: false,
});

const archivoBlack = Archivo_Black({
  weight: "400", // 👈 এখানে weight যোগ করলাম
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Orange SMM Panel",
  description: "Fast, Safe & Growth in Social Media",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${parkinsans.variable} ${manrope.variable} ${schibstedGrotesk.variable} ${archivoBlack.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}