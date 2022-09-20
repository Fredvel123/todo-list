import styled from "styled-components";

export const SettingsStyles = styled.div`
  /* background: red; */
  .profile {
    /* display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 5vh 5vh;
    grid-template-areas:
      "avatar name name name"
      "avatar info info info"; */
    background: green;
    .profile__img {
      width: 125px;
      height: 125px;
      object-fit: cover;
      border-radius: 100px;
      grid-area: avatar;
    }
    h2 {
      grid-area: name;
    }
    .profile__button {
      grid-area: info;
    }
  }
`;
