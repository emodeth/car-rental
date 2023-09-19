import PageHeader from "../components/pageHeader/PageHeader";
import PageBanner from "../components/pageBanner/PageBanner";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";

import "./contact.css";

function Contact() {
  return (
    <>
      <PageHeader header="Contact" />
      <div className="contact__container container">
        <ScrollUp />

        <div className="contact__main">
          <div className="contact__texts">
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-phone"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>{" "}
              &nbsp; (123) 456-7869
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              &nbsp; carrental@carmail.com
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-location"
              >
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
              </svg>
              &nbsp; Istanbul, Turkey
            </div>
          </div>
          <form className="contact__form">
            <div className="contact__row">
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Emirhan Keskin"' />
            </div>
            <div className="contact__row">
              <label>
                Email <b>*</b>
              </label>
              <input type="text" placeholder="youremail@example.com" />
            </div>
            <div className="contact__row">
              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here..." />
            </div>
            <button className="contact__button--orange button--orange">
              <span>
                <i className="fa-regular fa-envelope-open"></i>
              </span>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <PageBanner />
      <Footer />
    </>
  );
}

export default Contact;
