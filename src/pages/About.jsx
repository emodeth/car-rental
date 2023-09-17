import PageBanner from "../components/pageBanner/PageBanner";
import PageHeader from "../components/pageHeader/PageHeader";
import Plan from "../components/plan/Plan";
import Footer from "../components/footer/Footer";
import aboutImg from "../images/about/about-main.jpg";
import aboutStat1 from "../images/about/icon1.png";
import aboutStat2 from "../images/about/icon2.png";
import aboutStat3 from "../images/about/icon3.png";

import "./about.css";

function About() {
  return (
    <>
      <PageHeader header="About" />
      <div className="about__container container">
        <div className="about__main">
          <img className="about__img" src={aboutImg} alt="about" />
          <div className="about__texts">
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="about__stats">
              <div className="about__stat-box">
                <img
                  className="about__stat-img"
                  src={aboutStat1}
                  alt="about stat"
                />
                <div className="about__stat-text">
                  <div>20</div>
                  <p>Car Types</p>
                </div>
              </div>
              <div className="about__stat-box">
                <img
                  className="about__stat-img"
                  src={aboutStat2}
                  alt="about stat"
                />
                <div className="about__stat-text">
                  <div>85</div>
                  <p>Rental Outlets</p>
                </div>
              </div>
              <div className="about__stat-box">
                <img
                  className="about__stat-img about__stat-img--last"
                  src={aboutStat3}
                  alt="about stat"
                />
                <div className="about__stat-text">
                  <div>75</div>
                  <p>Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Plan />
      <PageBanner />
      <Footer />
    </>
  );
}

export default About;
