import type { Metadata } from "next";
import { Archivo, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

// ฟอนต์ภาษาอังกฤษ
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// ฟอนต์ภาษาไทย
const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pisol Uattankanjana | Software Engineer",
  description: "Personal portfolio of Pisol Uattankanjana, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${archivo.variable} ${notoSansThai.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}