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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left column */}
      <Accordion type="single" collapsible className="flex flex-col gap-6">
        {leftColumn.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Right column */}
      <Accordion type="single" collapsible className="flex flex-col gap-6">
        {rightColumn.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
