import { Blog, blogs } from "@/data";
import Image from "next/image";
import Link from "next/link";

// ── Blog Card ──────────────────────────────────────────────────

interface BlogCardProps {
  blog: Blog;
}

function tagBg(hex: string): string {
  return hex + "1A"; // 10% opacity background
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/tin-tuc/${blog.slug}`}
      className="group w-full text-left bg-white border border-[#ccc] rounded-xl overflow-hidden hover:border-gray-200 transition-colors"
    >
      <div className="aspect-video bg-[#ccc] overflow-hidden">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span
          className="inline-block text-[11px] font-medium tracking-widest px-2 py-0.5 rounded mb-2.5"
          style={{ color: blog.tagColor, backgroundColor: tagBg(blog.tagColor) }}
        >
          {blog.tag}
        </span>
        <h3 className="text-sm font-medium text-gray-900 leading-snug mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-2 text-[11px] text-gray-800">
          <span>{blog.date}</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

// ── Blog List ──────────────────────────────────────────────────

export default function BlogList() {
  const featured = blogs.find((b) => b.big);
  const rest = blogs.filter((b) => !b.big);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="border-l-[3px] border-[#FF5C35] pl-5 mb-8">
        <p className="text-[11px] font-medium tracking-[.08em] text-gray-400 uppercase mb-1">
          Kiến thức & Tư vấn
        </p>
        <h1 className="text-2xl font-medium text-gray-900 font-serif">
          Blog VSTEP
        </h1>
      </div>

      {/* Featured */}
      {featured && (
        <Link
          href={`/tin-tuc/${featured.slug}`}

        >
          <div className="group w-full text-left bg-white border border-[#ccc] rounded-xl overflow-hidden mb-6 hover:border-[#f1f1f1] transition-colors">
            <div className="aspect-16/7 bg-[#ccc] overflow-hidden">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <span
                className="inline-block text-[11px] font-medium tracking-widest px-2 py-0.5 rounded mb-3"
                style={{
                  color: featured.tagColor,
                  backgroundColor: tagBg(featured.tagColor),
                }}
              >
                {featured.tag}
              </span>
              <h2 className="text-lg font-medium text-gray-900 leading-snug mb-2">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-3 line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      <hr className="border-gray-100 mb-6" />

      {/* Grid */}
      <p className="text-[11px] font-medium tracking-[.08em] text-gray-400 uppercase mb-4">
        Bài viết khác
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rest.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
};