import React from "react";
import "./index.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-sm-6 col-12">
              <img
                src="https://preview.colorlib.com/theme/florist/img/logo.png"
                alt=""
              />
            </div>
            <div className="col-xl-4 col-sm-6 col-12">
              <p>
                The floristry business has a significant market in the corporate
                and social event world, as flowers
              </p>
            </div>
            <div className="col-xl-4 col-sm-6 col-12 media">
              <div className="fb">
                <FacebookIcon />
              </div>
              <div className="tw">
                <TwitterIcon />
              </div>
              <div className="ig">
                <InstagramIcon />
              </div>
              <div className="link">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <h2>Company</h2>
              <p>About us</p>
              <p>Services</p>
              <p>Contact us</p>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <h2>Account</h2>
              <p>My cart</p>
              <p>Wishlist</p>
              <p>Login/Register</p>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <h2>Newsletter</h2>
              <p>
                Subcribe to our newsletter to get more free tips. No Spam,
                Promise.
              </p>
              <input type="text" placeholder="Email" />{" "}
              <button>Subscribe</button>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <h2>Get in touch</h2>
              <p>69 North Cleveland Street, Memphis,USA.</p>
              <p>(123) 8111 9210 - (012) 1111 6868</p>
              <p>Florist@supportthem.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by{" "}
          <FavoriteIcon style={{ color: "#E45E90" }} />
          Colorlib
        </p>
      </div>
    </div>
  );
};

export default Footer;
