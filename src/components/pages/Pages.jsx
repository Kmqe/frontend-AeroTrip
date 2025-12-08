import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import FlightTicketPage from "./flightTicketPage/FlightTicketPage";

const Pages = () => {
  return (
    <>
      {/*  */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tickets" element={<FlightTicketPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
