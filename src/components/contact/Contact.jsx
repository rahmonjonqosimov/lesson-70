import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container contact">
          <h4>C O N T A C T </h4>
          <h2>
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </h2>
          <form>
            <input type="text" required placeholder="Enter your message" />
            <button>Send</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
