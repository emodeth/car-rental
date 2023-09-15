import Banner from "../components/banner/Banner";
import Choose from "../components/choose/Choose";
import Download from "../components/download/Download";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Plan from "../components/plan/Plan";
import Testimonials from "../components/testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Plan />
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
