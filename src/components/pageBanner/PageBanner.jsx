import "./pageBanner.css";

function PageBanner() {
  return (
    <div className="page-banner">
      <div className="page-banner__overlay"></div>
      <div className="page-banner__container container">
        <div className="page-banner__main">
          <h2>Book a car by getting in touch with us</h2>
          <p>
            <i className="fa-solid fa-phone-volume" />
            <span>(123) 456-7869</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
