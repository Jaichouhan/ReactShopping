import React from "react";
import "./Shiping.css"
const Shiping = () => {
  return (
    <>
        <div class="Order-trackWrapper">
          <div class="orderimg-wrapper">
            <div class="product-imgwrapper">
              <span class="processing-wrapperline">Processing</span>
              <span class="Delivered-wrapperline">Delivered</span>
              <img src="images/item-3.png" alt="#" />
            </div>
            <div class="ordertrackedpoinwrap">
              <div class="order-wrapperpointfirst">
                <div class="orderfirstpoint-wrapp">
                  <span class="order-tagwrapp">Ordered</span>
                  <small class="order-subdetails-line">10 JUN 2022</small>
                </div>
              </div>
              <div class="shiped-tagwrapp">
                <span class="Shipped-tagwrapp"> Prepared</span>
                <small class="Shipped-subdetails-line">10 JUN 2022</small>
              </div>
              <div class="shiped-tagwrapp">
                <span class="Shipped-tagwrapp">Shipped</span>
                <small class="Shipped-subdetails-line">10 JUN 2022</small>
              </div>
              <div class="shiped-tagwrapp">
                <span class="Shipped-tagwrapp">Out for delivery</span>
                <small class="Shipped-subdetails-line">10 JUN 2022</small>
              </div>
              <div class="Expected-tagwrapp">
                <div class="deliverd-wrapplastpoint">
                  <span class="Expted-tagwrapp">Expected delivery </span>
                  <small class="Expected-subdetails-line">10 JUN 2022</small>
                </div>
              </div>
            </div>
          </div>
          <div class="order-summary-details">
            <div class="order-detailswrap">
              <p class="shipment-heading">Shipment Information</p>
              <ul class="shipment-info-wrapper">
                <li class="shipment-detaisline">
                  <span class="ordertrackdate">Jan 13,2022</span>
                  <span class="ordertrack-viewbtn">View order</span>
                </li>
                <li class="shipment-detaisline">
                  <span class="infotxt-wrapp">Delivery Method</span>
                  <span class="infodetalstxt-wrapp">FedEx Home Delivery</span>
                </li>
                <li class="shipment-detaisline">
                  <span class="infotxt-wrapp">Carrier</span>
                  <span class="infodetalstxt-wrapp">
                    FedEx 800-GO-FEDEX (463.3339)
                  </span>
                </li>
                <li class="shipment-detaisline">
                  <span class="infotxt-wrapp">Tracking #</span>
                  <span class="infodetalstxt-wrapp">090210916421353</span>
                </li>
                <li class="shipment-detaisline">
                  <span class="infotxt-wrapp">Order #</span>
                  <span class="infodetalstxt-wrapp">9166799832560</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Shiping;
