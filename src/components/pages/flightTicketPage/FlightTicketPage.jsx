import "./flight-ticket-page.css";

import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import Ticket from "../../layout/ticket/Ticket";

import { useState } from "react";

const FlightTicketPage = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="flight-page">
      <div className="container">
        <SectionHeader title="Flight Ticket" />
        <div className="months-filter">
          <button
            onClick={() => setActive("all")}
            className={`${active == "all" ? "active" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setActive("december")}
            className={`${active == "december" ? "active" : ""}`}
          >
            December
          </button>
          <button
            onClick={() => setActive("november")}
            className={`${active == "november" ? "active" : ""}`}
          >
            November
          </button>
          <button
            onClick={() => setActive("january")}
            className={`${active == "january" ? "active" : ""}`}
          >
            January
          </button>
          <button
            onClick={() => setActive("february")}
            className={`${active == "february" ? "active" : ""}`}
          >
            February
          </button>
          <button
            onClick={() => setActive("march")}
            className={`${active == "march" ? "active" : ""}`}
          >
            March
          </button>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
};

export default FlightTicketPage;
