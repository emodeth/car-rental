import PlanCard from "../planCard/PlanCard";

import planImg1 from "../../images/plan/icon1.png";
import planImg2 from "../../images/plan/icon2.png";
import planImg3 from "../../images/plan/icon3.png";
import "./plan.css";

function Plan() {
  return (
    <div className="plan" id="plan">
      <div className="plan__container container">
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
        <div className="plan__card-container">
          <PlanCard
            img={planImg1}
            header="Select Car"
            desc="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
          />
          <PlanCard
            img={planImg2}
            header="Contact Operator"
            desc="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
          />
          <PlanCard
            img={planImg3}
            header="Let's Drive"
            desc="Whether you're hitting the open road, we've got you covered with our wide range of cars"
          />
        </div>
      </div>
    </div>
  );
}

export default Plan;
