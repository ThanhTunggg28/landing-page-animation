import React from "react";
import styled from "styled-components";

function Card({
  account,
  amount,
  text,
  button,
  card,
  active,
  inactive,
  check,
  checkdisable,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <CardStyled>
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">
        {amount}
        <span>/m</span>
      </h4>
      <p className="c-para">{text}</p>
      <div className="button-con">
        <button>{button}</button>
      </div>
      <div className="card-img-con">
        <img src={card} alt="" />
      </div>
      <div className="plan-con">
        <img src={active} alt="" />
        <img src={inactive} alt="" />
      </div>
      <div className="list-con">
        <p className="text-check">
          <img src={check} alt="" />
          {text1}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text2}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text3}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text4}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text5}
        </p>
        <p className="text-check">
          <img src={checkdisable} alt="" />
          {text6}
        </p>
        <p className="text-check">
          <img src={checkdisable} alt="" />
          {text7}
        </p>
        <p className="text-check">
          <img src={checkdisable} alt="" />
          {text8}
        </p>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 30px;

  .card-title {
    font-size: 2.5rem;
    color: #000;
    text-align: center;
    padding: 1.5rem 0;
    span {
      font-size: 2rem;
    }
  }

  .button-con {
    text-align: center;
    padding: 1.5rem 0;
    button {
      border: 2px solid #16194f;
      padding: 0.8rem 1.8rem;
      outline: none;
      cursor: pointer;
      background: transparent;
      border-radius: 20px;
      font-size: inherit;
      color: #16194f;
    }
  }
  .card-img-con {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  .plan-con {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      padding: 0 0.3rem;
    }
  }
  .text-check {
    display: flex;
    align-items: center;
    padding: 0.7rem 0;
    img {
      padding: 0 0.3rem;
      width: 1.8rem;
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      color: #b7b7b7;
    }
  }
`;

export default Card;
