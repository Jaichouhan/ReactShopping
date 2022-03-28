import React from "react";
import { Modal } from "react-responsive-modal";
import "./Forgat.css";
const ForgatPassword = ({ forget, ForgatPasswordFal }) => {
  return (
    <>
      <Modal open={forget} onClose={ForgatPasswordFal} center>
        <div class="Reset-formwrapper">
          <div class="title">
            <h2 class="title-text">Forgot Password</h2>
          </div>
          <div class="forgot-form">
            <input placeholder="Email" type="text" />
            <button class="Submit-btn">Submit</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ForgatPassword;
