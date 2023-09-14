import "./chooseCard.css";

function ChooseCard({ img, header, desc }) {
  return (
    <div className="choose-card">
      <img className="choose-card__img" src={img} alt="choose card" />
      <div className="choose-card__text">
        <h3 className="choose-card__header">{header}</h3>
        <p className="choose-card__description">{desc}</p>
      </div>
    </div>
  );
}

export default ChooseCard;
