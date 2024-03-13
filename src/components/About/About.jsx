import React from 'react';
import '../About/About.css';
import cv from "../../assets/Mohamed Badr.pdf"
const About = () => {
    return (
    <>
    <div className='container'>
        <div className='aboutData'>
            <h4>It is an Overview.</h4>
        <h1 className='aboutHeader'>About Me</h1>
        <p>"I am a skilled Software Engineer and Web Developer with a
            degree from the Faculty of Computer Sciences and Artificial 
            Intelligence at Helwan University. My expertise lies in web
            development, particularly in React JS, where I've successfully 
            delivered numerous projects, backed by my acquired certifications
            . I excel in collaborating closely with clients, ensuring efficient project execution. A quick learner by nature, I'm eager to contribute to your team and bring your ideas to fruition. Feel free to download my CV or reach out to discussد
            potential collaborations. I'm excited about helping you achieve your goals."
        </p>
        <button className='d-button downloadcvBtn'><a download=""href={cv}>Download CV <i class="fa-solid fa-download"></i></a></button>
        </div>
    </div>
    </>
    );
}

export default About;
