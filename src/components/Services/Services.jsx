
import React, { useEffect } from 'react';
import  './Services.css'; 

const Services = () => {
    useEffect(() => {
        const elementsLeft = document.querySelectorAll(".left-animated-card ");
        const elementRight = document.querySelectorAll(".right-animated-card ");
        const elementTop = document.querySelectorAll(".top-animated-card ");
        const elementMiddle = document.querySelectorAll(".middlle-animated-card ");
        if (
          elementsLeft.length > 0 ||
          elementRight.length > 0 ||
          elementTop.length > 0||
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
return (
    <>
        <div className='services-container'>
            <div className='top-animated-card'>
                    <h1 className='services-title'>Services</h1>
                    <h5 className='services-subtitle'>What I Offer</h5>
            </div>
            <div className='container services'>
                <div className='service right-animated-card'>
                <i class="fa-solid fa-code icon-service"></i>
                <h3>Frontend</h3>
                <h3 className='mb-4'>Development.</h3>
                <a href="#CONTACT">Contact Me <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>

                <div className='service middlle-animated-card'>
                <i class="fa-solid fa-server icon-service"></i>
                <h3>Backend</h3>
                <h3 className='mb-4' >Development.</h3>
                <a href="#CONTACT">Contact Me <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>

                <div className='service left-animated-card'>
                <i class="fa-brands fa-figma icon-service"></i>
                <h3>UI/UX</h3>
                <h3 className='mb-4'>Design.</h3>
                
                <a href="#CONTACT">Contact Me <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>

            </div>
        </div>
    </>
);
}

export default Services;
