import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import homeBackGround from "../assets/images/background/home.jpg";
import buttonJoin from "../assets/images/button/join.png";
import phoneOnBackground from "../assets/images/mockup/phone.png";

const HomeView = styled.div`
  position: relative;
  min-height: 120vh;
  background-image: url(${homeBackGround});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: top center;
  display: flex;
  align-items: center;
  .content-contain {
    display: grid;
    grid-template-columns: repeat(auto-fit, 450px);
    width: 100%;
    justify-content: space-around;
    .home-bg-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .text-block {
        color: #fff;
        font-size: 25px;
        line-height: 30px;
        display: flex;
        flex-direction: column;
        p {
          max-width: 500px;
          text-align: justify;
          pointer-events: none;
        }

        span {
          display: flex;
          justify-content: center;
          h1 {
            display: inline-flex;
            font-size: 50px;
            line-height: 50px;
            padding: 15px 0;
            margin-bottom: 15px;
            color: #0068ff;
            letter-spacing: 5px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
            position: relative;
            pointer-events: none;
          }
        }

        h1::after {
          content: "";
          position: absolute;
          width: 90%;
          height: 2px;
          background-color: #fff;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        span {
          font-weight: bold;
        }
      }

      .button-join {
        display: flex;
        justify-content: center;
        img {
          max-width: 250px;
          cursor: pointer;

          &:hover {
            filter: drop-shadow(0 0 5px #fff);
          }
        }
        @media (max-width: 916px) {
          margin: 30px 0 40px;
        }
      }
      @media (max-width: 916px) {
        margin-top: 100px;
      }
    }

    .img-phone {
      img {
        width: 100%;
        object-fit: contain;
        filter: drop-shadow(42px 90px 6px rgba(3, 26, 85, 0.6));
      }
      @media (max-width: 916px) {
        margin-bottom: 100px;
      }
    }
  }
`;

function Home(props) {
  return (
    <HomeView>
      <div className="content-contain">
        <div className="home-bg-content">
          <div className="text-block">
            <span data-aos="fade-right" data-aos-duration="1500">
              <h1>TECH BLOCK</h1>
            </span>
            <p data-aos="fade-left" data-aos-duration="1500">
              <span>NỀN TẢNG CÔNG NGHỆ, GIẢI TRÍ&nbsp;</span>
              VÀ GIÚP NGƯỜI THAM GIA TẠO RA THU NHẬP TỪ NỀN TẢNG PHI TẬP TRUNG
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay="800"
            className="button-join"
          >
            <img src={buttonJoin} alt="" />
          </div>
        </div>
        <div className="img-phone">
          <img
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800"
            src={phoneOnBackground}
            alt=""
          />
        </div>
      </div>
    </HomeView>
  );
}

export default Home;
