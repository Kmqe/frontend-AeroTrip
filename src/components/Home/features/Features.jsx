import { useLocation } from "react-router-dom";
import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import Card from "./cards/Card";
import "./features.css";
import { useEffect } from "react";

const Features = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <section className="features" id="features">
      <div className="container">
        <SectionHeader title="Features" />
        <div className="features-grid">
          <Card
            title="Affordable Prices"
            description="Enjoy budget-friendly booking options and competitive deals that offer the best value for
your money."
            icon="dollar-sign"
          />
          <Card
            title="Easy Ticket Booking"
            description="Book your ticket in seconds through a simple, seamless, 
and highly secure process completely hassle-free."
            icon="airplane"
          />
          <Card
            title="Fully Responsive Design"
            description="The website works seamlessly 
        on all devices — mobile, tablet
        and desktop — for a comfortable experience anywhere."
            icon="phone-laptop"
          />
          <Card
            title="Real-Time Flight Updates"
            description="Stay informed with instant updates on flight schedules
            and details, always accurate 
            and up to date."
            icon="date-time"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
