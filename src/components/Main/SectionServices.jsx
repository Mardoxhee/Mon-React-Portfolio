import React from "react";
import Services from "./style/Services";
import bg from "./bg.jpg";

const SectionServices = () => {
  return (
    <Services>
      <h2>My Services</h2>
      <div className="slide__contenair">
        <div className="slide__Item">
          <div>
            <i class="fas fa-code"></i>
          </div>
          <h5>Web Developpement</h5>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            br odio obcaecati tempora veniam labore iusto ea voluptatem
            molestiae rem aliquid. Unde nesciunt quod eum, fugit placeat debitis
            aliquam. Fugiat, ea.
          </p>
        </div>
        <div className="slide__Item">
          <div>
            <i class="fas fa-paint-brush"></i>
          </div>
          <h5>UI UX Design</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            br odio obcaecati tempora veniam labore iusto ea voluptatem
            molestiae rem aliquid. Unde nesciunt quod eum, fugit placeat debitis
            aliquam. Fugiat, ea.
          </p>
        </div>
        <div className="slide__Item">
          <div className="minidiv">
            <i class="fas fa-chart-line"></i>
          </div>
          <h5>Digital Marketing</h5>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            br odio obcaecati tempora veniam labore iusto ea voluptatem
            molestiae rem aliquid. Unde nesciunt quod eum, fugit placeat debitis
            aliquam. Fugiat, ea.
          </p>
        </div>
      </div>
    </Services>
  );
};

export default SectionServices;
