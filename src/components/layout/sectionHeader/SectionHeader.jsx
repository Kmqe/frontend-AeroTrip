import "./section_header.css";

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      {/* <div className="container"> */}
      <h2>{title}</h2>
      <div className="more">
        <p>view more</p>
        <img src="/images/arrow-right.png" alt="arrow right" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default SectionHeader;
