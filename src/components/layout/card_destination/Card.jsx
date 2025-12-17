import { GoArrowRight } from "react-icons/go";
import "./card.css";

const Card = ({ country, price, imgUrl }) => {
  return (
    <div className="trip-card">
      <div className="image">
        <img
          src={`/images/${imgUrl}.svg`}
          alt={`${country} picture`}
          loading="lazy"
        />
      </div>

      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{country.split(" ")[0]}</h3>
          <p className="price">{price} SAR</p>
        </div>
        <div className="card-bottom">
          <p className="card-subtitle">Round trip From Riyadh</p>
          <div className="card-action">
            <GoArrowRight className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
