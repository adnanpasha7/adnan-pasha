import "./globals.css";
import { Bricolage_Grotesque, Space_Mono, Anton } from "next/font/google";
import Header from "@/components/Header";

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
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
