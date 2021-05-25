import styled from "styled-components";

const Skills = styled.section`
  background-color: #11141b;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;

  h2 {
    left: 0;
    right: 0;
    margin: 0 auto;
    position: relative;
    font-weight: 500;
    padding-bottom: 20px;
    font-size: 40px;
    line-height: 1.3;
    text-transform: capitalize;
    color: #fff;
    font-family: "Rubik", sans-serif;
    &::after {
      background-image: -webkit-linear-gradient(
        left,
        rgba(0, 0, 0, 0),
        rgb(165, 165, 165),
        rgba(0, 0, 0, 0)
      );
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      width: 100%;
      content: "";
      bottom: 0px;
      max-width: 300px;
      margin: 0 auto;
    }
  }

  .main--wrapper {
    display: flex;
    margin: 40px;
  }
  .leftcol,
  .rightcol {
    margin: 0px 15px;
    h5 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 5px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
  }

  .basic--div {
    width: 486px;
    height: 4px;
    background-color: #eee;
  }
  .level--div {
    width: 90%;
    height: 100%;
    background-color: #f55422;
  }
  .premierepro {
    width: 80%;
    height: 100%;
    background-color: #f55422;
  }

  .illustrator {
    width: 60%;
    height: 100%;
    background-color: #f55422;
  }

  .html {
    width: 89%;
    height: 100%;
    background-color: #f55422;
  }
  .react {
    width: 70%;
    height: 100%;
    background-color: #f55422;
  }

  .node {
    width: 50%;
    height: 100%;
    background-color: #f55422;
  }
`;
export default Skills;
