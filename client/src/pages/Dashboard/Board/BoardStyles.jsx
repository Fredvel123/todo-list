import styled from "styled-components";

export const BoardStyles = styled.div`
  background: ${({ color }) => color.primary};
  color: ${({ color }) => color.titles};
  padding: 0 0;
  transition: 0.3s;
  z-index: 100 !important;
  .head {
    /* border-left: 1px solid gray; */
    padding: 0 5%;
    background: ${({ color }) => color.secondary};
    display: flex;
    align-items: center;
    height: 15vh;
    .head__menu {
      width: 25px;
      display: none;
    }
  }
  .content {
    padding: 3vh 5%;
  }
  @media screen and (max-width: 575px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    /* transform: translateX(15%); */
    transform: ${({ state }) => (state ? "translateX(15%)" : "translateX(0)")};
    transition: 0.3s ease;
    /* border-radius: ${({ state }) => (state ? "15px" : "0")}; */
    .head .head__menu {
      display: block;
    }
  }
`;
