import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import Ticket from "../../layout/ticket/Ticket";
import "./flight.css";

const Flight = () => {
  return (
    <section className="flight">
      <div className="container">
        <SectionHeader title="Flight Ticket" />
        <div className="tickets-container">
          <Ticket />
          <Ticket />
        </div>
      </div>
    </section>
  );
};

export default Flight;
