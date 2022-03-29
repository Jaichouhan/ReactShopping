import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [company, setcompany] = useState("");
  const Savedata = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    console.log(company);
  };

  return (
    <>
      <div className="container-fluid bgped">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 bgimgc" id="formfir">
              <div className="setelement">
                <img src="/images/phone (1).png" alt="img" />
                <div className="psetcol">
                  <p>Phone Number</p>
                  <span>+961 81 492 154</span>
                  <br />
                  <span>+961 81 492 156</span>
                </div>
              </div>
              <div className="setelement">
                <img src="/images/email.png" alt="img" />
                <div className="psetcol">
                  <p>Support email</p>
                  <span>support@wasilonline.com</span>
                </div>
              </div>
              <div className="setelement">
                <img src="/images/location.png" alt="img" />
                <div className="psetcol">
                  <p>Office Address</p>
                  <span>
                    Unit 35- 1828 Blue Heron Drive, London, ON N6H 0B7
                  </span>
                </div>
              </div>
              <div className="socialic">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.pinterest.com/" target="_blank">
                  <i className="fab fa-pinterest-p"></i>{" "}
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 bgsett" id="formSec">
              <p className="Contact_pstyle">Drop us a Line</p>
              <p className="pcontac">Get in touch with us</p>
              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control inputst"
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control inputst"
                      placeholder="Your Email"
                      name="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control inputst1"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control inputst1"
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setcompany(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      type="text"
                      className="form-control inputst2"
                      rows="7"
                      placeholder="Your Message"
                      name="message"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-danger btn12"
                onClick={Savedata}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
