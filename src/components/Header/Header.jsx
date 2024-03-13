import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import cv from "../../assets/Mohamed Badr.pdf"
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-dark navBg text-center ">
  <div class="container ">
    <a class="navbar-brand ms-3 fw-bold" href="#">Mohamed</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto  mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link  NavColor" href="#HOME">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  NavColor"  href="#ABOUT">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  NavColor"  href="#SKILLS">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  NavColor"  href="#SERVICES">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  NavColor"  href="#PORTFOLIO">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link NavColor"  href="#CONTACT">Contact Me</a>
        </li>  
      </ul>
      <button className='d-button text-white text-center mt-2 nav-button'><a href="https://github.com/MohamedBadrr">Github</a></button>
      <button className='d-button text-white text-center mt-2 ms-3 nav-button'><a download="" href={cv}>Download CV <i class="fa-solid fa-download"></i></a></button>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;
