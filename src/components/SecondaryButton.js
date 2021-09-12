import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

function SecondaryButton({ name }) {
  return (
    <SecondaryButtonStyled>
      {name}
      <img src={arrow} alt="" />
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.7rem 1.5rem;
  border-radius: 1rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  img {
    padding-left: 0.5rem;
  }
`;

export default SecondaryButton;
