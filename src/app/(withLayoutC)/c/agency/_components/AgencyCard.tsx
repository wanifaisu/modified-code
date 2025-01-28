import Card from "@/components/Card/Card";

const AgencyCard = ({ cardData }) => {
  return (
    <div className="grid md:grid-cols-5 md:grid-cols-3 grid-cols-1 h-24 gap-5 mb-3">
      {cardData.map((card, i) => (
        <Card key={i} title={card.title} value={card.value} />
      ))}
    </div>
  );
};

export default AgencyCard;
