import React from "react"

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <img src="assets/Contact3.gif" alt="" />
      </div>
      <div className="contact-right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}