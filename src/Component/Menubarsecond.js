import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menubarsecond = () => {
  const [close, setclose] = useState(true);
  const CloseMenu = () => {
    setclose(!close);
  };
  return (
    <>
      {close && (
        <div className="MenuSecond">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <img src="/images/logo (1).png" alt="img" className="img_width" />
            </Link>
            <i className="fas fa-times cut-icon" onClick={CloseMenu}></i>
          </div>
          <div className="">
            <ul className="MenuSecond_ul">
              <li onClick={CloseMenu}>
                <Link to="/" >
                  <img src="images/Home.png" className="me-2" alt="img" />
                  Home
                </Link>
              </li>
              <li onClick={CloseMenu}>
                <img src="images/Shop.png" className="me-2" alt="img" />
                Shop <i className="fas fa-chevron-down"></i>
              </li>
              <li onClick={CloseMenu}>
                <img src="images/About.png" className="me-2" alt="img" />
                About Us
              </li>
              <li onClick={CloseMenu}>
                <Link to="/Api">
                <img src="images/Home.png" className="me-2" alt="img" />
                Offers
                </Link>
              </li>
              <li onClick={CloseMenu}>
                <img src="images/FAQ.png" className="me-2" alt="img" />
                FAQ
              </li>
              <li onClick={CloseMenu}>
                <img src="images/wish-list.png" className="me-2" alt="img" />
                Wish List
              </li>
              <li onClick={CloseMenu}>
                <img src="images/Home.png" className="me-2" alt="img" />
                Sell With Us
              </li>
              <li onClick={CloseMenu}> 
                <Link to="/Contact">
                  <img
                    src="images/contact (1).png"
                    className="me-2"
                    alt="img"
                  />
                  Contact
                </Link>
              </li>
              <li onClick={CloseMenu}>
                <i className="fas fa-wallet me-2"></i>
                Wallet
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Menubarsecond;
