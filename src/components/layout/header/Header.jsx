import "./header.css";
import { Link } from "react-router-dom";

import Button from "../../common/button/Button";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Flights</Link>
            </li>
            <li>
              <Link>Destinations</Link>
            </li>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="icon">
            <img src="/public/images/Search.svg" alt="search icon" />
          </div>
          <div className="icon">
            <img src="/public/images/Vector.svg" alt="language icon" />
          </div>
          <Button text={"Login"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
