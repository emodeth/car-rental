import { useEffect, useState } from "react";

import "./scrollUp.css";

function ScrollUp() {
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        setIsScrollActive(true);
      } else {
        setIsScrollActive(false);
      }
    });
  }, []);

  function handleScroll() {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  }

  return (
    <div
      onClick={handleScroll}
      className={`scroll-up ${isScrollActive ? "scroll-up--active" : ""}`}
    >
      ^
    </div>
  );
}

export default ScrollUp;
