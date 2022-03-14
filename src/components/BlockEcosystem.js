import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import background5 from "../assets/images/background/bg-5.png";
import main from "../assets/images/mockup/diverse/main.png";
import mainMb from "../assets/images/mockup/diverse/main-mb.png";
import styled from "styled-components";
import EcoItemExpand from "./EcoItemExpand";

const EcoSys = styled.div`
  height: 800px;
  background-image: url(${background5});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  h1 {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: 10px;
    color: #fff;
    padding: 30px 0 50px;
    transform: scale(0);
    transition: all 1.5s;
    &.animation {
      transform: scale(1);
    }
    @media (max-width: 1000px) {
      & {
        font-size: 4.5vw;
      }
    }
  }
  .diverse {
    position: relative;
    margin-top: 50px;
    max-width: 400px;
    object-fit: contain;
    width: 35%;
    img {
      width: 100%;
      height: 100%;
    }
    .img-main-contain {
      position: absolute;
      width: 63%;
      left: 18%;
      top: 25%;
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
`;

function BlockEcosystem(props) {
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
    <EcoSys ref={thisRef}>
      <h1 className={`${isAt ? "animation" : ""}`}>ĐA DẠNG HỆ SINH THÁI</h1>
      <div className="diverse">
        <img
          className={`img-core ${isAt ? "animation" : ""}`}
          src={main}
          alt=""
        />
        <div className="img-main-contain">
          <img src={mainMb} alt="" className="img-main" />
        </div>
        <EcoItemExpand isAt={isAt} img={1} sideLeft={true} top={`-12%`} />
        <EcoItemExpand isAt={isAt} img={2} sideLeft={true} top={`20%`} />
        <EcoItemExpand isAt={isAt} img={3} sideLeft={true} top={`53%`} />
        <EcoItemExpand isAt={isAt} img={4} sideLeft={true} top={`85%`} />
        <EcoItemExpand isAt={isAt} img={1} sideRight={true} top={`-12%`} />
        <EcoItemExpand isAt={isAt} img={2} sideRight={true} top={`20%`} />
        <EcoItemExpand isAt={isAt} img={3} sideRight={true} top={`53%`} />
        <EcoItemExpand isAt={isAt} img={4} sideRight={true} top={`85%`} />
      </div>
    </EcoSys>
  );
}

export default BlockEcosystem;
