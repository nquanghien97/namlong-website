import { generateSlug } from "./utils/generateSlug";

export interface Blog {
  tag: string,
  tagColor: string,
  title: string,
  slug: string,
  excerpt: string,
  thumbnail: string,
  content: string,
  date: string
  readTime: string
  big: boolean
}

export const blogs: Blog[] = [
  {
    tag: "TƯ VẤN",
    tagColor: "#FF5C35",
    title: "Nên Thi Tiếng Anh B1 hay A2",
    slug: generateSlug("Nên Thi Tiếng Anh B1 hay A2"),
    excerpt: "Bổ sung hồ sơ xin việc hay thi tuyển công chức thường yêu cầu tiếng Anh A2 (Bậc 2/6). Nhưng nếu làm một người đã bỏ lâu ít sử dụng việc lựa chọn thi tiếng Anh A2 có phải là một lựa chọn tốt?",
    thumbnail: "/blog1.png",
    date: "12 Tháng 7, 2024",
    readTime: "5 phút đọc",
    big: true,
    content: `
      <h2>Nên Thi Tiếng Anh A2 hay B1?</h2>
      <p>Khi bổ sung hồ sơ xin việc hoặc thi tuyển công chức, nhiều người thắc mắc nên chọn bậc A2 hay B1. Câu trả lời phụ thuộc vào mục tiêu và trình độ thực tế của bạn.</p>

      <h3>Chứng Chỉ A2 (Bậc 2/6) Phù Hợp Với Ai?</h3>
      <p>Chứng chỉ A2 thường được yêu cầu trong các hồ sơ tuyển dụng cơ bản và thi công chức cấp xã, phường. Nếu bạn đã lâu không học tiếng Anh và trình độ còn hạn chế, A2 là lựa chọn an toàn hơn.</p>
      <ul>
        <li>Yêu cầu trình độ thấp hơn, dễ đạt hơn</li>
        <li>Thời gian ôn luyện ngắn (2–4 tuần)</li>
        <li>Phù hợp với vị trí công chức cấp cơ sở</li>
      </ul>

      <h3>Chứng Chỉ B1 (Bậc 3/6) Có Gì Khác Biệt?</h3>
      <p>B1 có giá trị cao hơn và được chấp nhận rộng rãi hơn. Nếu bạn đầu tư thêm một chút thời gian, B1 sẽ mở ra nhiều cơ hội hơn so với A2.</p>
      <ul>
        <li>Được chấp nhận ở nhiều cơ quan, doanh nghiệp hơn</li>
        <li>Tương đương IELTS 4.0–4.5</li>
        <li>Bắt buộc cho một số vị trí công chức cấp huyện trở lên</li>
      </ul>

      <h3>Lời Khuyên</h3>
      <p>Nếu bạn có từ 1–2 tháng để ôn luyện, hãy nhắm thẳng vào B1. Chi phí và thời gian bỏ ra không chênh lệch quá nhiều nhưng giá trị chứng chỉ cao hơn đáng kể. Nếu thời gian gấp dưới 2 tuần, A2 là lựa chọn thực tế hơn.</p>
    `,
  },
  {
    tag: "HỌC THUẬT",
    tagColor: "#4ECDC4",
    title: "Học Tiếng Anh B2 Cho Thạc Sĩ",
    slug: generateSlug("Học Tiếng Anh B2 Cho Thạc Sĩ"),
    excerpt: "Nhiều anh chị nộp cần bổ sung đầu ra trước khi bảo vệ tốt nghiệp Thạc Sĩ. Cần bổ sung chứng chỉ tiếng Anh B2. Có lộ trình nào giúp bạn thi sớm đạt chứng chỉ để bảo vệ. Tham khảo ngay bài viết này.",
    thumbnail: "/blog2.png",
    date: "8 Tháng 7, 2024",
    readTime: "3 phút đọc",
    big: false,
    content: `
      <h2>Lộ Trình Học B2 Cho Học Viên Cao Học</h2>
      <p>Yêu cầu đầu ra tiếng Anh B2 (Bậc 4/6) là điều kiện bắt buộc tại nhiều trường đại học để bảo vệ luận văn Thạc Sĩ. Dưới đây là lộ trình giúp bạn đạt chứng chỉ nhanh nhất.</p>

      <h3>B2 Là Gì?</h3>
      <p>B2 tương đương IELTS 5.5–6.0, là mức độ có thể giao tiếp tự tin trong môi trường học thuật và công việc. Trong kỳ thi VSTEP, bạn cần đạt điểm trung bình từ 6.0–7.5/10.</p>

      <h3>Lộ Trình 3 Tháng Đạt B2</h3>
      <ul>
        <li><strong>Tháng 1:</strong> Củng cố ngữ pháp, từ vựng học thuật, luyện Listening cơ bản</li>
        <li><strong>Tháng 2:</strong> Luyện Reading, Writing theo cấu trúc bài thi VSTEP</li>
        <li><strong>Tháng 3:</strong> Luyện Speaking, làm đề thi thử và sửa lỗi</li>
      </ul>

      <h3>Mẹo Thi Đạt B2 Lần Đầu</h3>
      <p>Tập trung vào các kỹ năng Writing và Speaking vì đây là phần thí sinh thường mất điểm nhiều nhất. Luyện theo đúng format bài thi VSTEP và nên đăng ký lớp kèm có giáo viên chữa bài cụ thể.</p>
    `,
  },
  {
    tag: "TIP THI",
    tagColor: "#4ECDC4",
    title: "Cấu Trúc Bài Thi VSTEP",
    slug: generateSlug("Cấu Trúc Bài Thi VSTEP"),
    excerpt: "Lần đầu biết đến kì thi VSTEP của bộ giáo dục không biết cấu trúc bài thi ra sao. Làm thế nào để thi đạt kết quả ngay lần đầu. Câu trả lời sẽ có trong bài viết cấu trúc bài thi B1 VSTEP này!",
    thumbnail: "/blog3.png",
    date: "12 Tháng 4, 2025",
    readTime: "6 phút đọc",
    big: false,
    content: `
      <h2>Cấu Trúc Bài Thi VSTEP Chi Tiết</h2>
      <p>VSTEP (Vietnamese Standardized Test of English Proficiency) là kỳ thi tiếng Anh chuẩn quốc gia do Bộ Giáo dục & Đào tạo ban hành. Bài thi gồm 4 kỹ năng chính.</p>

      <h3>1. Listening (Nghe) — 40 phút</h3>
      <ul>
        <li>35 câu hỏi trắc nghiệm</li>
        <li>3 phần: hội thoại ngắn, độc thoại, bài nghe dài</li>
        <li>Chỉ nghe 1 lần duy nhất</li>
      </ul>

      <h3>2. Reading (Đọc) — 60 phút</h3>
      <ul>
        <li>35 câu hỏi trắc nghiệm</li>
        <li>Đọc hiểu đoạn văn, điền từ, câu hỏi suy luận</li>
      </ul>

      <h3>3. Writing (Viết) — 60 phút</h3>
      <ul>
        <li>Task 1: Viết email/thư (khoảng 100–120 từ)</li>
        <li>Task 2: Viết bài luận (khoảng 250 từ)</li>
      </ul>

      <h3>4. Speaking (Nói) — 12 phút</h3>
      <ul>
        <li>3 phần: giới thiệu bản thân, mô tả tranh, thảo luận chủ đề</li>
        <li>Thi trực tiếp với giám khảo hoặc qua máy tính</li>
      </ul>

      <h3>Thang Điểm</h3>
      <p>Mỗi kỹ năng được chấm từ 0–10. Điểm tổng là trung bình cộng 4 kỹ năng. B1 yêu cầu đạt 4.0–5.5, B2 yêu cầu 6.0–7.5.</p>
    `,
  },
  {
    tag: "LUYỆN ĐỀ",
    tagColor: "#C9A96E",
    title: "Hướng Dẫn Giải Đề VSTEP",
    slug: generateSlug("Hướng Dẫn Giải Đề VSTEP"),
    excerpt: "Để thi đạt kết quả B1 B2 trong kì thi VSTEP có khó không? Cần thi bao nhiêu điểm thì đạt. Phương pháp ôn luyện mất thời gian bao lâu? Câu trả lời sẽ có trong bài viết hướng dẫn giải đề thi VSTEP.",
    thumbnail: "/blog4.png",
    date: "5 Tháng 7, 2025",
    readTime: "7 phút đọc",
    big: false,
    content: `
      <h2>Hướng Dẫn Giải Đề Thi VSTEP Từ A–Z</h2>
      <p>Luyện đề là bước không thể bỏ qua trước kỳ thi VSTEP. Bài viết này hướng dẫn chi tiết cách tiếp cận từng phần trong đề thi để đạt điểm cao nhất.</p>

      <h3>Cần Bao Nhiêu Điểm Để Đạt B1 / B2?</h3>
      <ul>
        <li><strong>B1:</strong> Điểm trung bình 4.0–5.5/10</li>
        <li><strong>B2:</strong> Điểm trung bình 6.0–7.5/10</li>
      </ul>

      <h3>Chiến Lược Làm Bài Listening</h3>
      <p>Đọc trước câu hỏi trong thời gian chờ, gạch dưới từ khoá, tập trung vào thông tin số liệu và tên riêng vì đây thường là đáp án trực tiếp.</p>

      <h3>Chiến Lược Làm Bài Reading</h3>
      <p>Đọc câu hỏi trước, sau đó scan (lướt nhanh) bài đọc để tìm vị trí liên quan. Không đọc toàn bộ bài trước khi biết câu hỏi hỏi gì.</p>

      <h3>Chiến Lược Writing</h3>
      <p>Task 1 nên viết đúng format thư/email, có mở đầu — thân — kết rõ ràng. Task 2 cần có luận điểm rõ ràng và ví dụ cụ thể để tăng điểm coherence.</p>

      <h3>Thời Gian Ôn Luyện Cần Thiết</h3>
      <ul>
        <li>Từ mất gốc đến B1: 2–3 tháng</li>
        <li>Từ A2 lên B1: 4–6 tuần</li>
        <li>Từ B1 lên B2: 6–8 tuần luyện chuyên sâu</li>
      </ul>
    `,
  },
  {
    tag: "KHOÁ HỌC",
    tagColor: "#9B59B6",
    title: "Lớp Kèm Cấp Tốc VSTEP",
    slug: generateSlug("Lớp Kèm Cấp Tốc VSTEP"),
    excerpt: "Bạn Đang cần bổ sung gấp chứng chỉ VSTEP nhưng chưa biết ôn luyện thi cấp tốc có thể đạt hiệu quả hay không? Câu trả lời sẽ có trong chương trình luyện thi cấp tốc VSTEP với 8 buổi.",
    thumbnail: "/blog1.png",
    date: "1 Tháng 7, 2024",
    readTime: "10 phút đọc",
    big: false,
    content: `
      <h2>Lớp Kèm Cấp Tốc VSTEP — 8 Buổi Đạt Chứng Chỉ</h2>
      <p>Chương trình luyện thi cấp tốc VSTEP được thiết kế dành cho những học viên cần bổ sung chứng chỉ gấp trong thời gian ngắn nhất có thể.</p>

      <h3>Chương Trình 8 Buổi Gồm Những Gì?</h3>
      <ul>
        <li><strong>Buổi 1–2:</strong> Tổng quan cấu trúc đề thi, kỹ năng Listening</li>
        <li><strong>Buổi 3–4:</strong> Kỹ năng Reading — chiến lược đọc nhanh, xử lý câu hỏi khó</li>
        <li><strong>Buổi 5–6:</strong> Kỹ năng Writing — luyện viết task 1 và task 2 có chữa bài</li>
        <li><strong>Buổi 7:</strong> Kỹ năng Speaking — luyện nói theo format thi thật</li>
        <li><strong>Buổi 8:</strong> Thi thử toàn bộ 4 kỹ năng + sửa lỗi tổng hợp</li>
      </ul>

      <h3>Hiệu Quả Có Thực Sự Không?</h3>
      <p>Với học viên đã có nền tảng A2 trở lên, 8 buổi học tập trung đủ để nắm vững format và chiến thuật làm bài, giúp tăng đáng kể xác suất đậu ngay lần đầu.</p>

      <h3>Đăng Ký Ở Đâu?</h3>
      <p>Liên hệ trực tiếp với trung tâm để được tư vấn lịch học phù hợp với thời gian thi dự kiến của bạn. Lớp giới hạn 5–8 học viên để đảm bảo chất lượng kèm cặp.</p>
    `,
  },
  {
    tag: "TIN HỌC",
    tagColor: "#9B59B6",
    title: "Luyện thi Tin Học Cấp Tốc",
    slug: generateSlug("Luyện thi Tin Học Cấp Tốc"),
    thumbnail: "/tin-hoc.png",
    excerpt: "Cần bổ sung chứng chỉ tin học cở bản & nâng cao trước khi tốt nghiệp. Xin việc làm tại các cơ quan nhà nước. Phương nào nào giúp bạn thi đạt ngay lần đầu tiên mà không cần phải ôn tập nhiều.",
    date: "1 Tháng 7, 2024",
    readTime: "10 phút đọc",
    big: false,
    content: `
      <h2>Luyện Thi Tin Học Cấp Tốc — Đạt Ngay Lần Đầu</h2>
      <p>Chứng chỉ tin học IC3 hoặc MOS là điều kiện bắt buộc tại nhiều cơ quan nhà nước và doanh nghiệp. Chương trình luyện thi cấp tốc giúp bạn đạt chứng chỉ mà không cần ôn tập dài hơi.</p>

      <h3>Các Chứng Chỉ Tin Học Phổ Biến</h3>
      <ul>
        <li><strong>IC3:</strong> Tin học cơ bản, phù hợp hồ sơ xin việc và tốt nghiệp</li>
        <li><strong>MOS (Word, Excel, PowerPoint):</strong> Tin học văn phòng nâng cao</li>
        <li><strong>Chứng chỉ theo chuẩn Bộ GDĐT:</strong> Yêu cầu tại các trường đại học</li>
      </ul>

      <h3>Phương Pháp Thi Đạt Lần Đầu</h3>
      <p>Thay vì học lý thuyết dàn trải, chương trình tập trung vào đúng dạng câu hỏi xuất hiện trong đề thi thật. Học viên được luyện trực tiếp trên phần mềm thi mô phỏng.</p>

      <h3>Thời Gian Ôn Luyện</h3>
      <ul>
        <li>Người đã biết tin học cơ bản: 3–5 buổi</li>
        <li>Người chưa có nền tảng: 8–10 buổi</li>
      </ul>

      <h3>Đối Tượng Phù Hợp</h3>
      <p>Sinh viên sắp tốt nghiệp, người đi xin việc tại cơ quan nhà nước, hoặc bất kỳ ai cần chứng chỉ tin học hợp lệ trong thời gian ngắn.</p>
    `,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  level: string;
  tag: string;
  image: string;
  tagColor: string;
  title: string;
  desc: string;
  duration: string;
  sessions: string;
  price: string;
  highlight: boolean;
  content: string;
  objectives: string[];
  outcomes: string[];
  faqs: FAQ[];
}

export const courses: Course[] = [
  {
    slug: "tieng-anh-a2",
    level: "Tiếng Anh A2",
    tag: "Bậc 2/6",
    image: "/course-a2.png",
    tagColor: "#4ECDC4",
    title: "Tiếng Anh A2 (bậc 2/6)",
    desc: "Dành cho nhu cầu bổ sung hồ sơ xét tuyển công chức viên chức nhà nước. Điều kiện đầu vào ra tại các trường cao đẳng, đại học.",
    duration: "4 tuần",
    sessions: "16 buổi",
    price: "2.5 Triệu – 3 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Bổ sung hồ sơ xét tuyển công chức, viên chức nhà nước</li>
        <li>Điều kiện đầu vào, đầu ra tại các trường cao đẳng, đại học</li>
      </ul>
    `,
    objectives: [
      "Nắm vững ngữ pháp và từ vựng cơ bản theo chủ đề thi VSTEP A2",
      "Làm chủ chiến lược làm bài 4 kỹ năng Listening, Reading, Writing, Speaking",
      "Đạt điểm trung bình 2.0–3.5/10 trong kỳ thi VSTEP",
      "Tự tin giao tiếp tiếng Anh ở mức cơ bản trong cuộc sống hàng ngày",
    ],
    outcomes: [
      "Chứng chỉ VSTEP A2 (Bậc 2/6) được Bộ GD&ĐT công nhận",
      "Đủ điều kiện xét tốt nghiệp Cao Đẳng, Đại Học",
      "Đáp ứng yêu cầu hồ sơ xét tuyển công chức, viên chức nhà nước",
      "Cam kết đào tạo lại miễn phí nếu chưa đạt kết quả",
    ],
    faqs: [
      {
        question: "Tôi lâu không học tiếng Anh có theo được không?",
        answer: "Khoá A2 được thiết kế cho người mất gốc hoặc lâu không học. Giáo viên sẽ ôn lại từ nền tảng cơ bản nhất nên bạn hoàn toàn có thể theo kịp.",
      },
      {
        question: "Học xong bao lâu thì đi thi được?",
        answer: "Sau 4 tuần học, học viên đã đủ kiến thức để đăng ký thi. Trung tâm sẽ tư vấn lịch thi phù hợp ngay trong quá trình học.",
      },
      {
        question: "Chứng chỉ A2 có giá trị bao lâu?",
        answer: "Chứng chỉ VSTEP A2 do Bộ GD&ĐT cấp có giá trị vĩnh viễn, không có thời hạn hết hạn.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại hoàn toàn miễn phí cho đến khi đạt chứng chỉ theo mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "tieng-anh-b1",
    level: "Tiếng Anh B1",
    tag: "Bậc 3/6",
    image: "/course-b1.png",
    tagColor: "#FF5C35",
    title: "Tiếng Anh B1 (bậc 3/6)",
    desc: "Dành cho đối tượng sinh viên cần bằng để tốt nghiệp ra trường. Chuẩn bị hồ sơ thi tuyển nâng hạng ngạch nhà nước.",
    duration: "6 tuần",
    sessions: "24 buổi",
    price: "2.5 Triệu – 3.2 Triệu/Khoá",
    highlight: true,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Sinh viên cần bằng B1 để tốt nghiệp ra trường</li>
        <li>Người chuẩn bị hồ sơ thi tuyển nâng hạng ngạch nhà nước</li>
      </ul>
    `,
    objectives: [
      "Nắm vững cấu trúc và format 4 kỹ năng bài thi VSTEP B1",
      "Làm chủ chiến lược làm bài Listening, Reading, Writing, Speaking",
      "Đạt điểm trung bình 4.0–5.5/10 trong kỳ thi VSTEP",
      "Xây dựng vốn từ vựng học thuật phù hợp cấp độ B1",
    ],
    outcomes: [
      "Chứng chỉ VSTEP B1 (Bậc 3/6) được Bộ GD&ĐT công nhận",
      "Đủ điều kiện xét tốt nghiệp Cao Đẳng, Đại Học",
      "Đáp ứng yêu cầu thi tuyển nâng hạng ngạch công chức nhà nước",
      "Cam kết hỗ trợ học lại miễn phí nếu chưa đạt",
    ],
    faqs: [
      {
        question: "Tôi mất gốc tiếng Anh có học được không?",
        answer: "Khoá B1 yêu cầu nền tảng tối thiểu tương đương A2. Nếu bạn mất gốc hoàn toàn, chúng tôi khuyên bạn nên tham gia khoá A2 trước.",
      },
      {
        question: "Học bao lâu thì có thể đi thi?",
        answer: "Sau 6 tuần học (24 buổi), học viên đã đủ kiến thức để đăng ký thi. Trung tâm sẽ tư vấn lịch thi phù hợp ngay trong quá trình học.",
      },
      {
        question: "Chứng chỉ B1 có giá trị bao lâu?",
        answer: "Chứng chỉ VSTEP B1 do Bộ GD&ĐT cấp có giá trị vĩnh viễn, không có thời hạn hết hạn.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại hoàn toàn miễn phí cho đến khi đạt chứng chỉ theo mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "tieng-anh-b2",
    level: "Tiếng Anh B2",
    tag: "Bậc 4/6",
    image: "/course-b2.png",
    tagColor: "#9B59B6",
    title: "Tiếng Anh B2 (bậc 4/6)",
    desc: "Dành cho thạc sĩ, tiến sĩ cần bổ sung chuẩn tiếng Anh B2 đầu ra tương đương IELTS 5.5–6.0, TOEFL 46–93 điểm trước khi bảo vệ.",
    duration: "8 tuần",
    sessions: "32 buổi",
    price: "3.5 Triệu – 4.5 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Thạc sĩ, tiến sĩ cần bổ sung chứng chỉ B2 trước khi bảo vệ</li>
        <li>Người cần chuẩn tiếng Anh tương đương IELTS 5.5–6.0 hoặc TOEFL 46–93</li>
      </ul>
    `,
    objectives: [
      "Nắm vững toàn bộ cấu trúc đề thi VSTEP cấp độ B2",
      "Viết luận học thuật đạt chuẩn B2 với lập luận rõ ràng, mạch lạc",
      "Giao tiếp và thảo luận chủ đề học thuật, chuyên ngành bằng tiếng Anh",
      "Đạt điểm trung bình 6.0–7.5/10 trong kỳ thi VSTEP",
    ],
    outcomes: [
      "Chứng chỉ VSTEP B2 (Bậc 4/6) tương đương IELTS 5.5–6.0, TOEFL 46–93",
      "Đủ điều kiện đầu ra bảo vệ luận văn Thạc Sĩ, Tiến Sĩ",
      "Đáp ứng yêu cầu nâng ngạch công chức cấp cao",
      "Cam kết đầu ra đến khi đạt kết quả mục tiêu",
    ],
    faqs: [
      {
        question: "B2 khác B1 như thế nào?",
        answer: "B2 yêu cầu kỹ năng viết và nói ở mức học thuật cao hơn, tương đương IELTS 5.5–6.0. Bài thi khó hơn và yêu cầu lập luận sâu hơn so với B1.",
      },
      {
        question: "Tôi đã có B1 thì mất bao lâu để lên B2?",
        answer: "Nếu đã có chứng chỉ B1, bạn có thể rút ngắn lộ trình xuống còn 4–6 tuần tùy trình độ thực tế. Liên hệ trung tâm để được kiểm tra đầu vào miễn phí.",
      },
      {
        question: "Trường nào yêu cầu B2 để bảo vệ luận văn?",
        answer: "Hầu hết các trường Đại học công lập hiện nay yêu cầu chuẩn đầu ra B2 hoặc tương đương cho học viên Thạc Sĩ. Bạn nên kiểm tra quy định cụ thể của trường mình.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại hoàn toàn miễn phí cho đến khi đạt chứng chỉ theo mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "tin-hoc-co-ban-nang-cao",
    level: "Tin Học",
    tag: "Cơ Bản - Nâng Cao",
    image: "/tinhoc.jpg",
    tagColor: "#C9A96E",
    title: "Tin Học Cơ Bản, Nâng Cao",
    desc: "Chứng chỉ Tin học là một trong các điều kiện xét Tốt Nghiệp, xin việc tại các cơ quan, doanh nghiệp. Lớp Tin Học Cấp Tốc giúp học viên ôn và thi ngay trong tuần.",
    duration: "3 tuần",
    sessions: "10 buổi",
    price: "1.5 Triệu – 2 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Sinh viên cần chứng chỉ tin học để xét tốt nghiệp</li>
        <li>Người xin việc tại cơ quan Nhà Nước, doanh nghiệp</li>
        <li>Người cần nâng cao kỹ năng Word, Excel, PowerPoint</li>
      </ul>
    `,
    objectives: [
      "Sử dụng thành thạo Word, Excel, PowerPoint theo chuẩn thi",
      "Nắm vững cấu trúc đề thi và dạng câu hỏi thường gặp",
      "Luyện thi trực tiếp trên phần mềm mô phỏng đề thi thật",
      "Đạt điểm đầu ra theo chuẩn IC3 hoặc MOS ngay lần đầu",
    ],
    outcomes: [
      "Chứng chỉ Tin học IC3 hoặc MOS được công nhận toàn quốc",
      "Đủ điều kiện xét tốt nghiệp tại các trường Cao Đẳng, Đại Học",
      "Đáp ứng yêu cầu hồ sơ xin việc tại cơ quan Nhà Nước, doanh nghiệp",
      "Nâng cao kỹ năng tin học văn phòng phục vụ công việc thực tế",
    ],
    faqs: [
      {
        question: "Tôi không biết gì về máy tính có học được không?",
        answer: "Lớp cơ bản được thiết kế cho người chưa có nền tảng. Giáo viên sẽ hướng dẫn từ những thao tác căn bản nhất trên máy tính.",
      },
      {
        question: "IC3 và MOS khác nhau như thế nào?",
        answer: "IC3 kiểm tra kiến thức tin học tổng quát gồm hệ điều hành, internet và ứng dụng văn phòng. MOS tập trung chuyên sâu vào một ứng dụng cụ thể như Word, Excel hoặc PowerPoint.",
      },
      {
        question: "Học bao lâu thì thi được?",
        answer: "Chương trình 3 tuần (10 buổi) là đủ để thi. Nếu bạn đã có nền tảng, có thể rút ngắn xuống 5–7 buổi.",
      },
      {
        question: "Chứng chỉ tin học có thời hạn không?",
        answer: "Chứng chỉ IC3 và MOS có giá trị vĩnh viễn và được công nhận trên toàn quốc.",
      },
    ],
  },
  {
    slug: "ielts-nen-tang",
    level: "IELTS Nền Tảng",
    tag: "4.0 - 4.5",
    image: "/ielts-nentang.jpg",
    tagColor: "#4ECDC4",
    title: "IELTS Nền Tảng 4.0-4.5",
    desc: "Với IELTS 4.0-4.5 học viên sẽ được miễn thi Tiếng Anh THPT, dùng để đánh giá và đầu ra trường CĐ ĐH. Khoá ôn luyện giúp bạn có được nền tảng Tiếng Anh vững chắc.",
    duration: "6 tuần",
    sessions: "24 buổi",
    price: "3 Triệu – 3.5 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Học sinh THPT muốn miễn thi môn Tiếng Anh</li>
        <li>Sinh viên CĐ, ĐH cần đầu ra IELTS 4.0–4.5</li>
        <li>Người mất gốc tiếng Anh muốn xây dựng lại nền tảng</li>
      </ul>
    `,
    objectives: [
      "Xây dựng vốn ngữ pháp và từ vựng nền tảng theo chuẩn IELTS",
      "Làm quen và luyện tập 4 kỹ năng theo đúng format bài thi IELTS",
      "Đạt band 4.0–4.5 trong kỳ thi IELTS chính thức",
      "Tạo nền tảng vững chắc để tiếp tục nâng band lên 5.0+",
    ],
    outcomes: [
      "IELTS 4.0–4.5 đủ điều kiện miễn thi môn Tiếng Anh THPT",
      "Đáp ứng yêu cầu đầu ra tại các trường Cao Đẳng, Đại Học",
      "Nền tảng vững để tiếp tục học lên band 5.0–5.5+",
    ],
    faqs: [
      {
        question: "IELTS 4.0 có miễn thi THPT được không?",
        answer: "Có. Theo quy định hiện hành, IELTS 4.0 trở lên được chấp nhận để xét miễn thi môn Tiếng Anh trong kỳ thi THPT Quốc Gia.",
      },
      {
        question: "Tôi học yếu tiếng Anh có theo được không?",
        answer: "Khoá này phù hợp với người mất gốc hoặc nền tảng yếu. Chương trình ôn từ ngữ pháp cơ bản trước khi luyện kỹ năng thi.",
      },
      {
        question: "Sau khoá này có thể thi IELTS luôn không?",
        answer: "Có thể đăng ký thi ngay sau khoá học. Trung tâm sẽ hỗ trợ tư vấn lịch thi và địa điểm thi phù hợp.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt band mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "toeic-400-450",
    level: "TOEIC",
    tag: "400 - 450+",
    image: "/toeic-400-450.jpg",
    tagColor: "#9B59B6",
    title: "TOEIC 400-450+",
    desc: "Lớp ôn luyện TOEIC 400-450+ 2 kỹ năng dành cho học viên xét Tốt Nghiệp, bổ sung vào CV xin việc và tham gia ôn luyện để cải thiện trình độ Tiếng Anh.",
    duration: "4 tuần",
    sessions: "16 buổi",
    price: "2 Triệu – 2.5 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Sinh viên cần TOEIC đầu ra để tốt nghiệp</li>
        <li>Người mới đi làm muốn bổ sung chứng chỉ vào CV</li>
        <li>Người có nền tảng tiếng Anh cơ bản muốn thi lấy điểm nhanh</li>
      </ul>
    `,
    objectives: [
      "Nắm vững chiến lược làm bài Listening Part 1–4 và Reading Part 5–7",
      "Mở rộng từ vựng TOEIC theo các chủ đề thường gặp trong đề thi",
      "Luyện phản xạ làm bài trong giới hạn thời gian chuẩn thi",
      "Đạt tổng điểm TOEIC 2 kỹ năng từ 400–450+",
    ],
    outcomes: [
      "TOEIC 2 kỹ năng 400–450+ được IIG/ETS công nhận",
      "Đủ điều kiện xét tốt nghiệp tại các trường yêu cầu TOEIC đầu ra",
      "Bổ sung chứng chỉ tiếng Anh vào CV xin việc",
    ],
    faqs: [
      {
        question: "TOEIC 2 kỹ năng là gì?",
        answer: "TOEIC 2 kỹ năng gồm Listening và Reading, là định dạng phổ biến nhất được dùng cho xét tốt nghiệp và tuyển dụng tại Việt Nam.",
      },
      {
        question: "400 điểm TOEIC có xét tốt nghiệp được không?",
        answer: "Tuỳ theo yêu cầu của từng trường. Nhiều trường chấp nhận 400–450 cho đầu ra Cao Đẳng, Đại Học. Bạn nên kiểm tra quy định cụ thể của trường mình.",
      },
      {
        question: "Tôi chưa thi TOEIC bao giờ có ổn không?",
        answer: "Hoàn toàn ổn. Khoá học sẽ giới thiệu toàn bộ format đề thi từ đầu và luyện theo từng dạng câu hỏi cụ thể.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt điểm mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "ielts-nang-cao",
    level: "IELTS Nâng Cao",
    tag: "5.0 - 5.5+",
    image: "/ielts-nang-cao.jpg",
    tagColor: "#FF5C35",
    title: "IELTS Nâng Cao 5.0-5.5+",
    desc: "Chương trình đào tạo IELTS Nâng cao phù hợp cho người làm việc tại nước ngoài, ứng tuyển công việc quốc tế. Ngoài ra IELTS 5.5+ có thể xét đầu vào đầu ra Cao Học.",
    duration: "8 tuần",
    sessions: "32 buổi",
    price: "3.5 Triệu – 4.5 Triệu/Khoá",
    highlight: true,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Người đi làm cần IELTS cho môi trường quốc tế</li>
        <li>Học viên xét đầu vào hoặc đầu ra Cao Học</li>
        <li>Người đã có IELTS 4.0–4.5 muốn nâng band</li>
      </ul>
    `,
    objectives: [
      "Nâng cao kỹ năng nghe đa dạng giọng và xử lý bài nghe học thuật",
      "Thành thạo skimming, scanning và xử lý câu hỏi suy luận trong Reading",
      "Viết Task 1 (biểu đồ) và Task 2 (luận điểm) đạt chuẩn band 5.0–5.5",
      "Tự tin trình bày ý kiến trong Speaking Part 1–3",
    ],
    outcomes: [
      "IELTS 5.0–5.5+ đủ điều kiện xét đầu vào, đầu ra Cao Học",
      "Đáp ứng yêu cầu tiếng Anh cho môi trường làm việc quốc tế",
      "Nền tảng vững để tiếp tục nâng band lên 6.0+",
    ],
    faqs: [
      {
        question: "Tôi đang có IELTS 4.0 thì bao lâu lên được 5.5?",
        answer: "Với 8 tuần học chuyên sâu và luyện tập đều đặn, học viên có nền tảng 4.0 hoàn toàn có thể đạt 5.0–5.5 trong lần thi tiếp theo.",
      },
      {
        question: "IELTS 5.5 có xét được Cao Học không?",
        answer: "Có. Nhiều trường Đại học chấp nhận IELTS 5.5 cho đầu vào hoặc đầu ra Thạc Sĩ. Bạn nên kiểm tra yêu cầu cụ thể của trường.",
      },
      {
        question: "Khoá này có luyện Speaking trực tiếp không?",
        answer: "Có. Mỗi tuần có ít nhất 2 buổi luyện Speaking với giáo viên, được phản hồi và sửa lỗi trực tiếp.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt band mục tiêu.",
      },
    ],
  },
  {
    slug: "ielts-mat-goc",
    level: "IELTS Mất Gốc",
    tag: "Đầu Ra 3.5+",
    image: "/ielts-mat-goc.jpg",
    tagColor: "#4ECDC4",
    title: "IELTS Mất Gốc Đầu Ra 3.5+",
    desc: "Khoá học này sẽ phù hợp với học viên dài lâu không sử dụng Tiếng Anh muốn ôn lại từ đầu. Ôn luyện từ cơ bản để có được nền tảng trước khi tham gia ôn luyện nâng cao.",
    duration: "6 tuần",
    sessions: "24 buổi",
    price: "2.5 Triệu – 3 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Người lâu năm không học hoặc sử dụng tiếng Anh</li>
        <li>Học viên có nền tảng yếu, chưa từng thi IELTS</li>
        <li>Người muốn xây nền trước khi học lớp nâng cao</li>
      </ul>
    `,
    objectives: [
      "Xây dựng lại ngữ pháp nền tảng và vốn từ vựng cơ bản theo chủ đề IELTS",
      "Làm quen với format 4 kỹ năng bài thi IELTS ở mức độ dễ nhất",
      "Đạt band IELTS 3.5+ trong lần thi đầu tiên",
      "Tạo nền tảng để tiếp tục học lên band 4.0–4.5 sau khoá",
    ],
    outcomes: [
      "IELTS 3.5+ — nền tảng bước đầu để tiếp tục nâng band",
      "Tự tin giao tiếp tiếng Anh cơ bản trong cuộc sống hàng ngày",
      "Sẵn sàng tham gia khoá IELTS Nền Tảng 4.0–4.5 tiếp theo",
    ],
    faqs: [
      {
        question: "Tôi quên hết tiếng Anh có học được không?",
        answer: "Đây chính là đối tượng khoá học hướng đến. Chương trình bắt đầu từ ngữ pháp và từ vựng căn bản nhất, không yêu cầu nền tảng đầu vào.",
      },
      {
        question: "IELTS 3.5 dùng được vào việc gì?",
        answer: "IELTS 3.5 là bước đầu tiên, chủ yếu giúp bạn có nền tảng để tiếp tục nâng lên 4.0–4.5 phục vụ miễn thi THPT hoặc xét tốt nghiệp.",
      },
      {
        question: "Học xong khoá này có thể học tiếp khoá nào?",
        answer: "Sau khoá này bạn có thể tham gia ngay khoá IELTS Nền Tảng 4.0–4.5 để tiếp tục nâng band.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt band mục tiêu.",
      },
    ],
  },
  {
    slug: "toeic-500-650",
    level: "TOEIC",
    tag: "500 - 650+",
    image: "/toeic-500-650.jpg",
    tagColor: "#9B59B6",
    title: "TOEIC 500-650+",
    desc: "Lớp dành cho học viên đã có nền tảng Tiếng Anh. Chuyên luyện đề và đào tạo Tiếng Anh nâng cao cam kết đầu ra giúp học viên đạt TOEIC 500-650+.",
    duration: "6 tuần",
    sessions: "24 buổi",
    price: "2.5 Triệu – 3.5 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Người đã có TOEIC dưới 450 muốn nâng điểm</li>
        <li>Người đi làm cần điểm TOEIC cao hơn để thăng chức</li>
        <li>Sinh viên muốn TOEIC 500+ bổ sung CV nổi bật</li>
      </ul>
    `,
    objectives: [
      "Phân tích và khắc phục lỗi sai thường gặp trong từng Part đề thi TOEIC",
      "Mở rộng từ vựng theo chủ đề Business, Office, Travel, Finance",
      "Luyện full test ETS chuẩn và quản lý thời gian hiệu quả",
      "Đạt tổng điểm TOEIC 500–650+ trong lần thi gần nhất",
    ],
    outcomes: [
      "TOEIC 500–650+ được IIG/ETS công nhận",
      "CV nổi bật hơn khi ứng tuyển vào các doanh nghiệp trong và ngoài nước",
      "Nâng cao năng lực tiếng Anh thực tế trong môi trường công sở",
    ],
    faqs: [
      {
        question: "Tôi đang có 400 điểm TOEIC thì có học được không?",
        answer: "Hoàn toàn phù hợp. Khoá học được thiết kế cho học viên đang ở mức 350–450 muốn nâng lên 500–650+.",
      },
      {
        question: "TOEIC 500 có xin việc được doanh nghiệp nước ngoài không?",
        answer: "Nhiều doanh nghiệp FDI yêu cầu tối thiểu 500–600 điểm TOEIC. Đạt 650+ sẽ giúp hồ sơ của bạn cạnh tranh hơn đáng kể.",
      },
      {
        question: "Khoá học có dạy 4 kỹ năng không?",
        answer: "TOEIC 2 kỹ năng tập trung vào Listening và Reading. Nếu bạn cần thêm Speaking và Writing, trung tâm có khoá TOEIC 4 kỹ năng riêng.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt điểm mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "ielts-cao-cap",
    level: "IELTS Cao Cấp",
    tag: "6.0 - 6.5+",
    image: "/ielts-cao-cap.jpg",
    tagColor: "#C9A96E",
    title: "IELTS Cao Cấp 6.0-6.5+",
    desc: "IELTS 6.0-6.5+ được sử dụng khi học viên có nhu cầu Du Học, Định Cư nước ngoài. Bổ sung đầu ra Thạc sĩ, Tiến sĩ và sinh viên đại học chất lượng cao.",
    duration: "10 tuần",
    sessions: "40 buổi",
    price: "4.5 Triệu – 5.5 Triệu/Khoá",
    highlight: true,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Người có nhu cầu du học hoặc định cư nước ngoài</li>
        <li>Học viên cần IELTS 6.0+ để bảo vệ Thạc Sĩ, Tiến Sĩ</li>
        <li>Sinh viên đại học chất lượng cao yêu cầu đầu ra IELTS 6.0+</li>
      </ul>
    `,
    objectives: [
      "Xử lý thành thạo các dạng câu hỏi khó trong Listening và Reading band 6.0+",
      "Viết Task 2 với lập luận logic, từ vựng học thuật và coherence cao",
      "Đạt fluency và độ chính xác ngữ pháp trong Speaking Part 2–3",
      "Đạt band IELTS 6.0–6.5+ trong kỳ thi chính thức",
    ],
    outcomes: [
      "IELTS 6.0–6.5+ đáp ứng yêu cầu du học Úc, Canada, Anh, Mỹ",
      "Đủ điều kiện đầu ra Thạc Sĩ, Tiến Sĩ tại các trường top Việt Nam",
      "Tự tin làm việc và học tập hoàn toàn bằng tiếng Anh",
    ],
    faqs: [
      {
        question: "Tôi cần IELTS bao nhiêu để du học Úc?",
        answer: "Hầu hết các trường Đại học tại Úc yêu cầu IELTS tối thiểu 6.0–6.5. Một số ngành đặc thù như Y, Luật có thể yêu cầu cao hơn.",
      },
      {
        question: "Tôi đang có IELTS 5.5 thì mất bao lâu lên 6.5?",
        answer: "Thông thường cần 10–12 tuần luyện tập chuyên sâu. Tốc độ tiến bộ còn phụ thuộc vào mức độ luyện tập hàng ngày của học viên.",
      },
      {
        question: "Khoá có chữa Writing không?",
        answer: "Có. Mỗi bài Writing đều được giáo viên chữa chi tiết với nhận xét cụ thể về Task achievement, Coherence, Lexical resource và Grammar.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt band mục tiêu đã đăng ký.",
      },
    ],
  },
  {
    slug: "tieng-anh-b1-b2-vstep",
    level: "Tiếng Anh B1 B2",
    tag: "Bậc 3-4/6",
    image: "/tieng-anh-b1b2.jpg",
    tagColor: "#FF5C35",
    title: "Tiếng Anh B1 B2 (Bậc 3-4)",
    desc: "Khoá luyện thi VSTEP B1 dành cho học viên xét Tốt nghiệp CĐ ĐH, đầu vào Thạc sĩ và Thi Công chức. VSTEP B2 dùng để xét Tốt nghiệp hoặc đầu ra Thạc sĩ và đầu vào Tiến sĩ.",
    duration: "6 tuần",
    sessions: "24 buổi",
    price: "2.5 Triệu – 3.5 Triệu/Khoá",
    highlight: false,
    content: `
      <h3>Đối Tượng Học Viên</h3>
      <ul>
        <li>Sinh viên cần đầu ra B1/B2 để tốt nghiệp CĐ, ĐH</li>
        <li>Học viên cao học cần chứng chỉ B2 để bảo vệ Thạc Sĩ</li>
        <li>Người thi tuyển công chức yêu cầu bậc B1</li>
      </ul>
    `,
    objectives: [
      "Nắm vững toàn bộ cấu trúc đề thi VSTEP cho cả hai cấp độ B1 và B2",
      "Luyện 4 kỹ năng chuyên sâu theo đúng tiêu chí chấm điểm VSTEP",
      "Đạt điểm trung bình 4.0–7.5/10 tuỳ mục tiêu B1 hoặc B2",
      "Xây dựng chiến lược ôn thi cá nhân hoá phù hợp từng học viên",
    ],
    outcomes: [
      "Chứng chỉ VSTEP B1 (Bậc 3/6) hoặc B2 (Bậc 4/6) tuỳ mục tiêu đăng ký",
      "Đủ điều kiện xét tốt nghiệp, đầu vào Thạc Sĩ và thi công chức",
      "Cam kết đầu ra đến khi đạt kết quả mục tiêu",
    ],
    faqs: [
      {
        question: "Tôi nên đăng ký thi B1 hay B2?",
        answer: "Phụ thuộc vào mục đích sử dụng. B1 dùng cho xét tốt nghiệp CĐ/ĐH và thi công chức cơ bản. B2 dùng cho bảo vệ Thạc Sĩ và thi công chức cấp cao hơn.",
      },
      {
        question: "Một khoá có thể ôn được cả B1 lẫn B2 không?",
        answer: "Khoá này thiết kế để học viên có thể chọn thi B1 hoặc B2. Giáo viên sẽ tư vấn mức độ phù hợp sau khi kiểm tra đầu vào.",
      },
      {
        question: "Nếu thi không đạt thì sao?",
        answer: "Trung tâm cam kết hỗ trợ học lại miễn phí cho đến khi đạt chứng chỉ theo mục tiêu đã đăng ký.",
      },
      {
        question: "Có thể học online không?",
        answer: "Trung tâm hỗ trợ cả hình thức học trực tiếp và online qua Zoom. Liên hệ tư vấn để chọn hình thức phù hợp.",
      },
    ],
  },
];
