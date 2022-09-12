import styled from "styled-components";
import { darkTheme } from "../../global-styles/colors";
import fonts from "../../global-styles/fonts";

export const MainStyles = styled.div`
  min-height: 100vh;
  background: ${darkTheme.primary};
  .button {
    border: 1px solid white;
    padding: 2vh 5%;
    border-radius: 10px;
    color: white;
    margin-left: 3%;
    font-family: ${fonts.text};
    transition: 0.3s;
    &:hover {
      background: white;
      color: black;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .navbar {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin: 0 2%;
    align-items: center;
    .logo {
      height: 20vh;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        margin-right: 1.5%;
      }
      h2 {
        font-family: ${fonts.title};
        font-weight: 600;
        font-size: 2em;
      }
    }
  }
  @media screen and (max-width: 650px) {
    .buttons {
      display: none;
    }
    .navbar {
      .logo h2 {
        font-size: 1.5em;
      }
      .logo img {
        width: 25px;
      }
    }
  }
  .banner {
    height: 60vh;
    margin: 0 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-bottom: 4vh;
      font-family: ${fonts.title};
      font-weight: 600;
      font-size: 3rem;
      color: white;
    }
    p {
      font-size: 1rem;
      font-family: ${fonts.text};
    }
    .btns {
      display: none;
      margin-top: 8vh;
      width: 100%;
    }
    @media screen and (max-width: 650px) {
      margin: 0 5%;
      .btns {
        display: block;
      }
      h2 {
        font-size: 2.3rem;
      }
      P {
        font-size: 0.8rem;
      }
    }
  }
`;
