import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import Ticket from "../../layout/ticket/Ticket";
import "./flight.css";

import data from "../../data/data.json";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const twoFlight = data.filter((flight) => {
  return flight.id <= 2 ? flight : "";
});

const Flight = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <section className="flight" id="flight">
      <div className="container">
        <SectionHeader
          title="Flight Ticket"
          showMore={true}
          toPage={"/tickets"}
        />
        <div className="tickets-container">
          <Ticket flights={twoFlight} />
        </div>
      </div>
    </section>
  );
};

export default Flight;
