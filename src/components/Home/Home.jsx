
import React, { useEffect } from 'react';
import "../Home/Home.css";
import profileImg3 from "../../imgs/profile3.png";
import profileImg4 from "../../imgs/profile4.png";


import { useTypewriter , Cursor, Typewriter } from 'react-simple-typewriter';

const Home = () => {

  useEffect(() => {
    const elementsLeft = document.querySelectorAll(".home-animation");
    const elementsappear = document.querySelectorAll(".banner-animation");
    if (elementsLeft.length > 0 || elementsappear.length ) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callbacks = (entries,observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-home");
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(callbacks, options);

      elementsLeft.forEach((element) => observer.observe(element));
      elementsappear.forEach((element) => observer.observe(element));

      return () => {
        if (elementsLeft && elementsappear && observer) {
          elementsLeft.forEach((element) => observer.unobserve(element));
          elementsappear.forEach((element) => observer.unobserve(element));
        }
      };
    }
  }, []);


  const { text } = useTypewriter({
    words: ['Front-end Developer', 'Full-stack Developer'],
    loop: {},
  });
  return (
    <section className='home'>
        <div className='container '>


          <div className='container-bubbles'>
            <div className='bubbles'>
              {/* <span style={{ "--i": 11 }}></span> */}
              <span style={{"--i":11}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":24}}></span>
              <span style={{"--i":10}}></span>
              <span style={{"--i":23}}></span>
              <span style={{"--i":23}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":14}}></span>
              <span style={{"--i":16}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":20}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":25}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":21}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":21}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":13}}></span>
              <span style={{"--i":26}}></span>
              <span style={{"--i":17}}></span>
              <span style={{"--i":13}}></span>
              <span style={{"--i":28}}></span>
              <span className='bubbles-2' style={{"--i":11}}></span>
              <span className='bubbles-2' style={{"--i":12}}></span>
              <span className='bubbles-2' style={{"--i":24}}></span>
              <span className='bubbles-2' style={{"--i":10}}></span>
              <span className='bubbles-2' style={{"--i":23}}></span>
              <span className='bubbles-2' style={{"--i":23}}></span>
              <span className='bubbles-2' style={{"--i":18}}></span>
              <span className='bubbles-2' style={{"--i":14}}></span>
              <span className='bubbles-2' style={{"--i":16}}></span>
              <span className='bubbles-2' style={{"--i":19}}></span>
              <span className='bubbles-2' style={{"--i":20}}></span>
              <span className='bubbles-2' style={{"--i":22}}></span>
              <span className='bubbles-2' style={{"--i":25}}></span>
              <span className='bubbles-2' style={{"--i":18}}></span>
              <span className='bubbles-2' style={{"--i":21}}></span>
              <span className='bubbles-2' style={{"--i":15}}></span>
              <span className='bubbles-2' style={{"--i":18}}></span>
              <span className='bubbles-2' style={{"--i":21}}></span>
              <span className='bubbles-2' style={{"--i":15}}></span>
              <span className='bubbles-2' style={{"--i":13}}></span>
              <span className='bubbles-2' style={{"--i":26}}></span>
              <span className='bubbles-2' style={{"--i":17}}></span>
              <span className='bubbles-2' style={{"--i":13}}></span>
              <span className='bubbles-2' style={{"--i":28}}></span>
          </div>
          </div>


          <div className='row fix-row-data'>
              <div className='col-md-7 home-animation'>
                <div className='home-data '>
                    <h1><span className='hi'>Hi</span>, I'am <span className='specail'>Mohamed</span> </h1>
                    <div className='titles'> <Typewriter
                    words={['Front-end Developer', 'Full-stack Developer']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={500}
                    /></div>
                    <p>I Have a high level experience in web design and 
                      development knowledge.
                    </p>
                    <div className='icons'>
                    <a href="https://www.linkedin.com/in/mohamed-badr-636804219/"><i className="fa-brands fa-linkedin-in mx-2"></i></a>
                    <a href="https://github.com/MohamedBadrr"><i className="fa-brands fa-github "></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100004812045596"><i className="fa-brands fa-facebook-f mx-2 "></i></a>
                    <a href="https://www.instagram.com/mohamed_bader_111/?hl=ar"><i className="fa-brands fa-instagram" ></i></a>
                    <a href="https://x.com/Mu7amed_Badr?t=aTxUqsddnxGHeVupL3Cbjg&s=08 "><i className="fa-brands fa-twitter mx-2 "></i></a>
                    </div>
                    <button className='d-button text-white contact-btn'> <a href="#CONTACT" className='contact-mee-link'>Contact Me</a></button> 
                </div>
              </div>
              
              <div className='col-md-5 banner-animation'>
                <div className='fix-fullImg'>
                <div className='home-img'>
                  <svg className='home-blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" >
                    <mask id="mask0" mask-type="alpha">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        <image className='home-img mx-auto' href={profileImg4}/>
                    </g>
                </svg>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  );
}

export default Home;
