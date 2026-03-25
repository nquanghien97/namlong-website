import Link from "next/link";

const stats = [
  { value: "98%", label: "Tỷ lệ đỗ VSTEP" },
  { value: "2,400+", label: "Học viên thành công" },
  { value: "8+", label: "Năm kinh nghiệm" },
];

export default function Hero() {

  return (
    <section
      className="relative md:py-16 py-8 flex items-center overflow-hidden"
    >
      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/5 mb-4 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            <span className="font-mono-dm text-[#C9A96E] tracking-widest uppercase">
              Luyện thi VSTEP A2 · B1 · B2
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-4 md:mb-6">
            <p className="text-[#1A365D]">Chinh phục <span className="shimmer">VSTEP</span></p>
            <p className="text-[#1A365D]">Khai phóng <span className="italic text-[#C9A96E]">tương lai</span></p>     
          </h1>

          <p className="text-[#1A365D] text-base md:text-lg leading-relaxed mb-4 md:mb-8">
            Lớp cam kết đầu ra cho học viên mất gốc. Cần bổ sung hồ sơ tốt nghiệp ra trường, xét tuyển công chức viên chức. Chuẩn bị đầu vào và ra trước khi bảo vệ thạc sĩ yêu cầu chứng chỉ tiếng Anh B1 (bậc 3/6) và B2 (bậc 4/6)
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="#register"
              className="group relative px-8 py-4 bg-[#C9A96E] text-[#0A0A0F] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Đăng ký ngay
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-[#E8C98A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
            {/* <a
              href="#"
              className="px-8 py-4 border border-white/15 text-white/70 font-medium rounded-full hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-300 backdrop-blur-sm"
            >
              Tư vấn lộ trình →
            </a> */}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-display text-3xl font-bold text-gradient-gold">{s.value}</span>
                <span className="text-[#1A365D] mt-1 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Visual card */}
        <div className="relative hidden lg:block">
          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-[url('/banner.png')] bg-cover p-1 glow-gold">
            <div className="rounded-2xl overflow-hidden aspect-4/3 relative">
              {/* Simulated image with gradient */}
              <div className="absolute inset-0" />
              
            </div>
          </div>

          {/* Floating badge - pass rate */}
          <div className="absolute -top-4 -right-4 bg-[#C9A96E] text-[#0A0A0F] rounded-2xl p-4 font-semibold shadow-2xl">
            <div className="">100% Cam kết đầu ra</div>
          </div>

          {/* Floating badge - students */}
          <div className="absolute -bottom-4 -left-4 bg-[#1A365D] border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              {/* <div className="flex -space-x-2">
                {["#C9A96E", "#E8C98A", "#FF5C35"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#14141C]" style={{ backgroundColor: c + "33", borderColor: c + "88" }} />
                ))}
              </div> */}
              <div>
                <div className="text-white font-semibold text-sm">2,400+ học viên</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}