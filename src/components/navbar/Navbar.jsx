import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/navbar logo.svg";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
  }
  render() {
    return (
      <section id="navbar">
        <div className="container navbar__content">
          <div className="nav-link">
            <NavLink to={"/"}>
              <img src={Logo} alt="Logo" />
            </NavLink>
            <ul
              className={
                this.state.menu ? "nav-likns  nav-likns-active" : "nav-likns"
              }
            >
              <li>
                <a href="#" className={"link"}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={"link"}>
                  About us
                </a>
              </li>
              <li>
                <a href="#menu" className={"link"}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#features" className={"link"}>
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className={"link"}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <button className="nav-btn">Booking Now</button>
          <div
            onClick={() => this.setState({ menu: !this.state.menu })}
            className={this.state.menu ? "menu menu-active" : "menu"}
          >
            <div className="menu-item"></div>
            <div className="menu-item"></div>
            <div className="menu-item"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
