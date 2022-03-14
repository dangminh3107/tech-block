import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import background4 from "../assets/images/background/bg-4.png";
import youtubeImg from "../assets/images/mockup/ytb.png";
import styled from "styled-components";

const TrailerBlock = styled.div`
  background-image: url(${background4});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  .youtube {
    position: absolute;
    top: 55%;
    left: 14%;
    transform: translateY(-50%);
    z-index: 3;
    .img-ytb {
      max-width: 600px;
      object-fit: contain;
      transform: scale(0);
      transition: all 1s linear;
      &.animation {
        transform: scale(1);
        transform-origin: top left;
      }
    }

    span {
      right: -100%;
      top: 20%;
      position: absolute;
      font-size: 45px;
      line-height: 45px;
      letter-spacing: 2px;
      font-weight: bold;
      width: 600px;
      text-align: center;
      color: #003091;
      transform: translateX(-100%);
      transition: all 1s 1s linear;
      opacity: 0;
      &::after {
        content: "";
        width: 100%;
        position: absolute;
        height: 100px;
        background: rgba(192, 225, 255, 0.7);
        bottom: -5px;
        transform: translateY(100%);
        left: 0;
      }
      &.animation {
        animation: fade-right 1s ease-in-out forwards;
      }
      &.remove-animation {
        animation: fade-right-out 1s ease-in-out forwards;
      }
    }
  }
  .youtube::after {
    content: "";
    position: absolute;
    left: -80px;
    top: -60px;
    z-index: -1;
    width: 70%;
    height: 200px;
    background-color: #90caff;
    box-shadow: 15px 0 0 #c0e1ff;
    transform: scale(0);
    opacity: 0;
    transition: all 1s linear;
  }
  .youtube.animation::after {
    transform: scale(1);
    opacity: 1;
    transform-origin: bottom center;
  }
  @media all and (max-width: 1412px) {
    justify-content: center;
    background-size: cover;
    .youtube {
      span {
        top: -76px;
        left: -50%;
        width: 100%;
        transform: translateX(50%);
        &:after {
          display: none;
        }
        &.animation {
          animation: fade-R-trailer 1s ease-in-out forwards;
        }
        &.remove-animation {
          animation: fade-out-R-trailer 1s ease-in-out forwards;
        }
      }
      &:after {
        display: none;
      }
      .img-ytb {
        width: 100%;
      }
    }
  }
  @media all and (max-width: 840px) {
    .youtube {
      left: 0;
      display: flex;
      justify-content: center;
    }
  }
  @keyframes fade-R-trailer {
    0% {
      opacity: 0;
      transform: translateX(150%);
    }
    100% {
      opacity: 1;
      transform: translateX(50%);
    }
  }
  @keyframes fade-out-R-trailer {
    0% {
      opacity: 1;
      transform: translateX(50%);
    }
    100% {
      opacity: 0;
      transform: translateX(150%);
    }
  }
`;

function BlockTrailer(props) {
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
    <TrailerBlock ref={thisRef}>
      <div className={`youtube ${isAt ? "animation" : ""}`}>
        <img
          className={`img-ytb ${isAt ? "animation" : ""}`}
          src={youtubeImg}
          alt=""
        />
        <span className={`${isAt ? "animation" : "remove-animation"}`}>
          TRAILER
        </span>
      </div>
    </TrailerBlock>
  );
}

export default BlockTrailer;
