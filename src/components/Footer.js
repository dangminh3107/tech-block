import React from "react";
import styled from "styled-components";
import background10 from "../assets/images/background/bg-10.png";
import icon1 from "../assets/images/icon/fb.png";
import icon2 from "../assets/images/icon/ins.png";
import icon3 from "../assets/images/icon/twt.png";
import icon4 from "../assets/images/icon/ytb.png";

const BlockFooter = styled.div`
  height: 450px;
  background-image: url(${background10});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 50px 100px 0;
  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    font-size: 13px;
    line-height: 18px;
    h1 {
      margin-bottom: 40px;
    }
    p {
      span {
        font-weight: bold;
      }
    }
    ul {
      list-style: none;
      li {
        margin-bottom: 5px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .icon {
      display: flex;
      flex-direction: row;
      img {
        width: 30px;
        margin-right: 10px;
        object-fit: contain;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;
    height: unset;
    background-size: cover;
    div {
      margin-bottom: 30px;
    }
  }
`;

function Footer() {
  return (
    <BlockFooter>
      <div>
        <h1>ABOUT US</h1>
        <p>
          <span>TechBlock</span> được biết đến là một quỹ công nghệ chuyên phát
          triển và cung cấp cho người dùng những nền tảng blockchain như: Defi,
          Dapp, NFT, Farming,...
        </p>
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          <li>Giới thiệu chung</li>
          <li>Đa dạng hệ sinh thái</li>
          <li>Tokenomics</li>
          <li>Đặc điểm nổi bật</li>
          <li>Phát hành ITO</li>
          <li>Lộ trình phát triển</li>
        </ul>
      </div>
      <div>
        <h1>CONTACT</h1>
        <div className="icon">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
        </div>
      </div>
    </BlockFooter>
  );
}

export default Footer;
