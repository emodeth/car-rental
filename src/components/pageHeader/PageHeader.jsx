import { Link } from "react-router-dom";
import "./pageHeader.css";

function PageHeader({ header }) {
  return (
    <div className="page-header">
      <div className="page-header__overlay"></div>
      <div className="page-header__container container">
        <div className="page-header__texts">
          <h3>{header}</h3>
          <p>
            <span>
              <Link to="/home">Home </Link>
            </span>
            / {header}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
