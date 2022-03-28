import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Slidershow = ({ api }) => {
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
      <div
        id="carouselExampleInterval"
        className=" carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <Slider {...Slick}>
              {api &&
                api.slider.map((data, index) => (
                  <Link to="/ShopPage" key={index}>
                    <img
                      src={data.image}
                      alt="sliderimg"
                      className="cursorPomi"
                    />
                  </Link>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slidershow;
