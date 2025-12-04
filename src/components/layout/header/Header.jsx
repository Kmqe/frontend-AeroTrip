import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// Custom hook to get window width (for responsive behavior)
import useWindowSize from "../../../hooks/useWindowSize";

// Custom button component
import Button from "../../common/button/Button";

// menu icon
import { FaBars } from "react-icons/fa6";

// Drawer component from Ant Design (sidebar panel)
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const width = useWindowSize();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <nav className={width < 992 ? "hidden" : ""}>
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
        <div className={`${width < 992 ? "hidden" : ""} header-actions`}>
          <div className="icon">
            <img src="/public/images/Search.svg" alt="search icon" />
          </div>
          <div className="icon">
            <img src="/public/images/Vector.svg" alt="language icon" />
          </div>
          <Button text={"Login"} />
        </div>

        <div
          className={`${width > 991 ? "hidden" : ""} bars`}
          onClick={showDrawer}
        >
          <FaBars />
        </div>

        <Drawer onClose={onClose} open={open}>
          <div className="drawer">
            <div className="header-actions">
              <div className="icon">
                <img src="/public/images/Search.svg" alt="search icon" />
              </div>
              <div className="icon">
                <img src="/public/images/Vector.svg" alt="language icon" />
              </div>

              <Button text={"Login"} />
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
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
