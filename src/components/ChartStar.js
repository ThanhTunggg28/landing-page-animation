import React from "react";
import styled from "styled-components";

function ChartStar({ name, amount }) {
  return (
    <ChartStarStyled>
      <p>{name}</p>
      <h4>{amount}</h4>
    </ChartStarStyled>
  );
}

const ChartStarStyled = styled.div`
  background-color: #fff;
  border-radius: 50px;
  height: 10rem;
  padding: 2rem;
  border: 1px solid #d0dbf3;
  h4 {
    font-size: 3rem;
    color: var(--purple-primary);
  }
  p {
    color: #000;
  }
`;

export default ChartStar;
