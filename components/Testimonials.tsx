import Image from "next/image";

const testimonials = [
  {
    name: "Tống Lê Hoàng",
    level: "Lớp B1 VSTEP",
    information: "Bác sĩ",
    avatar: "/feedback1.jpg",
    color: "#C9A96E",
    text: "Trung tâm giảng dạy chất lượng cao, thầy cô rất nhiệt huyết có tâm và có kinh nghiệm lâu năm trong lĩnh vực luyện thi Vstep, Ielts cấp tốc!",
    rating: 5,
  },
  {
    name: "Lê Huỳnh Anh Duy",
    level: "Lớp B2 VSTEP",
    information: "Thạc sĩ",
    avatar: "/feedback2.jpg",
    color: "#4ECDC4",
    text: "Trung tâm có thầy Phi hỗ trợ rất nhiệt tình và tạo thêm điều kiện trong quá trình ôn tập nếu chưa vững các kĩ năng. Các thầy cô trong trung tâm dạy rất dễ hiểu bám sát đề thi giúp em đạt được chứng chỉ trong lần thi đầu tiên. Cảm ơn trung tâm rất nhiều.",
    rating: 5,
  },
  {
    name: "Lê Hữu Lễ",
    level: "Lớp IELTS 4.5",
    information: "Tốt nghiệp BK",
    avatar: "/feedback3.jpg",
    color: "#FF5C35",
    text: "Cảm ơn Nam Long đã giúp mình đạt điểm đẹp, tiếp tục theo đuổi Giáo dục Quốc tế. Học phí rất xứng đáng với chất lượng.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-8 md:py-16 bg-[#f1f1f1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
            <span className="font-mono-dm text-[#C9A96E] text-xl md:text-2xl font-bold tracking-widest uppercase">Kết quả học viên thi đạt</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Câu chuyện{" "}
            <span className="italic text-gradient-gold">thành công</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-black/6 bg-white card-hover"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 font-display text-6xl font-black opacity-40 leading-none">&quot;</div>

              {/* Author */}
              <div className="flex flex-col items-center gap-3 mb-2">
                <div
                  className="rounded-full flex items-center justify-center text-sm font-bold"
                >
                  <Image src={t.avatar} alt={t.name} width={800} height={800} />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs">{t.level}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed italic">&quot;{t.text}&quot;</p>


              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}50, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}