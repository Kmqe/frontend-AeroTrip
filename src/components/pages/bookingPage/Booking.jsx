import "./booking.css";
import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import { BsArrowRight } from "react-icons/bs";
import ButtonCustom from "../../common/button/ButtonCustom";
import { useReducer } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

let initialValue = {
  national_id: "",
  full_name: "",
  email: "",
  phone_number: "",
  passport_number: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_NATIONAL_ID":
      return { ...state, national_id: action.payload.replace(/\D/g, "") };
    case "UPDATE_NAME":
      return { ...state, full_name: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PHONE":
      return { ...state, phone_number: action.payload.replace(/\D/g, "") };
    case "UPDATE_PASSPORT":
      return { ...state, passport_number: action.payload.replace(/\D/g, "") };
    default:
      return state;
  }
}

const Booking = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const width = useWindowSize();
  return (
    <div className="booking">
      <div className="container">
        <SectionHeader title={"Booking Form"} />
        <div className="booking-summary">
          <div className="trip-route">
            <span className="from-city">Riyadh</span>
            <div className="arrows">
              <BsArrowRight
                className={`arrow ${width < 568 ? "hidden" : ""}`}
              />
              <BsArrowRight className="arrow" />
              <BsArrowRight
                className={`arrow ${width < 568 ? "hidden" : ""} `}
              />
            </div>
            <span className="to-city">London</span>
          </div>
          <div className="summary-price">
            <span className="label">Price:</span>
            <span className="value"> 2,286 SAR</span>
          </div>
          <div className="summary-date">
            <span className="label">Date:</span>
            <span className="value">December 3, 2025 — Wednesday</span>
          </div>
        </div>
        <p>
          Fill out the form below to book your ticket and finalize the payment.
        </p>
        <div className="booking-form">
          <div className="form-panel payment-details">
            <h2>Payment Details</h2>
            <form action="#">
              <input type="text" placeholder="Cardholder Name" />
              <input type="text" placeholder="Card Number" />
              <div style={{ display: "flex", gap: "20px" }}>
                <input type="text" placeholder="Expiry Date" />
                <input type="text" placeholder="CVV" name="cvv" />
              </div>
              <div className="form-check">
                <input id="confirm" type="checkbox" />
                <label htmlFor="confirm">
                  I confirm that all information provided is accurate
                </label>
              </div>
              <ButtonCustom text={"Complete Booking"} />
            </form>
          </div>
          <div className="form-panel passenger-info">
            <h2>Passenger Information</h2>
            <input
              value={state.national_id}
              type="text"
              placeholder="National ID"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_NATIONAL_ID",
                  payload: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                dispatch({ type: "UPDATE_NAME", payload: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email Address"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={state.phone_number}
              onChange={(e) =>
                dispatch({ type: "UPDATE_PHONE", payload: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Passport Number"
              value={state.passport_number}
              onChange={(e) =>
                dispatch({ type: "UPDATE_PASSPORT", payload: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
