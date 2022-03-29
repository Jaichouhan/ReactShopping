import "./Shop.css";
import React  from "react";

const Shop = () => {

 
  // `https://api.themoviedb.org/3/movie/popular?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US&page=1`

  return (
    <>
      <div className="Shop_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 Shop_card">
              <img
                src="/images/1644577843.png"
                alt="img"
                className="Shop_img"
              />
              <div className="Shop_space">
                <div className="Shop_Round"></div>
                <span className="Shop_span">Demo</span>
                <p className="Shop_p">vigyan nagar1</p>
                <button type="button" className="Shop_btn">
                  Visit Store
                  <img src="/images/aroww.png" alt="img" />
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 Shop_card">
              <img
                src="/images/1644577884.jpg"
                alt="img"
                className="Shop_img"
              />
              <div className="Shop_space">
                <div className="Shop_Round"></div>
                <span className="Shop_span">Demo</span>
                <p className="Shop_p">vigyan nagar1</p>
                <button type="button" className="Shop_btn">
                  Visit Store
                  <img src="/images/aroww.png" alt="img" />
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 Shop_card">
              <img
                src="/images/1644577843.png"
                alt="img"
                className="Shop_img"
              />
              <div className="Shop_space">
                <div className="Shop_Round"></div>
                <span className="Shop_span">Demo</span>
                <p className="Shop_p">vigyan nagar1</p>
                <button type="button" className="Shop_btn">
                  Visit Store
                  <img src="/images/aroww.png" alt="img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
