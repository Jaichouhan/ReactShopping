import React from "react";
import "./Sell.css";
const Sell = () => {
  return (
    <>
      <div className="Sell_bg">
        <div className="container ">
          <p className="Sell_p">
            Millions Of Shoppers Can’t Wait To See What You Have In Store
          </p>
          <button type="button" className="Sell_btn">
            SELL WITH US
          </button>
        </div>
      </div>

      <div className="container Sell_padd">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <img src="/images/agllery.png" alt="img" className="Sell_img" />
          </div>
          <div className="col-lg-7 col-md-12">
            <p className="Sell_p1">BEST FEES TO START</p>
            <p className="Affordable-line">
              Affordable, Transparent, and Secure
            </p>
            <p className="it-dose-line">
              It doesn’t cost a thing to list up your products, and you only pay
              after your stuff sells. It’s just a small percent of the money you
              earn.
            </p>
            <div className="Sell_flex">
              <div className="tool-wrap">
                <img src="/images/Powerfull (1).png" alt="#" className="Sell_width"/>
                <span>Powerful Tools</span>
              </div>
              <div className="tool-wrap">
                <img src="/images/Support.png" alt="#" />
                <span>24/7 Support</span>
              </div>

              <div className="Lowfees-wrap">
                <img src="/images/Lowfees.png" alt="#" />
                <span>Low Fees</span>
              </div>
            </div>
            <button type="btn" className="Sell_btn1">
              SELL WITH US
            </button>
          </div>
        </div>
      </div>

      <div className="SEll_bottom">
        <div className="container">
          <p className="howits-work-line">HOW IT WORKS</p>
          <p className="heres-step-line">Here's a step by step guide</p>

          <div className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 Flex_Wrap">
                <img src="/images/Register.png" alt="#" />
                <span className="Sell_sapn">
                  Register and list your products for free
                </span>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 Flex_Wrap">
                <img src="/images/Receive.png" alt="#" />
                <span className="Sell_sapn">
                  Receive orders and sell your produc
                </span>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 Flex_Wrap">
                <img src="/images/Package.png" alt="#" />
                <span className="Sell_sapn">Package and deliver with ease</span>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 Flex_Wrap">
                <img src="/images/GetPayment.png" alt="#" />
                <span className="Sell_sapn">
                  Get payments and grow your busines
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
