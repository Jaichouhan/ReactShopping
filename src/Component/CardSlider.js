import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const CardSlider = ({ api }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container SectionMa">
        <div className="row">
          <Slider {...settings}>
            {api &&
              api.sale.map((data, index) => (
                <div className="col-md-4" key={index}>
                  <img src={data.image} alt="img" className="img-fluid" />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
