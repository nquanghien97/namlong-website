interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DocumentIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="#FEE9E7" />
    <path d="M13 10h10l6 6v14a2 2 0 01-2 2H13a2 2 0 01-2-2V12a2 2 0 012-2z" fill="#F26B5B" />
    <path d="M23 10l6 6h-6V10z" fill="#e05546" />
    <rect x="15" y="20" width="10" height="1.5" rx="0.75" fill="white" />
    <rect x="15" y="23" width="8" height="1.5" rx="0.75" fill="white" />
    <rect x="15" y="26" width="6" height="1.5" rx="0.75" fill="white" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="#FEE9E7" />
    <rect x="11" y="12" width="18" height="18" rx="2" fill="#F26B5B" />
    <rect x="14" y="15" width="4" height="4" rx="0.5" fill="white" />
    <rect x="22" y="15" width="4" height="4" rx="0.5" fill="white" />
    <rect x="14" y="22" width="4" height="4" rx="0.5" fill="white" />
    <rect x="22" y="22" width="4" height="4" rx="0.5" fill="white" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="#FEE9E7" />
    <path d="M20 12a8 8 0 00-8 8v4a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2h-1v-1a5 5 0 0110 0v1h-1a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-4a8 8 0 00-8-8z" fill="#F26B5B" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="#FEE9E7" />
    <circle cx="16" cy="17" r="4" fill="#F26B5B" />
    <circle cx="26" cy="17" r="3" fill="#f58a7e" />
    <path d="M8 30c0-4 3.6-7 8-7s8 3 8 7" fill="#F26B5B" />
    <path d="M24 23c2.5 0 6 1.5 6 5" stroke="#f58a7e" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="29" cy="20" r="1.5" fill="#f58a7e" />
    <rect x="26" y="26" width="2" height="2" rx="1" fill="#F26B5B" />
  </svg>
);

const benefits: BenefitCard[] = [
  {
    icon: <DocumentIcon />,
    title: "Tài liệu bám sát",
    description: "Ôn đúng trọng tâm giúp học viên sớm thi đạt kết quả chỉ trong 3-4 tuần.",
  },
  {
    icon: <BuildingIcon />,
    title: "Hội đồng đạt chuẩn",
    description:
      "Các đơn vị được bộ giáo dục phối hợp tổ chức thi và cấp chứng chỉ có giá trị toàn quốc.",
  },
  {
    icon: <HeadphonesIcon />,
    title: "Kèm đến khi đạt",
    description:
      "Dành riêng cho học viên cần thi gấp hoặc bỏ lâu ít sử dụng. Yên tâm tiến bộ thi sớm đạt bằng nộp cơ quan.",
  },
  {
    icon: <GroupIcon />,
    title: "Hỗ trợ 100% đầu ra",
    description:
      "Có lớp đặc biệc dành cho học viên mất gốc. Bao lẽ phí thi cam kết đầu ra ngay lần thi đầu tiên.",
  },
];

function Benefit() {
  return (
    <section className="bg-[#f1f1f1] py-8 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/2 px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
            <span className="font-mono-dm text-[#C9A96E] font-bold text-xl md:text-2xl tracking-widest uppercase">Quyền lợi học viên</span>
          </div>
          <h2 className="font-display text-[#1A365D] text-3xl md:text-5xl font-bold mb-4">
            Khi theo học tại{" "}
            <span className="italic text-gradient-gold">Nam Long</span>
          </h2>
          <div className="mb-4">
            <p className="mb-2">Bên cạnh các lớp ôn luyện nhóm từ 8-10 học viên. Trung tâm có lớp ôn luyện cấp tốc giúp các bạn cần thi sớm chỉ trong 2-3 tuần. Để kịp thời có chứng chỉ bổ sung hồ sơ.</p>
            <p className="mb-2">Trung tâm có chính sách ôn luyện cam kết đầu ra bao lệ phí thi đến khi đạt chứng chỉ. Kèm theo cam kết hoàn phí 100% nếu học viên ôn luyện tại trung tâm nhưng thi không đạt kết quả. </p>
            <p className="mb-2">Ngoài ra đối với các bạn học viên mất gốc sẽ được kèm tăng cường riêng 1-1 hoặc 1-3 để nhanh chóng đủ điều kiện dự thi. Lấy bằng sớm nộp vào cơ quan.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-up delay-300">
            <a
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
            </a>
          </div>
        </div>
        <div className="w-full lg:w-auto lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 px-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-2">
                <div className="mb-4">{item.icon}</div>
              <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefit