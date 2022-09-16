import styled from "styled-components";

export const CardNotificationStyles = styled.div`
  background: ${({ color }) => color.secondary};
  position: absolute;
  width: 20%;
  min-height: 20vh;
  bottom: 10vh;
  right: 10vh;
  padding: 3vh 3%;
  .close {
    cursor: pointer;
    width: 20px;
    top: 5%;
    right: 5%;
    position: absolute;
  }
  transform: ${({ active }) =>
    active ? "translateX(0%)" : "translateX(150%)"};
`;
