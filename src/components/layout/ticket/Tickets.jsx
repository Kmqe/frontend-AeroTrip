import allFlight from "../../data/data.json";
import Ticket from "./Ticket";

const Tickets = () => {
  return <Ticket flights={allFlight} />;
};

export default Tickets;
