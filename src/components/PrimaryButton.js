import React from "react";
import styled from "styled-components";

function PrimaryButton({ name }) {
  return <ButtonStyled>{name}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: var(--accent-pink);
  padding: 0.7rem 2rem;
  border-radius: 1rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default PrimaryButton;
