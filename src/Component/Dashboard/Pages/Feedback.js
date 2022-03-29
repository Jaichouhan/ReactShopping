import React from "react";
import "./Feedback.css"
const Feedback = () => {
  return (
    <>
      <div class="feedback-wrapper">
        <h6 class="give-feedbackline">Give Feedback</h6>
        <span class="whatthink-line">
          What do you think of the editing tool?
        </span>
        <div class="Smiles-wrapper">
          <label>
            <input type="radio" class="d-none" />
            <i class="far fa-sad-tear smiles-bg"></i>
          </label>
          <label>
            <input type="radio" class="d-none" />
            <i class="far fa-frown smiles-bg"></i>
          </label>
          <label>
            <input type="radio" class="d-none"/>
            <i class="far fa-meh smiles-bg"></i>
          </label>
          <label>
            <input type="radio" class="d-none"/>
            <i class="far fa-smile smiles-bg"></i>
          </label>
          <label>
            <i class="fas fa-grin-alt smiles-bg"></i>
          </label>
        </div>
        <div class="feedback-inpt-wrapper">
          <span class="dohavethoughtline">
            Do you have any thoughts you’d like to share?
          </span>
          <textarea cols="25" rows="6" class="textarea-wrap"></textarea>
        </div>
        <div class="mayourfeed-wrapper">
          <span class="may-wefollowupline">
            May we follow you up on your feedback?
          </span>
          <div class="feed-radiowrapper">
            <div class="radiobtn-wrapp">
              <input type="radio" name="yes"  /> Yes
            </div>
            <div class="radiobtn-wrapp">
              <input type="radio" name="yes" /> No
            </div>
          </div>
        </div>
        <div class="feed-btn-wrapper">
          <button class="feedback-sent-btn">Send</button>
          <button class="feedback-cancel-btn">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Feedback;
