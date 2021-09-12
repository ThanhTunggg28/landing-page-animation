import React from "react";
import styled from "styled-components";
import ChartStar from "./ChartStar";
import { InnerLayout } from "../styles/Layouts";
import chart from "../img/chart.svg";
import AnimatedButton from "./AnimatedButton";

function ChartSection() {
  return (
    <ChartSectionStyled>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="star">
              <div className="star-money">
                <ChartStar name={"Balance"} amount={"$250"} />
                <ChartStar name={"Last Transaction"} amount={"$1000"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
              Manage your finances like a pro in no time
            </h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit
              Fugiat Consequuntur Repellendus Aperiam Deserunt Nihil, Corporis
              Fugit Voluptatibus Voluptate Totam Neque
            </p>
            <AnimatedButton name={"Learn More"} />
          </div>
        </div>
      </InnerLayout>
    </ChartSectionStyled>
  );
}

const ChartSectionStyled = styled.section`
  .chart-con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .chart-left {
      width: 80%;
      .star {
        .star-money {
          display: flex;
          justify-content: space-between;
          box-shadow: 0 25px 50px rgba(22 25 79 0.05);
        }
        img {
          box-shadow: 0 25px 50px rgba(22 25 79 0.05);
          padding-top: 1rem;
          width: 100%;
        }
      }
    }
    .chart-right {
      padding-left: 2rem;
      p {
        padding: 1.3rem 0;
      }
    }
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ChartSection;
