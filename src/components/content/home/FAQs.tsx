import { FAQsGrid } from "@/components/layouts/FAQsGrid";
import Link from "next/link";

export function FAQs() {
  const faqs = [
    {
      value: "faq-1",
      question: "What is Small Fiber Neuropathy (SFN)?",
      answer: (
        <>
          Small fiber neuropathy is a condition that damages the small nerve
          fibers in the peripheral nervous system. These fibers carry pain, temperature,
          and automatic body signals.
          <br />
          <br />
          <Link href="/about-sfn/" className="text-primary hover:underline">
            Learn more on our About SFN page
          </Link>
        </>
      ),
    },
    {
      value: "faq-2",
      question: "What are the symptoms?",
      answer: (
        <>
          Common symptoms include burning pain, numbness, tingling, twitching, vibrations,
          shooting or stabbing pains, stomach or bowel problems, and brain fog.
          <br />
          <br />
          <Link href="/about-sfn/symptoms" className="text-primary hover:underline">
            Read more on our Symptoms page
          </Link>
        </>
      ),
    },
    {
      value: "faq-3",
      question: "How is SFN diagnosed?",
      answer: (
        <>
          A skin punch biopsy is the most reliable test. It measures how many small
          nerve fibers are in the skin and helps confirm a diagnosis of SFN.
          <br />
          <br />
          <Link href="/about-sfn/diagnosis" className="text-primary hover:underline">
            Learn more on our Diagnosis page
          </Link>
        </>
      ),
    },
    {
      value: "faq-4",
      question: "What causes SFN?",
      answer: (
        <>
          SFN can have many causes, such as autoimmune disease, diabetes, infections,
          toxins, and genetic factors.
          <br />
          <br />
          <Link href="/about-sfn/causes" className="text-primary hover:underline">
            Explore more on our Causes page
          </Link>
        </>
      ),
    },
    {
      value: "faq-5",
      question: "What treatments are available for SFN?",
      answer: (
        <>
          Treatment focuses on regular exercise, a healthy diet, and treating any
          underlying conditions. Many people use pain medications or supplements
          to help manage symptoms.
          <br />
          <br />
          <Link href="/about-sfn/treatments" className="text-primary hover:underline">
            Read more on our Treatments page
          </Link>
        </>
      ),
    },
    {
      value: "faq-6",
      question: "What is the SFN Foundation?",
      answer: (
        <>
          The SFN Foundation exists for those affected by Small Fiber Neuropathy. We are committed to improving the lives of people living with SFN through research, education, support, and awareness.
          <br />
          <br />
          <Link href="/about-the-foundation" className="text-primary hover:underline">
            Learn more about the SFN Foundation
          </Link>
        </>
      ),
    },

  ];

  return (
    <section id="faqs" className="bg-offWhite">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left text-primary">
          Frequently Asked Questions
        </h2>
        <FAQsGrid faqs={faqs} />
      </div>
    </section>
  );
}
