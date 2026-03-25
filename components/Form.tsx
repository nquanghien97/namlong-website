import React from 'react'
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  address: string;
  courses: string[];
  note: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  courses?: string;
  errorPost?: string;
}

const COURSE_OPTIONS = [
  { id: "Tiếng Anh A2-B1-B2", label: "Tiếng Anh A2-B1-B2" },
  { id: "IELTS 4.5-6.5+", label: "IELTS 4.5-6.5+" },
  { id: "TOEIC 400-650+", label: "TOEIC 400-650+" },
];

function Form() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    courses: [],
    note: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Họ tên phải có ít nhất 2 ký tự";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0|\+84)[0-9]{9}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ (VD: 0912345678)";
    }

    if (!form.address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ";
    } else if (form.address.trim().length < 2) {
      newErrors.address = "Địa chỉ phải có ít nhất 2 ký tự";
    }

    if (form.courses.length === 0) {
      newErrors.courses = "Vui lòng chọn ít nhất một khoá học";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCourseToggle = (id: string) => {
    setForm((prev) => ({
      ...prev,
      courses: prev.courses.includes(id)
        ? prev.courses.filter((c) => c !== id)
        : [...prev.courses, id],
    }));
    if (errors.courses) {
      setErrors((prev) => ({ ...prev, courses: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      setLoading(true)
      if (validate()) {
        const submitData = {
          ...form,
          courses: form.courses.join(','),
          date: new Date()
        }
        const res = await fetch('/api/dang-ky', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData)
        })
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || 'Đã có lỗi xảy ra');
        }
        setSubmitted(true);
      }
    } catch (err) {
      setErrors({ errorPost: 'Đã có lỗi xảy ra, vui lòng thử lại!' })
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Đã nhận thông tin!</h2>
          <p className="text-gray-500 mb-6">
            Cảm ơn <span className="font-semibold text-gray-700">{form.name}</span>! Tư vấn viên sẽ liên hệ với bạn qua số{" "}
            <span className="font-semibold text-gray-700">{form.phone}</span> trong thời gian sớm nhất.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", address: "", courses: [], note: "" }); }}
            className="cursor-pointer px-6 py-2 bg-[#FF5C35] text-white rounded-full font-medium hover:bg-[#e04d28] transition-colors"
          >
            Gửi lại
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="p-8 md:p-12 flex flex-col justify-center">
      {/* Header */}
      <p className="text-[#3B82F6] font-semibold text-xl tracking-wide uppercase mb-1">
        Để Lại Thông Tin
      </p>
      <h2 className="text-3xl text-gray-900 mb-8 leading-tight">
        Nhận Tư Vấn Ngay
      </h2>
      <div className="space-y-5">
        {/* Họ Tên */}
        <div>
          <div className={`flex items-center border rounded-xl px-4 py-3 transition-all ${errors.name
            ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-gray-50 focus-within:border-blue-400 focus-within:bg-white"
            }`}>
            <svg className="w-4 h-4 text-gray-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <input
              type="text"
              placeholder="Họ Tên *"
              value={form.name}
              onChange={(e) => {
                setForm((p) => ({ ...p, name: e.target.value }));
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Điện Thoại */}
        <div>
          <div className={`flex items-center border rounded-xl px-4 py-3 transition-all ${errors.phone
            ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-gray-50 focus-within:border-blue-400 focus-within:bg-white"
            }`}>
            <svg className="w-4 h-4 text-gray-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <input
              type="tel"
              placeholder="Điện Thoại: *"
              value={form.phone}
              onChange={(e) => {
                setForm((p) => ({ ...p, phone: e.target.value }));
                if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
              }}
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.phone}
            </p>
          )}
        </div>

        {/* Địa chỉ */}
        <div>
          <div className={`flex items-center border rounded-xl px-4 py-3 transition-all ${errors.address
            ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-gray-50 focus-within:border-blue-400 focus-within:bg-white"
            }`}>
            <svg className="w-4 h-4 text-gray-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Địa chỉ: *"
              value={form.address}
              onChange={(e) => {
                setForm((p) => ({ ...p, address: e.target.value }));
                if (errors.address) setErrors((p) => ({ ...p, address: undefined }));
              }}
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.address}
            </p>
          )}
        </div>

        {/* Checkboxes */}
        <div>
          <div className={`rounded-xl border px-4 py-3 space-y-2 transition-all ${errors.courses ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            }`}>
            {COURSE_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  onClick={() => handleCourseToggle(opt.id)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${form.courses.includes(opt.id)
                    ? "bg-[#FF5C35] border-[#FF5C35]"
                    : "border-gray-300 group-hover:border-[#FF5C35]"
                    }`}
                >
                  {form.courses.includes(opt.id) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span
                  onClick={() => handleCourseToggle(opt.id)}
                  className={`text-sm transition-colors ${form.courses.includes(opt.id) ? "text-gray-800 font-medium" : "text-gray-500"
                    }`}
                >
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
          {errors.courses && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.courses}
            </p>
          )}
        </div>

        {/* Textarea */}
        <div className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 focus-within:border-blue-400 focus-within:bg-white transition-all">
          <textarea
            rows={4}
            placeholder="Khung giờ trao đổi phù hợp với bạn"
            value={form.note}
            onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`cursor-pointer w-full py-3.5 ${loading ? 'bg-[#ccc]' : 'bg-[#FF5C35] hover:bg-[#e04d28]'} active:scale-95 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-base tracking-wide`}
        >
          {loading ? 'Đang gửi' : 'Tư Vấn Cho Tôi'}
        </button>
        {errors.errorPost && (<p className="text-red-500 text-sm text-center">{errors.errorPost}</p>)}
      </div>
    </div>
  )
}

export default Form