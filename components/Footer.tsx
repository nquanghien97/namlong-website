"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#ccc]">
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={800} height={800} priority className="w-24 h-24" />
            </Link>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Trung tâm luyện thi chứng chỉ tiếng Anh VSTEP uy tín hàng đầu tại TP.HCM với hơn 8 năm kinh nghiệm.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {["fb", "yt", "tiktok"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-lg border border-[#ccc] flex items-center justify-center hover:border-[#C9A96E]/30 hover:text-[#C9A96E] transition-all text-xs font-mono-dm"
              >
                {s === "fb" ? "f" : s === "yt" ? "▶" : "◆"}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-[#C9A96E] tracking-widest uppercase mb-5">Liên kết nhanh</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/khoa-hoc" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Khóa học
              </Link>
            </li>
            <li>
              <Link href="/tin-tuc" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Tin tức
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#C9A96E] tracking-widest uppercase mb-5">Chính sách</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Chính sách bảo mật
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Cam kết đầu ra
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#C9A96E] tracking-widest uppercase mb-5">Liên hệ</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                38 Thống Nhất, Quận 10, TP.HCM
              </Link>
            </li>
            <li>
              <Link href="tel:0835532678" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                Hotline: 0835 532 678
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:text-[#C9A96E] transition-colors leading-relaxed block">
                info@namlongacademy.edu.vn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#ccc] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono-dm text-[11px] tracking-wide">
            © 2024 Nam Long Academy. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
            <span className="font-mono-dm text-[11px]">Đang hoạt động · TP.HCM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}