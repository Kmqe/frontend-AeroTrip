import Header from "../layout/header/Header";
import Contact from "./contact/Contact";
import Features from "./features/Features";
import Flight from "./flight/Flight";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Flight />
      <Features />
      <Contact />
    </>
  );
};

export default Home;
