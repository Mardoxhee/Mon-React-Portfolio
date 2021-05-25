import React from "react";
import Skills from "./style/Skills";

const SectionSkills = () => {
  return (
    <Skills>
      <h2>My Skills</h2>
      <div className="main--wrapper">
        <div className="leftcol">
          <h5>
            Photoshop <span>90%</span>
          </h5>
          <div className="basic--div">
            <div className="level--div"></div>
          </div>
          <h5>
            UI/UX Design<span>89%</span>
          </h5>
          <div className="basic--div">
            <div className="html"></div>
          </div>
          <h5>
            Illustrator <span>60%</span>
          </h5>
          <div className="basic--div">
            <div className="illustrator"></div>
          </div>
          <h5>
            Premiere Pro <span>80%</span>
          </h5>
          <div className="basic--div">
            <div className="premierepro"></div>
          </div>
        </div>
        <div className="rightcol">
          <h5>
            HTML & CSS <span>89%</span>
          </h5>
          <div className="basic--div">
            <div className="html"></div>
          </div>

          <h5>
            React JS <span>70%</span>
          </h5>
          <div className="basic--div">
            <div className="react"></div>
          </div>
          <h5>
            Node <span>50%</span>
          </h5>
          <div className="basic--div">
            <div className="node"></div>
          </div>
          <h5>
            Marketing Digital <span>90%</span>
          </h5>
          <div className="basic--div">
            <div className="html"></div>
          </div>
        </div>
      </div>
    </Skills>
  );
};

export default SectionSkills;
