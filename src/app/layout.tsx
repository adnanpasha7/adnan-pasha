import Footer from "@/components/Footer";
import "./globals.css";
import { Bricolage_Grotesque, Space_Mono, Anton } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-main",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${spaceMono.variable} ${anton.variable}`}>
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
