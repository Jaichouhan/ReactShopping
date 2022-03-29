import React, { useState } from "react";
import "./Allproduct.css";
import Card from "../Card"
import CardAllproduct from "../CardAllproduct/CardAllproduct";
const Allproduct = () => {
  const [open,setopen] = useState(0);
  const [value,setvalue] =  useState("")
  return (
    <>
      <div className="Allproduct_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 Display_resoponsive">
              <div className="productscategory-wrapper">
                <p className="product-heading">PRODUCT CATEGORIES</p>
                <div className="product-category-itmes-wrapper">
                  <ul>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" checked="" />
                        All Categories
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Dekkeneh
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" />
                        Desserts
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Health Care
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Beauty &amp;
                        Fashion
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Toys
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Baby
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Office
                        Supplies
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Books &amp;
                        Stationery
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" />
                        Electronics
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" />
                        Mobiles &amp; Tablets
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" />
                        Sports &amp; Fitness
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> Home &amp;
                        Living
                      </span>
                      <i className="fas fa-plus"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-wrapper">
                <p className="Filterby-pricename">FILTER BY PRICE</p>
                <input min="0" max="100" type="range" onChange={(e) => setvalue(e.target.value)}/>
                <div className="Filter-changes">
                  <span>
                    Price:<b>{value}</b>
                  </span>
                  <label>FILTER</label>
                </div>
              </div>
              <div className="ProductStatus-wrapper">
                <p className="product-status-txt">PRODUCT STATUS</p>
                <div className="product-stok-wrapper">
                  <ul>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> in Stock
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> On Sale
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ProductlistStatus-wrapper">
                <p className="product-statuss-txt">PRODUCT STATUS</p>
                <div className="productliststok-wrapper">
                  <ul>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" />
                        Frito Lay
                      </span>
                      <label>(01)</label>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> On Nespresso
                      </span>
                      <label>( 02)</label>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> On Oreo
                      </span>
                      <label>( 03)</label>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> On Quaker
                      </span>
                      <label>( 04)</label>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" className="me-2" /> On Welch's
                      </span>
                      <label>( 05)</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="adimgs-wrapper">
                <img alt="#" src="/images/wpaycard.png" />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <img
                src="/images/shop-banner.png"
                alt="banner_img"
                className="All_product_img"
              />
              <div className="Shop-items-headers">
                <div className="filters-wrapp">
                  <div className="shops-viewicon">
                    <i className="fas fa-th-large" onClick={() => setopen(0)}></i>
                    <i className="fas fa-bars" onClick={() => setopen(1)}></i>
                  </div>
                  <div className="Filter-mobile-res-wrapper">
                    <i className="fas fa-filter me-2"></i>
                    <span>Filter</span>
                  </div>
                </div>
                <div className="Shorts-wrapper">
                  <div className="short-by-filter">
                    <select>
                      <option>Sort by latest</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="show-viwe-wrapp">
                    <select>
                      <option>Show 12</option>
                      <option>Show 9</option>
                      <option>Show 6</option>
                      <option>Show 4</option>
                    </select>
                  </div>
                </div>
              </div>

            {open === 0 && <Card/>}  
            {open === 1 && <CardAllproduct/>}  

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
