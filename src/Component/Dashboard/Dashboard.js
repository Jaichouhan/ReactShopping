import "./Dashboard.css";
import React, { useState } from "react";
import PostApi from "./PostApi";
import Shiping from "./Pages/Shiping";
import Feedback from "./Pages/Feedback";
import Cancel from "./Pages/Cancel";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const history = useNavigate();
  const [show, setshow] = useState(0);
  const [open, setopen] = useState(false);
  const Modelopen = () => setopen(true);
  const CloseModel = () => setopen(false);

  return (
    <>
      {localStorage.getItem("login") !== true ? (
        <div className="Dashboard_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="left-side-wrapp">
                  <div className="user-details-wrapper">
                    <div className="userimg-wrapper"></div>
                    <div className="user-details-wrpapp">
                      <p className="status-line">Hello</p>
                      <p className="user-line">Jai Chouhan</p>
                    </div>
                  </div>
                  <div className="Deshbord-tab-wrapp">
                    <p onClick={() => setshow(0)} className="color_p_effect">
                      <i className="fas fa-boxes-alt me-4"></i>Dashboards
                    </p>
                    <p onClick={() => setshow(1)}>
                      <i className="fas fa-user-circle me-4"></i>My Account
                    </p>
                    <p onClick={() => setshow(2)}>
                      <i className="fas fa-box-open me-4"></i>My Orders
                    </p>
                    <p onClick={() => setshow(3)}>
                      <i className="fas fa-box-open me-4"></i>My Wallet
                    </p>
                    <p onClick={() => setshow(4)}>
                      <i className="fas fa-wallet me-4"></i>Payments
                    </p>
                    <p onClick={() => setshow(5)}>
                      <i className="fas fa-map-marker-alt me-4"></i>Address
                    </p>
                    <p onClick={() => setshow(6)}>
                      <i className="fas fa-heart me-4"></i>WishList
                    </p>
                    <p
                      onClick={() => {
                        setshow(9);
                        localStorage.clear();
                        history("/");
                        window.location.reload();
                      }}
                    >
                      <i className="fas fa-sign-out-alt me-4"></i>Logout
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                {show === 0 && (
                  <section className="Deshbord-page-wrapper">
                    <div className="welcome-wrapper">
                      <div className="walcome-status-wrapper">
                        <p className="welcome-backline">Welcome Back</p>
                        <p className="my-recent-order-line">My Recent Order</p>
                      </div>
                      <button className="logoutbtn">Logout</button>
                    </div>
                    <section className="recent-orderwrapper">
                      <div className="recent-order-toptab">
                        <div className="order-place-wrapp">
                          <p className="order-place-line">Order-plece</p>
                          <p className="order-date">08 January 2022</p>
                        </div>
                        <div className="shipto-wrapper">
                          <p className="shipto-line">Ship TO</p>
                          <p className="owner-order-name"> Jai </p>
                          <p className="short-addras">White house</p>
                        </div>
                        <div className="total-wrapper">
                          <p className="total-tag">Totel</p>
                          <p className="total-amounts">$300.0</p>
                        </div>
                        <div className="order-details-wrapper">
                          <p className="order-number">Order # 456-12345678</p>
                          <button
                            className="vierorder-details-link"
                            onClick={() => setshow(8)}
                          >
                            View Order Details
                          </button>
                        </div>
                      </div>
                      <div className="order-items-wrapper">
                        <p className="deliverd-status">Deliverd Tuesday</p>
                        <section className="order-product-wrapper">
                          <div className="order-productimg">
                            <img src="/images/cam.png" alt="#" />
                          </div>
                          <div className="order-items-wrapper">
                            <p className="order-product-name">
                              Sony Handycam 32Gb With Built-In Projector, Pj675
                            </p>
                            <p className="sold-bylin">Sold by: Sami Kotob</p>
                            <p className="return-elin">
                              Return eligiblr through 20-Jan-2022
                            </p>
                            <label className="price-tag">$200.00</label>
                          </div>
                        </section>
                      </div>
                      <div className="order-items-wrapper">
                        <p className="deliverd-status">Deliverd Tuesday</p>
                        <section className="order-product-wrapper">
                          <div className="order-productimg">
                            <img src="/images/cam.png" alt="#" />
                          </div>
                          <div className="order-items-wrapper">
                            <p className="order-product-name">
                              Sony Handycam 32Gb With Built-In Projector, Pj675
                            </p>
                            <p className="sold-bylin">Sold by: Sami Kotob</p>
                            <p className="return-elin">
                              Return eligiblr through 20-Jan-2022
                            </p>
                            <label className="price-tag">$200.00</label>
                          </div>
                        </section>
                      </div>
                    </section>
                  </section>
                )}

                {show === 1 && (
                  <div className="accounts-rightside-wrapper">
                    <div className="Toastify"></div>
                    <form className="form-wrapper">
                      <label>
                        <p>First name</p>
                        <input type="text" placeholder="Ewt" />
                      </label>
                      <label>
                        <p>Last name</p>
                        <input type="text" placeholder="Devloper" />
                      </label>
                      <label>
                        <p>Display name</p>
                        <input type="text" placeholder="" />
                      </label>
                      <label>
                        <p>Email address</p>
                        <input type="text" placeholder="" />
                      </label>
                      <label>
                        <p>Phone</p>
                        <input type="text" placeholder="" />
                      </label>
                      <label>
                        <p>Current password</p>
                        <input type="text" placeholder="" />
                      </label>
                      <label>
                        <p>New Password</p>
                        <input type="text" placeholder="" />
                      </label>
                      <label>
                        <p>Confirm New Password</p>
                        <input type="text" placeholder="" />
                      </label>
                      <button className="save-changes-btn" type="submit">
                        Save Change
                      </button>
                    </form>
                  </div>
                )}

                {show === 2 && (
                  <div>
                    <div className="recent-order-toptab">
                      <div className="order-place-wrapp">
                        <p className="order-place-line">Order-plece</p>
                        <p className="order-date">08 January 2022</p>
                      </div>
                      <div className="shipto-wrapper">
                        <p className="shipto-line">Ship TO</p>
                        <p className="owner-order-name"> Jai </p>
                        <p className="short-addras">White house</p>
                      </div>
                      <div className="total-wrapper">
                        <p className="total-tag">Totel</p>
                        <p className="total-amounts">$300.0</p>
                      </div>
                      <div className="order-details-wrapper">
                        <p className="order-number">Order # 456-12345678</p>
                        <button className="vierorder-details-link">
                          View Order Details
                        </button>
                      </div>
                    </div>

                    <div className="DashboardDelevery">
                      <h3>Deliverd Tuesday</h3>
                      <section className="order-product-wrapper">
                        <div className="order-productimg">
                          <img src="/images/cam.png" alt="#" />
                        </div>
                        <div className="order-items-wrapper">
                          <p className="order-product-name">
                            Sony Handycam 32Gb With Built-In Projector, Pj675
                          </p>
                          <p className="sold-bylin">Sold by: Sami Kotob</p>
                          <p className="return-elin">
                            Return eligiblr through 20-Jan-2022
                          </p>
                          <label className="price-tag">$200.00</label>
                        </div>
                        <div className="orders-btns">
                          <button
                            className="trackpackage-btn"
                            onClick={() => setshow(10)}
                          >
                            Track Package <i className="fas fa-angle-right"></i>
                          </button>
                          <button
                            className="trackpackage-btn"
                            onClick={() => setshow(11)}
                          >
                            Product Feedback
                            <i className="fas fa-angle-right"></i>
                          </button>
                          <button
                            className="trackpackage-btn"
                            onClick={() => setshow(12)}
                          >
                            Return or replace items
                            <i className="fas fa-angle-right"></i>
                          </button>
                        </div>
                      </section>
                    </div>

                    <div className="DashboardDelevery">
                      <h3>Deliverd Tuesday</h3>
                      <section className="order-product-wrapper">
                        <div className="order-productimg">
                          <img src="/images/cam.png" alt="#" />
                        </div>
                        <div className="order-items-wrapper">
                          <p className="order-product-name">
                            Sony Handycam 32Gb With Built-In Projector, Pj675
                          </p>
                          <p className="sold-bylin">Sold by: Sami Kotob</p>
                          <p className="return-elin">
                            Return eligiblr through 20-Jan-2022
                          </p>
                          <label className="price-tag">$200.00</label>
                        </div>
                        <div className="orders-btns">
                          <button className="trackpackage-btn">
                            Track Package <i className="fas fa-angle-right"></i>
                          </button>
                          <button className="trackpackage-btn">
                            Product Feedback
                            <i className="fas fa-angle-right"></i>
                          </button>
                          <button className="trackpackage-btn">
                            Return or replace items
                            <i className="fas fa-angle-right"></i>
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>
                )}

                {show === 3 && (
                  <div className="mywallet-tabWrapper">
                    <div className="mywalletheadeer-wrapper">
                      <div className="Walletamouuntwrapp">
                        <span>
                          <b>Current balence</b>
                        </span>
                        <span>72.00$</span>
                      </div>
                      <button className="addMoneybtn" onClick={Modelopen}>
                        add Money
                      </button>
                      <Modal open={open} onClose={CloseModel}>
                        <div class="AddMonyWrapper">
                          <div class="addresinputwrapp">
                            <p class="addmonyheading">Add Money to wallet</p>
                            <input
                              type="text"
                              class="addamountinput"
                              placeholder="Add Money"
                            />
                            <small class="selectoptionline">
                              Select An Option To Add Money
                            </small>
                          </div>
                          <div class="selectboxwrapper">
                            <div class="dabitcardselectwrapp">
                              <label>
                                <input
                                  type="radio"
                                  name="dabit"
                                  value="debit/cradit"
                                />{" "}
                                <span>Debit/Credit Cards</span>
                              </label>
                            </div>
                            <div
                              class="accordion acordion-wraper giftwrpp"
                              id="accordionPanelsStayOpenExample"
                            >
                              <div class="accordion-item">
                                <div
                                  class="accordion-header"
                                  id="panelsStayOpen-headingTwo"
                                >
                                  <div
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="dabit"
                                        value="giftcard"
                                      />{" "}
                                      <span>Gift Voucher</span>
                                    </label>
                                  </div>
                                </div>
                                <div
                                  id="panelsStayOpen-collapseTwo"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="panelsStayOpen-headingTwo"
                                >
                                  <div class="accordion-body">
                                    <input
                                      type="text"
                                      placeholder="Gift Voucher"
                                      class="giftwrapper"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="sendbtnwrappp">
                              <button class="sendbtn">Send</button>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </div>
                    <div className="transection-linewrapper">
                      <i className="fas fa-arrow-circle-down arows"></i>
                      <div className="shop-transectiondetils">
                        <div className="transection-shop-wrapper">
                          <span className="paymentrecevid">Received From</span>
                          <span className="shopname">Myntra Online Shop</span>
                        </div>
                        <div className="transection-amount">
                          <span className="craditamount">16.00 $</span>
                        </div>
                      </div>
                    </div>
                    <div className="transection-linewrapper">
                      <i className="fas fa-arrow-circle-down paid-arows"></i>
                      <div className="shop-transectiondetils">
                        <div className="transection-shop-wrapper">
                          <span className="paymentrecevid">Paid Form</span>
                          <span className="shopname">Myntra Online Shop</span>
                        </div>
                        <div className="transection-amount">
                          <span className="craditamount">16.00 $</span>
                        </div>
                      </div>
                    </div>
                    <div className="transection-linewrapper">
                      <i className="fas fa-arrow-circle-down arows"></i>
                      <div className="shop-transectiondetils">
                        <div className="transection-shop-wrapper">
                          <span className="paymentrecevid">Received From</span>
                          <span className="shopname">Myntra Online Shop</span>
                        </div>
                        <div className="transection-amount">
                          <span className="craditamount">16.00 $</span>
                        </div>
                      </div>
                    </div>
                    <div className="transection-linewrapper">
                      <i className="fas fa-arrow-circle-down paid-arows"></i>
                      <div className="shop-transectiondetils">
                        <div className="transection-shop-wrapper">
                          <span className="paymentrecevid">Paid Form</span>
                          <span className="shopname">Myntra Online Shop</span>
                        </div>
                        <div className="transection-amount">
                          <span className="craditamount">16.00 $</span>
                        </div>
                      </div>
                    </div>
                    <div className="transection-linewrapper">
                      <i className="fas fa-arrow-circle-down arows"></i>
                      <div className="shop-transectiondetils">
                        <div className="transection-shop-wrapper">
                          <span className="paymentrecevid">Received From</span>
                          <span className="shopname">Myntra Online Shop</span>
                        </div>
                        <div className="transection-amount">
                          <span className="craditamount">16.00 $</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {show === 4 && (
                  <div className="cards-wrapper">
                    <div className="Addnewcard-wrappeer">
                      <span className="adddnewtag">
                        <i className="fas fa-plus-circle me-2"></i>Add New Card
                      </span>
                    </div>
                    <div className="card-details-wrapper">
                      <div className="">
                        <img src="/images/cards.png" alt="#" className="me-2" />
                        <label>
                          ***** *****<span>8875</span>
                        </label>
                      </div>
                      <button className="remove-btn">Remove</button>
                    </div>
                    <div className="card-details-wrapper">
                      <div className="">
                        <img src="/images/cards.png" alt="#" className="me-2" />
                        <label>
                          ***** *****<span>8875</span>
                        </label>
                      </div>
                      <button className="remove-btn">Remove</button>
                    </div>
                    <div className="card-details-wrapper">
                      <div className="">
                        <img src="/images/cards.png" alt="#" className="me-2" />
                        <label>
                          ***** *****<span>8875</span>
                        </label>
                      </div>
                      <button className="remove-btn">Remove</button>
                    </div>
                  </div>
                )}

                {show === 5 && (
                  <div className="Address-wrapper">
                    <div className="Addressrow-wrapper">
                      <div className="add-Address-wrapp">
                        <i className="fas fa-plus"></i>
                        <h6 onClick={() => setshow(7)}>Add Address</h6>
                      </div>
                    </div>
                  </div>
                )}

                {show === 6 && (
                  <div className="Cart_bg1">
                    <div className="Cart_padd">
                      <div className="Set_width">
                        <div>
                          <b>Product</b>
                        </div>
                      </div>
                      <div className="Set_width1">
                        <div>
                          <b>Status</b>
                        </div>
                      </div>
                      <div className="Set_width1">
                        <div>
                          <b>Price</b>
                        </div>
                      </div>
                      <div className="Set_width1">
                        <div>
                          <b>Cart</b>
                        </div>
                      </div>
                      <div className="Set_width1">
                        <div>
                          <b>Subtotal</b>
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
                      <span className="Cart_span">instock</span>
                      <span className="Cart_span">$3</span>
                      <div className="product-price">
                        <button className="addto-cart-btn mt-0">
                          Add to cart
                        </button>
                      </div>
                      <span className="product-price">
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
                      <span className="Cart_span">instock</span>
                      <span className="Cart_span">$3</span>
                      <div className="product-price">
                        <button className="addto-cart-btn mt-0">
                          Add to cart
                        </button>
                      </div>
                      <span className="product-price">
                        $ <span>3</span>
                      </span>
                    </div>
                  </div>
                )}

                {show === 7 && (
                  <div>
                    <div className="container bground-color">
                      <h1 className="styleh1">Add a new address</h1>
                      <form>
                        <label className="label-style">Country/Region</label>
                        <select name="Country" className="Proper-input1">
                          <option value="1">India</option>
                          <option value="2">USA</option>
                          <option value="3">China</option>
                        </select>
                        <label className="label-style">Full name</label>
                        <input
                          className="input-tag_style"
                          type="text"
                          placeholder="Full Name"
                        />
                        <label className="label-style">Last name</label>
                        <input
                          className="input-tag_style"
                          type="text"
                          placeholder="Last Name"
                        />
                        <label className="label-style">Mobile number</label>
                        <input
                          className="input-tag_style"
                          type="number"
                          placeholder="10-digit mobile number without prefixes"
                        />
                        <p>May be used to assit delivery</p>
                        <label className="label-style">PIN code</label>
                        <input
                          className="input-tag_style"
                          type="number"
                          placeholder="Pin Code"
                        />
                        <label className="label-style">
                          Flat,House no.,Building,Company,Apartment
                        </label>
                        <input
                          className="input-tag_style"
                          type="text"
                          placeholder="Flat,House no.,Building,Company,Apartment"
                        />
                        <label className="label-style">
                          Area,Colony,Street,Sector,Village
                        </label>
                        <input
                          className="input-tag_style"
                          type="text"
                          placeholder="Area,Colony,Street,Sector,Village"
                        />
                        <label className="label-style">Landmark</label>
                        <input
                          className="input-tag_style"
                          type="text"
                          placeholder="E.g. Near AIIMS flyover,Behind Regal Cinema,etc."
                        />
                        <label className="label-style">Town/City</label>
                        <input
                          className="input-tag_style"
                          type="text"
                          placeholder="Town/City"
                        />
                        <label className="label-style">
                          State / Province /Region
                        </label>
                        <select className="Proper-input1">
                          <option>ODISHA</option>
                          <option>JAIPUR</option>
                        </select>
                        <h2 className="styleh2">Add delivery instructions</h2>
                        <p>
                          Preferences are used to plan your
                          delivery.However,shipments can sometimes can sometimes
                          arrive early or later than planned.
                        </p>
                        <label className="label-style">Address Type</label>
                        <select className="Proper-input1">
                          <option>Billing</option>
                          <option>shipping</option>
                        </select>
                        <button className="btn-set">Add address</button>
                      </form>
                    </div>
                  </div>
                )}

                {show === 8 && (
                  <div>
                    <div className="walcome-status-wrapper1">
                      <p className="OrderDetailsline">Order Details</p>
                      <div className="order-dates-wrapper">
                        <span className="orders-date">
                          Ordered on 3 January 2022
                        </span>
                        <span className="order-number">
                          Order # 456-123456789
                        </span>
                      </div>
                    </div>
                    <div className="shipingwrapper">
                      <div className="shipingAddreswrapper">
                        <h6>Shipping Address</h6>
                        <span>Jai Chouhan</span>
                        <span>C56 First Floor, Nemi Nagar Extension</span>
                        <span>Vaishali Nagar</span>
                        <span>Jaipur, Rajasthan 302021</span>
                        <span>India </span>
                      </div>
                      <div className="shipingAddreswrapper">
                        <h6>Payment Method</h6>
                        <div className="card-method">
                          <img src="/images/cards.png" alt="#" />
                          <span>xxxxxx1234</span>
                        </div>
                      </div>
                      <div className="shipingAddreswrapper">
                        <h6>Order Summary</h6>
                        <div className="orderSunnary-wrapper">
                          <ul>
                            <li>
                              <span>Item(s) Subtotal: </span>
                              <span>$300.00</span>
                            </li>
                            <li>
                              <span>Shipping </span>
                              <span>$0.00</span>
                            </li>
                            <li>
                              <span>Total:</span>
                              <span>$300.00</span>
                            </li>
                            <li>
                              <span>
                                <b>Grand Total: </b>
                              </span>
                              <span>
                                <b>$300.00</b>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <section className="recent-orderwrapper">
                      <div className="recent-order-toptab">
                        <div className="order-place-wrapp">
                          <p className="order-place-line">Order-plece</p>
                          <p className="order-date">08 January 2022</p>
                        </div>
                        <div className="shipto-wrapper">
                          <p className="shipto-line">Ship TO</p>
                          <p className="owner-order-name"> Jai </p>
                          <p className="short-addras">White house</p>
                        </div>
                        <div className="total-wrapper">
                          <p className="total-tag">Totel</p>
                          <p className="total-amounts">$300.0</p>
                        </div>
                        <div className="order-details-wrapper">
                          <p className="order-number">Order # 456-12345678</p>
                          <button
                            className="vierorder-details-link"
                            onClick={() => setshow(8)}
                          >
                            View Order Details
                          </button>
                        </div>
                      </div>
                      <div className="order-items-wrapper">
                        <p className="deliverd-status">Deliverd Tuesday</p>
                        <section className="order-product-wrapper">
                          <div className="order-productimg">
                            <img src="/images/cam.png" alt="#" />
                          </div>
                          <div className="order-items-wrapper">
                            <p className="order-product-name">
                              Sony Handycam 32Gb With Built-In Projector, Pj675
                            </p>
                            <p className="sold-bylin">Sold by: Sami Kotob</p>
                            <p className="return-elin">
                              Return eligiblr through 20-Jan-2022
                            </p>
                            <label className="price-tag">$200.00</label>
                          </div>
                        </section>
                      </div>
                      <div className="order-items-wrapper">
                        <p className="deliverd-status">Deliverd Tuesday</p>
                        <section className="order-product-wrapper">
                          <div className="order-productimg">
                            <img src="/images/cam.png" alt="#" />
                          </div>
                          <div className="order-items-wrapper">
                            <p className="order-product-name">
                              Sony Handycam 32Gb With Built-In Projector, Pj675
                            </p>
                            <p className="sold-bylin">Sold by: Sami Kotob</p>
                            <p className="return-elin">
                              Return eligiblr through 20-Jan-2022
                            </p>
                            <label className="price-tag">$200.00</label>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                )}

                {show === 9 && <PostApi />}
                {show === 10 && <Shiping />}
                {show === 11 && <Feedback />}
                {show === 12 && <Cancel />}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Helloo"
      )}
    </>
  );
};

export default Dashboard;
