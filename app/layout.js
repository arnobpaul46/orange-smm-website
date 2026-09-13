import { Inter, Parkinsans, Manrope } from "next/font/google";
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
  variable: "--font-manrope" 
});


export const metadata = {
  title: "Orange SMM Panel",
  description: "Fast ,Safe & Growth in Social Media",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
    >
      <body className={`${inter.variable} ${parkinsans.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
