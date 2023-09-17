import "./teamItem.css";

function TeamItem({ name, position, img }) {
  return (
    <div className="team-item">
      <img className="team-item__img" src={img} alt="team member" />
      <div className="team-item__info">
        <p className="team-item__name">{name}</p>
        <p className="team-item__position">{position}</p>
      </div>
    </div>
  );
}

export default TeamItem;
