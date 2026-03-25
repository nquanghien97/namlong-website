import Image from "next/image";
import Link from "next/link";


const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 shrink-0">
    <circle cx="12" cy="12" r="12" fill="#F97316" />
    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 shrink-0">
    <circle cx="12" cy="12" r="12" fill="#F97316" />
    <circle cx="9" cy="10" r="1.2" fill="white" />
    <circle cx="15" cy="10" r="1.2" fill="white" />
    <path d="M8.5 14.5c1 1.5 5.5 1.5 6.5 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 shrink-0">
    <circle cx="12" cy="12" r="12" fill="#F97316" />
    <path d="M12 5l6 2.5v5C18 16 15 19 12 20c-3-1-6-4-6-7.5v-5L12 5z" fill="white" fillOpacity="0.9" />
    <path d="M9 12l2 2 4-4" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
); const benefits = [
  { icon: <CheckCircleIcon />, text: "Bạn mong muốn sớm ôn luyện thi đạt kết quả" },
  { icon: <SmileIcon />, text: "Bổ sung kịp thời hồ sơ tốt nghiệp, xin việc, xét tuyển" },
  { icon: <ShieldIcon />, text: "Hoàn thiện hồ sơ đầu vào ra trước khi bảo vệ" },
];

function AboutMe() {
  return (
    <section className="md:py-16 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8 px-6">
        {/* Photo */}
        <div className="shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/banner.png"
            alt="Đội ngũ Ngoại Ngữ Nam Long"
            className="w-full object-cover"
            width={800}
            height={800}
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-2">
            Đôi Nét Về Ngoại Ngữ Nam Long
          </h2>

          <div className="space-y-2 text-gray-600 text-[16px] text-justify leading-relaxed mb-4">
            <p>
              Thấu hiểu khó khăn của nhiều bạn học viên. Kiến thức bà làu lí sử dụng không biết luyện thi
              sao cho nhanh chóng sơm đủ điều kiện thi đạt. Sợm có bằng bổ sung vào cơ quan.
            </p>
            <p>
              Trung tâm mang muốn rút ngắn thời gian ôn luyện của học viên chỉ trong 8-10 buổi/khóa.
              Với hơn 7 năm trong lĩnh vực giáo dục Ngoại Ngữ Nam Long mang đến cho bạn khóa học rút
              ngắn hơn 80% thời gian ôn tập. Ôn thi trực tiếp cho các bạn ở gần &amp; online đối với các bạn ở
              xa.
            </p>
            <p>
              Luôn cam kết đầu ra 100% cho học viên. Với chính sách bao lẽ phí thi đến khi đạt kết quả. Và
              hoàn học phí nếu đã ôn tập nhưng thi không đạt kết quả đã cam kết. Giúp học viên yên tâm
              Ôn tập sơm thi đạt kết quả.
            </p>
          </div>

          <div className="flex">
            <Link
              href="tel:0835532678"
              className="group relative px-8 py-4 bg-[#C9A96E] text-[#0A0A0F] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Liên hệ ngay
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-[#E8C98A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-5">
            Bạn Gặp Khó Khăn Khi Luyện Thi Chứng chỉ tiếng Anh A2-B1-B2 VSTEP Trên Máy Tính
          </h2>
          <p className="text-gray-500 mb-7 leading-relaxed">
            Với ngân hàng đề ngẫu nhiên từ 200-300 đề đánh giá 4 kỹ năng do Bộ Giáo Dục Đào
            Tạo cấp chứng chỉ. Với hơn 30+ trường Đại học ca nước đã điều kiện tổ chức. Đo hình
            thức thi mới khiến bạn gặp khó khăn trong việc ôn luyện và thi lấy chứng chỉ.
          </p>

          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                {item.icon}
                <span className="text-gray-800 font-medium md:text-xl">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Images */}
        <div className="shrink-0 w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden mb-2">
            <Image
              width={800}
              height={800}
              src="/kho-khan-3.png"
              alt="Sinh viên tốt nghiệp"
              className="w-full object-cover"
            />
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full rounded-xl overflow-hidden">
              <Image
                width={800}
                height={800}
                src="/kho-khan-1.png"
                alt="Lớp học"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full rounded-xl overflow-hidden">
              <Image
                width={800}
                height={800}
                src="/kho-khan-2.jpg"
                alt="Học tiếng Anh"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe