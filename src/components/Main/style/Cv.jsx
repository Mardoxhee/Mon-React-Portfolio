import styled from "styled-components";

const Cv = styled.section`
  background-color: #11141b;
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;

  .main--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
    justify-content: center;
    align-items: center;
  }
  .sides {
    padding: 30px 30px 40px;
    background-color: #0c0f16;
    border-radius: 5px;
    display: flex;

    width: 570px;
    height: 629px;
    margin: 60px 15px;
  }
  .box--wrapper {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  .icone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    font-size: 0.6rem;
    color: #f55422;
    .vertical {
      margin-top: 5px;
      height: 140px;
      width: 1px;
      background-color: #f55422;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    h5 {
      margin: 0;
      font-family: "Rubik", sans-serif;
      font-weight: normal;
      color: #ffffff;
      line-height: 1.3;
      font-size: 18px;
      margin-bottom: 8px;
    }
    small {
      color: #fff;
      background-color: #f55422;
      padding: 5px 12px;
      width: auto;
      margin: 10px;
    }
    p {
      margin: 10px 0px;
    }
  }
  .move {
    margin-top: 20px;
  }
  .move--double {
    margin-top: 13px;
  }
  p {
    font-size: 14px;
    color: #c5c5c5;
    line-height: 24px;
    font-family: "Rubik", sans-serif;
  }
`;

export default Cv;
