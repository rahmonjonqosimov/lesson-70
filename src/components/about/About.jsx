import React, { Component } from "react";
import img from "../../assets/images/about img.png";
import Aos from "aos";
import "aos/dist/aos.css";

export class About extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <section id="about">
        <div data-aos="fade-up" className="container about__content">
          <img src={img} alt="" />
          <div className="about__text">
            <h4>A B O U T</h4>
            <h2>
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </h2>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
