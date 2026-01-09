import { useEffect, useState } from "react";
import PriceCard from "./components/PriceCard";
import ToggleSwitch from "./components/ToggleSwitch";
import "./index.css";

interface Plan {
  id: number;
  name: string;
  pricePerMonth: number;
  features: string[];
  highlighted: boolean;
}

function App() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div id="root">
      <ToggleSwitch
        yearly={yearly}
        toggleYearly={() => setYearly(prev => !prev)}
      />

      <div className="pricing-container">
        {plans.map(plan => (
          <PriceCard
            key={plan.id}
            plan={plan}
            yearly={yearly}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
