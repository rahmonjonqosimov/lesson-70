import React, { Component } from "react";
import data from "../../static/static";
import Aos from "aos";
import "aos/dist/aos.css";

export class Menu extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <section id="menu">
        <div className="container menu">
          <h4>M E N U </h4>
          <h2>Food Full of treaty Love</h2>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers,{" "}
          </p>
          <div className="wrapper">
            {data?.map((el) => (
              <div key={el.id} data-aos="fade-up" className="card">
                <img src={el.img} className="product__img" alt={el.title} />
                <div className="text">
                  <div className="row1">
                    <h4 title={el.title}>{el.title}</h4>
                    <h4>{el.price}$</h4>
                  </div>
                  <p>{el.desc}</p>
                  <div className="row1">
                    <span>+</span>
                    <img src={el.star} alt="Star" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button>Learn More</button>
        </div>
      </section>
    );
  }
}

export default Menu;
