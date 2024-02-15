import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
       <>
      <div className='footer'>
      <div class="coppright text-center"> 
          &copy; copyright <strong><span class="specail">Portfolio</span></strong> All Rights Reseved
       </div>
       <div class="credited text-center">
          Designed By <span class="me">Eng: <strong class="specail">Mohamed Badr</strong></span>
       </div>
       <div class="icons text-center">
          <a href="https://github.com/MohamedBadrr" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100004812045596" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/mohamed-badr-636804219/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100004812045596" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/mohamed_bader_111/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </div>
      </div>
    </>
  );
}

export default Footer;
