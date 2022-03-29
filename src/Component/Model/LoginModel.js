import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import ResigsterModel from "./ResigsterModel";
import { useNavigate } from "react-router-dom";
import ForgatPassword from "./ForgatPassword";
import axios from "axios";

const LoginModel = ({ open, onCloseModal }) => {
  const history = useNavigate();
  const [data, setdata] = useState({});
  const Modelopentab = () => setModelOpen(true);
  const setModelOpenTAb = () => setModelOpen(false);
  const [Modelopen, setModelOpen] = useState(false);
  const [forget, setforget] = useState(false);
  const ForgatPasswordT = () => setforget(true);
  const ForgatPasswordFal = () => setforget(false);
  const [errors, setErrors] = useState({});

  const dataEnter = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onDataSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: data.email,
      password: data.password,
    };
    let errorExist = false;
    let errorsObject = {};
    if (data.email === "" || data.email === null || data.email === undefined) {
      errorsObject.email = true;
      errorExist = true;
    }

    if (
      (data.password && data.password.length < 6) ||
      data.password === "" ||
      data.password === null ||
      data.password === undefined
    ) {
      errorsObject.password = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    axios
      .post("http://beta.wasilonline.net/dashboard/api/login", loginData)
      .then((res) => {
        if (res.data.status === true) {
          history("/Dashboard");
          window.location.reload();
          localStorage.setItem("user", res.data.token);
          localStorage.setItem("login", true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="title">
          <h2 className="title-text">Sign in </h2>
        </div>
        <div className="Model_space">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={onDataSubmit}>
                  <div className="form-element-group ">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      placeholder="Email"
                      className="username"
                      name="email"
                      value={data.email}
                      onChange={dataEnter}
                    />
                    <span className="signup-error">
                      {errors.email && "Please enter your email"}
                    </span>
                  </div>
                  <div className="form-element-group">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      type="password"
                      placeholder="Password"
                      className="username"
                      name="password"
                      value={data.password}
                      onChange={dataEnter}
                    />
                    <span className="signup-error">
                      {errors.password && "Please enter your password"}
                    </span>
                  </div>
                  <div className="forgott-password-link">
                    <span
                      className="forgot-link fORGET_LINK"
                      onClick={ForgatPasswordT}
                    >
                      Forgot your Password ?
                    </span>
                    <ForgatPassword
                      forget={forget}
                      ForgatPasswordFal={ForgatPasswordFal}
                    />
                  </div>
                  <div className="form-element-group">
                    <button type="submit" className="submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <h3 className="area-title">New Here</h3>
                <div className="discription">
                  <div className="heading-text">
                    Registration is free and easy
                  </div>
                  <ul className="points">
                    <li>Faster checkout</li>
                    <li>Save multiple addresses</li>
                    <li>View and track orders and more</li>
                  </ul>
                </div>
                <button className="create-account-btn" onClick={Modelopentab}>
                  Create An Account
                </button>
                <ResigsterModel
                  Modelopen={Modelopen}
                  setModelOpenTAb={setModelOpenTAb}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModel;
