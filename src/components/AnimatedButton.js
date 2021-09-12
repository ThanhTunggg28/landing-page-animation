import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";
import blobtop from "../img/blob_top.svg";
import blobbottom from "../img/blob_bottom.svg";

function AnimatedButton({ name }) {
  return (
    <AnimatedButtonStyled>
      {name}
      <img src={arrow} alt="" className="arrow" />
      <img src={blobtop} alt="" className="blobtop" />
      <img src={blobbottom} alt="" className="blobbottom" />
    </AnimatedButtonStyled>
  );
}

const AnimatedButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .arrow {
    padding-left: 0.5rem;
  }
  .blobtop,
  .blobbottom {
    position: absolute;
    pointer-events: none;
  }
  .blobtop {
    top: 0;
    right: 0;
  }
  .blobbottom {
    bottom: 0;
    left: 0;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    color: var(--accent-pink);
    .blob1 {
      transition: all 0.3s ease-in-out;
      transform: translateX(-100px);
    }
    .blob2 {
      transition: all 0.3s ease-in-out;
      transform: translateX(140px);
    }

    .arrow {
      padding-left: 1.4rem;
      transition: all 0.3s ease-in-out;
    }
  }
`;
export default AnimatedButton;
