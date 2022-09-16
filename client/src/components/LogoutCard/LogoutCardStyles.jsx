import styled from "styled-components";

export const LogoutCardStyles = styled.div`
  background: ${({ color }) => color.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  z-index: 500 !important;
  bottom: 10vh;
  right: 10vh;
  width: 20%;
  min-height: 25vh;
  padding: 2vh 5%;
  color: ${({ color }) => color.titles};
  transition: 0.3s;
  transform: ${({ active }) =>
    active ? "translateX(0%)" : "translateX(150%)"};
  h2 {
    font-family: ${({ font }) => font.title};
    font-size: 20px;
  }
  button {
    cursor: pointer;
    transition: 0.3s;
    padding: 1vh 0;
    border: 1px solid transparent;
    /* background: ${({ color }) => color.success}; */
    background: #6de0cc;
    &:hover {
      color: ${({ color }) => color.titles};
      background: ${({ color }) => color.primary};
      border: 1px solid ${({ color }) => color.titles};
    }
  }
  .card__close {
    cursor: pointer;
    width: 25px;
    position: absolute;
    top: 5%;
    right: 5%;
  }
  @media screen and (max-width: 900px) {
    width: 50%;
  }
  @media screen and (max-width: 575px) {
    width: 80%;
    margin: 0 5%;
    bottom: 5vh;
    right: 0;
    transform: ${({ active }) =>
      active ? "translateX()" : "translateY(250%)"};
  }
`;
