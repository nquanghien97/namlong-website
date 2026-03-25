import FAQItem from '@/components/FAQItem';
import { courses } from '@/data'
import Link from 'next/link';

function DotItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-gray-700 leading-relaxed">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF5C35] shrink-0" />
      {text}
    </li>
  );
}

const metaChips = [
  "6 tuần",
  "24 buổi học",
  "90 phút / buổi",
  "Trực tiếp & Online",
  "Cam kết đầu ra",
];

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const course = courses.find(course => course.slug === slug)
  if (!course) return (
    <div className="py-16 md:py-8">
      <p>Không tìm thấy khóa học!</p>
    </div>
  )
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-gray-400 mb-7 tracking-wide">
        <Link href="/khoa-hoc" className="hover:text-[#C9A96E] text-gray-500 duration-300 underline">
          <span className="">Khoá học</span>
        </Link>
        <span>/</span>
        <span>{course.title}</span>
      </nav>

      {/* Hero */}
      <div className="border-l-[3px] border-[#FF5C35] pl-5 mb-7">
        <span className="inline-flex items-center gap-1.5 bg-[#FFF2EE] text-[#993C1D] text-[11px] font-medium tracking-widest px-2.5 py-1 rounded border border-[#F0997B] mb-3">
          {course.tag} · VSTEP
        </span>
        <h1 className="text-2xl font-medium text-gray-900 leading-snug mb-2.5">
          {course.title}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">{course.desc}</p>
      </div>

      {/* Meta chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {metaChips.map((chip) => (
          <span
            key={chip}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C35]" />
            {chip}
          </span>
        ))}
      </div>

      <div className="content" dangerouslySetInnerHTML={{ __html: course.content }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="text-lg font-bold text-[#ff5c35] uppercase mb-3">
            Mục tiêu khoá học
          </p>
          <ul className="space-y-2.5">
            {course.objectives.map((obj) => (
              <DotItem key={obj} text={obj} />
            ))}
          </ul>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="text-lg font-bold text-[#ff5c35] uppercase mb-3">
            Đầu ra đạt được
          </p>
          <ul className="space-y-2.5">
            {course.outcomes.map((o) => (
              <DotItem key={o} text={o} />
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <p className="text-lg font-bold text-[#ff5c35] uppercase mb-3">
        Câu hỏi thường gặp
      </p>
      <div className="mb-8">
        {course.faqs.map((faq) => (
          <FAQItem key={faq.question} faq={faq} />
        ))}
      </div>

      {/* CTA bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4">
        <div>
          <p className="text-lg font-bold text-[#ff5c35] uppercase mb-1">Học phí khoá học</p>
          <p className="text-xl font-medium text-gray-900 font-serif">
            {course.price}
          </p>
        </div>
        <div className="flex gap-2.5">
          <Link href="/khoa-hoc" className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Tìm hiểu thêm
          </Link>
          <Link href={`/lien-he`} className="cursor-pointer px-5 py-2.5 rounded-lg bg-[#C9A96E] text-sm font-semibold hover:bg-[#E8C98A] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A96E]/20">
            Đăng ký ngay →
          </Link>
        </div>
      </div>
    </main>
  )
}

export default page