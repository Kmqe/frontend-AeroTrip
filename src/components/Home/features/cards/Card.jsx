import "./card.css";

// Custom hook to get window width (for responsive behavior)
import useWindowSize from "../../../../hooks/useWindowSize";

const Card = ({ title, description, icon }) => {
  const width = useWindowSize();
  return (
    <div className="card">
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={`icon ${width < 992 ? "hidden" : ""}`}>
        <img
          src={`/images/${icon}.svg`}
          alt="dollar sign"
          className={`${icon == "dollar-sign" ? "dollar" : ""}`}
        />
      </div>
    </div>
  );
};

export default Card;
