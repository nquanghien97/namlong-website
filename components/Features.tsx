const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Giảng viên uy tín",
    desc: "Đội ngũ giảng viên có chứng chỉ quốc tế, chuyên gia luyện thi VSTEP hàng đầu.",
    tag: "Expert",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Lộ trình linh hoạt",
    desc: "Chương trình học cá nhân hóa, phù hợp mọi trình độ và lịch trình bận rộn.",
    tag: "Flexible",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Cam kết đầu ra",
    desc: "Đảm bảo đỗ chứng chỉ VSTEP hoặc học lại miễn phí đến khi đạt mục tiêu.",
    tag: "Guaranteed",
  },
];

export default function Features() {
  return (
    <section className="relative md:py-16 py-8 overflow-hidden bg-[#f1f1f1]">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
          <span className="font-mono-dm text-[#C9A96E] font-bold text-xl md:text-2xl tracking-widest uppercase">Tại sao chọn chúng tôi</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-end mb-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Nền tảng giáo dục <span className="italic text-gradient-gold">chuẩn học thuật</span>
          </h2>
          <p className="text-lg leading-relaxed lg:pb-2 text-justify">
            Phương pháp giảng dạy được thiết kế theo chuẩn quốc tế CEFR, kết hợp
            công nghệ và kinh nghiệm thực chiến để tối ưu kết quả học tập.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/6 bg-white card-hover cursor-default"
            >

              {/* Icon */}
              <div className="flex gap-2 items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 text-[#C9A96E] flex items-center justify-center group-hover:bg-[#C9A96E]/15 transition-colors">
                  {f.icon}
                </div>

                <h3 className="font-display text-2xl font-bold group-hover:text-[#E8C98A] transition-colors">
                  {f.title}
                </h3>
              </div>
              <p className="leading-relaxed">{f.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#C9A96E]/20 to-transparent group-hover:via-[#C9A96E]/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee band */}
      <div className="md:mt-16 mt-8 py-5 border-y border-white/5 bg-[#1A365D] overflow-hidden relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
          {Array(3).fill(["VSTEP A2", "VSTEP B1", "VSTEP B2/C1", "IELTS PREP", "TOEIC PREP", "CEFR CERTIFIED", "98% PASS RATE"]).flat().map((t, i) => (
            <span key={i} className="inline-flex items-center gap-4 font-display text-base md:text-xl font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]/50" />
              <span className="text-white tracking-widest uppercase">{t}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}