import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="conatiner About_bg">
        <div className="container">
          <div className="row">
            <h3>About us</h3>
            <p>
              There Are No Secrets To Success. It is The Result of Preparation,
              Hard Work, And Learning From Failure.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src="/images/our-story.png" alt="img" className="About_img" />
          </div>
          <div className="col-md-7">
            <h3 className="About_style_h3">SOME WORDS ABOUT US</h3>
            <h2 className="About_style_h2">OUR STORY</h2>
            <p className="About_style_p">
              In 2020, Lebanon faced its hardest economic crisis yet. The
              banking system disintegrated, the inflation skyrocketed and
              currency black markets emerged, leaving Lebanese citizens with
              limited access to USD. This is when Wasilonline saw the light. We
              created a user-friendly e-commerce marketplace that helps Lebanese
              expats around the globe, purchase goods and services for their
              families, friends, and relatives in Lebanon. The platform supports
              local businesses and offers products with carefully studied and
              stable prices.
            </p>

            <p className="About_style_p2">
              When you buy from Wasilonline you will be:
            </p>
            <div className="">
              <ul className="About_style_ul">
                <li>
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  Saving on USD conversion rate
                </li>
                <li>
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  Supporting the Lebanese
                </li>
              </ul>
              <ul className="About_style_ul">
                <li>
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  Enjoying a local delivery service
                </li>
                <li className="Li_space">
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  voiding bank transfer
                </li>
              </ul>
            </div>
            <p className="About_style_p2">
              If you are a vendor, you can collaborate with Wasilonline to
              benefit from:
            </p>
            <div className="">
              <ul className="About_style_ul">
                <li>
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  Increased market shares and sales
                </li>
                <li>
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  International exposure for your
                </li>
              </ul>
              <ul className="About_style_ul">
                <li>
                  <img src="/images/check-img.png" alt="img" className="me-2" />
                  New customer opportunity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="About_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="About_bottomh1">VISION MISSION</h1>
              <p className="About_bottomp">
                To revive the domestic market by creating a reliable e-commerce
                platform that encourages expats to purchase what their loved
                ones need from local Lebanese vendors and suppliers. With
                cooperation, dedication, and loyalty we intend to salvage our
                domestic market and support local vendors, now and in the
                future.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/vision-img.png"
                alt="img"
                className="About_bottomImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
