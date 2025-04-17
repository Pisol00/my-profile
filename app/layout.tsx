import type { Metadata } from "next";
import { Archivo, Noto_Sans_Thai } from "next/font/google";
import "@/styles/main.css"; // แทนที่ globals.css ด้วยไฟล์ CSS ที่รวมแล้ว
import { AppProviders } from "@/contexts";

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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://pisol-portfolio.vercel.app/",
    title: "Pisol Uattankanjana | Software Engineer",
    description: "Personal portfolio of Pisol Uattankanjana, Software Engineer",
    siteName: "Pisol Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pisol Uattankanjana Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${archivo.variable} ${notoSansThai.variable}`}>
      <body className="antialiased font-sans">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}