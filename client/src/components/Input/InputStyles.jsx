import styled from "styled-components";

export const InputStyles = styled.div`
  /* background: green; */
  display: flex;
  flex-direction: column;
  margin-bottom: 3vh;
  color: ${({ color }) => color.titles};
  span {
    font-family: ${({ font }) => font.title};
  }
  input {
    color: ${({ color }) => color.titles};
    font-family: ${({ font }) => font.title};
    background: transparent;
    border: none;
    border-bottom: 0.4px solid ${({ color }) => color.titles};
    padding: 1.5vh 0;
    outline: none;
  }
`;
