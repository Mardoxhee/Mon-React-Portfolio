import styled from "styled-components";

const About = styled.section`
  width: 100%;
  height: 700px;
  padding: 80px 0;
  background-color: #11141b;
  display: flex;
  flex-direction: column;

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

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;

    p {
      padding: 0;
      margin: 10px 0;
      font-size: 14px;
      color: #c5c5c5;
      line-height: 24px;
      font-family: "Rubik", sans-serif;
    }
    h3 {
      color: #fff;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 25px;
      font-weight: 700;
      line-height: 1.3;
      span {
        color: #ffc209;
        display: inline-block;
      }
    }

    h6 {
      margin: 10px 0 30px;
      color: #c3c3c3;
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
  }
  .img_contenair {
    border: 15px solid #fff;
    border-radius: 5px;
    height: 391px;
    width: 510px;
    background-color: #f9eff0;
    margin: 30px;
  }
  a {
    margin-top: 25px;
    position: relative;
    padding: 9px 15px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 15px;
    color: #fff !important;
    font-weight: 400;
    background: transparent;
    font-family: "Teko", sans-serif;
    cursor: pointer;

    &::after {
      content: "";
      width: 45%;
      height: 100%;
      background: rgba(255, 255, 255, 0.07);
      position: absolute;
      left: 0;
      top: 0;

      &::before {
        box-sizing: border-box;
      }
    }
    &:hover {
      text-decoration: none;
      transition: all 0.5s ease-in-out 0s;
    }
  }
`;
export default About;
