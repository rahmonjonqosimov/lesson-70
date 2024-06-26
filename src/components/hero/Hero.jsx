import React, { Component } from "react";
import img from "../../assets/images/hero.png";
import Aos from "aos";
import "aos/dist/aos.css";

export class Hero extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <section id="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Making time a good time by making food the good food.</h2>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </p>
            <div className="hero-btns">
              <button>Order Now</button>
              <button>Food Details</button>
            </div>
          </div>
          <img data-aos="zoom-in" src={img} alt="" />
        </div>
      </section>
    );
  }
}

export default Hero;
