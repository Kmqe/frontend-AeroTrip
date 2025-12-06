import "./contact.css";

import SectionHeader from "../../layout/sectionHeader/SectionHeader";
import ButtonCustom from "../../common/button/ButtonCustom";
const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <SectionHeader
          title="Contact us"
          subtitle="Have questions or need assistance with your booking? "
        />
        <div className="contact-content">
          <div className="contact-info">
            <h4>Contact Info</h4>
            <div className="center-info">
              <div className="contact-item">
                <div className="icon">
                  <img src="/images/phone.svg" alt="phone" />
                </div>
                <p>+966 555 000 123</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img src="/images/location.svg" alt="location" />
                </div>
                <p>Riyadh,Saudi Arabia</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img src="/images/email.svg" alt="phone" />
                </div>
                <p>support@trip.com</p>
              </div>
            </div>
            <p>Follow us on</p>
            <div className="social-media">
              <div className="social-icon">
                <img src="/images/tiktok.svg" alt="tiktok account" />
              </div>
              <div className="social-icon">
                <img src="/images/instagram.svg" alt="instagram account" />
              </div>
              <div className="social-icon">
                <img src="/images/snapchat.svg" alt="snapchat account" />
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h4>Contact Form</h4>
            <form action="#">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" />
              <ButtonCustom text="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
