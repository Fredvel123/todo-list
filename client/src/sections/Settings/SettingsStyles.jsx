import styled from "styled-components";

export const SettingsStyles = styled.div`
  overflow-y: scroll;
  .profile {
    margin-top: 2vh;
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
    h2 {
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
  @media screen and (max-width: 750px) {
    .profile {
      grid-template-columns: 30% 35% 35%;
    }
  }
`;
