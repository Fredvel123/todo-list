import styled from "styled-components";

export const DashboardStyles = styled.div`
  /* background: black; */
  display: grid;
  grid-template-columns: 7% 93%;
  height: 100vh;
  @media screen and (max-width: 900px) {
    grid-template-columns: 8% 92%;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 10% 90%;
  }
`;
