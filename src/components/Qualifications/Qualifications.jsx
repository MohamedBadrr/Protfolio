import React, { useEffect } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  useEffect(() => {
    const elementsLeftQuli = document.querySelectorAll(".left-quli-animation ");
    const elementRightQuli = document.querySelectorAll(
      ".right-quli-animation "
    );
    const elementTopQuli = document.querySelectorAll(".top-quli-animation ");
    if (
      elementsLeftQuli.length > 0 ||
      elementRightQuli.length > 0 ||
      elementTopQuli.length > 0
    ) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("quli-animation");
          } else {
            entry.target.classList.remove("quli-animation");
          }
        });
      };

      const observer = new IntersectionObserver(callbacks, options);
      elementsLeftQuli.forEach((element) => observer.observe(element));
      elementRightQuli.forEach((element) => observer.observe(element));
      elementTopQuli.forEach((element) => observer.observe(element));

      return () => {
        if (
          elementsLeftQuli &&
          elementRightQuli &&
          elementTopQuli &&
          observer
        ) {
          elementsLeftQuli.forEach((element) => observer.unobserve(element));
          elementRightQuli.forEach((element) => observer.unobserve(element));
          elementTopQuli.forEach((element) => observer.unobserve(element));
        }
      };
    }
  }, []);
  return (
    <>
      <div className="container qualifications ">
        <div className="top-quli-animation">
          <h1 className="qualificationsTiltle">Qualifications</h1>
          <h5 className="smalltiltlequalifications">My Personal Journey</h5>
        </div>

        <div className="qualifications-container container">
          <div className="qualifications-tabs ">
            <div className="qualifications-button button--flex right-quli-animation">
              <i class="fa-solid fa-graduation-cap qualifications-icon"></i>
              Education
            </div>
            <div className="qualifications-button button--flex left-quli-animation">
              <i class="fa-solid fa-school qualifications-icon"></i>
              Courses
            </div>
          </div>

          <div className="qualifications-sections">
            <div className="qualifications-content">
              <div className="qualifications-data ">
                <div className="right-quli-animation">
                  <h4 className="qualifications-title">
                    Computer Sciences{" "}
                    <i class="fa-solid fa-building-columns icon-title"></i>
                  </h4>
                  <span className="qualifications-subtitle">
                    Helwan - University
                  </span>
                  <div className="qualifications-calender">
                    <i class="fa-solid fa-calendar-days me-2"></i>
                    2020 - 2024
                  </div>
                </div>
                <div>
                  <span className="qualifications-rounder"></span>
                  <span className="qualifications-line"></span>
                </div>
              </div>

              {/* qualification data 2*/}
              <div className="qualifications-data">
                <div></div>
                <div>
                  <span className="qualifications-rounder"></span>
                  <span className="qualifications-line"></span>
                </div>

                <div className="left-quli-animation">
                  <h4 className="qualifications-title">
                    Web Development <i class="fa-solid fa-globe icon-title"></i>
                  </h4>
                  <span className="qualifications-subtitle">Udemy</span>
                  <div className="qualifications-calender">
                    <i class="fa-solid fa-calendar-days me-2"></i>
                    2021 - 2022
                  </div>
                </div>
              </div>

              {/* qualification data 3 */}
              <div className="qualifications-data">
                <div className="right-quli-animation">
                  <h4 className="qualifications-title">
                    React Basic <i class="fa-brands fa-react react-icon"></i>
                  </h4>
                  <span className="qualifications-subtitle">
                    Coursera [Meta]
                  </span>
                  <div className="qualifications-calender">
                    <i class="fa-solid fa-calendar-days me-2"></i>
                    2022 - 2023
                  </div>
                </div>
                <div>
                  <span className="qualifications-rounder"></span>
                  <span className="qualifications-line"></span>
                </div>
              </div>

              {/* qualification data 4 */}
              <div className="qualifications-data">
                <div></div>
                <div>
                  <span className="qualifications-rounder"></span>
                </div>

                <div className="left-quli-animation">
                  <h4 className="qualifications-title">
                    React Advanced <i class="fa-brands fa-react react-icon"></i>
                  </h4>
                  <span className="qualifications-subtitle">
                    Coursera [meta]
                  </span>
                  <div className="qualifications-calender">
                    <i class="fa-solid fa-calendar-days me-2"></i>
                    2022 - 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualifications;
