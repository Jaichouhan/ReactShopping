import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  return (
    <>
      <div className="Cart_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 Cart_bg1">
              <div className="Cart_padd">
                <div className="Set_width">
                  <div>
                    <b>Product</b>
                  </div>
                </div>
                <div className="Set_width1">
                  <div>
                    <b id="Cart_hide">Price</b>
                  </div>
                </div>
                <div className="Set_width1">
                  <div>
                    <b>Quantity</b>
                  </div>
                </div>
                <div className="Set_width1">
                  <div>
                    <b id="Cart_hide">Subtotal</b>
                  </div>
                </div>
              </div>

              <div className="Cart_boader">
                <div className="products-name-wrapper">
                  <i className="far fa-trash-alt Cart_i"></i>
                  <div className="imgs-bg">
                    <img
                      src="/images/1643878600.jpg"
                      alt="#"
                      className="Cart_img"
                    />
                  </div>
                  <p className="CArt__P">
                    Eti Pop Kek With Chocolate 45G *24 Pcs
                  </p>
                </div>
                <span className="Cart_span" id="Cart_hide">
                  $3
                </span>
                <div className="product-price">
                  <button className="decrement-btn">-</button>
                  <button className="product-number">1</button>
                  <button className="increment-btn">+</button>
                </div>
                <span className="product-price" id="Cart_hide">
                  $ <span>3</span>
                </span>
              </div>

              <div className="Cart_boader">
                <div className="products-name-wrapper">
                  <i className="far fa-trash-alt Cart_i"></i>
                  <div className="imgs-bg">
                    <img
                      src="/images/1643878600.jpg"
                      alt="#"
                      className="Cart_img"
                    />
                  </div>
                  <p className="CArt__P">
                    Eti Pop Kek With Chocolate 45G *24 Pcs
                  </p>
                </div>
                <span className="Cart_span" id="Cart_hide">
                  $3
                </span>
                <div className="product-price">
                  <button className="decrement-btn">-</button>
                  <button className="product-number">1</button>
                  <button className="increment-btn">+</button>
                </div>
                <span className="product-price" id="Cart_hide">
                  $ <span>3</span>
                </span>
              </div>

              <div className="Cart_boader">
                <div className="products-name-wrapper">
                  <i className="far fa-trash-alt Cart_i"></i>
                  <div className="imgs-bg">
                    <img
                      src="/images/1643878600.jpg"
                      alt="#"
                      className="Cart_img"
                    />
                  </div>
                  <p className="CArt__P">
                    Eti Pop Kek With Chocolate 45G *24 Pcs
                  </p>
                </div>
                <span className="Cart_span" id="Cart_hide">
                  $3
                </span>
                <div className="product-price">
                  <button className="decrement-btn">-</button>
                  <button className="product-number">1</button>
                  <button className="increment-btn">+</button>
                </div>
                <span className="product-price" id="Cart_hide">
                  $ <span>3</span>
                </span>
              </div>

              <div className="carts-btn-wrapper">
                <div className="apply-wrap">
                  <input type="text" placeholder="Coupon Code" />
                  <button>Apply Coupon</button>
                </div>
                <button className="update-cart-btn">Update cart</button>
              </div>
            </div>

            <div className="col-lg-2 cart-details">
              <p className="cart-total">Cart Total</p>
              <p className="subtotals">
                <span>Subtotal</span>
                <label>$</label>
              </p>
              <div className="shipping-wrapp">
                <span className="shipping-tag">Shipping</span>
                <div className="shiping-details">
                  <span className="flate-rate">Flate rate: $10.00</span>
                  <br />
                  <span className="shipping-carts">
                    Shipping options will be updated during checkout
                  </span>
                  <br />
                  <span className="calculater-shping">
                  calculate Shipping
                    <img src="/images/truck.png" alt="#" />
                  </span>
                </div>
              </div>

              <div className="total-wrap">
                <span>
                  <b>Total</b>
                </span>
                <span className="totalAmount">$NaN</span>
              </div>
             <Link to="/Checkout"><button className="proceed-btn">proceed to checkout</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
