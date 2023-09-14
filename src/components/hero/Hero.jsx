import "./hero.css";
import heroBg from "../../images/hero/hero-bg.png";
import heroImg from "../../images/hero/main-car.png";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero__container container">
        <img className="hero__bg" src={heroBg} alt="bg" />
        <div className="hero__content">
          <div className="hero__text">
            <h4>Plan your trip now</h4>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero__buttons">
              <button className="hero__button--orange button--orange">
                Book Ride <i class="fa-regular fa-circle-check"></i>
              </button>
              <button className="hero__button--black button--black">
                Learn More <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <img className="hero__img" src={heroImg} alt="car"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
