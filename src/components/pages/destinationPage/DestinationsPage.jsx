import "./destinations-page.css";
import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import Card from "../../layout/card_destination/Card";

const DestinationsPage = () => {
  return (
    <div className="destinations-page">
      <div className="container">
        <SectionHeader title="Destinations" />
        <div className="destinations-content">
          <Card country={"Cairo"} price={1180} imgUrl={"cairo 2"} />
          <Card country={"Bali"} price={2500} imgUrl={"bali 2"} />
          <Card country={"Athens"} price={1811} imgUrl={"athens 2"} />
          <Card country={"Dubai"} price={750} imgUrl={"dubai 2"} />
          <Card country={"Moscow"} price={3400} imgUrl={"moscow 2"} />
          <Card country={"New York"} price={3800} imgUrl={"new york 2"} />
          <Card country={"Paris"} price={2377} imgUrl={"paris"} />
          <Card country={"Rome"} price={1624} imgUrl={"rome"} />
          <Card country={"Guangzhou"} price={2549} imgUrl={"guangzhou"} />
          <Card country={"London"} price={2286} imgUrl={"london"} />
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
