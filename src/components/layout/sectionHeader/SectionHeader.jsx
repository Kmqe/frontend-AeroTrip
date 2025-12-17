import { Link } from "react-router-dom";
import "./section_header.css";

const SectionHeader = ({
  title,
  subtitle,
  showMore = false,
  toPage = "/home",
}) => {
  return (
    <div className="section-header">
      <div className="text">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : ""}
      </div>
      {showMore ? (
        <Link to={`/${toPage}`}>
          <div className="more">
            <p>view more</p>
            <img
              src="/images/arrow-right.png"
              alt="arrow right"
              loading="lazy"
            />
          </div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionHeader;
