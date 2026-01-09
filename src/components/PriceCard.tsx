interface Plan {
  name: string;
  pricePerMonth: number;
  features: string[];
  highlighted: boolean;
}

interface Props {
  plan: Plan;
  yearly: boolean;
}

export default function PriceCard({ plan, yearly }: Props) {
  const price =
    plan.pricePerMonth === 0
      ? "Free"
      : yearly
      ? `$${(plan.pricePerMonth * 11).toFixed(2)}`
      : `$${plan.pricePerMonth}`;

  return (
    <div className={`price-card ${plan.highlighted ? "highlighted" : ""}`}>
      <h2>{plan.name}</h2>

      <p className="price">
        {price}
        {yearly && plan.pricePerMonth !== 0 && <span> / year</span>}
      </p>

      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className="btn">Try for Free</button>
    </div>
  );
}
