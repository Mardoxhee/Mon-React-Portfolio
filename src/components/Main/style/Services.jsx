import styled from "styled-components";

const Services = styled.section`
  width: 100%;
  background-color: #0c0f16;
  height: 600px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: content;
  align-items: content;

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

  .slide__contenair {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide__Item {
    padding: 40px;
    width: 350px;
    height: 299px;
    background-color: #151921;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: solid 2px #151921;
    transform: rotateX(0deg);

    &:hover {
      cursor: pointer;
      border-bottom: solid 2px #f55422;
      transition: all 500ms ease;
    }
    &:hover div {
      background-color: #f55422;
      color: white;

      transform: rotate(45deg) !important;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f55422;
      border-radius: 10px;
      padding: 10px;
      background: rgba(200, 200, 200, 0.07);
      width: 50px;
      height: 50px;
      transform: translate(0);
      font-size: 1.5rem;
      font-weight: 100;
      transition: transform 800ms ease;
    }
    h5 {
      margin: 15px;
      color: #fff;
      font-family: "Rubik", sans-serif;
    }
    p {
      color: #a5a6a7;
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;
export default Services;
