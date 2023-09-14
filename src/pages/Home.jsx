import Banner from "../components/banner/Banner";
import Choose from "../components/choose/Choose";
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
    </>
  );
}

export default Home;
