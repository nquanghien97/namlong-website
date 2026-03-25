import Image from "next/image";

const schedules = [
  {
    name: "ĐẠI HỌC",
    subName: "VĂN LANG",
    logoBg: "bg-red-700",
    logoText: "VL",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (06-08/03/2026)",
    deadline: "Chốt hồ sơ ngày 20/02/2026",
    certDays: "Cấp Bằng Sau 7 Ngày",
  },
  {
    name: "TRƯỜNG ĐẠI HỌC NGÂN HÀNG",
    subName: "THÀNH PHỐ HỒ CHÍ MINH",
    logoBg: "bg-blue-900",
    logoText: "NH",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (20-21/03/2026)",
    deadline: "Chốt hồ sơ ngày 10/03/2026",
    certDays: "Cấp bằng sau 10-12 ngày",
  },
  {
    name: "Đại Học Công Nghiệp",
    subName: "Thành phố Hồ Chí Minh",
    logoBg: "bg-blue-700",
    logoText: "IUH",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (28,29/03/2026)",
    deadline: "Chốt hồ sơ ngày 15/03/2026",
    certDays: "Cấp bằng sau 14 ngày",
  },
  {
    name: "SGU Đại Học Sài Gòn",
    logoBg: "bg-blue-600",
    logoText: "SGU",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (28/02/2026)",
    deadline: "Chốt hồ sơ ngày 10/02/2026",
    certDays: "Cấp bằng sau 10-14 ngày",
  },
  {
    name: "Đại Học Sư Phạm",
    subName: "Thành Phố Hồ Chí Minh",
    logoBg: "bg-red-800",
    logoText: "SP",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (15-16/03/2026)",
    deadline: "Chốt hồ sơ ngày 05/03/2026",
    certDays: "Cấp bằng sau 10-12 ngày",
  },
  {
    name: "Trường ĐH Tây Nguyên",
    subName: "Trung Tâm Ngoại Ngữ",
    logoBg: "bg-green-800",
    logoText: "TN",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (22/03/2026)",
    deadline: "Chốt hồ sơ ngày 12/03/2026",
    certDays: "Cấp bằng sau 14 ngày",
  },
  {
    name: "UEH Đại Học Kinh Tế",
    subName: "Thành Phố Hồ Chí Minh",
    logoBg: "bg-blue-800",
    logoText: "UEH",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (01/04/2026)",
    deadline: "Chốt hồ sơ ngày 20/03/2026",
    certDays: "Cấp bằng sau 10-12 ngày",
  },
  {
    name: "ĐẠI HỌC CẦN THƠ",
    subName: "Can Tho University",
    logoBg: "bg-green-700",
    logoText: "CTU",
    image: "/van-lang.jpg",
    examDate: "Đợt Thi Gần Nhất (05/04/2026)",
    deadline: "Chốt hồ sơ ngày 25/03/2026",
    certDays: "Cấp bằng sau 10-14 ngày",
  },
];

export default function ExamSchedule() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A96E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
          <span className="font-mono-dm text-[#C9A96E] font-bold text-xl md:text-2xl tracking-widest uppercase">Lịch thi sắp tới</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="font-display text-[#1A365D] text-3xl md:text-5xl font-bold">
            Lịch thi tại{" "}
            <span className="italic text-gradient-gold">các trường Đại học</span>
          </h2>
          {/* <div className="text-center">
            <a href="#" className="text-[#C9A96E] hover:text-[#E8C98A] transition-colors flex items-center gap-2 font-medium">
              Xem toàn bộ lịch thi
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div> */}
        </div>

        <p className="mb-4 text-center italic">Với hơn 30+ trường tổ chức thi và cấp chứng chỉ của bộ giáo dục. Giá trị sử dụng toàn quốc yên tâm xét tuyển bổ sung hồ sơ.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {schedules.map((uni) => (
            <div key={uni.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Square image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  width={800}
                  height={800}
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover"
                />
                {/* Logo overlay */}
                <div className="absolute bottom-3 left-3 bg-white rounded-lg px-2 py-1.5 flex items-center gap-2 shadow max-w-[85%]">
                  <div
                    className={`${uni.logoBg} rounded-md w-7 h-7 flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-[9px] font-bold leading-none text-center">
                      {uni.logoText}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate">
                      {uni.name}
                    </p>
                    {uni.subName && (
                      <p className="text-[9px] text-gray-500 leading-tight truncate">
                        {uni.subName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-3 py-3 space-y-0.5">
                <p className="text-blue-600 text-xs font-semibold leading-snug">
                  {uni.examDate}
                </p>
                <p className="text-red-600 text-xs font-semibold leading-snug">
                  {uni.deadline}
                </p>
                <p className="text-gray-400 text-xs leading-snug pt-0.5">
                  {uni.certDays}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}