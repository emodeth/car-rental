import CarPicker from "../carPicker/CarPicker";
import "./pick.css";

function Pick() {
  return (
    <div className="pick" id="pick">
      <div className="pick__container container">
        <div className="pick__texts">
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <CarPicker />
      </div>
    </div>
  );
}

export default Pick;
