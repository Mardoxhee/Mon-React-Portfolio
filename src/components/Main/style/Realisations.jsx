import styled from "styled-components";

const Realisation = styled.section`
  padding: 80px;
  background-color: #0c0f16;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  .button__categories--contenair {
    display: flex;
    margin: 50px 0px;
    button {
      font-size: 14px;
      line-height: 15px;
      cursor: pointer;
      font-weight: 400;
      letter-spacing: 0.5px;
      text-transform: capitalize;
      margin: 0px 30px;
      border: none;
      background: #2b2b2b;
      color: #fff;
      border-radius: 20px;
      padding: 10px 20px;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: #f55422;
        transition: all 500ms ease;
      }
    }
  }
  .projets--wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    margin: 20px;
    width: 350px;
    height: 410px;
    div {
      height: 30%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #0c202c;
      color: #fff;
    }
    img {
      width: 100%;
      height: 70%;
    }
    h4 {
      font-size: 1.5rem;
      color: #fff;
    }
  }
`;

export default Realisation;
