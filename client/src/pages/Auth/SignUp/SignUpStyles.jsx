import styled from "styled-components";

export const SignUpStyles = styled.div`
  color: ${({ color }) => color.titles};
  .form__button {
    margin-top: 2vh;
    width: 45px;
    cursor: pointer;
    background: ${({ color }) => color.button};
    color: black;
    border: none;
  }
  .form__message {
    font-family: ${({ font }) => font.text};
  }
`;
