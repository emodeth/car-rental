import Banner from "../components/banner/Banner";
import Hero from "../components/hero/Hero";
import Plan from "../components/plan/Plan";

function Home() {
  return (
    <div className="home" id="home">
      <Hero />
      <Plan />
      <Banner />
    </div>
  );
}

export default Home;
