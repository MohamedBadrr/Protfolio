import React, { useEffect } from "react";
import "../About/About.css";
import cv from "../../assets/Mohamed Badr Resume.pdf";
const About = () => {
  useEffect(() => {
    const elementsLeftAbout = document.querySelectorAll(".left-about-animation");
    const elementAboutButton = document.querySelectorAll(
      ".button-about-animation"
    );
    if (elementsLeftAbout.length > 0 || elementAboutButton.length>0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-about");
          } else {
            entry.target.classList.remove("animation-about");
          }
        });
      };

      const observer = new IntersectionObserver(callbacks, options);

      elementsLeftAbout.forEach((element) => observer.observe(element));
      elementAboutButton.forEach((element) => observer.observe(element));

      return () => {
        if (elementAboutButton && elementsLeftAbout && observer) {
          elementAboutButton.forEach((element) => observer.unobserve(element));
          elementsLeftAbout.forEach((element) => observer.unobserve(element));
        }
      };
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="aboutData left-about-animation ">
          <h4>It is an Overview.</h4>
          <h1 className="aboutHeader">About Me</h1>
          <p>
            "I am a skilled Software Engineer and Web Developer with a degree
            from the Faculty of Computer Sciences and Artificial Intelligence at
            Helwan University. My expertise lies in web development,
            particularly in React JS, where I've successfully delivered numerous
            projects, backed by my acquired certifications . I excel in
            collaborating closely with clients, ensuring efficient project
            execution. A quick learner by nature, I'm eager to contribute to
            your team and bring your ideas to fruition. Feel free to download my
            CV or reach out to discussد potential collaborations. I'm excited
            about helping you achieve your goals."
          </p>
          <div className="dwonloadBtn ">
            <button className="d-button downloadcvBtn">
              <a download="" href={cv}>
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
