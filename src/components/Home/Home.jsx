import Header from "../layout/header/Header";
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
    </>
  );
};

export default Home;
