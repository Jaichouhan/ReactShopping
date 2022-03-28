import "./Checkout.css";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Checkout = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="Checkout_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="billingFormwrapper">
                <p>Billing Details</p>
                <div className="form-wrapper">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                  <input type="text" placeholder="Company name" />
                  <input type="text" placeholder="Country / region" />
                  <input type="text" placeholder="Street address" />
                  <input type="text" placeholder="Town / city " />
                  <input type="number" placeholder="Postcode" />
                  <input type="Phone" placeholder="Phone" />
                  <input type="Email" placeholder="Email address" />
                </div>
                <div className="Shiptowrapper">
                  <div className="checkdifferent">
                    <input type="checkbox" />
                    <span>Ship to a different address?</span>
                  </div>
                  <div className="yourorder">
                    <p>Order notes </p>
                    <textarea
                      rows="5"
                      cols="15"
                      placeholder=" Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="Yourorderwrap">
                <p>Your order</p>
                <div className="subtotal-wrapp">
                  <div className="products-tag">
                    <span>Product</span>
                    <span>SUbtotal </span>
                  </div>
                  <div className="Touchtag">
                    <span>Touch up cosmetics</span>
                    <span>$20.00 </span>
                  </div>
                  <div className="products-tag">
                    <span>Subtotal</span>
                    <span>$20.00 </span>
                  </div>
                  <div className="Shipping-tag">
                    <span>Shipping</span>
                    <label>Flate eate $10.00 </label>
                  </div>
                  <div className="Total-tag">
                    <span>Total</span>
                    <label>$30.00</label>
                  </div>
                  <div className="payments-wrappe">
                    <div className="accordion" id="myAccordion">
                      <div className="#">
                        <div className="accordion-header" id="headingOne">
                          <div
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                          >
                            <label className="paymenttags">
                              <input type="radio" name="card" />
                              <span>Direct Bank Transfer</span>
                            </label>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="comment-wrapper">
                            <div className="property-down-aroww">
                              <i className="fas fa-sort-down"></i>
                            </div>
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="#">
                        <div className="accordion-header" id="headingTwo">
                          <div
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            className="collapsed"
                          >
                            <label className="paymenttags">
                              <input type="radio" name="card" />
                              <span>Wallet</span>
                            </label>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="comment-wrapper">
                            <div className="property-down-aroww">
                              <i className="fas fa-sort-down"></i>
                            </div>
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="#">
                        <div className="accordion-header" id="headingThree">
                          <div
                            className="paymenttags collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                          >
                            <label className="paymenttags">
                              <input type="radio" name="card" />
                              <span>Cash on delivery</span>
                            </label>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="comment-wrapper">
                            <div className="property-down-aroww">
                              <i className="fas fa-sort-down"></i>
                            </div>
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="#">
                        <div className="accordion-header" id="headingFour">
                          <div
                            className="paymenttags collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                          >
                            <label className="paymenttags">
                              <input type="radio" name="card" />
                              <span>Paypal</span>
                              <img src="/images/payments.png" alt="#" />
                            </label>
                          </div>
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="comment-wrapper">
                            <div className="property-down-aroww">
                              <i className="fas fa-sort-down"></i>
                            </div>
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="place-btn" onClick={onOpenModal}>
                  place order
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                  <div className="title">
                    <h2 className="title-text">Sign in </h2>
                  </div>
                  <form className="form-wrapper">
                    <div className="main-inputswrap">
                      <div className="left-wrapeer">
                        <div className="cardnumber-wrapper">
                          <input
                            type="number"
                            placeholder="Card number"
                            name="email"
                            required=""
                          />
                          <div className="card-mmwrapper">
                            <input type="text" placeholder="MM/YY" />
                            <input type="text" placeholder="CVV" />
                          </div>
                        </div>
                      </div>
                      <div className="right-wrapeer">
                        <div className="remamber-wrapeer">
                          <div className="form-element-group ">
                            <input
                              type="checkbox"
                              placeholder="MM/YY"
                              required=""
                              className="me-2 inputASet"
                            />
                            <span className="remmber-line">Remember Me</span>
                          </div>
                        </div>
                      </div>
                      <button className="pay-btns" name="submit-btn">
                        <span>Pay 30.00 $</span>
                      </button>
                    </div>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
