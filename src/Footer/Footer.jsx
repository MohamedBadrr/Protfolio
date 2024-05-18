import React, { useEffect } from "react";
import "./Footer.css";
const Footer = () => {
  useEffect(() => {
    const elementTop = document.querySelectorAll(".top-animated-nav ");
    if (elementTop.length > 0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("nav-animation");
          } else {
            entry.target.classList.remove("nav-animation");
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
      <div className="footer ">
        <div class="coppright text-center top-animated-nav">
          &copy; copyright{" "}
          <strong>
            <span class="specail">Portfolio</span>
          </strong>{" "}
          All Rights Reseved
        </div>
        <div class="credited text-center top-animated-nav">
          Designed By{" "}
          <span class="me">
            Eng: <strong class="specail">Mohamed Badr</strong>
          </span>
        </div>
        <div class="icons text-center top-animated-nav">
          <a href="https://github.com/MohamedBadrr" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100004812045596"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-badr-636804219/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100004812045596"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/mohamed_bader_111/"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
