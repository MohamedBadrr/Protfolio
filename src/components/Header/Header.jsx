import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import cv from "../../assets/Mohamed Badr Esmail-Frontend React-Js.pdf";
import logo from "../../imgs/LOGO.png";
const Header = () => {
  useEffect(() => {
    const elementTop = document.querySelectorAll(".top-animated-nav ");
    if (elementTop.length > 0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries,observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("nav-animation");
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(callbacks, options);

      elementTop.forEach((element) => observer.observe(element));

      return () => {
        if (elementTop && observer) {
          elementTop.forEach((element) => observer.unobserve(element));
        }
      };
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark navBg text-center ">
        <div className="container ">
          <a className="navbar-brand ms-3 fw-bold top-animated-nav " href="#">
            Mohamed
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto  mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link  NavColor top-animated-nav" href="#HOME">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  NavColor top-animated-nav" href="#ABOUT">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  NavColor top-animated-nav" href="#SKILLS">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  NavColor top-animated-nav" href="#SERVICES">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  NavColor top-animated-nav"
                  href="#PORTFOLIO"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavColor top-animated-nav" href="#CONTACT">
                  Contact Me
                </a>
              </li>
            </ul>
            <button className="d-button text-white text-center mt-2 nav-button top-animated-nav">
              <a href="https://github.com/MohamedBadrr">Github</a>
            </button>
            <button className="d-button text-white text-center mt-2 ms-3 nav-button top-animated-nav">
              <a download="" href={cv}>
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
