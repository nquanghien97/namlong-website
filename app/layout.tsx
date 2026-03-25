import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

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

const contacts = [
  {
    type: "messenger",
    href: "https://m.me/namlong.edu.vn",
    icon: "/messenger.png",
    alt: "Messenger",
  },
  {
    type: "zalo",
    href: "https://zalo.me/0835532678",
    icon: "/zalo.png",
    alt: "Zalo",
  },
  {
    type: "phone",
    href: "tel:0835532678",
    icon: "/phone.png",
    alt: "Phone",
  },
];

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
        <div className="fixed right-0 bottom-0 z-999">
          {contacts.map((item) => (
            <div key={item.type} className="contact-item" data-type={item.type}>
              <div className="contact-btn">
                <div className="contact-pulse"></div>
                <div className="contact-icon">
                  <a href={item.href} target="_blank">
                    <Image
                      className="max-h-6 max-w-6 absolute top-1/2 left-1/2 -translate-1/2"
                      width={40}
                      height={40}
                      src={item.icon}
                      alt={item.alt}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
