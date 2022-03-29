import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Related.css";
import Card from "../../../src/Component/Card"
const Related = () => {
  const [show, setshow] = useState(0);
  return (
    <>
      <div className="Related_bg">
        <div className="container Related_background">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-between" id="Change_direc">
              <div className="leftimgssection" id="number1">
                {" "}
                <img src="/images/1644383942.jpg" alt="#" />
              </div>
              <div className="proucts-main-img" id="number2">
                <img src="/images/1644383942.jpg" alt="#" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="products-links-wrap">
                <Link to="/">Home</Link>
                <label className="slash-wrap">
                  <i className="">&#47;</i>
                </label>
                <Link to="/">Baby &#47; Toys </Link>
                <label className="slash-wrap">
                  <i className="">&#47;</i>
                </label>
                <Link to="/"> Outdoor Play</Link>
              </div>

              <h6 className="Related_h6">Toy</h6>

              <div className="amount-section">
                <p>toys</p>
                <del>$7</del>
                <span>$3</span>
                <span className="stock-update">12 in Stock</span>
              </div>

              <div className="add-cart-wrpaeer">
                <button className="decrement-btn">-</button>
                <button className="product-number">1</button>
                <button className="increment-btn">+</button>
                <button className="add-to-cart-btn">Add to cart</button>
              </div>
              <div className="optionsize-wrappers">
                <div className="sizeoptin-wrapp">
                  <select className="sizeoption-drop">
                    <option>Size</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XLL</option>
                  </select>
                </div>
                <div className="sizeoptin-wrapp">
                  <select className="coloroption-drop">
                    <option>Color</option>
                    <option>Red</option>
                    <option>Black</option>
                    <option>White</option>
                    <option>Yellow</option>
                  </select>
                </div>
              </div>

              <div className="wishlist-wrap">
                <span>
                  <i className="far fa-heart me-2"></i>Add to Wishlist
                </span>
              </div>

              <div className="sku-text-wrapper">
                <b>SKU:</b> <span>INTEX-58660</span>
                <br />
                <b>Category:</b> <span>Outdoor Play</span>
              </div>

              <div className="share-wrapper">
                <b>Share:</b>
                <a
                  className="social-link"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="social-link"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="social-link"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>{" "}
                <a
                  className="social-link"
                  href="https://in.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="Related2_bg">
            <div className="Section_Real">
              <div className="d-flex Border_boto">
                <div className="">
                  <p className={show === 0 ? "descripton-textsActive" : "Related_btn"} onClick={() => setshow(0)}>
                    Description
                  </p>
                </div>
                <div className="">
                  <p className={show === 1 ? "descripton-textsActive" : "Related_btn"} onClick={() => setshow(1)}>
                    ADDITIONAL INFORMATION
                  </p>
                </div>
                <div className="">
                  <p className={show === 2 ? "descripton-textsActive" : "Related_btn"} onClick={() => setshow(2)}>
                    REVIEWS (1)
                  </p>
                </div>
              </div>
              {show === 0 && (
                <div className="descripton-texts">
                  <p>baby toys</p>
                  <p>baby toys</p>
                </div>
              )}

              {show === 1 && (
                <div className="descripton-texts">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non
                  </p>
                </div>
              )}

              {show === 2 && (
                <div className="descripton-texts">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="products-line"><p className="related-products">RELATED PRODUCTS</p>
          
           <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Related;
