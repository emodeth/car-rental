import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__column-1">
          <li className="footer__header">
            Car <span>Rental</span>
          </li>
          <li className="footer__text">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </li>
          <li className="footer__phone">
            <i className="fa-solid fa-phone-volume"></i>
            (123) -456-789
          </li>
          <li className="footer__mail">
            <i className="fa-regular fa-envelope"></i>
            carrental@gmail.com
          </li>
        </ul>
        <ul className="footer__column-2">
          <li className="footer__header">Company</li>
          <li>New York</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>Blog</li>
          <li>How we work</li>
        </ul>
        <ul className="footer__column-3">
          <li className="footer__header">Working Hours</li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>
        <ul className="footer__column-4">
          <li className="footer__header">Subscription</li>
          <li>Subscribe your Email address for latest news & updates.</li>
          <li>
            <input type="email" placeholder="Enter Email Address" />
          </li>
          <li>
            <button className="footer__button--orange button--orange">
              Submit
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
