import React, { useEffect, useState } from "react";
import Slidershow from "./Slidershow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Card from "./Card";
import CardSlider from "./CardSlider";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [api, setApi] = useState("");
  const [data, setData] = useState("");
  const [values, setValues] = useState("");

  useEffect(() => {
    axios
      .post("https://beta.wasilonline.net/dashboard/api/testimonials")
      .then((res) => setData(res.data.testimonials))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .post("https://beta.wasilonline.net/dashboard/api/home")
      .then((res) => {
        setApi(res.data.home);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .post("https://beta.wasilonline.net/dashboard/api/category")
      .then((res) => {
        setValues(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(values);
  const Slick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slidershow api={api} />

      <CardSlider api={api} />

      <div className="container ">
        <div className="row">
          <div className="col-lg-3">
            <img src={api.adv_img} alt="img" className="imgset" />
          </div>
          <div className="col-lg-9">
            <div className="section2_mar">
              <h2>BEST SELLERS</h2>
              <Link to="/Api">
                <button type="button">
                  View All <i className="fas fa-arrow-right"></i>
                </button>
              </Link>
            </div>
            {/* <Slider {...settings}> */}

            <Card />
            {/* </Slider> */}
          </div>
        </div>
      </div>

      <div className="container">
        <img src={api.banner_img} className="section4_img" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h4 className="section5_h4">TRENDING PRODUCTS</h4>
            <div className="section5_Space">
              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <img
                  src="/images/img6.jpg"
                  alt="img"
                  className="section5_img"
                />
                <div className="">
                  <h4 className="section5_h4">Casio Shop Calculator, DC-12M</h4>
                  <div className="d-flex">
                    <p className="section5_p">$8</p>
                    <span className="section5_span">$6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="section2_mar">
              <h2>NEW PRODUCT</h2>
              <button type="button">
                View All <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="section6_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                id="carouselExampleInterval"
                className=" carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <Slider {...Slick}>
                      {data &&
                        data.map((data) => (
                          <div className=" section6_bg1" key={data.id}>
                            <h1 className="section6_h1">{data.title}</h1>
                            <p className="section6_p">{data.description}</p>
                            <p
                              className="section6_p1"
                              dangerouslySetInnerHTML={{
                                __html: data.long_description,
                              }}
                            ></p>
                            <div className="d-flex">
                              <img src={data.image} alt="img" />
                              <div className="section6_div">
                                <p className="section6_p2">
                                  {data.customer_name}
                                </p>
                                <span className="section6_p3">
                                  {data.designation}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="">
                <div className="row">
                  {values &&
                    values.map((data) => (
                      <div className="col-lg-3 section7_div" key={data.id}>
                        <div className="section7_img">
                          <img src={data.category_image} alt="img" />
                        </div>
                        <div className="">
                          <p className="section7_p">{data.title}</p>
                          <span className="section7_span">
                            {data.count} items
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
