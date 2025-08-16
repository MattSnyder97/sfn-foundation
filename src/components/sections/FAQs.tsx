import { FAQsGrid } from "@/components/layouts/FAQsGrid";

export function FAQs() {
  const faqs = [
    { value: "faq-1", question: "What is Small Fiber Neuropathy (SFN)?", answer: "Small Fiber Neuropathy is a disorder that primarily affects..." },
    { value: "faq-2", question: "What are common symptoms?", answer: "Common symptoms include burning pain, numbness, and tingling..." },
    { value: "faq-3", question: "How is SFN diagnosed?", answer: "Diagnosis usually involves clinical evaluation, skin biopsy..." },
    { value: "faq-4", question: "Is SFN treatable?", answer: "While there is no cure, treatment focuses on symptom relief..." },
    { value: "faq-5", question: "Can SFN be caused by diabetes?", answer: "Yes, diabetes is one of the most common causes of SFN..." },
    { value: "faq-6", question: "Are there lifestyle changes that help?", answer: "Regular exercise, balanced diet, and managing underlying conditions..." },
  ];

  return (
    <section className="py-18 bg-offWhite">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-left text-primary">
          Frequently Asked Questions
        </h2>
        <FAQsGrid faqs={faqs} />
      </div>
    </section>
  );
}
