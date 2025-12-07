import Contact from "./contact/Contact";
import Destinations from "./destinations/Destinations";
import Features from "./features/Features";
import Flight from "./flight/Flight";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Flight />
      <Destinations />
      <Features />
      <Contact />
    </>
  );
};

export default Home;
