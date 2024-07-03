import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [openlist1, setOpenlist1] = useState(false);
  const [openlist2, setOpenlist2] = useState(false);
  const [openlist3, setOpenlist3] = useState(false);

  useEffect(() => {
    const elementsLeftSkills = document.querySelectorAll(
      ".left-skills-animation "
    );
    const elementRightSkills = document.querySelectorAll(
      ".right-skills-animation "
    );
    const elementTopQuli = document.querySelectorAll(".top-quli-animation ");
    if (elementsLeftSkills.length > 0 || elementRightSkills.length || elementTopQuli.length > 0) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      };

      const callbacks = (entries,observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skills-animation");
            observer.unobserve(entry.target);
          } 
        });
      };

      const observer = new IntersectionObserver(callbacks, options);

      elementsLeftSkills.forEach((element) => observer.observe(element));
      elementRightSkills.forEach((element) => observer.observe(element));
      elementTopQuli.forEach((element) => observer.observe(element));

      return () => {
        if (elementsLeftSkills && elementRightSkills &&  elementTopQuli && observer) {
          elementsLeftSkills.forEach((element) => observer.unobserve(element));
          elementRightSkills.forEach((element) => observer.unobserve(element));
          elementTopQuli.forEach((element) => observer.observe(element));
        }
      };
    }
  }, []);
  return (
    <>
      <div className="skills">
        <div className="container">
          <div className="top-quli-animation">
            <h1 className="SkillsTiltle">Skills</h1>
            <h5 className="smalltiltleskills">My technical Level</h5>
          </div>

          <div className="skills-container container grid editskills">
            <div className="skills-sections">
              {/*======== skill 1 ===========*/}
              <div className="skills-content skills-open right-skills-animation">
                <div
                  className="skills-header"
                  onClick={() => setOpenlist1(!openlist1)}
                >
                  <i className="fa-solid fa-globe fa-2x skills-icon"></i>
                  <div>
                    <h4 className="skills-tiltle">Frontend Development</h4>
                    <span className="skills-subtitle"> more than 2 years</span>
                  </div>
                  {openlist1 && (
                    <i className="fa-solid fa-angle-down skills-arrow"></i>
                  )}
                  {!openlist1 && (
                    <i className="fa-solid fa-angle-up skills-arrow"></i>
                  )}
                </div>
                {openlist1 && (
                  <div className="skills-list grid">
                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">HTML</h4>
                        <span className="skills-number">95%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-html"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">CSS</h4>
                        <span className="skills-number">90%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-css"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">BOOTSTRAP</h4>
                        <span className="skills-number">90%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-bootstrap"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">Java Script</h4>
                        <span className="skills-number">85%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-js"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">JQUERY</h4>
                        <span className="skills-number">80%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-jquery"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">REACT JS</h4>
                        <span className="skills-number">88%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-react"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/*======== skill 3 ===========*/}
              <div className="skills-content skills-open left-skills-animation">
                <div
                  className="skills-header"
                  onClick={() => setOpenlist3(!openlist3)}
                >
                  <i className="fa-solid fa-toolbox fa-2x skills-icon"></i>
                  <div>
                    <h4 className="skills-tiltle">Tools </h4>
                    <span className="skills-subtitle">
                      Have more information
                    </span>
                  </div>
                  {openlist3 && (
                    <i className="fa-solid fa-angle-down skills-arrow"></i>
                  )}
                  {!openlist3 && (
                    <i className="fa-solid fa-angle-up skills-arrow"></i>
                  )}
                </div>
                {openlist3 && (
                  <div className="skills-list grid">
                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">Git & Github</h4>
                        <span className="skills-number">90%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-github"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">VS code</h4>
                        <span className="skills-number">90%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-vscode"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">Postman</h4>
                        <span className="skills-number">85%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-postman"></span>
                      </div>
                    </div>

                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name">SOLID Principles</h4>
                        <span className="skills-number">80%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-solid"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/*======== skill 2 ===========*/}
              <div className="skills-content skills-open right-skills-animation">
                <div
                  className="skills-header"
                  onClick={() => setOpenlist2(!openlist2)}
                >
                  <i className="fa-solid fa-database fa-2x skills-icon"></i>
                  <div>
                    <h4 className="skills-tiltle">Backend Development</h4>
                    <span className="skills-subtitle">Comming </span>
                  </div>
                  {openlist2 && (
                    <i className="fa-solid fa-angle-down skills-arrow"></i>
                  )}
                  {!openlist2 && (
                    <i className="fa-solid fa-angle-up skills-arrow"></i>
                  )}
                </div>
                {openlist2 && (
                  <div className="skills-list grid">
                    <div className="skills-data">
                      <div className="skills-titles my-4">
                        <h4 className="skills-name fw-bold">
                          I'm studying it now
                        </h4>
                        <span className="skills-number">0%</span>
                      </div>
                      <div className="skills-bar">
                        <span className="skills-percentage skills-backend"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
