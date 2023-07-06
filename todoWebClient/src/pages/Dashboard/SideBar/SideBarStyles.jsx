import styled from "styled-components";

export const SideBarStyles = styled.div`
  position: fixed;
  width: 7vw;
  background: ${({ color }) => color.third};
  color: ${({ color }) => color.titles};
  transition: 0.3s;
  height: 100vh;
  .header {
    width: 100%;
    height: 15vh;
    background: ${({ color }) => color.third};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
    }
  }
  .menu {
    height: 83vh;
    padding: 1vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .menu__cart {
    span {
      transition: 0s;
      font-size: 10px;
      display: none;
      position: absolute;
      padding: 0.5vh 0.5%;
      left: 0;
      border: 1px solid ${({ color }) => color.titles};
      background: ${({ color }) => color.primary};
    }
    &:hover {
      span {
        display: block;
      }
    }
  }
  .menu__icon {
    cursor: pointer;
    width: 30px;
    color: ${({ color }) => color.sidebar};
  }
  .menu__logout {
    width: 35%;
    /* background: ${({ color }) => color.button}; */
    background: #6de0cc;
    border-radius: 5px;
    color: black;
    /* filter: blur(0.5px); */
  }
  .menu__avatar {
    border-radius: 20px;
    border: 1px solid white;
    width: 34px;
    height: 35px;
    object-fit: cover;
  }
  @media screen and (max-width: 575px) {
    position: fixed;
    height: 100vh;
    width: 15%;
  }
`;
