import "./testimonial.css";

function Testimonial({ name, place, text, img }) {
  return (
    <div className="testimonial">
      <p className="testimonial__text">{text}</p>
      <div className="testimonial__user">
        <img className="testimonial__user-img" src={img} alt="user" />
        <div className="testimonial__user-info">
          <p className="testimonial__user-name">{name}</p>
          <p className="testimonial__user-place">{place}</p>
          <i className="testimonial__quote fa-solid fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
