import "./footer.css";

const Footer = () => {
  const copyRight = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <h3>About AeroTrip</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Media Center</li>
              <li>News & Updates</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Flights</li>
              <li>Destinations</li>
              <li>Offers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <ul>
              <li>Instagram</li>
              <li>Snapchat</li>
              <li>Twitter</li>
              <li>TikTok</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>

        <div className="footer-app">
          <div className="footer-app-image">
            <img src="/public/images/app.svg" alt="AeroTrip App" />
          </div>
          <div className="footer-app-content">
            <h3>Download our application</h3>
            <div className="footer-app-buttons">
              <a href="#" className="store-btn">
                <img
                  src="/images/google-play.svg"
                  alt="Get it on Google Play"
                />
              </a>
              <a href="#" className="store-btn">
                <img
                  src="/images/app-store.svg"
                  alt="Download on the App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>© {copyRight} AeroTrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
