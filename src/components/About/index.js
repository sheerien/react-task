import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutImg from "../../assets/images/about-576x537.jpg";
import signature from "../../assets/images/signature-1-160x55.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="about">
            <div className="row">
              <div className="about-img">
                <img src={aboutImg} alt="about" />
              </div>
              <div className="about-content">
                <div className="col">
                  <p className="about-content-line">
                    A Few Words About Our Store
                  </p>
                  <h2 className="about-content-title">ABOUT US</h2>
                  <p className="about-content-desc">
                    Grocmart is a family-owned grocery store that has been
                    offering quality products for your everyday life since 1999,
                    while also providing superior service and competitive
                    prices.
                  </p>
                  <div className="about-content-footer">
                    <div className="row">
                      <span className="icon">
                        <i>
                          <FaArrowRight />
                        </i>
                      </span>
                      <div className="desc">
                        <p className="one">SAM WILLIAMS </p>
                        <br />
                        <p className="two"> CEO, Founder</p>
                      </div>
                      <div className="signature">
                        <img src={signature} alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
