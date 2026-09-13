import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "Orange SMM Panel",
  description: "Fast ,Safe & Growth in Social Media",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ inter.variable } h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
