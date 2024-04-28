import React, { Component } from "react";
import img from "../../assets/images/profil.svg";
import star from "../../assets/images/star.svg";

import { FaStar } from "react-icons/fa6";

export class Testimonial extends Component {
  render() {
    return (
      <section id="testimonial">
        <div className="container testimonial__content">
          <h4>T E S T I M O N I A L </h4>
          <p>
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc to make your.
          </p>
          <img src={img} className="profil" alt="" />
          <p>
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc very successful to make your.
          </p>
          <img className="star" src={star} alt="" />
          <p>Augusta W. Reynoso</p>
          <h6>UI&UX DeSIGNER</h6>
        </div>
      </section>
    );
  }
}

export default Testimonial;
