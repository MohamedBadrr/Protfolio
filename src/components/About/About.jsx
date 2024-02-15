import React from 'react';
import '../About/About.css';
import cv from "../../assets/Mohamed Badr CV.pdf"
const About = () => {
    return (
    <>
    <div className='container'>
        <div className='aboutData'>
            <h4>It is an Overview.</h4>
        <h1 className='aboutHeader'>About Me</h1>
        <p>I'm a Software Enginner and Web Developer . I'm graduated from faculty of Computer Sciences and Artificial Intelligence Helwan university . i Have a very good experience
            in web development. i have a experience in React Js and bulid many Projects with it . and i have get certificates in this field. I am a faster learner 
            and collaborated with my clients to do efficient projects . you can download my cv or contact me to work together . i will be so happy to help you to achieve
            your goal and your ideas.
        </p>
        <button className='d-button downloadcvBtn'><a download=""href={cv}>Download CV <i class="fa-solid fa-download"></i></a></button>
        </div>
    </div>
    </>
    );
}

export default About;
