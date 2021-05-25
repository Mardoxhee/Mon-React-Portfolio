import styled from "styled-components";

const Foot = styled.footer`
  background-color: #0e0707;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social__media--wrapper {
    width: 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    color: #fff;
    margin: 20px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  p {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #c5c5c5;
    line-height: 24px;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    color: #fff;
    margin-top: 20px;
  }
`;

export default Foot;
