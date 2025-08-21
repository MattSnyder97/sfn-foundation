import { FAQsGrid } from "@/components/layouts/FAQsGrid";
import Link from "next/link";

export function FAQs() {
  const faqs = [
    {
      value: "faq-1",
      question: "What is Small Fiber Neuropathy (SFN)?",
      answer: (
        <>
          Small fiber neuropathy (SFN) is a type of peripheral neuropathy that occurs from
          damage to the small unmyelinated and myelinated peripheral nerve fibers.
          <br />
          <br />
          <Link
            href="/about/"
            className="text-primary underline hover:text-primary/80"
          >
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
          shooting pains, stabbing pains, GI issues, and cognitive impairments.
          <br />
          <br />
          <Link
            href="/about/symptoms"
            className="text-primary underline hover:text-primary/80"
          >
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
          The most reliable diagnosis currently is a skin punch biopsy. This reveals how
          many small fiber nerves are in an area and if it is below the threshold to
          warrant a diagnosis.
          <br />
          <br />
          <Link
            href="/about/diagnosis"
            className="text-primary underline hover:text-primary/80"
          >
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
          SFN has many potential causes including autoimmune disorders, diabetes,
          infections, toxins, and genetic factors.
          <br />
          <br />
          <Link
            href="/about/causes"
            className="text-primary underline hover:text-primary/80"
          >
            Explore more on our Causes page
          </Link>
        </>
      ),
    },
    {
      value: "faq-5",
      question: "Is there a cure for SFN?",
      answer: (
        <>
          Right now, there is no cure. If the underlying issue causing SFN is removed then
          people have recovered. There are several drugs in clinical trials that are
          hopeful. With all the recent advancements in AI we are closer than ever so
          please do not give up hope.
          <br />
          <br />
          <Link
            href="#news"
            className="text-primary underline hover:text-primary/80"
          >
            Stay updated on our Research page
          </Link>
        </>
      ),
    },
    {
      value: "faq-6",
      question: "What are my treatment options for SFN?",
      answer: (
        <>
          Regular exercise, balanced diet, and managing underlying conditions. Many people
          take pain medications or supplements to help as well.
          <br />
          <br />
          <Link
            href="/about/treatments"
            className="text-primary underline hover:text-primary/80"
          >
            Read more on our Treatments page
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
