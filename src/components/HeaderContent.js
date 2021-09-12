import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../img/phone.svg";
import ring from "../img/ring_orange.svg";
import mess1 from "../img/message_pink.svg";
import mess2 from "../img/message_blue.svg";
function HeaderContent() {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Smart banking for freelancers</h1>
          <p className="text-content">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit Fugiat
            Consequuntur Repellendus Aperiam Deserunt Nihil, Corporis Fugit
            Voluptatibus Voluptate Totam Neque
          </p>
          <SecondaryButton name={"Register Now"} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="" className="phone" />
        <img src={ring} alt="" className="ring" />
        <img src={mess1} alt="" className="mess1" />
        <img src={mess2} alt="" className="mess2" />
      </div>
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .text-content {
      padding: 1.4rem 0;
      line-height: 1.8rem;
      color: #fff;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .phone {
      width: 80%;
    }
    .ring {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: move2 20s infinite;
      transition: all 0.4s ease-in-out;
    }
    .mess1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
    }
    .mess2 {
      position: absolute;
      bottom: 15%;
      left: -3%;
      transition: all 0.4s ease-in-out;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.4s ease-in-out;
    }
  }
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

export default HeaderContent;
