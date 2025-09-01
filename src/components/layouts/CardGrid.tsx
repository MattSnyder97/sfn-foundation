import { Card, CardProps } from "@/components/primitives/Card";

interface CardGridProps {
  cards: CardProps[];
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
