import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export interface FAQ {
  value: string;
  question: string;
  answer: string;
}

interface FAQsGridProps {
  faqs: FAQ[];
}

export function FAQsGrid({ faqs }: FAQsGridProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
