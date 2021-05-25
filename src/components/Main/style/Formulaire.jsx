import styled from "styled-components";

const Form = styled.section`
  height: auto;
  width: 100%;
  background-color: #0c0f16;
  display: flex;
  flex-direction: column;
  padding: 80px;
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
  form {
    width: 950px;
    height: auto;
  }

  .input--wrap {
    margin-top: 100px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 48%;

      background: transparent;
      border: none;
      border-bottom: 1px solid #646363;
      color: #fff;
      &::placeholder {
        font-size: 0.8rem;
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid #f55422;
        transition: all 500ms ease;
      }
    }
  }

  .input--mail {
    margin: 20px 0px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #646363;
    color: #fff;
    width: 100%;
    &::placeholder {
      font-size: 0.8rem;
    }
    &:focus {
      outline: none;
      border-bottom: 1px solid #f55422;
      transition: all 500ms ease;
    }
  }
  textarea {
    margin-top: 30px;
    background: transparent;
    border: 1px solid #646363;
    width: 100%;
    &::placeholder {
      font-size: 0.8rem;
    }
    &:focus {
      border: 1px solid #f55422;
      transition: all 500ms ease;
      outline: none;
    }
  }
  button {
    margin: 30px;
    border: solid 2px #f55422;
    border-radius: 15px;
    background: transparent;
    padding: 10px 15px;
    color: white;
    &:hover {
      background-color: #f55422;
      transition: all 500ms ease;
    }
  }
`;

export default Form;
