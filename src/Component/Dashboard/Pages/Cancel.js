import React from "react";
import "./Cancel.css";
const Cancel = () => {
  return (
    <>
      <div class="OrderReturn-Wrapper">
        <div class="orderimg-wrapper">
          <div class="product-imgwrapper">
            <span class="processing-wrapperline">Processing</span>
            <span class="Delivered-wrapperline1">Delivered</span>
            <img src="images/item-3.png" alt="#" />
          </div>
          <div class="ordertrackedpoinwrap">
            <div class="order-wrapperpointfirst">
              <div class="orderfirstpoint-wrapp">
                <span class="order-tagwrapp">Return Started</span>
                <small class="order-subdetails-line">
                  Get return lable and instructions
                </small>
              </div>
            </div>
            <div class="shiped-tagwrapp">
              <span class="Shipped-tagwrapp">Order Pickup</span>
              <small class="Shipped-subdetails-line">10 JUN 2022</small>
            </div>
            <div class="Expected-tagwrapp">
              <div class="deliverd-wrapplastpoint">
                <span class="Expted-tagwrapp">Refund on your card</span>
                <small class="Expected-subdetails-line">10 JUN 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="order-summary-details">
          <div class="order-detailswrap">
            <p class="shipment-heading">Refund summary</p>
            <ul class="shipment-info-wrapper">
              <li class="shipment-detaisline">
                <span class="ordertrackdate">Jan 13,2022</span>
                <span class="ordertrack-viewbtn">View order</span>
              </li>
              <li class="shipment-detaisline">
                <span class="infotxt-wrapp">Order #</span>
                <span class="infodetalstxt-wrapp">9166799832560</span>
              </li>
              <li class="shipment-detaisline">
                <span class="infotxt-wrapp">
                  $100.00 Will be send to your payment card
                </span>
              </li>
              <li class="shipment-detaisline">
                <span class="infotxt-wrapp">Item Price</span>
                <span class="infodetalstxt-wrapp">$90.00</span>
              </li>
              <li class="shipment-detaisline">
                <span class="infotxt-wrapp">Vat</span>
                <span class="infodetalstxt-wrapp">-$10.00</span>
              </li>
              <li class="shipment-detaisline">
                <span class="infotxt-wrapp">
                  <b>Estimated Total Refund</b>
                </span>
                <span class="infodetalstxt-wrapp">$100.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cancel;
