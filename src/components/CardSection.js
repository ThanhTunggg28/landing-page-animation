import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One card for all your payments
            </h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit
              Fugiat Consequuntur Repellendus Aperiam Deserunt Nihil, Corporis
              Fugit Voluptatibus Voluptate Totam Neque
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .card-left {
      p {
        padding: 1rem 0;
      }
    }
    .card-right {
      display: flex;
      justify-content: flex-end;
    }
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default CardSection;
