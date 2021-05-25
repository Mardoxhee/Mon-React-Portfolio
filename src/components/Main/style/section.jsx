import styled from "styled-components";
import back from "../bg.jpg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(1, 1, 1, 1) 0%,
      rgba(13, 7, 22, 0.13769257703081228) 100%
    ),
    url(${back});

  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 20%;
  .welcome {
    text-align: center;
  }
  span {
    font-family: "Rubik", sans-serif;
    line-height: 3rem;
    font-weight: 500;
    letter-spacing: 3px;
    width: 450px;
    margin: 10px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.7rem;
    &:hover {
      color: #f55422;
    }
  }
  button {
    color: white;
    background: #f55422;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 30px;
    border: #f55422 solid 2px;
    border-radius: 30px;
    padding: 8px 30px;
    &:focus {
      outline: none;
    }
    &:hover {
      transition: all 500ms ease;
      background: transparent;
    }
  }
  .indicator {
    transform: rotate(180deg) !important;
    margin-top: 100px;
    color: #f55422;
    font-size: 1.7rem;
    transition: all 800ms ease;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default Section;
