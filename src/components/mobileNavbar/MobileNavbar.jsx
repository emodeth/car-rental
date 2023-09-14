import { Link } from "react-router-dom";
import "./mobileNavbar.css";

function MobileNavbar({ isMobileNavbarActive, setIsMobileNavbarActive }) {
  return (
    <div
      className={
        isMobileNavbarActive
          ? "mobile-navbar mobile-navbar--active"
          : "mobile-navbar"
      }
    >
      <i
        className="mobile-navbar__close fa-solid fa-x"
        onClick={() => setIsMobileNavbarActive(false)}
      ></i>
      <ul className="mobile-navbar__links">
        <li>
          <Link to="/" onClick={() => setIsMobileNavbarActive(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileNavbarActive(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/models" onClick={() => setIsMobileNavbarActive(false)}>
            Models
          </Link>
        </li>
        <li>
          <Link
            to="/testimonials"
            onClick={() => setIsMobileNavbarActive(false)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={() => setIsMobileNavbarActive(false)}>
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileNavbarActive(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
