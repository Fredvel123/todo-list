import styled from "styled-components";

// export const AuthStyles = styled.div``;

export const AuthStyles = styled.div`
  color: ${({ color }) => color.titles};
  height: 100vh;
  background: ${({ color }) => color.primary};
  display: grid;
  grid-template-columns: 45% 55%;

  .banner {
    background: ${({ color }) => color.button};
    display: flex;
    justify-content: center;
    align-items: center;
    .banner__img {
      width: 90%;
    }
    .banner__logo {
      position: absolute;
      top: 2%;
      left: 1%;
    }
  }

  .form__navigator {
    font-family: ${({ font }) => font.title};
    width: auto;
    cursor: pointer;
    text-align: center;
  }
  /* .true {
    border-bottom: 1px solid
      ${({ state, color }) => (state ? color.button : "transparent")};
    transition: 0.3s;
  }
  .false {
    transition: 0.3s;
    border-bottom: 1px solid
      ${({ state, color }) => (!state ? color.button : "transparent")};
  } */
  .form {
    padding: 0vh 10%;
    .form__header {
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 3vh;
    }
  }

  .form__letter {
    margin: 0 3%;
  }
  @media screen and (max-width: 750px) {
    height: auto;
    grid-template-columns: 100%;
    grid-template-rows: auto 100vh;
    .banner {
      height: 20vh;
      /* img {
        height: 100%;
      } */
      margin-bottom: 5vh;
    }
    .sign {
      padding: 0 5%;
    }
    .form__header {
      height: auto;
      width: 100%;
    }
    .form__navigator {
      width: auto;
    }
  }
`;
