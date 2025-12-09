import "./ticket.css";

import { BsArrowRight } from "react-icons/bs";

import ButtonCustom from "../../common/button/ButtonCustom";

import flights from "../../data/data.json";

const Ticket = () => {
  {
    return flights.map((flight) => (
      <div className="ticket" key={flight.id}>
        <div className="ticket-header">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <p>
            Class:<span>{flight.class}</span>
          </p>
        </div>
        <div className="ticket-body">
          <img
            src="/images/line-of-ticket.png"
            alt="line ticket"
            className="line-ticket"
          />
          <div className="flight-route-info">
            <div className="from route-box">
              <span>from</span>
              <h2>{flight.from.code}</h2>
              <p className="city">{flight.from.city}</p>
              <span className="time">
                Departure:<strong>{flight.departure_time}</strong>
              </span>
            </div>
            <div className="arrow-icons">
              <BsArrowRight className="arrow-right" />
              <BsArrowRight className="arrow-right" />
              <BsArrowRight className="arrow-right" />
            </div>
            <div className="to route-box">
              <span>to</span>
              <h2>{flight.to.code}</h2>
              <p className="city">{flight.to.city}</p>
              <span className="time">
                Arrival:<strong>{flight.arrival_time}</strong>
              </span>
            </div>
          </div>
          <div className="flight-details-info">
            <p>
              Date: <span>{flight.date}</span>
            </p>
            <p>
              Duration: <span>{flight.duration}</span>
            </p>
            <p>
              Price: <span>{flight.price}</span>
            </p>
            <ButtonCustom text="Book Now" />
          </div>
        </div>
      </div>
    ));
  }
};

export default Ticket;
