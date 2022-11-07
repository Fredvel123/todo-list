import styled from "styled-components";

export const ForgottenPasswordStyles = styled.div`
  background: ${({ color }) => color.primary};
  min-height: 100vh;
  padding: 5vh 5%;
  form {
    margin-top: 5vh;
  }
  .content {
    padding: 0 10vh;
    padding-top: 5vh;
  }
  @media screen and (max-width: 600px) {
    .content {
      padding: 5vh 0;
    }
  }
`;
