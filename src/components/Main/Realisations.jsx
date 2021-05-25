import React from "react";
import Realisation from "./style/Realisations";
import bg from "./bg.jpg";

const Realisations = () => {
  return (
    <Realisation id="projets">
      <h2>My Realisations</h2>
      <div className="button__categories--contenair">
        <button>All</button>
        <button>UI/UX</button>
        <button>Web Applications</button>
      </div>

      <div className="projets--wrapper">
        <div className="card">
          <img src={bg} alt="" />
          <div>
            <h4>Projet Title</h4>
            <p>Projets details</p>
          </div>
        </div>
        <div className="card">
          <img src={bg} alt="" />
          <div>
            <h4>Projet Title</h4>
            <p>Projets details</p>
          </div>
        </div>
        <div className="card">
          <img src={bg} alt="" />
          <div>
            <h4>Projet Title</h4>
            <p>Projets details</p>
          </div>
        </div>
        <div className="card">
          <img src={bg} alt="" />
          <div>
            <h4>Projet Title</h4>
            <p>Projets details</p>
          </div>
        </div>
        <div className="card">
          <img src={bg} alt="" />
          <div>
            <h4>Projet Title</h4>
            <p>Projets details</p>
          </div>
        </div>
        <div className="card">
          <img src={bg} alt="" />
          <div>
            <h4>Projet Title</h4>
            <p>Projets details</p>
          </div>
        </div>
      </div>
    </Realisation>
  );
};

export default Realisations;
