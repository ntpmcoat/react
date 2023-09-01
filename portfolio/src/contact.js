import React from 'react'

export default function Contact() {
  return (
   

<section id="contact" className="m-b-1">
  <h1 className=" t-center my-2 t-white f-2">Contact Me</h1>
  <div className="contact-container flex s-around items-centers">
    <div className="form" id="contactForm">
      <form action="https://formspree.io/f/mjvqwldz" id="contactFrom">
        <div className="name form-div">
          <input type="text" name="name" id="name" className="poppins" placeholder="Enter Your Name" />
        </div>
        <div className="email form-div">
          <input type="email" name="email" id="email" className="poppins" placeholder="Enter Your Email" required />
        </div>
        <div className="phone form-div">
          <input type="phone" name="phone" id="phone" className="poppins" placeholder="Enter Your Phone" required />
        </div>
        <div className="textarea form-div">
          <textarea name="text" id="textarea" cols="30" rows="10" className="poppins" placeholder="Enter Messages"
            required></textarea>
        </div>
        <button type="submit" className="btn poppins" id="submit">Send</button>
      </form>
    </div>
  </div>
</section>
  )
}
