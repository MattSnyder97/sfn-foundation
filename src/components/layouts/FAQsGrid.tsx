import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/primitives/Accordion";

interface FAQ {
  value: string;
  question: string;
  answer: React.ReactNode;
}

interface FAQsGridProps {
  faqs: FAQ[];
}

export function FAQsGrid({ faqs }: FAQsGridProps) {
  // split into two halves
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    // Single Accordion root so only one item can be open across both columns
    <Accordion type="single" collapsible>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: independent vertical stack */}
        <div className="flex flex-col gap-6">
          {leftColumn.map((faq) => (
            <div key={faq.value} className="w-full">
              <AccordionItem value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </div>

        {/* Right column: independent vertical stack */}
        <div className="flex flex-col gap-6">
          {rightColumn.map((faq) => (
            <div key={faq.value} className="w-full">
              <AccordionItem value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </div>
      </div>
    </Accordion>
  );
}
