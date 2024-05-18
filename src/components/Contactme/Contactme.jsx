import React, { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contanctme.css";

const Contactme = () => {
  useEffect(() => {
    const elementsLeft = document.querySelectorAll(".left-animated-contact");
    const elementRight = document.querySelectorAll(".right-animated-contact");
    const elementTop = document.querySelectorAll(".top-animated-card ");
    const elementBottom = document.querySelectorAll(".bottom-animated-about");
    if (
      elementsLeft.length > 0 ||
      elementRight.length > 0 ||
      elementTop.length > 0 ||
      elementBottom.length > 0
    ) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-animation");
          } else {
            entry.target.classList.remove("about-animation");
          }
        });
      };

      const observer = new IntersectionObserver(callbacks, options);
      elementsLeft.forEach((element) => observer.observe(element));
      elementRight.forEach((element) => observer.observe(element));
      elementTop.forEach((element) => observer.observe(element));
      elementBottom.forEach((element) => observer.observe(element));

      return () => {
        if (
          elementsLeft &&
          elementRight &&
          elementTop &&
          elementBottom &&
          observer
        ) {
          elementsLeft.forEach((element) => observer.unobserve(element));
          elementRight.forEach((element) => observer.unobserve(element));
          elementTop.forEach((element) => observer.unobserve(element));
          elementBottom.forEach((element) => observer.unobserve(element));
        }
      };
    }
  }, []);

  const [alertmsg, setAlertmsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jyj79sk", "template_1wy9jpq", form.current, {
        publicKey: "daYCIg_Fj27FURM5e",
      })
      .then(
        () => {},
        (error) => {
          setEmail("");
          setMessage("");
          setName("");
          setPhone("");
          alert("Some Thing Erorr...!, Please Try Again.");
        }
      );
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    setAlertmsg(!alertmsg);
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="top-animated-card">
            <h1 className="contanctTiltle">Contact Me</h1>
            <h5 className="smalltiltlecontact">Let's Work together</h5>
          </div>
          <div className="data">
            <div className="number right-animated-contact">
              <i className="fa-brands fa-whatsapp phone-icon"></i>
              <div className="data-number">
                <h4>Call me</h4>
                <p>+02-0102-6049-630</p>
              </div>
            </div>
            <div className="email left-animated-contact">
              <i className="fa-regular fa-envelope email-icon"></i>
              <div className="data-email">
                <h4>Send me</h4>
                <p type="email">badr59497@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              {alertmsg && (
                <div className="alert alert-primary " role="alert">
                  Thank You..., I Will Receive Your Message and Text You.
                  <i
                    className="fa-solid fa-circle-xmark"
                    onClick={() => {
                      setAlertmsg(!alertmsg);
                    }}
                  ></i>
                </div>
              )}
              <div className="filed">
                <input
                  className="right-animated-contact"
                  type="text"
                  name="user_name"
                  value={name}
                  placeholder=" Name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="filed">
                <input
                  className="left-animated-contact"
                  type="email"
                  name="user_email"
                  value={email}
                  placeholder=" Email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="filed">
                <input
                  className="right-animated-contact"
                  type="number"
                  name="user_phone"
                  placeholder=" Phone"
                  value={phone}
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="filed">
                <textarea
                  className="left-animated-contact"
                  name="message"
                  placeholder=" Messsage"
                  value={message}
                  rows={6}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="d-button text-white px-4 py-1 my-2 contact-button bottom-animated-about"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
