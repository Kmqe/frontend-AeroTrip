import "./ticket.css";

import { BsArrowRight } from "react-icons/bs";

import ButtonCustom from "../../common/button/ButtonCustom";
import { Link } from "react-router-dom";

const Ticket = ({ flights }) => {
  {
    return flights.map((flight) => (
      <div className="ticket" key={flight.id}>
        <div className="ticket-header">
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo"
            loading="lazy"
          />
          <p>
            Class:<span>{flight.class}</span>
          </p>
        </div>
        <div className="ticket-body">
          <img
            src="/images/line-of-ticket.png"
            alt="line ticket"
            className="line-ticket"
            loading="lazy"
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
            <Link to={"/booking"}>
              <ButtonCustom text="Book Now" />
            </Link>
          </div>
        </div>
      </div>
    ));
  }
};

export default Ticket;
