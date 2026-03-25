"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  {
    title: "Trang chủ",
    url: "/"
  },
  {
    title: "Khóa học",
    url: "/khoa-hoc"
  },
  {
    title: "Tin tức",
    url: "/tin-tuc"
  },
  {
    title: "Liên hệ",
    url: "/lien-he"
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-20 bg-white right-0 z-50 transition-all duration-200 border-b border-b-[#ccc] ${scrolled
          ? "border-b border-white/5  shadow-xl"
          : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center justify-center max-md:w-full">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={800} height={800} priority className="w-20 h-20" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`text-xl hover:text-[#C9A96E] duration-200 tracking-wide ${pathname === link.url && 'text-[#C9A96E]'}`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0835532678"
              className="px-5 py-2.5 bg-[#C9A96E] text-[#0A0A0F] text-sm font-semibold rounded-full hover:bg-[#E8C98A] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A96E]/20"
            >
              Đăng ký ngay
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`bg-white shadow-2xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="border-t border-slate-700">
            <div
              className={`flex flex-col space-y-1 py-4 transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-y-0' : '-translate-y-4'
                }`}
            >
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`${pathname === item.url ? 'text-[#d29015]' : ''} hover:bg-slate-700 font-medium text-sm tracking-wide py-3 px-4 rounded-md transform transition-all duration-200 ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </nav>
      <div className={scrolled
        ? "h-16"
        : "h-20"} />
    </>
  );
}