import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Avis from "./style/Avis";
import avat from "./avat.jpg";

const SectionAvis = () => {
  return (
    <Avis>
      <h2>Testimonials</h2>
      <div className="avis--wrapper">
        <OwlCarousel
          className="owl-theme"
          items="3"
          autoplay
          dots
          loop="true"
          mouseDrag="true"
        >
          <div className="avisman">
            <div className="imgContenair">
              <img src={avat} alt="" />
            </div>
            <p>
              Personnellement je suis très satisfait du Travail de Mardoxhée,...
            </p>
            <h6>
              Chiruza chris <span>DG Radio Kivu</span>
            </h6>
          </div>
          <div className="avisman">
            <div className="imgContenair">
              <img src={avat} alt="" />
            </div>
            <p>
              Personnellement je suis très satisfait du Travail de Mardoxhée,...
            </p>
            <h6>
              Chiruza chris <span>DG Radio Kivu</span>
            </h6>
          </div>
          <div className="avisman">
            <div className="imgContenair">
              <img src={avat} alt="" />
            </div>
            <p>
              Personnellement je suis très satisfait du Travail de Mardoxhée,...
            </p>
            <h6>
              Chiruza chris <span>DG Radio Kivu</span>
            </h6>
          </div>
          <div className="avisman">
            <div className="imgContenair">
              <img src={avat} alt="" />
            </div>
            <p>
              Personnellement je suis très satisfait du Travail de Mardoxhée,...
            </p>
            <h6>
              Chiruza chris <span>DG Radio Kivu</span>
            </h6>
          </div>
        </OwlCarousel>
      </div>
    </Avis>
  );
};

export default SectionAvis;
