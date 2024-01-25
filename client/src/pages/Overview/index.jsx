import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Overview = () => {
  return (
    <div className="overview">
      <div className="container">
        <img
          src="https://preview.colorlib.com/theme/florist/img/testimonial/left-bg.png.webp"
          alt=""
        />
        <div className="testimonials">
          <div className="test">
            <img
              src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png"
              alt=""
            />
            <p>
              "I just wanted to say thank you for making such gorgeous
              arrangements for our birthday celebration. I couldn't get over how
              perfect they were for the party. You did fantastic job, I
              appreciate it very much"
            </p>
            <h4>Alejandro Houston</h4>
            <span>BUSINESSMAN</span>
          </div>
        </div>
        <img
          src="https://preview.colorlib.com/theme/florist/img/testimonial/right-bg.png.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Overview;
