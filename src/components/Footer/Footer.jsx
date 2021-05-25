import React from "react";
import Foot from "./style.footer";

const Footer = () => {
  return (
    <Foot>
      <div className="social__media--wrapper">
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

      <p>
        Copyright © 2020 - All Right Reserved. <br />
        Designed by Mardoxhée Ben Tahar LUVIKI
      </p>
    </Foot>
  );
};

export default Footer;
