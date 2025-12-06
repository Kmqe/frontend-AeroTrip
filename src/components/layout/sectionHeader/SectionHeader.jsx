import "./section_header.css";

const SectionHeader = ({ title, subtitle, showMore = false }) => {
  return (
    <div className="section-header">
      <div className="text">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : ""}
      </div>
      {showMore ? (
        <div className="more">
          <p>view more</p>
          <img src="/images/arrow-right.png" alt="arrow right" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionHeader;
