import { blogs } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const [main, ...rest] = blogs;

  const otherBlogs = rest.slice(0, 2)

  return (
    <section className="py-8 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
          <span className="font-mono-dm text-[#C9A96E] text-xl md:text-2xl font-bold tracking-widest uppercase">Tin tức & Kinh nghiệm</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center mb-4">
          <h2 className="font-display text-[#1A365D] text-3xl md:text-5xl font-bold">
            Tin tức &{" "}
            <span className="italic text-gradient-gold">Bí quyết luyện thi</span>
          </h2>
          <div className="text-center">
            <Link href="/tin-tuc" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors flex items-center gap-2 font-medium">
              Xem tất cả bài viết
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <p className="mb-8 text-center italic">Học thật, thi thật, kết quả thật. Yên tâm bổ sung hồ sơ, công chứng xác minh nộp xét tuyển hay ra trường.</p>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Big post */}
          <Link href={`/tin-tuc/${main.slug}`} className="group shadow-2xl rounded-3xl overflow-hidden border border-[#ccc] card-hover row-span-1 lg:row-span-2 flex flex-col">
            {/* Visual */}
            <div className="relative flex items-center justify-center overflow-hidden">
              <div>
                <Image src={main.thumbnail} alt={main.title} width={800} height={800} />
              </div>
              <div className="absolute bottom-4 left-6">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold font-mono-dm tracking-wider"
                  style={{ backgroundColor: main.tagColor + "20", color: main.tagColor, border: `1px solid ${main.tagColor}40` }}
                >
                  {main.tag}
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-1 bg-[#f1f1f1]">
              <h3 className="font-display text-2xl font-bold mb-3 text-[#E8C98A] transition-colors leading-tight">
                {main.title}
              </h3>
              <p className="text-sm leading-relaxed mb-auto ">{main.excerpt}</p>
              <div className="mt-6 flex items-center justify-between pt-6 border-t border-black/6">
                <div className="flex items-center gap-3 text-xs">
                  <span>{main.date}</span>
                  <span>·</span>
                  <span>{main.readTime}</span>
                </div>
                <p className="text-sm text-[#C9A96E] hover:text-[#E8C98A] transition-colors flex items-center gap-1">
                  Đọc thêm
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Small posts */}
          {otherBlogs.map((p, i) => (
            <Link key={i} href={`/tin-tuc/${p.slug}`} className="">
              <div

                className="group flex gap-5 p-6 rounded-2xl shadow-2xl border border-[#ccc] bg-[#f1f1f1] card-hover"
              >
                {/* Mini visual */}
                <div className="w-1/2">
                  <div className="shrink-0 rounded-xl mb-4">
                    <Image src={p.thumbnail} alt={p.title} width={800} height={800} />
                  </div>
                  <h4 className="text-sm font-semibold leading-snug mb-1 group-hover:text-[#E8C98A] transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] mt-2">
                    <span>{p.date}</span>
                    <span className="max-md:hidden">·</span>
                    <span>{p.readTime}</span>
                  </div>
                </div>

                <div className="w-1/2">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold font-mono-dm tracking-wider mb-2"
                    style={{ backgroundColor: p.tagColor + "15", color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                  <p className="mb-4 max-md:line-clamp-6">{p.excerpt}</p>
                  <p className="text-sm text-[#C9A96E] hover:text-[#E8C98A] transition-colors flex items-center gap-1">

                    Đọc thêm
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}