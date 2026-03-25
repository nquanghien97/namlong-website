import Image from "next/image"

const certificates = [
  {
    name: 'Danh sách Các Trường Được Công Nhận Tổ Chức thi Cấp Chứng Chỉ VSTEP Toàn Quốc',
    image: '/cert1.png'
  },
  {
    name: 'Tiếng Anh B1 (Bậc 3/6)',
    image: '/cert2.jpg'
  },
  {
    name: 'Tiếng Anh B2 (Bậc 4/6)',
    image: '/cert3.jpeg'
  }
]

function Certificate() {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 md:w-12 bg-[#C9A96E]/50" />
            <span className="font-mono-dm text-[#C9A96E] text-xl md:text-2xl font-bold tracking-widest uppercase">Mẫu chứng chỉ Tiếng Anh VSTEPP mới</span>
          </div>
          <h2 className="font-display text-[#1A365D] text-3xl md:text-4xl font-bold mb-4">
            Bằng Phôi Bộ Giáo Dục
          </h2>
          <p className="mb-4 text-center italic">Với hơn 30+ trường tổ chức thi và cấp chứng chỉ của bộ giáo dục. Giá trị sử dụng toàn quốc yên tâm xét tuyển bổ sung hồ sơ.</p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          {certificates.map(cert => (
            <div key={cert.name} className="flex flex-col p-4 border border-[#ccc] rounded-2xl  hover:-translate-y-4 duration-300">
              <div className="mb-2 flex-1">
                <Image src={cert.image} alt={cert.name} width={800} height={800} />
              </div>
              <p className="text-center">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate