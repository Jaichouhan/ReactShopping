import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import axios from "axios";

const Footer = () => {
  const [email, setemail] = useState("");

  const data = {
    email: email,
  };

  const sendemail = (event) => {
    event.preventDefault();

    axios
      .post("https://beta.wasilonline.net/dashboard/api/news-latter", data)
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className="Footerbg">
        <div className="container">
          <div className="row">
            <div className="Footer_disp">
              <div className="Footer_flex">
                <img src="/images/ee.png" alt="img"/>
                <h3 className="Footer_h3">SIGN UP FOR NEWSLETTERS</h3>
              </div>
              <div className="Footer_input">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <button type="button" onClick={sendemail}>
                  Search
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <ul>
                <h3 className="Footer_h31">STORE LOCATION</h3>
                <li className="Footer_li">
                  Mathaf, Blvd Pierre Gemayel Le Bureau Building, 3rd Floor,
                  Beirut, Lebanon
                </li>
                <li className="Footer_listyle">
                  <img src="/images/eeee.png" className="me-2" alt="img"/>
                  <p>support@wasilonline.com</p>
                </li>
                <li className="Footer_listyle">
                  <img src="/images/phone.png" className="me-2" alt="img"/>
                  <p>+961 81 492 154,</p>
                  <p>+961 81 492 156</p>
                </li>
                <li className="Footer_listyle">
                  <img src="/images/wwww.png" className="me-2" alt="img" />
                  <p>+961 81 492 156</p>
                  <p>+961 81 492 156</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <ul className="Footer_ul_Style">
                <h3 className="Footer_h31">INFORMATION</h3>
                <li>
                  <Link to="/About">About us</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>Service</li>
              <Link to="/Privacy"> <li>Privacy Policy</li></Link> 
              <Link to="/Terms"><li>Terms and Conditions</li></Link>  
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <ul className="Footer_ul_Style">
                <h3 className="Footer_h31">MY ACCOUNT</h3>
                <li>Contact</li>
                <li>Shop</li>
                <Link to="/Api">
                  <li>FAQ</li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <ul className="Footer_ul_Style">
                <h3 className="Footer_h31">CATEGORIES</h3>
                <li>Dekkeneh</li>
                <li>Desserts</li>
                <li>Beauty Fashion</li>
                <li>Toys</li>
                <li>Baby</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 FooterPading">
              <ul className="Footer_ul_Style">
                <li>Office Supplies</li>
                <li>Books Stationery</li>
                <li>Electronics</li>
                <li>Mobiles Tablets</li>
                <li>Sports Fitness</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Footer_end_bg">
          <div className="container d-flex justify-content-between">
            <div className="">
              <p className="Footer_p_mar">© 2021 Wasil Online. All Rights Reserved</p>
            </div>
            <div className="">
              <img src="/images/card-1.png" alt="img"/>
              <img src="/images/card-2.png" alt="img"/>
              <img src="/images/card-3.png" alt="img"/>
              <img src="/images/card-4.png" alt="img"/>
              <img src="/images/card-5.png" alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
