"use client";

import Form from "./Form";

export default function CTA() {

  return (
    <section id="register" className="scroll-mt-20 py-8 md:py-16 relative overflow-hidden bg-[#f1f1f1]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
          <span className="font-mono-dm text-[#C9A96E] text-xl md:text-2xl font-bold tracking-widest uppercase">Bắt Đầu Ngay Hôm Nay</span>
        </div>
        <h2 className="font-display text-[#1A365D] text-3xl md:text-4xl font-bold mb-4">
          Bắt đầu{" "}
          <span className="italic text-gradient-gold">Hành trình</span>
          {" "} của bạn
        </h2>
        <p className="text-base md-4 md:mb-8 max-w-lg mx-auto">
          Để lại thông tin để đội ngũ tư vấn hỗ trợ bạn lên lộ trình học phù hợp
          và nhận ưu đãi hoàn toàn miễn phí.
        </p>

        {/* Form card */}
        <Form />
      </div>
    </section>
  );
}