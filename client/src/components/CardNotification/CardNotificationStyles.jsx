import styled from "styled-components";

export const CardNotificationStyles = styled.div`
  background: ${({ color }) => color.secondary};
  position: absolute;
  width: 20%;
  height: auto;
  min-height: 20vh;
  bottom: 10vh;
  right: 5vh;
  padding: 3vh 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  p {
    font-size: 17px;
    font-family: ${({ font }) => font.text};
    font-weight: 600;
  }
  button {
    cursor: pointer;
    width: 100%;
    padding: 0.7vh 0;
    border: none;
    background: ${({ color }) => color.success};
    color: ${({ color }) => color.titles};
  }
  .close {
    cursor: pointer;
    width: 20px;
    top: 10%;
    right: 5%;
    position: absolute;
  }
  transition: 0.3s ease;
  transform: ${({ active }) =>
    active ? "translateX(0%)" : "translateX(150%)"};

  @media screen and (max-width: 950px) {
    width: 60%;
  }
  @media screen and (max-width: 750px) {
    width: 85%;
    bottom: 5vh;
    right: 5%;
  }
`;
