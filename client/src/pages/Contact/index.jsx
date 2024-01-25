import React from "react";
import "./index.scss";
const Contact = () => {
  return (
    <div className="contact">
      <img
        src="https://preview.colorlib.com/theme/florist/img/call-bg.jpg"
        alt=""
      />
      <div className="textt">
        <div className="title">
          <span>CUSTOM FLOWER</span>
          <h2>Let our flowers make your party more perfect.</h2>
        </div>
        <div className="buttons">
          <button className="order">ORDER NOW</button>
          <button className="contact">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
