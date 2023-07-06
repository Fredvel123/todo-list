import styled from "styled-components";

export const CardTaskStyled = styled.div`
  columns: 2 280px;
  column-gap: 1rem;
  .card {
    position: relative;
    display: inline-block;
    align-items: center;
    padding: 2vh 2%;
    border-radius: 10px;
    width: 96%;
    min-width: 35%;
    min-height: 30vh;
    margin-bottom: 1rem;
    background: ${({ color }) => color.secondary};
    h2 {
      font-family: ${({ font }) => font.title};
      margin-bottom: 2vh;
    }
    p {
      font-family: ${({ font }) => font.text};
    }
  }
  .card__trash {
    margin-left: 10%;
    width: 25px;
  }
  .complete {
    width: 25px;
  }
  .uncomplete {
    border: 2px solid white;
    border-radius: 50px;
    width: 21px;
    height: 21px;
  }
  .icon {
    cursor: pointer;
  }
  .buttons {
    padding: 1vh 1vh;
    display: flex;
    position: absolute;
    bottom: 2vh;
    right: 2vh;
  }
`;
