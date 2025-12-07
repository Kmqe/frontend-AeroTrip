import { GoArrowRight } from "react-icons/go";

const Card = ({ country, price }) => {
  return (
    <div className="trip-card">
      <div className="image">
        <img
          src={`/images/${country.toLowerCase()}.svg`}
          alt={`${country} picture`}
        />
      </div>

      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{country}</h3>
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
