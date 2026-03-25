"use client";

import Form from "@/components/Form";
import Image from "next/image";

export default function RegisterForm() {
  return (
    <section className="bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left — Image */}
        <div className="relative hidden md:block">
          <Image
            src="/register-bg.jpg"
            alt="Tư vấn học tập"
            className="absolute inset-0 w-full h-full object-cover"
            width={800}
            height={800}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-900/60 to-transparent" />
          {/* Quote */}
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="text-lg font-semibold leading-snug">
              &quot;Hành trình ngàn dặm bắt đầu từ một bước nhỏ.&quot;
            </p>
            <p className="text-sm mt-1 text-white/70">— Nam Long Education</p>
          </div>
        </div>

        {/* Right — Form */}
        <Form />
      </div>
    </section>
  );
}