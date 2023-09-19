import PageHeader from "../components/pageHeader/PageHeader";
import TeamItem from "../components/teamItem/TeamItem";
import PageBanner from "../components/pageBanner/PageBanner";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";

import img1 from "../images/team/1.png";
import img3 from "../images/team/3.png";
import img2 from "../images/team/2.png";
import img4 from "../images/team/4.png";
import img5 from "../images/team/5.png";
import img6 from "../images/team/6.png";

import "./team.css";

function Team() {
  return (
    <>
      <PageHeader header="Our Team" />
      <div className="team__container container">
        <ScrollUp />
        <div className="team__main">
          <TeamItem name="Luke Miller" position="Salesman" img={img1} />
          <TeamItem name="Michael Diaz" position="Business Owner" img={img2} />
          <TeamItem name="Briana Ross" position="Photographer" img={img3} />
          <TeamItem name="Lauren Rivera" position="Car Detailist" img={img4} />
          <TeamItem name="Martin Rizz" position="Mechanic" img={img5} />
          <TeamItem name="Caitlyn Hunt" position="Menager" img={img6} />
        </div>
      </div>
      <PageBanner />
      <Footer />
    </>
  );
}

export default Team;
