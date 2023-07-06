import styled from "styled-components";

export const BoardStyles = styled.div`
  background: ${({ color }) => color.primary};
  position: absolute;
  width: 93vw;
  margin-left: 7vw;
  color: ${({ color }) => color.titles};
  padding: 0 0;
  transition: 0.3s;
  min-height: 100vh;
  z-index: 100 !important;
  .head {
    padding: 0 5%;
    display: none;
    .head__menu {
      width: 25px;
      display: none;
    }
  }
  .content {
    margin-top: 2vh;
    padding: 3vh 5%;
  }
  @media screen and (max-width: 575px) {
    margin-left: 0;
    width: ${({ state }) => (state ? "87vw" : "100vw")};
    overflow-x: hidden;
    min-height: 100vh;
    transform: ${({ state }) => (state ? "translateX(15%)" : "translateX(0)")};
    transition: 0.3s ease;
    .head {
      display: flex;
      height: 7vh;
      background: transparent;
    }
    .head .head__menu {
      cursor: pointer;
      display: block;
      position: fixed;
      top: 4vh;
      right: 5%;
    }
  }
`;
