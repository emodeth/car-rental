import Testimonial from "../testimonial/Testimonial";
import ScrollUp from "../scrollUp/ScrollUp";
import "./testimonials.css";
import userImg1 from "../../images/testimonials/pfp1.jpg";
import userImg2 from "../../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials__container container">
        <ScrollUp />
        <div className="testimonials__texts">
          <h4>Reviewed by People</h4>
          <h2>Client's Testimonials</h2>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="testimonials__testimonials">
          <Testimonial
            img={userImg1}
            text='"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "'
            name="Parry Hotter"
            place="Istanbul"
          />
          <Testimonial
            img={userImg2}
            text='"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"'
            name="Ron Rizzly"
            place="Izmir"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
