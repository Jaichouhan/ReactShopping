import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Card = () => {
  const [values, setValues] = useState("");
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
  };

  useEffect(() => {
    axios
      .post(
        "https://beta.wasilonline.net/dashboard/api/best-seller-product",
        config
      )
      .then((res) => {
        setValues(res.data.product.product);
      })
      .catch((err) => console.log(err));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const notify = () => toast.success("Add to cart");

  return (
    <>
      <div>
        <div className="">
          <div className="row">
            <Slider {...settings}>
              {values &&
                values.map((data) => (
                  <div
                    className="col-lg-3 col-md-3 col-sm-6 cardHover"
                    key={data.id}
                  >
                    <div className="section3_bg">
                      <div className="CArd_float">
                        <img src="/images/ha.png" alt="img" />
                        <br />
                        <img src="/images/aa.png" alt="img" />
                      </div>
                    </div>
                    <div className="Card_img">
                      <Link to="/Related">
                        <img src={data.featured_image} alt="img" />
                      </Link>
                    </div>
                    <div className="">
                      <Link to="/Related">
                        <p className="section3_p">{data.pname}</p>
                      </Link>
                      <p className="section3_p1">4 in stock</p>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <div className="d-flex">
                        <p className="section3_p2">${data.p_price}</p>
                        <p className="section3_p3">${data.s_price}</p>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="section3_btn"
                          onClick={notify}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
