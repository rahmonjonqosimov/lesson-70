import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import "./sass/index.scss";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import AnimatedCursor from "react-animated-cursor";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Menu />
        <Testimonial />
        <Contact />
        <Footer />
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          showSystemCursor={true}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      </>
    );
  }
}

export default App;
