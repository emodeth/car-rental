import chooseImg from "../../images/chooseUs/main.png";

import cardImg1 from "../../images/chooseUs/icon1.png";
import cardImg2 from "../../images/chooseUs/icon2.png";
import cardImg3 from "../../images/chooseUs/icon3.png";

import "./choose.css";
import ChooseCard from "../chooseCard/ChooseCard";

function Choose() {
  return (
    <div className="choose" id="choose">
      <div className="choose__container container">
        <img className="choose__img" src={chooseImg} alt="cars" />
        <div className="choose__content">
          <div className="choose__texts">
            <h4>Why Choose Us</h4>
            <h2>Best valued deals you will ever find</h2>
            <p className="choose__description">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <button className="choose__button--orange button--orange">
              Find Details <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="choose__cards">
            <ChooseCard
              img={cardImg1}
              header="Cross Country Drive"
              desc="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
            />
            <ChooseCard
              img={cardImg2}
              header="All Inclusive Pricing"
              desc="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
            />
            <ChooseCard
              img={cardImg3}
              header="No Hidden Charges"
              desc="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.

"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
