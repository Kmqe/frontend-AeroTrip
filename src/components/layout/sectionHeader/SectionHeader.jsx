import "./section_header.css";

const SectionHeader = ({ title, showMore = false }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
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
