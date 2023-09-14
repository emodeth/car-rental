import googleImg from "../../images/download/googleapp.svg";
import appleImg from "../../images/download/appstore.svg";

import "./download.css";

function Download() {
  return (
    <div className="download">
      <div className="download__container container">
        <div className="download__text">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="download__buttons">
            <img src={googleImg} alt="google download" />
            <img src={appleImg} alt="appstore download" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
