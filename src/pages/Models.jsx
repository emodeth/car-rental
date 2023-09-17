import PageHeader from "../components/pageHeader/PageHeader";
import PageBanner from "../components/pageBanner/PageBanner";
import Footer from "../components/footer/Footer";

import audiImg from "../images/cars-big/audi-box.png";
import benzImg from "../images/cars-big/benz-box.png";
import bmwImg from "../images/cars-big/bmw-box.png";
import golfImg from "../images/cars-big/golf6-box.png";
import passatImg from "../images/cars-big/passat-box.png";
import toyotaImg from "../images/cars-big/toyota-box.png";

import "./models.css";
import ModelItem from "../components/modelItem/ModelItem";

function Models() {
  return (
    <>
      <PageHeader header="Vehicle Models" />
      <div className="models__container container">
        <div className="models__main">
          <ModelItem
            name="Audi A1"
            mark="Audi"
            fuel="Diesel"
            transmission="Manual"
            doors="4/5"
            img={audiImg}
            price={45}
          />
          <ModelItem
            name="Golf 6"
            mark="VW"
            fuel="Diesel"
            transmission="Manual"
            doors="4/5"
            img={golfImg}
            price={37}
          />
          <ModelItem
            name="Toyota"
            mark="Camry"
            fuel="Diesel"
            transmission="Manual"
            doors="4/5"
            img={toyotaImg}
            price={30}
          />
          <ModelItem
            name="BMW 320"
            mark="ModernLine"
            fuel="Diesel"
            transmission="Manual"
            doors="4/5"
            img={bmwImg}
            price={35}
          />
          <ModelItem
            name="Mercedes"
            mark="Benz GLK"
            fuel="Diesel"
            transmission="Manual"
            doors="4/5"
            img={benzImg}
            price={50}
          />
          <ModelItem
            name="VW Passat"
            mark="CC"
            fuel="Diesel"
            transmission="Manual"
            doors="4/5"
            img={passatImg}
            price={25}
          />
        </div>
      </div>

      <PageBanner />
      <Footer />
    </>
  );
}

export default Models;
