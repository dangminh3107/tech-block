import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import background6 from "../assets/images/background/bg-6.png";
import main from "../assets/images/mockup/farming/main.png";
import mainMb from "../assets/images/mockup/farming/main-mb.png";
import FarmItem from "./FarmItem";

const BlockFarm = styled.div`
  height: 750px;
  background-image: url(${background6});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  align-items: center;
  overflow: hidden;
  h1 {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: 10px;
    color: #003091;
    padding: 100px 0 50px;
    transition: all 1s linear;
    transform: translateX(100%);
    opacity: 0;
    &.animation{
      opacity: 1;
      transform: translateX(0);
    }
    @media (max-width: 1000px) {
      & {
        font-size: 5vw;
      }
    }
  }
  .farming-net {
    position: relative;
    margin-top: 50px;
    max-width: 400px;
    object-fit: contain;
    img {
      width: 100%;
      height: 100%;
    }
    .img-main-contain {
      position: absolute;
      width: 53%;
      left: 25%;
      top: 19%;
      overflow: hidden;
      border-radius: 5px;
      .img-main {
        width: 100%;
        object-fit: contain;
      }
    }

    .img-core {
      transform: scale(0);
      transition: all 1s;
      &.animation {
        transform: scale(1);
      }
    }
  }
  @media (max-width: 680px) {
    height: 600px;
  }
  @media (max-width: 1100px) {
    background-size: cover;
  }
  @media all and (max-width: 1000px) {
    .farming-net {
      width: 40%;
    }
  }
`;

function BlockFarming(props) {
  const [isAt, setIsAt] = useState(false);
  const thisRef = useRef();

  useEffect(() => {
    let body = document.body.getBoundingClientRect();
    let posYThisBLock = Math.floor(
      thisRef.current.getBoundingClientRect().top -
        body.top -
        thisRef.current.getBoundingClientRect().height / 2
    );
    if (props.pos >= posYThisBLock) setIsAt(true);
    else setIsAt(false);
  }, [props.pos]);

  return (
    <BlockFarm ref={thisRef}>
      <h1 className={`${isAt ? "animation" : ""}`}>TÍNH NĂNG FARMING</h1>
      <div className="farming-net">
        <img
          className={`img-core ${isAt ? "animation" : ""}`}
          src={main}
          alt=""
        />
        <div className="img-main-contain">
          <img src={mainMb} alt="" className="img-main" />
        </div>
        <FarmItem isAt={isAt} num={1} sideLeft={true} top={"-2%"} />
        <FarmItem isAt={isAt} num={2} sideLeft={true} top={"36%"} />
        <FarmItem isAt={isAt} num={3} sideLeft={true} top={"74%"} />
        <FarmItem isAt={isAt} num={1} sideRight={true} top={"-2%"} />
        <FarmItem isAt={isAt} num={2} sideRight={true} top={"36%"} />
        <FarmItem isAt={isAt} num={3} sideRight={true} top={"74%"} />
      </div>
    </BlockFarm>
  );
}

export default BlockFarming;
