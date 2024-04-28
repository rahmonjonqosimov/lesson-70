import React, { Component } from "react";
import img1 from "../../assets/images/features card1.png";
import img2 from "../../assets/images/features card2.png";
import img3 from "../../assets/images/features card3.png";
import Aos from "aos";
import "aos/dist/aos.css";

export class Features extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <section id="features">
        <div className="container features__content">
          <h4>Features</h4>
          <h2>Food with a New Passion</h2>
          <div className="wrapper">
            <div data-aos="fade-up" className="card">
              <div className="img" style={{ background: "#F4F6EB" }}>
                <img src={img1} alt="Home" />
              </div>
              <h5>Quality Food</h5>
              <p>
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
            <div data-aos="fade-up" className="card">
              <div className="img" style={{ background: "#FDF1EE" }}>
                <img src={img2} alt="Home" />
              </div>
              <h5>Food Delivery</h5>
              <p>
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
            <div data-aos="fade-up" className="card">
              <div className="img" style={{ background: "#FBF1E7" }}>
                <img src={img3} alt="Smile" />
              </div>
              <h5>Super Taste</h5>
              <p>
                It can be a very secure path to earn good money and make you
                very successful creative entrepreneur.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
