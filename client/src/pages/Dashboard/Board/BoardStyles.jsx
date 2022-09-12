import styled from "styled-components";

export const BoardStyles = styled.div`
  background: red;
  @media screen and (max-width: 575px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    margin-left: ${({ state }) => (!state ? "0px" : "15%")};
    transition: 0.3s ease;
    border-radius: ${({ state }) => (state ? "15px" : "0")};
  }
`;
