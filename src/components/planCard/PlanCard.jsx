import "./planCard.css";

function PlanCard({ header, desc, img }) {
  return (
    <div className="plan-card">
      <img className="plan-card__img" src={img} alt="plan card" />
      <div className="plan-card__text">
        <h3 className="plan-card__header">{header}</h3>
        <p className="plan-card__description">{desc}</p>
      </div>
    </div>
  );
}

export default PlanCard;
