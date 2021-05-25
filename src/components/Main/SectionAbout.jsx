import React from "react";
import About from "./style/SectionAbout";

const SectionAbout = () => {
  return (
    <About>
      <h2 className="welcome animate__animated animate__fadeIn animate__delay-3s">
        About me
      </h2>
      <div className="wrapper">
        <div className="img_contenair welcome animate__animated animate__fadeIn animate__delay-4s">
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="welcome animate__animated animate__fadeIn animate__delay-5s">
            I am <span>Mardoxhée Ben Tahar LUVIKI</span>
          </h3>
          <h6 className="welcome animate__animated animate__fadeIn animate__delay-5s">
            WEB DEVELOPPER AND UI/UX DESIGNER
          </h6>
          <p className="welcome animate__animated animate__fadeIn animate__delay-5s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta{" "}
            <br />
            mollitia quaerat accusamus explicabo hic doloribus tenetur
            <br />
            reiciendis! Saepe, ad officiis necessitatibus explicabo cupiditate
            <br />
            quasi! Maiores, itaque. Error officiis a doloribus!
            <br />
          </p>
          <p className="welcome animate__animated animate__fadeIn animate__delay-5s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            <br />
            mollitia quaerat accusamus explicabo hic doloribus tenetur
            <br />
            reiciendis! Saepe, ad officiis necessitatibus explicabo cupiditate
            <br />
            quasi! Maiores, itaque. Error officiis a doloribus!
            <br />
          </p>
          <a href="google.cd">GET MY CV</a>
        </div>
      </div>
    </About>
  );
};

export default SectionAbout;
