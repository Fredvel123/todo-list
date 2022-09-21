import styled from "styled-components";

export const SettingsStyles = styled.div`
  h2 {
    font-family: ${({ font }) => font.title};
  }
  .settings__button {
    background: ${({ color }) => color.button};
    border: none;
    border-radius: 5px;
    padding: 1vh 2%;
  }
  .profile {
    margin: 4vh 0;
    height: 20vh;
    display: grid;
    grid-template-columns: 15% 25% 25%;
    grid-template-rows: 10vh 10vh;
    grid-template-areas:
      "avatar name name "
      "avatar info info ";
    align-items: center;
    .profile__icon {
      width: 25px;
    }
    .profile__img {
      width: 125px;
      height: 125px;
      object-fit: cover;
      border-radius: 100px;
      grid-area: avatar;
      transition: 0.2s;
      &:hover {
        border-radius: 0;
      }
    }
    p {
      grid-area: name;
    }
    .profile__input {
      label {
        cursor: pointer;
        padding: 2vh 2%;
        &:hover {
          color: gray;
        }
      }
      input {
        display: none;
      }
    }
    .profile__button {
      grid-area: info;
    }
  }
  @media screen and (max-width: 950px) {
    .profile {
      grid-template-columns: 25% 15% 15%;
    }
  }
  .delete-user {
    margin-top: 5vh;
  }
  @media screen and (max-width: 750px) {
    .profile {
      grid-template-columns: 30% 35% 35%;
    }
  }
  @media screen and (max-width: 575px) {
    .profile {
      img {
        margin-bottom: 2vh;
      }
      display: block;
      margin-bottom: 9vh;
    }
  }
`;
