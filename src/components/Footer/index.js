import React, { Component } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaGooglePlusG,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

import footerLogo from "../../assets/images/logo-default-249x52.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="one">
              <div className="col">
                <div className="footer-logo">
                  <img src={footerLogo} alt="footer-logo" />
                </div>
                <div className="row first">
                  <p className="word">Weekdays:</p>
                  <p className="d-word">08:00am - 08:00pm</p>
                </div>
                <div className="row first ">
                  <p className="word ">Weekdays:</p>
                  <p className="d-word">10:00am - 06:00pm</p>
                </div>
                <div className="pd-word"></div>
                <div className="row">
                  <p className="Social word">Get Social</p>
                  <div className="social-icon">
                    <i>
                      <FaFacebookF />
                    </i>
                    <i>
                      <FaTwitter />
                    </i>
                    <i>
                      <FaInstagramSquare />
                    </i>
                    <i>
                      <FaGooglePlusG />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="two">
              <div className="col">
                <h1>CONTACTS</h1>
                <ul className="footer-list">
                  <li>
                    <div className="row">
                      <i className="icons">
                        <FaMapMarkerAlt />
                      </i>
                      <a href="#">
                        523 Sylvan Ave, 5th Floor <br /> Mountain View, CA 94041
                        USA
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <i className="icons">
                        <FaPhoneAlt />
                      </i>
                      <a href="#">+1 (844) 123 456 78</a>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <i className="icons">
                        <FaEnvelope />
                      </i>
                      <a href="#">info@demolink.org</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="three">
              <div className="col">
                <h1>NEWSLETTER</h1>
                <p className="content">
                  Subscribe to our newsletter to receive weekly news, updates,
                  special offers, and exclusive discounts.
                </p>
                <div className="row">
                  <input type="email" placeholder="Enter your e-mail" />
                  <span className="icon">
                    <i>
                      <FaPaperPlane />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
