import ButtonCustom from "../../common/button/ButtonCustom";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_text">
          <h1>
            Visit the most beautiful place with <span>AreoTrip</span>
          </h1>
          <p className="description">
            Find and book your next flight in just a few clicks. Easy, fast, and
            reliable — your journey starts here.
          </p>
          <div className="buttons">
            <ButtonCustom text={"Book Now"} />
            <ButtonCustom text={"Explore"} light={true} />
          </div>
        </div>
        <div className="hero_image">
          <div className="gallery">
            <img src="/images/Rectangle1.png" alt="" className="img1" />
            <img src="/images/Rectangle2.png" alt="" className="img2" />
            <img src="/images/Rectangle3.png" alt="" className="img3" />
            <img src="/images/Rectangle4.png" alt="" className="img4" />
            <img src="/images/Rectangle5.png" alt="" className="img5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
