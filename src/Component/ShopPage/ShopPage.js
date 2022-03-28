import "./ShopPage.css";
import React from "react";
import Card from "../../../src/Component/Card";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";

const ShopPage = () => {
  return (
    <>
      <div className="Banner_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                src="/images/shop-banner.png"
                alt="bannerimg"
                className="Banner_img"
              />
            </div>

            {/* <Audio height="100" width="100" color="grey" ariaLabel="loading" />; */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
