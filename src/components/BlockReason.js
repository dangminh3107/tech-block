import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import background8 from "../assets/images/background/bg-8.png";
import img1 from "../assets/images/mockup/img-4.png";
import img2 from "../assets/images/mockup/img-5.png";
import img3 from "../assets/images/mockup/img-6.png";

const Reason = styled.div`
  padding-bottom: 80px;
  background-image: url(${background8});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    transform: translateX(-150%);
    font-size: 55px;
    line-height: 55px;
    letter-spacing: 10px;
    color: #fff;
    padding: 100px 0 30px;
    transition: all 1.5s;
    @media (max-width: 1000px) {
      & {
        font-size: 4vw;
        text-align: center;
      }
    }
    &.animation {
      transform: translateX(0);
    }
  }
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 15px;
    padding: 0 100px;
    div {
      transition: all 1.3s;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      &.animation {
        animation: flipping 1.2s linear forwards;
        @keyframes flipping {
          0% {
            opacity: 0;
            transform: rotateY(0deg);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          100% {
            opacity: 1;
            transform: rotateY(360deg);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
      ul {
        color: #003091;
        font-size: 1.2vw;
        font-weight: 500;
        max-width: 80%;
        li {
          margin: 5px 0;
          span {
            font-weight: 900;
          }
        }
      }
    }
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, 100%);
      div {
        ul {
          font-size: 2.5vw;
          max-width: 88%;
        }
      }
    }
  }
`;

function BlockReason(props) {
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
  }, [props.pos])

  return (
    <Reason ref={thisRef}>
      <h1 className={`${isAt ? "animation" : ""}`}>
        TẠI SAO LẠI CHỌN TECH BLOCK
      </h1>
      <div className="content">
        <div className={`${isAt ? "animation" : ""}`}>
          <ul>
            <li>
              Xây dựng trên nền tảng công nghe Blockchain làm cho{" "}
              <span>TechBlock</span> trở nên minh bạch, bảo mật, công khai và an
              toàn tuyệt đối.
            </li>
            <li>
              Staking thụ động tạo lợi nhuận lên tới <span>30%</span> thông qua
              cơ chế <span>Farming Tech</span>.
            </li>
            <li>
              Mức độ thanh khoản tăng dần theo thời gian dự trên lộ trình bán{" "}
              <span>ITO</span>.
            </li>
            <li>Có định hướng lộ trình và phát triển rõ ràng.</li>
          </ul>
        </div>
        <div className={`${isAt ? "animation" : ""}`}>
          <img src={img1} alt="" />
        </div>
        <div className={`${isAt ? "animation" : ""}`}>
          <img src={img2} alt="" />
        </div>
        <div className={`${isAt ? "animation" : ""}`}>
          <img src={img3} alt="" />
        </div>
      </div>
    </Reason>
  );
}

export default BlockReason;
