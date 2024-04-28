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
                <NavLink className={"link"} to={"/home"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={"link"} to={"/about"}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className={"link"} to={"/menu"}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink className={"link"} to={"/features"}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink className={"link"} to={"/contact"}>
                  Contact us
                </NavLink>
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
