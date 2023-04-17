import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-page">
        <h2>Contact Us</h2>
        <div className="contact-card">
          <label>Name</label>
          <input type="name" className="contact-input"></input>
          <label>Email</label>
          <input
            type="email"
            className="contact-input"
            placeholder="test@example.com"
          ></input>
          <label>Message</label>
          <textarea></textarea>
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
