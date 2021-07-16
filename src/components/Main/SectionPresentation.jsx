import React from "react";
import Section from "./style/section";
import cvpdf from '../assets/upload/cvlvk.pdf';


const SectionPresentation = () => {
  return (
    <Section>
      <span className="welcome  animate__animated animate__fadeIn animate__delay-1s">
        WELCOME TO MY PORTFOLIO WEBSITE
      </span>
      <h1 className="welcome animate__animated animate__fadeIn animate__delay-2s ">
        I'm Mardoxhée Ben Tahar LUVIKI
      </h1>
      <div className="socialmedia__contenair welcome animate__animated animate__fadeIn animate__delay-3s">
        <span>
          <a href="https://web.facebook.com/mardoche.luvuki">
            <i class="fab fa-facebook-square"></i>
          </a>
        </span>
        <span>
          <a href="https://twitter.com/mardoxhee">
            <i class="fab fa-twitter-square "></i>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/mardoxh%C3%A9e-luviki-5a3208185/">
            <i class="fab fa-linkedin"></i>
          </a>
        </span>
        <span>
          <a href="insta">
            <i class="fab fa-instagram-square"></i>
          </a>
        </span>
      </div>
      <div className="buttonFlex">
        <a href="mailto:MardoxheeLuviki@gmail.com?subject=Demande d'informations">
        <button className="welcome animate__animated animate__fadeIn animate__delay-4s" >
          Hire me
        </button>
        
        </a>
        <a href={cvpdf} download="cvlvk.pdf">
        <button className="welcome animate__animated animate__fadeIn animate__delay-5s">
          Get my CV 
        </button> 
        </a>
      </div>
      <div>
        <a href="#projets">
          <i class="fas fa-angle-double-up animate__animated animate__bounce animate__delay-5S indicator"></i>
        </a>
      </div>
    </Section>
  );
};

export default SectionPresentation;
