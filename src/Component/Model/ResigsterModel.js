import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { useNavigate } from "react-router-dom";

const ResigsterModel = ({ Modelopen, setModelOpenTAb }) => {
  const [data, setData] = useState({});
  const history = useNavigate();

  const onInputChnage = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  const Register_submit = (e) => {
    e.preventDefault();

    const regiosterDta = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    axios
      .post("https://beta.wasilonline.net/dashboard/api/register", regiosterDta)
      .then((res) => {
        if (res.data.status === true) {
          history("/");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal open={Modelopen} onClose={setModelOpenTAb} center>
        <div className="inner-container-signup">
          <div className="title">
            <h2 className="title-text">Register</h2>
          </div>
          <form
            className="form-wrapper form-wrapper1"
            onSubmit={Register_submit}
          >
            <div className="form-input-wrapper">
              <div className="form-element-group">
                <label htmlFor="username">Name</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={onInputChnage}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="main-inputswrap">
              <div className="left-wrapeer">
                <div className="form">
                  <div className="form-element-group input-res">
                    <label htmlFor="Username">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={data.email}
                      onChange={onInputChnage}
                      required
                    />
                  </div>
                  <div className="form-element-group">
                    <label htmlFor="username">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={onInputChnage}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="right-wrapeer">
                <div className="form">
                  <div className="form-element-group input-res">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      placeholder="Phone"
                      className="phone"
                      name="phone"
                      value={data.phone}
                      onChange={onInputChnage}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
          <div className="social-singinWraper">
            <div className="social-loginbtnwrapper">
              <img
                src="/images/google-icon.png"
                alt="#"
                className="social-img"
              />
              <img
                src="/images/Facebook-logo.svg"
                alt="#"
                className="social-img"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ResigsterModel;
