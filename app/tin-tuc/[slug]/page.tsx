import Image from "next/image";
import { blogs } from "@/data";
import Link from "next/link";

function tagBg(hex: string): string {
  return hex + "1A"; // 10% opacity background
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogs.find(b => b.slug === slug)
  if (!blog) return (
    <div className="py-16 md:py-8">
      <p>Không tìm thấy tin tức!</p>
    </div>
  )

  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-7 tracking-wide">
        <Link
          href="/tin-tuc"
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          Blog
        </Link>
        <span>/</span>
        <span className="truncate max-w-60">{blog.title}</span>
      </nav>

      {/* Hero */}
      <div
        className="border-l-[3px] pl-5 mb-7"
        style={{ borderColor: blog.tagColor }}
      >
        <span
          className="inline-block text-[11px] font-medium tracking-widest px-2.5 py-1 rounded border mb-3"
          style={{
            color: blog.tagColor,
            backgroundColor: tagBg(blog.tagColor),
            borderColor: blog.tagColor + "40",
          }}
        >
          {blog.tag}
        </span>
        <h1 className="text-2xl font-medium text-gray-900 leading-snug mb-2.5 font-serif">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">{blog.excerpt}</p>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-8">
        <span className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: blog.tagColor }}
          />
          {blog.date}
        </span>
        <span className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: blog.tagColor }}
          />
          {blog.readTime}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-8 border border-gray-100">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <hr className="border-gray-100 mb-8" />

      {/* Content */}
      <div
        className="
          prose prose-sm max-w-none
          prose-headings:font-medium prose-headings:text-gray-900 prose-headings:font-serif
          prose-h2:text-xl prose-h2:mb-4 prose-h2:mt-8
          prose-h3:text-base prose-h3:mb-3 prose-h3:mt-6
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:text-gray-600 prose-ul:leading-relaxed prose-ul:space-y-1.5
          prose-li:marker:text-gray-300
          prose-strong:text-gray-800 prose-strong:font-medium
          content
        "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <hr className="border-gray-100 mt-10 mb-7" />

      {/* Back CTA */}
      <Link
        href="/tin-tuc"
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <span>←</span>
        <span>Xem tất cả bài viết</span>
      </Link>
    </article>
  );
}