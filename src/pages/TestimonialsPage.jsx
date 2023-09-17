import PageHeader from "../components/pageHeader/PageHeader";
import Testimonials from "../components/testimonials/Testimonials";
import PageBanner from "../components/pageBanner/PageBanner";
import Footer from "../components/footer/Footer";

import "./testimonialsPage.css";

function TestimonialsPage() {
  return (
    <>
      <PageHeader header="Testimonials" />
      <Testimonials />
      <PageBanner />
      <Footer />
    </>
  );
}

export default TestimonialsPage;
