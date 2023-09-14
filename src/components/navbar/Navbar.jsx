import { Link } from "react-router-dom";
import "./navbar.css";

import MobileNavbar from "../mobileNavbar/MobileNavbar";
import logo from "../../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMobileNavbarActive, setIsMobileNavbarActive] = useState(false);

  return (
    <nav className="navbar">
      <MobileNavbar
        isMobileNavbarActive={isMobileNavbarActive}
        setIsMobileNavbarActive={setIsMobileNavbarActive}
      />
      <div className="navbar__container container">
        <div className="navbar__img">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link to="/home">home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about">about</Link>
          </li>
          <li className="navbar__item">
            <Link to="/models">vehicle models</Link>
          </li>
          <li className="navbar__item">
            <Link to="/testimonials">testimonials</Link>
          </li>
          <li className="navbar__item">
            <Link to="/team">our team</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <div className="navbar__sign">
          <p className="navbar__sign-in navbar__item">Sign In</p>
          <button className="navbar__register button--orange">Register</button>
        </div>
        <i
          onClick={() => setIsMobileNavbarActive(true)}
          className="navbar__hamburger fa-solid fa-bars"
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
