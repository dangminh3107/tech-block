import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import background3 from "../assets/images/background/bg-3.png";
import styled from "styled-components";

const BlockIntroCompany = styled.div`
  height: 400px;
  width: 100%;
  background: #cae8ff;
  position: relative;
  .box {
    position: absolute;
    height: 460px;
    width: 900px;
    top: -30px;
    right: 0;
    overflow: hidden;
    .block-content-2 {
      position: absolute;
      height: 100%;
      background-image: url(${background3});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      top: 50%;
      right: 0;
      transform: translate(150%, -50%);
      display: inline-flex;
      flex-direction: column;
      color: #fff;
      z-index: 10;
      opacity: 0;
      transition: all 1s linear;
      &.animation {
        opacity: 1;
        transform: translate(0, -50%);
      }
      .text-container {
        position: absolute;
        left: 20%;
        top: 20%;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        font-weight: bold;

        h1 {
          font-size: 30px;
        }

        h2 {
          font-size: 20px;
          margin: 50px 0 20px;
        }

        span {
          margin: 15px 0;
        }
        @media (max-width: 750px) and (min-width: 640px) {
          left: 35%;
        }
        @media (max-width: 639px) {
          left: 50%;
        }
      }
    }
  }
`;

function BlockCompany(props) {
  const [isAt, setIsAt] = useState(false);
  const thisRef = useRef();

  useEffect(() => {
    let body = document.body.getBoundingClientRect();
    let thisBounding = thisRef.current.getBoundingClientRect();
    let posYThisBLock = Math.floor(
      thisBounding.top -
        body.top -
        thisBounding.height -
        thisBounding.height / 2
    );
    if (props.pos >= posYThisBLock) setIsAt(true);
    else setIsAt(false);
  }, [props.pos]);
  return (
    <BlockIntroCompany ref={thisRef}>
      <div className="box">
        <div className={`block-content-2 ${isAt ? "animation" : ""}`}>
          <div className="text-container">
            <h1>GIỚI THIỆU CÔNG TY</h1>
            <h2>CÔNG TY</h2>
            <span>Tên công ty:</span>
            <span>Địa chỉ</span>
            <span>Ngày thành lập</span>
          </div>
        </div>
      </div>
    </BlockIntroCompany>
  );
}

export default BlockCompany;
