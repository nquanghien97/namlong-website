import Benefit from "@/components/Benefit"
import Courses from "@/components/Courses"
import Image from "next/image"

const teachers = [
  {
    image: '/team01.jpg',
    name: 'Cô Amenda',
    des: 'Giáo viên IELTS',
    color: "#C9A96E",
  },
  {
    image: '/team02.jpg',
    name: 'Cô Linh',
    des: 'Giáo viên VSTEP B1 B2',
    color: "#4ECDC4",
  },
  {
    image: '/team03.jpg',
    name: 'Thầy Phi',
    des: 'Nhà đồng sáng lập',
    color: "#FF5C35",
  }
]

function page() {
  return (
    <main>
      <Courses isCoursesPage />
      <Benefit />
      <section className="py-8 md:py-16 bg-[#f1f1f1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
                <span className="font-mono-dm text-[#C9A96E] text-xl md:text-2xl font-bold tracking-widest uppercase">Giáo Viên Đồng Hành Cùng Bạn</span>
              </div>
              <h2 className="font-display text-[#1A365D] text-3xl md:text-5xl font-bold mb-4">
                Cho Đến Khi Đạt{" "}
                <span className="italic text-gradient-gold">Mục Tiêu</span>
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <p className="">
                Đội ngũ giáo viên nhiều năm kinh nghiệm trong lĩnh vực Ngoại Ngữ sẽ Đào Tạo từng học viên đi đúng lộ trình phù hợp.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teachers.map((t, i) => (
              <div
                key={i}
                className="group overflow-hidden relative rounded-2xl border border-black/6 bg-white card-hover"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-8 font-display text-6xl font-black opacity-40 leading-none">&quot;</div>

                {/* Author */}
                <div className="flex flex-col items-center gap-3 mb-2">
                  <div
                    className="rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    <Image src={t.image} alt={t.name} width={800} height={800} />
                  </div>
                  <div className="flex justify-between items-center w-full px-6 py-2">
                    <div className="font-semibold text-xl">{t.name}</div>
                    <div className="">{t.des}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page