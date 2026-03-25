import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngoại ngữ Nam Long - Luyện thi tiếng anh cấp tốc cam kết đầu ra",
  description: "Đơn vị luyện thi chứng chỉ tiếng Anh cấp tốc cam kết đầu ra chỉ sau 8-12 buổi học",
  openGraph: {
    title: "Ngoại ngữ Nam Long - Luyện thi tiếng anh cấp tốc cam kết đầu ra",
    description: "Đơn vị luyện thi chứng chỉ tiếng Anh cấp tốc cam kết đầu ra chỉ sau 8-12 buổi học",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased  scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
