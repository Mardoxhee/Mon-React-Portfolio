import styled from "styled-components";

const Avis = styled.section`
  width: 100%;
  height: auto;
  background-color: #11141b;
  display: flex;
  flex-direction: column;
  padding: 80px;
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
  .avis--wrapper {
    margin: 40px 0;
    display: flex;
    justify-content: center;
  }
  .avisman {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 15px;
      margin-bottom: 15px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: solid 2px #f55422;
    }
    p {
      text-align: center;
      color: #fff;
      font-weight: 100;
    }
    h6 {
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-weight: bold;
    }
  }
`;
export default Avis;
