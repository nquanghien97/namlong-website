'use client'

import { FAQ } from "@/data";
import { useState } from "react";

export default function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="border-t border-gray-100 last:border-b last:border-gray-100">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex cursor-pointer items-center justify-between gap-3 py-3.5 text-left font-medium text-gray-800 hover:text-[#FF5C35] transition-colors"
      >
        <span>{faq.question}</span>
        <span
          className={`w-5 h-5 shrink-0 flex items-center justify-center rounded-full border text-sm transition-all ${
            open
              ? "border-[#FF5C35] text-[#FF5C35] rotate-45"
              : "border-gray-300 text-gray-400"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-3.5 text-sm text-gray-500 leading-relaxed">
          {faq.answer}
        </p>
      )}
    </div>
  );
}