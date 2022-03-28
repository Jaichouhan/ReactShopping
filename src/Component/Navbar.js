import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import Menubarsecond from "./Menubarsecond";
import "react-responsive-modal/styles.css";
import "./Navbar.css";
import LoginModel from "./Model/LoginModel";
import axios from "axios";
const Navbar = () => {
  const [value, setvalue] = useState(0);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [menu, setmenu] = useState(false);
  const [menushow, setmenushow] = useState(false);
  const login = localStorage.getItem("login");
  const [data, setData] = useState("");

  const ButtonClick = () => {
    setmenu(!menu);
  };
  const MenuShow = () => {
    setmenushow(!menushow);
  };
  useEffect(() => {
    axios
      .post("https://beta.wasilonline.net/dashboard/api/currency")
      .then((res) => setData(res.data.Currency.currency))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {menushow && <Menubarsecond />}
      <div className="Navbar-bg-color">
        <div className="container">
          <div className="Navbar-bg">
            <div className="Designp">
              <p onClick={onOpenModal}>My Account</p>
              <p>Order Tracking</p>
            </div>
            <div className="select">
              <select>
                <option>English</option>
                <option>Arabic</option>
              </select>
              <select>
                {data &&
                  data.map((data) => (
                    <option key={data.id}>{data.code}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container setPostion">
        <div className="d-flex justify-content-between Navbarpad">
          <div className="">
            <i className="fas fa-bars threebar" onClick={MenuShow}></i>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="imgspace" />
            </Link>
          </div>
          <div className="setthesearch">
            <div className="Input_absol">
              <input
                type="text"
                placeholder="Search For Products"
                className="inputstyle"
              />
              <i className="fas fa-search Searc_set"></i>
            </div>
          </div>

          <div className="d-flex">
            <div className="cartWrapper">
              <Link to="/Cart">
                <img
                  src="/images/cart.png"
                  alt="img"
                  className="imgspacecart"
                />
                <span className="cart-counting">
                  <small className="Smallpd">{value}</small>
                </span>
              </Link>
            </div>
            <div className="">
              <span>$</span>

              {login === "true" ? (
                <Link to="/Dashboard">
                  <img src="/images/User.png" alt="img" className="imgspace1" />
                </Link>
              ) : (
                <>
                  <img
                    src="/images/User.png"
                    alt="img"
                    className="imgspace1"
                    onClick={onOpenModal}
                  />
                </>
              )}

              <LoginModel open={open} onCloseModal={onCloseModal} />
            </div>
          </div>
        </div>
      </div>

      <div className="Space_third_navbar">
        <div className="container">
          <div className="d-flex align-items-center">
            <div>
              <button
                type="button"
                className="Navbar_btn me-2"
                onClick={ButtonClick}
              >
                <i className="fas fa-bars"></i> ALL CATEGORIES
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>

            <div className="d-flex">
              <ul className="Navbar_thirdstyle">
                <li
                  className={
                    value === 0
                      ? "Navbar_thirdstyle_li_active"
                      : "Navbar_thirdstyle_li"
                  }
                  onClick={() => setvalue(0)}
                >
                  <Link to="/">
                    <img src="/images/Home.png" alt="img" className="me-2" />
                    Home
                  </Link>
                </li>
                <li
                  className={
                    value === 1
                      ? "Navbar_thirdstyle_li_active"
                      : "Navbar_thirdstyle_li"
                  }
                  onClick={() => setvalue(1)}
                >
                  <Link to="/Shop">
                    <img src="/images/Shop.png" alt="img" className="me-2" />
                    Shop
                  </Link>
                </li>
                <li
                  className={
                    value === 2
                      ? "Navbar_thirdstyle_li_active"
                      : "Navbar_thirdstyle_li"
                  }
                  onClick={() => setvalue(2)}
                >
                  <Link to="/Api">
                    <img src="/images/Offers.png" alt="img" className="me-2" />
                    Offers
                  </Link>
                </li>
                <li
                  className={
                    value === 3
                      ? "Navbar_thirdstyle_li_active"
                      : "Navbar_thirdstyle_li"
                  }
                  onClick={() => setvalue(3)}
                >
                  <Link to="/Sell">
                    <img
                      src="/images/Sell With Us.png"
                      alt="img"
                      className="me-2"
                    />
                    Sell With Us
                  </Link>
                </li>
                <li
                  className={
                    value === 4
                      ? "Navbar_thirdstyle_li_active"
                      : "Navbar_thirdstyle_li"
                  }
                  onClick={() => setvalue(4)}
                >
                  <Link to="/Contact">
                    <img src="/images/contact.png" alt="img" className="me-2" />
                    Contact
                  </Link>
                </li>
                <li
                  className={
                    value === 5
                      ? "Navbar_thirdstyle_li_active"
                      : "Navbar_thirdstyle_li"
                  }
                  onClick={() => setvalue(5)}
                >
                  <Link to="/Wpay">
                    <img src="/images/wpayi.png" alt="img" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {menu && <Menubar />}
        </div>
      </div>
    </>
  );
};
export default Navbar;
