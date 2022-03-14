import React from "react";
import "aos/dist/aos.css";
import styled, { css } from "styled-components";
import background8 from "../assets/images/background/bg-4.png";
import img1 from "../assets/images/mockup/coin/back.png";
import img2 from "../assets/images/mockup/coin/left.png";
import coin from "../assets/images/mockup/coin/coin.png";
import btnImg from "../assets/images/button/btn-1.png";

const BlockToken = styled.div`
  background-image: url(${background8});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 1100px) {
    background-size: cover;
  }
  h1 {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: 10px;
    color: #003091;
    padding: 30px 0 30px;
    @media (max-width: 1000px) {
      & {
        font-size: 4.5vw;
      }
    }
  }
  .box-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .box-1 {
      width: 50%;
      .coin-container {
        width: 550px;
        height: 350px;
        position: relative;
        .core {
          position: absolute;
          width: 228px;
          height: 228px;
          left: 47%;
          top: 10.5%;
          background: linear-gradient(-45deg, #d8d8d8, #fff 70%, #fff);
          border-radius: 50%;
          z-index: 11;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            position: absolute;
            width: 170px;
            height: 170px;
            border-radius: 50%;
            background: linear-gradient(135deg, #d8d8d8, #fff 70%, #fff);
          }
        }
        .img-1-contain {
          position: absolute;
          width: 360px;
          left: 34%;
          top: -6.2%;
          z-index: 10;
          .img-1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            animation: rotate360 3s linear infinite;
          }
          .img-coin {
            object-fit: contain;
            position: absolute;
            width: 54%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .img-2 {
          position: absolute;
          width: 400px;
          z-index: 9;
        }
        @media (max-width: 567px) {
          transform: scale(1) translateX(20%);
          left: -50%;
        }
        @media (max-width: 420px) {
          transform: scale(0.8) translateX(0);
          left: -50%;
        }
        @media (max-width: 372px) {
          transform: scale(0.8) translateX(15%);
          left: -70%;
        }
      }
      .coin-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        bottom: 0;
        font-size: 18px;
        font-weight: 900;
        color: #003091;
        width: 100%;
        left: 40%;
        bottom: -10px;
        margin-bottom: 20px;
      }
      @media (max-width: 1130px) {
        & {
          width: 100%;
        }
      }
    }
    .list-content {
      font-size: 18px;
      color: #003091;
      font-weight: 500;
      flex: 1;
      margin-left: 6%;
      margin-bottom: 30px;
      ul {
        list-style: none;
        li {
          margin-left: 20px;
          span {
            font-weight: 800;
          }
        }
      }
      span {
        font-weight: 800;
      }
    }
  }
  .button {
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    cursor: pointer;
    img {
      max-width: 250px;
    }
    span {
      position: absolute;
      font-size: 20px;
      line-height: 20px;
      color: #fff;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 1130px) {
    .box-content {
      flex-direction: column;
    }
  }
`;

function BlockTokenNomics() {
  return (
    <BlockToken>
      <h1 data-aos="fade-left" data-aos-duration="1000">
        TOKENOMICS
      </h1>
      <div className="box-content">
        <div
          className="box-1"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="coin-container">
            <div className="img-1-contain">
              <img src={img1} alt="" className="img-1" />
              <img src={coin} alt="" className="img-coin" />
            </div>
            <img src={img2} alt="" className="img-2" />
          </div>
          <div className="coin-text">
            <span>TÊN TOKEN: TECH</span>
            <span>TỔNG TRỮ LƯỢNG: 1.2 TỶ TOKEN</span>
            <span>TIÊU CHUẨN: BEP-20</span>
          </div>
        </div>
        <div
          className="list-content"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <ul>
            PHÁT HÀNH <span>1,2 TỶ</span> TECH BAO GỒM:
            <li>
              <span>10%</span> PHÁT HÀNH THÔNG QUA ITO CÔNG KHAI
            </li>
            <li>
              <span>5%</span> ĐƯỢC NẮM GIỮ BỞI CÁC CỐ VẤN
            </li>
            <li>
              <span>10%</span> ĐƯỢC NẮM GIỮ BỞI NHÓM PHÁT TRIỂN
            </li>
            <li>
              <span>20%</span> CHO QUỸ ĐỐI ỨNG NỀN TẢNG FARMING
            </li>
            <li>
              <span>20%</span> QUỸ PHÁT TRIỂN THỊ TRƯỜNG
            </li>
            <li>
              <span>20%</span> QUỸ PHÁT TRIỂN HỆ SINH THÁI
            </li>
            <li>
              <span>10%</span> QUỸ MỞ CHO PHÉP GỌI VỐN
            </li>
            <li>
              <span>5%</span> QUỸ ĐỐI ỨNG TRÊN CÁC SÀN GIAO DỊCH
            </li>
          </ul>
        </div>
      </div>
      <div className="button" data-aos="zoom-in-down" data-aos-duration="1600">
        <img src={btnImg} alt="" />
        <span>MUA TECH NGAY</span>
      </div>
    </BlockToken>
  );
}

export default BlockTokenNomics;
