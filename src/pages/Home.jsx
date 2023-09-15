import Banner from "../components/banner/Banner";
import Choose from "../components/choose/Choose";
import Download from "../components/download/Download";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Pick from "../components/pick/Pick";
import Plan from "../components/plan/Plan";
import Testimonials from "../components/testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Plan />
      <Pick />
      <Banner />
      <Choose />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
