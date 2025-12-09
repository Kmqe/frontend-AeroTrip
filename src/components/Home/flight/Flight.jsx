import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import Ticket from "../../layout/ticket/Ticket";
import "./flight.css";

import data from "../../data/data.json";

const twoFlight = data.filter((flight) => {
  return flight.id <= 2 ? flight : "";
});

const Flight = () => {
  return (
    <section className="flight">
      <div className="container">
        <SectionHeader title="Flight Ticket" showMore={true} />
        <div className="tickets-container">
          <Ticket flights={twoFlight} />
        </div>
      </div>
    </section>
  );
};

export default Flight;
