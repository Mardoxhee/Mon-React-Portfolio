import React from "react";
import Cv from "./style/Cv";

const SectionCv = () => {
  return (
    <div className="main--wrapper">
      <Cv>
        <h2>Work & Education</h2>
        <div className="wrapper">
          <div className="sides">
            <div className="icone--wrapper">
              <div className="icone">
                <i class="fas fa-circle"></i>
                <div className=" vertical"></div>
              </div>
              <div className="icone">
                <i class="fas fa-circle"></i>
                <div className=" vertical"></div>
              </div>
              <div className="icone">
                <i class="fas fa-circle"></i>
                <div className=" vertical"></div>
              </div>
            </div>
            <div className="box--wrapper">
              <div className="box">
                <div>
                  <h5>Full Stack Web Dev</h5>
                  <small>2021</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio molestiae est at animi harum praesentium asperiores
                    illum aliquam minima inventore, molestias cupiditate
                    ratione? Ullam quos eos ad nostrum animi quam.
                  </p>
                </div>
              </div>

              <div className="box move">
                <div>
                  <h5>Front end Developper</h5>
                  <small>2020</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio molestiae est at animi harum praesentium asperiores
                    illum aliquam minima inventore, molestias cupiditate
                    ratione? Ullam quos eos ad nostrum animi quam.
                  </p>
                </div>
              </div>

              <div className="box  move--double">
                <div>
                  <h5>Web Designer</h5>
                  <small>2018</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio molestiae est at animi harum praesentium asperiores
                    illum aliquam minima inventore, molestias cupiditate
                    ratione? Ullam quos eos ad nostrum animi quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sides">
            <div className="icone--wrapper">
              <div className="icone">
                <i class="fas fa-circle"></i>
                <div className=" vertical"></div>
              </div>
              <div className="icone">
                <i class="fas fa-circle"></i>
                <div className=" vertical"></div>
              </div>
              <div className="icone">
                <i class="fas fa-circle"></i>
                <div className=" vertical"></div>
              </div>
            </div>
            <div className="box--wrapper">
              <div className="box">
                <div>
                  <h5>Simplon Certification</h5>
                  <small>2021</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio molestiae est at animi harum praesentium asperiores
                    illum aliquam minima inventore, molestias cupiditate
                    ratione? Ullam quos eos ad nostrum animi quam.
                  </p>
                </div>
              </div>

              <div className="box  move">
                <div>
                  <h5>UI/UX Design Certification</h5>
                  <small>2020</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio molestiae est at animi harum praesentium asperiores
                    illum aliquam minima inventore, molestias cupiditate
                    ratione? Ullam quos eos ad nostrum animi quam.
                  </p>
                </div>
              </div>

              <div className="box  move--double">
                <div>
                  <h5>Bachelor’s Degree</h5>
                  <small>2018</small>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio molestiae est at animi harum praesentium asperiores
                    illum aliquam minima inventore, molestias cupiditate
                    ratione? Ullam quos eos ad nostrum animi quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Cv>
    </div>
  );
};

export default SectionCv;
