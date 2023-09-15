import "./carPicker.css";
import { CAR_DATA } from "../../CarData";
import { useEffect, useState } from "react";

function CarPicker() {
  const [activeCar, setActiveCar] = useState(1);
  const [carLoad, setCarLoad] = useState(true);
  const { price, model, mark, year, doors, air, transmission, fuel } =
    CAR_DATA.at(activeCar)[0];

  useEffect(function () {
    const buttons = document.querySelectorAll(".car-picker__button");
    buttons.forEach((button) =>
      button.addEventListener("click", function () {
        buttons.forEach((button) =>
          button.classList.remove("car-picker__button--active")
        );
        button.classList.add("car-picker__button--active");
      })
    );
  }, []);

  return (
    <div className="car-picker">
      <div className="car-picker__cars">
        <button
          onClick={() => {
            setActiveCar(1);
            setCarLoad(true);
          }}
          className="car-picker__button car-picker__button--active"
        >
          Audi A1 S-Line
        </button>
        <button
          onClick={() => {
            setActiveCar(0);
            setCarLoad(true);
          }}
          className="car-picker__button"
        >
          VW Golf 6
        </button>
        <button
          onClick={() => {
            setActiveCar(2);
            setCarLoad(true);
          }}
          className="car-picker__button"
        >
          Toyota Camry
        </button>
        <button
          onClick={() => {
            setActiveCar(3);
            setCarLoad(true);
          }}
          className="car-picker__button"
        >
          BMW 320 ModernLine
        </button>
        <button
          onClick={() => {
            setActiveCar(4);
            setCarLoad(true);
          }}
          className="car-picker__button"
        >
          Mercedes-Benz GLK
        </button>
        <button
          onClick={() => {
            setActiveCar(5);
            setCarLoad(true);
          }}
          className="car-picker__button"
        >
          VW Passat CC
        </button>
      </div>
      <div className="car-picker__car">
        <div className="car-picker__car-image-container">
          {carLoad && <span className="loader"></span>}
          {CAR_DATA.at(activeCar).map((data) => (
            <img
              src={data.img}
              alt={data.name}
              className="car-picker__car-image"
              style={{ display: carLoad ? "none" : "block" }}
              onLoad={() => setCarLoad(false)}
            />
          ))}
        </div>
        <div className="car-picker__description">
          <div className="car-picker__price">
            <span>${price}</span> / rent per day
          </div>
          <div className="car-picker__table">
            <div className="car-picker__col">
              <span>Model</span>
              <span>{model}</span>
            </div>
            <div className="car-picker__col">
              <span>Mark</span>
              <span>{mark}</span>
            </div>
            <div className="car-picker__col">
              <span>Year</span>
              <span>{year}</span>
            </div>
            <div className="car-picker__col">
              <span>Doors</span>
              <span>{doors}</span>
            </div>
            <div className="car-picker__col">
              <span>AC</span>
              <span>{air}</span>
            </div>
            <div className="car-picker__col">
              <span>Transmission</span>
              <span>{transmission}</span>
            </div>
            <div className="car-picker__col">
              <span>Fuel</span>
              <span>{fuel}</span>
            </div>
            <button className="cta-btn">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPicker;
