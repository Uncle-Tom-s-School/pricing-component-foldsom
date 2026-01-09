interface Props {
  yearly: boolean;
  toggleYearly: () => void;
}

export default function ToggleSwitch({ yearly, toggleYearly }: Props) {
  return (
    <div className="toggle">
      <span className={!yearly ? "active" : ""}>Monthly</span>

      <button onClick={toggleYearly} className={yearly ? "yearly" : ""}>
        <div className="circle" />
      </button>

      <span className={yearly ? "active" : ""}>Yearly</span>
    </div>
  );
}
