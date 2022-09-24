import styled from "styled-components";
import { darkTheme } from "../../global-styles/colors";

export const NotFoundPageStyles = styled.div`
  background: ${darkTheme.primary};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 45%;
  }
  button {
    cursor: pointer;
    margin-top: 4vh;
    background: ${darkTheme.button};
    border: none;
    padding: 3vh 5%;
    font-size: 18px;
    &:hover {
      background: ${darkTheme.success};
    }
  }
`;
