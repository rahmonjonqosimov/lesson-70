import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/navbar logo.svg";
import img1 from "../../assets/images/footer icon 1.svg";
import img2 from "../../assets/images/footer icon 2.svg";
import img3 from "../../assets/images/footer icon 3.svg";
import img4 from "../../assets/images/footer icon 4.svg";

export class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container footer">
          <ul>
            <li>
              <Link>
                <img src={logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <a href="#">www.company name.com</a>
            </li>
            <li>
              <a href="#">companyname@gmail.com</a>
            </li>
            <li>
              <a href="#">Phone: +7 485-118-03-25</a>
            </li>
          </ul>
          <ul>
            <h4>Home</h4>
            <li>
              <Link to={"/"}>Landingpage</Link>
            </li>
            <li>
              <Link to={"/"}>Documentation </Link>
            </li>
            <li>
              <Link to={"/"}>Referral Program</Link>
            </li>
            <li>
              <Link to={"/"}>UI & UX Design</Link>
            </li>
            <li>
              <Link to={"/"}>Web Design</Link>
            </li>
          </ul>
          <ul>
            <h4>Menu</h4>
            <li>
              <Link to={"/"}>Landingpage</Link>
            </li>
            <li>
              <Link to={"/"}>Documentation </Link>
            </li>
            <li>
              <Link to={"/"}>Referral Program</Link>
            </li>
            <li>
              <Link to={"/"}>UI & UX Design</Link>
            </li>
            <li>
              <Link to={"/"}>Web Design</Link>
            </li>
          </ul>
          <ul>
            <h4>Company</h4>
            <li>
              <Link to={"/"}>Landingpage</Link>
            </li>
            <li>
              <Link to={"/"}>Documentation </Link>
            </li>
            <li>
              <Link to={"/"}>Referral Program</Link>
            </li>
            <li className="icons">
              <Link to={"https://www.instagram.com/"} target="_blank">
                <img src={img1} alt="Instagram" />
              </Link>
              <Link to={"https://www.facebook.com/"} target="_blank">
                <img src={img2} alt="Facebook" />
              </Link>
              <Link to={"https://twitter.com/"} target="_blank">
                <img src={img3} alt="Twitter" />
              </Link>
              <Link to={"https://www.youtube.com/"} target="_blank">
                <img src={img4} alt="You Tube" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Footer;
