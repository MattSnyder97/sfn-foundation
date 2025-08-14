"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is SFN?",
    answer:
      "Small Fiber Neuropathy (SFN) is a condition that affects the small sensory cutaneous nerves, leading to symptoms like burning pain, tingling, and numbness.",
  },
  {
    question: "What are common symptoms?",
    answer:
      "Common symptoms include burning pain, tingling, numbness, and sensitivity to touch, often starting in the feet or hands.",
  },
  {
    question: "How is SFN diagnosed?",
    answer:
      "Diagnosis usually involves a combination of patient history, neurological exam, and tests such as skin biopsy or nerve conduction studies.",
  },
  {
    question: "Is there a cure?",
    answer:
      "While there is no known cure for SFN, treatment focuses on managing symptoms and addressing any underlying causes.",
  },
];

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        {title}
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform duration-160 ${
            isOpen ? "rotate-180 text-primary" : "text-gray-500"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 p-4 border-t border-gray-200" : "max-h-0 p-0"
        }`}
      >
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </div>
  );
}

export function FAQsGrid() {
  return (
    <section className="container-padding mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <Accordion key={faq.question} title={faq.question}>
            {faq.answer}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
