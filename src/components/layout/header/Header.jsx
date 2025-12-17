import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// Custom hook to get window width (for responsive behavior)
import useWindowSize from "../../../hooks/useWindowSize";

// Custom button component
import ButtonCustom from "../../common/button/ButtonCustom";

// menu icon
import { FaBars } from "react-icons/fa6";

// Drawer component from Ant Design
import { Drawer } from "antd";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [placement] = useState("top");
  const width = useWindowSize();

  const showNavDrawer = () => {
    setOpenNav(true);
  };
  const closeNavDrawer = () => {
    setOpenNav(false);
  };

  const showSearchDrawer = () => {
    setOpenSearch(true);
  };
  const closeSearchDrawer = () => {
    setOpenSearch(false);
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
              <Link to={"/home#hero"}>Home</Link>
            </li>
            <li>
              <Link to={"/home#flight"}>Flights</Link>
            </li>
            <li>
              <Link to={"/home#destination"}>Destinations</Link>
            </li>
            <li>
              <Link to={"/home#features"}>Features</Link>
            </li>
            <li>
              <Link to={"/home#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={`${width < 992 ? "hidden" : ""} header-actions`}>
          <div className="icon" onClick={showSearchDrawer}>
            <img src="/images/Search.svg" alt="search icon" />
          </div>
          <div className="icon">
            <img src="/images/Vector.svg" alt="language icon" />
          </div>
          <Link to={"login"}>
            <ButtonCustom text={"Login"} />
          </Link>
        </div>

        <div
          className={`${width > 991 ? "hidden" : ""} bars`}
          onClick={showNavDrawer}
        >
          <FaBars />
        </div>

        <Drawer onClose={closeNavDrawer} open={openNav}>
          <div className="drawer">
            <div className="header-actions">
              <div
                className="icon"
                onClick={() => {
                  closeNavDrawer();
                  showSearchDrawer();
                }}
              >
                <img src="/images/Search.svg" alt="search icon" />
              </div>
              <div className="icon">
                <img src="/images/Vector.svg" alt="language icon" />
              </div>
              <ButtonCustom text={"Login"} />
            </div>

            <nav>
              <ul>
                <li>
                  <Link to={"/home#hero"} onClick={closeNavDrawer}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/home#flight"} onClick={closeNavDrawer}>
                    Flight
                  </Link>
                </li>
                <li>
                  <Link to={"/home#destination"} onClick={closeNavDrawer}>
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to={"/home#features"} onClick={closeNavDrawer}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link to={"/home#contact"} onClick={closeNavDrawer}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Drawer>

        <Drawer
          placement={placement}
          closable={true}
          onClose={closeSearchDrawer}
          open={openSearch}
          key={placement}
          className="drawer-search"
        >
          <div className="box-search">
            <div className="search-logo">
              <h3>Search</h3>
              <img src="/public/images/Search.svg" alt="" />
            </div>
            <input type="text" placeholder="Search for a trip..." />
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
