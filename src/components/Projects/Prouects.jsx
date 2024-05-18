import React, { useEffect } from "react";
import "./Projects.css";
import movies from "../../imgs/movies.jpeg";
import edara from "../../imgs/edara.jpeg";
import weather from "../../imgs/weather.jpeg";
import resto from "../../imgs/resto.jpeg";
import elec from "../../imgs/shop.jpeg";
import php from "../../imgs/full.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Prouects = () => {
  useEffect(() => {
    const elementsLeft = document.querySelectorAll(
      ".project-left-animated-card"
    );
    const elementRight = document.querySelectorAll(
      ".project-right-animated-card "
    );
    const elementTop = document.querySelectorAll(".top-animated-card ");
    const elementMiddle = document.querySelectorAll(".middlle-animated-card ");
    if (
      elementsLeft.length > 0 ||
      elementRight.length > 0 ||
      elementTop.length > 0 ||
      elementMiddle.length > 0
    ) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cards-animation");
          } else {
            entry.target.classList.remove("cards-animation");
          }
        });
      };

      const observer = new IntersectionObserver(callbacks, options);
      elementsLeft.forEach((element) => observer.observe(element));
      elementRight.forEach((element) => observer.observe(element));
      elementTop.forEach((element) => observer.observe(element));
      elementMiddle.forEach((element) => observer.observe(element));

      return () => {
        if (
          elementsLeft &&
          elementRight &&
          elementTop &&
          elementMiddle &&
          observer
        ) {
          elementsLeft.forEach((element) => observer.unobserve(element));
          elementRight.forEach((element) => observer.unobserve(element));
          elementTop.forEach((element) => observer.unobserve(element));
          elementMiddle.forEach((element) => observer.unobserve(element));
        }
      };
    }
  }, []);
  const options = {
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    nav: 1,
    dots: true,
    margin: 15,
    rewind: true,
    center: true,
    responsive: {
      1100: {
        items: 2,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="projects-container">
        <div className="container">
          <div className="top-animated-card">
            <h1 className="projects-title">Projects</h1>
            <h5 className="projects-subtitle">Some of My Work</h5>
          </div>
          <div className="row default-projects">
            <div className="col-md-4 col-sm-6 mb-5 project-right-animated-card">
              <div className="project">
                <div className="card">
                  <img
                    src={movies}
                    className="card-img-top w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Top-Movies</h5>
                    <p className="card-text">
                      Movie app contains ( movies , Tvshow , most famous people
                      ) each one of them with it's own data, get all data from
                      external api.
                    </p>
                    <p className="card-text-2">
                      #html #css #bootstrap #js #React js #api
                    </p>
                    <div className="text-center">
                      <a
                        href="https://mohamedbadrr.github.io/Top-Movies/"
                        target="_blank"
                        className="d-button px-4 py-2 mx-2 mb-3"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/MohamedBadrr/Top-Movies"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 middlle-animated-card">
              <div className="project">
                <div className="card">
                  <img
                    src={resto}
                    className="card-img-top w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Resto</h5>
                    <p className="card-text">
                      Resto is a Resturant contains many pages and you can book
                      a table or make an order and your order is saved in your
                      chart.{" "}
                    </p>
                    <p className="card-text-2">
                      #html #css #bootstrap #js #jquery{" "}
                    </p>
                    <div className="text-center">
                      <a
                        href="https://mohamedbadrr.github.io/Resturant-Resto/"
                        target="_blank"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/MohamedBadrr/Resturant-Resto"
                        target="_blank"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5 col-md-4 col-sm-6 project-left-animated-card">
              <div className="project ">
                <div className="card ">
                  <img
                    src={weather}
                    className="card-img-top w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Weather-App</h5>
                    <p className="card-text">
                      weather App : you enter any country or any city and the
                      app send you the weather in this place from an external
                      api.
                    </p>
                    <p className="card-text-2">
                      #html #css #bootstrap #js #React js #api
                    </p>
                    <div className="text-center">
                      <a
                        href="https://mohamedbadrr.github.io/Weather-APP/"
                        target="_blank"
                        className="d-button px-4 py-2 mx-2 mb-3"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/MohamedBadrr/Weather-APP"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mb-5 col-md-4  col-sm-6 project-right-animated-card">
              <div className="project">
                <div className="card">
                  <img
                    src={edara}
                    className="card-img-top w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Edara-Dashboard</h5>
                    <p className="card-text">
                      This is a full-stack project with ( React js & Node js ).
                      it manages products , warehouses , supervisors and
                      contains 2 users [ Admin , Subervisor ].
                    </p>
                    <p className="card-text-2">
                      #html #css #bootstrap #js #React js #Node js #mysql{" "}
                    </p>
                    <div className="text-center">
                      <a
                        href="https://github.com/MohamedBadrr/Edara-Dashboard"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mb-5 col-md-4  col-sm-6 middlle-animated-card">
              <div className="project">
                <div className="card">
                  <img
                    src={php}
                    className="card-img-top w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">E-Commerce</h5>
                    <p className="card-text">
                      This is a full-stack project ( external templet & php
                      &mysql ). it manages products , categories ,and the app
                      should rate the products.{" "}
                    </p>
                    <p className="card-text-2">
                      #external-templet-as-frontend #php #mysql{" "}
                    </p>
                    <div className="text-center">
                      <a
                        href="https://github.com/MohamedBadrr/E-commerce-App"
                        target="_blank"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4  col-sm-6 mb-5 project-left-animated-card">
              <div className="project">
                <div className="card">
                  <img
                    src={elec}
                    className="card-img-top w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Electronic - Shop</h5>
                    <p className="card-text">
                      simple e-commerce app contian may pages .
                    </p>
                    <p className="card-text-2">#html #css #bootstrap </p>
                    <div className="text-center">
                      <a
                        href="https://mohamedbadrr.github.io/Electronic-shop-website/"
                        target="_blank"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/MohamedBadrr/Electronic-shop-website"
                        target="_blank"
                        className="d-button px-3 py-2 mx-2 mb-3"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" row my-5 carsool-projects">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item text-center">
                <div className="project">
                  <div className="card">
                    <img
                      src={movies}
                      className="card-img-top w-100 card-image"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Top-Movies</h5>
                      <p className="card-text">
                        Movie app contains ( movies , Tvshow , most famous
                        people ) each one of them with it's own data, get all
                        data from external api.
                      </p>
                      <p className="card-text-2">
                        #html #css #bootstrap #js #React js #api
                      </p>
                      <div className="text-center">
                        <a
                          href="https://mohamedbadrr.github.io/Top-Movies/"
                          target="_blank"
                          className="d-button px-4 py-2 mx-2 mb-3"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohamedBadrr/Top-Movies"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="project">
                  <div className="card">
                    <img
                      src={resto}
                      className="card-img-top w-100 card-image"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Resto</h5>
                      <p className="card-text">
                        Resto is a Resturant contains many pages and you can
                        book a table or make an order and your order is saved in
                        your chart.{" "}
                      </p>
                      <p className="card-text-2">
                        #html #css #bootstrap #js #jquery{" "}
                      </p>
                      <div className="text-center">
                        <a
                          href="https://mohamedbadrr.github.io/Resturant-Resto/"
                          target="_blank"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohamedBadrr/Resturant-Resto"
                          target="_blank"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="project">
                  <div className="card">
                    <img
                      src={weather}
                      className="card-img-top w-100 card-image"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Weather-App</h5>
                      <p className="card-text">
                        weather App : you enter any country or any city and the
                        app send you the weather in this place from an external
                        api.
                      </p>
                      <p className="card-text-2">
                        #html #css #bootstrap #js #React js #api
                      </p>
                      <div className="text-center">
                        <a
                          href="https://mohamedbadrr.github.io/Weather-APP/"
                          target="_blank"
                          className="d-button px-4 py-2 mx-2 mb-3"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohamedBadrr/Weather-APP"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="project">
                  <div className="card">
                    <img
                      src={edara}
                      className="card-img-top w-100 card-image"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Edara-Dashboard</h5>
                      <p className="card-text">
                        This is a full-stack project with ( React js & Node js
                        ). it manages products , warehouses , supervisors and
                        contains 2 users [ Admin , Subervisor ].
                      </p>
                      <p className="card-text-2">
                        #html #css #bootstrap #js #React js #Node js #mysql{" "}
                      </p>
                      <div className="text-center">
                        <a
                          href="https://github.com/MohamedBadrr/Edara-Dashboard"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="project">
                  <div className="card">
                    <img
                      src={php}
                      className="card-img-top w-100 card-image"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">E-Commerce</h5>
                      <p className="card-text">
                        This is a full-stack project ( external templet & php
                        &mysql ). it manages products , categories ,and the app
                        should rate the products.{" "}
                      </p>
                      <p className="card-text-2">
                        #external-templet-as-frontend #php #mysql{" "}
                      </p>
                      <div className="text-center">
                        <a
                          href="https://github.com/MohamedBadrr/E-commerce-App"
                          target="_blank"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="project">
                  <div className="card">
                    <img
                      src={elec}
                      className="card-img-top w-100 card-image"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Electronic - Shop</h5>
                      <p className="card-text">
                        simple e-commerce app contian may pages .
                      </p>
                      <p className="card-text-2">#html #css #bootstrap </p>
                      <div className="text-center">
                        <a
                          href="https://mohamedbadrr.github.io/Electronic-shop-website/"
                          target="_blank"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohamedBadrr/Electronic-shop-website"
                          target="_blank"
                          className="d-button px-3 py-2 mx-2 mb-3"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Prouects;
