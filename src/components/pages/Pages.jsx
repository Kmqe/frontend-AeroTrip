import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import FlightTicketPage from "./flightTicketPage/FlightTicketPage";
import LoginPage from "./loginPage/LoginPage";
import SignUpPage from "./signUpPage/SignUpPage";
import DestinationsPage from "./destinationPage/DestinationsPage";

const Pages = () => {
  return (
    <>
      {/*  */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tickets" element={<FlightTicketPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
