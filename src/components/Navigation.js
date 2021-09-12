import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/logo.svg";

function Navigation() {
  return (
    <div>
      <NavigationStyled>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <PrimaryButton name={"SIGN UP"} />
      </NavigationStyled>
    </div>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  .logo {
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
`;
export default Navigation;
