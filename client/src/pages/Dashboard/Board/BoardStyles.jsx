import styled from "styled-components";

export const BoardStyles = styled.div`
  background: ${({ color }) => color.primary};
  color: ${({ color }) => color.titles};
  transition: 0.3s;

  @media screen and (max-width: 575px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    /* transform: translateX(15%); */
    transform: ${({ state }) => (state ? "translateX(15%)" : "translateX(0)")};
    transition: 0.3s ease;
    /* border-radius: ${({ state }) => (state ? "15px" : "0")}; */
  }
`;
