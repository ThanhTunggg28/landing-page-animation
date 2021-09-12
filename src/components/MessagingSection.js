import React from "react";
import { InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import avatar1 from "../img/avatar1.svg";
import avatar2 from "../img/avatar2.svg";
import avatar3 from "../img/avatar3.svg";
import avatar4 from "../img/avatar4.svg";
import avatar5 from "../img/avatar5.svg";
import conversation from "../img/conversation.svg";
import circleBg from "../img/circleBg.svg";

function MessagingSection() {
  return (
    <MessagingSectionStyled>
      <InnerLayout>
        <div className="message-con">
          <div className="left-item">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="text">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit
              Fugiat Consequuntur Repellendus Aperiam Deserunt Nihil, Corporis
              Fugit Voluptatibus Voluptate Totam Neque
            </p>
            <div className="image-con">
              <img src={avatar1} alt="" className="img-1" />
              <img src={avatar2} alt="" className="img-2" />
              <img src={avatar3} alt="" className="img-3" />
              <img src={avatar4} alt="" className="img-4" />
              <img src={avatar5} alt="" className="img-5" />
              <p>&nbsp; +25 </p>
            </div>
            <img src={circleBg} alt="" className="circleBg0" />
          </div>
          <div className="right-item">
            <img src={conversation} alt="" className="conversation" />
            <img src={circleBg} alt="" className="circleBg1" />
          </div>
        </div>
      </InnerLayout>
    </MessagingSectionStyled>
  );
}
const MessagingSectionStyled = styled.section`
  .message-con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .left-item {
    position: relative;
    .text {
      padding: 1rem 0;
    }
    padding-right: 2rem;
    .image-con {
      display: flex;
      align-items: center;

      .img-2,
      .img-3,
      .img-4,
      .img-5 {
        margin-left: -15px;
      }
    }
    .circleBg0 {
      position: absolute;
      top: -6%;
      left: -6%;
      z-index: -1;
    }
  }
  .right-item {
    position: relative;
    .conversation {
      padding-left: 2rem;
    }
    .circleBg1 {
      position: absolute;
      bottom: -5%;
      right: 10%;
      z-index: -1;
    }
  }
`;

export default MessagingSection;
