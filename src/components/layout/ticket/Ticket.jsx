import "./ticket.css";

import { BsArrowRight } from "react-icons/bs";

import ButtonCustom from "../../common/button/ButtonCustom";

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <img src="/images/logo.png" alt="logo" className="logo" />
        <p>
          Class:<span>Economy</span>
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
            <h2>RUH</h2>
            <p className="city">Riyadh</p>
            <span className="time">
              Departure:<strong>10:45 AM</strong>
            </span>
          </div>
          <div className="arrow-icons">
            <BsArrowRight className="arrow-right" />
            <BsArrowRight className="arrow-right" />
            <BsArrowRight className="arrow-right" />
          </div>
          <div className="to route-box">
            <span>to</span>
            <h2>DXB</h2>
            <p className="city">Dubai</p>
            <span className="time">
              Arrival: <strong>12:25 PM</strong>
            </span>
          </div>
        </div>
        <div className="flight-details-info">
          <p>
            Date: <span>November 18, 2025 — Tuesday</span>
          </p>
          <p>
            Duration: <span>2 hours 40 minutes</span>
          </p>
          <p>
            Price: <span>750 SAR</span>
          </p>
          <ButtonCustom text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
