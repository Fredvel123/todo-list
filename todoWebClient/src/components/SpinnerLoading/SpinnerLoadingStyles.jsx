import styled from "styled-components";

export const SpinnerLoadingStyles = styled.div`
  img {
    width: 35px;
    animation: rotation 0.9s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
