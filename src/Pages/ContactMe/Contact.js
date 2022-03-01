import React from "react";
import emailjs from "emailjs-com";
import './Contact.css';

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_nth61rb",
      "template_f2glksm",
      e.target,
      "user_9EFxqVPGiUK0KmS46iVqo"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
  alert("your email send successfully");
}

const Contact = () => {
  return (
    <div className="contact-img mt-5 ps-5 pt-5 pe-5 coloring">
      <h1 className="text-center" style={{ color: "tomato" }}>
                CONTACT WITH ME
      </h1>
      <div className="row">
        <div className="col-md-6">
          <p className="mt-5 pt-5" style={{ fontWeight: "bold", color: "black" }}>
          I believe working in a reputed organization like your one will provide me excellent
        opportunity for my career growth in the area of website development sector. I am
        confident that if I am provided the opportunity to serve your organization, I will prove
        myself to be an important asset for your company through my dedication, sincerity and
        highest level of professionalism.
          </p>
          <h2>JANNATUL NAYEM TONNY</h2>
          <p>Gmail : zannatulnayemtonny@gmail.com</p>
        </div>
        <div className="col-md-6">
          <form className="contact-form p-3 " onSubmit={sendEmail}>
            <input
              className="form-control"
              type="hidden"
              name="contact_number"
            />
            <br />
            <label>Name</label>
            <input className="form-control" type="text" name="user_name" placeholder="Enter Your Name"/>
            <br />
            <label>Email</label>
            <input className="form-control" type="email" name="user_email" placeholder="Enter Your Email"/>
            <br />
            <label>Message</label>
            <textarea className="form-control" name="message" placeholder="You Can Share Your Opinion" />
            <br />
            <input className="form-control" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;