import React from "react";
import Avis from "./style/Avis";
import bg from "./bg.jpg";

const SectionAvis = () => {
  return (
    <Avis>
      <h2>Testimonials</h2>
      <div className="avis--wrapper">
        <div className="avisman">
          <img src={bg} alt="" />
          <p>
            Personnellement je suis très satisfait du Travail de Mardoxhée,...
          </p>
          <h6>
            Chiruza chris <span>DG Radio Kivu</span>
          </h6>
        </div>
        <div></div>
        <div></div>
      </div>
    </Avis>
  );
};

export default SectionAvis;
