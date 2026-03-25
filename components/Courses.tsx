import { courses } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Courses({ isCoursesPage = false }: { isCoursesPage?: boolean }) {
  const listCourses = isCoursesPage ? courses : courses.slice(0, 3)
  return (
    <section className="md:py-16 py-8 relative bg-[#f1f1f1]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
          <span className="font-mono-dm text-[#C9A96E] font-bold text-xl md:text-2xl tracking-widest uppercase">Chương trình học</span>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-8 gap-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Khóa học
            <span className="italic text-gradient-gold"> tiêu chuẩn</span>
          </h2>
          <Link href="/khoa-hoc" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors flex items-center gap-2 font-medium">
            Xem tất cả khóa học
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {listCourses.map((c, i) => (
            <div
              key={i}
              className={`relative group rounded-3xl overflow-hidden card-hover bg-white ${c.highlight
                ? "border border-[#C9A96E]/30"
                : "border border-white/6"
                }`}
            >

              {/* Top */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  {/* Level badge */}
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-mono-dm tracking-wider"
                    style={{ backgroundColor: c.tagColor + "15", color: c.tagColor, border: `1px solid ${c.tagColor}30` }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: c.tagColor }} />
                    {c.tag}
                  </div>

                  {/* Level big number */}
                  <span className="font-display text-xl font-black leading-none">
                    {c.level}
                  </span>
                </div>

                <Image src={c.image} width={800} height={800} alt={c.title} className="w-full mb-4" />

                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-[#E8C98A] transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-3">{c.desc}</p>
              </div>

              {/* Divider */}
              <div className="mx-8 my-2 h-px bg-black/6" />

              {/* Meta */}
              {/* <div className="px-8 grid grid-cols-2 gap-4 mb-2">
                <div>
                  <span className="font-mono-dm text-[10px] uppercase tracking-widest block mb-1">Thời gian</span>
                  <span className="text-sm font-medium">{c.duration}</span>
                </div>
                <div>
                  <span className="font-mono-dm text-[10px] uppercase tracking-widest block mb-1">Số buổi</span>
                  <span className="text-sm font-medium">{c.sessions}</span>
                </div>
              </div> */}

              {/* Price + CTA */}
              <div className="px-8 pb-8 flex flex-col justify-between">
                <div className="mb-4">
                  <span className="font-bold mb-1">Học phí:</span>
                  <span className="font-display text-xl font-bold text-gradient-gold"> {c.price}</span>
                </div>
                <Link
                  href={isCoursesPage ? `/khoa-hoc/${c.slug}` : '#register'}
                  className="px-6 text-center py-2.5 rounded-full text-[#1A365D] text-sm font-semibold transition-all duration-200 cursor-pointer bg-[#C9A96E] hover:bg-[#E8C98A] hover:shadow-lg hover:shadow-[#C9A96E]/20"
                >
                  {isCoursesPage ? 'Xem chi tiết' : 'Đăng ký ngay'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}