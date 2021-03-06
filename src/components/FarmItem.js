import React from "react";
import styled, { css } from "styled-components";
import l1 from "../assets/images/mockup/farming/l1.png";
import l2 from "../assets/images/mockup/farming/l2.png";
import l3 from "../assets/images/mockup/farming/l3.png";
import r1 from "../assets/images/mockup/farming/r1.png";
import r2 from "../assets/images/mockup/farming/r2.png";
import r3 from "../assets/images/mockup/farming/r3.png";

const FarmItemBlock = styled.div`
  position: absolute;
  max-width: 300px;
  max-height: 100px;
  object-fit: contain;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  ${(props) => {
    let color, time;
    switch (props.num) {
      case 1:
        time = "0s";
        break;
      case 2:
        time = "0.2s";
        break;
      case 3:
        time = "0.4s";
        break;
      default:
        break;
    }
    if (props.sideLeft) {
      switch (props.num) {
        case 1:
          color = "#0066FF";
          break;
        case 2:
          color = "#0033CC";
          break;
        case 3:
          color = "#003091";
          break;
        default:
          break;
      }

      return css`
        left: -72%;
        top: ${props.top};
        background-color: ${color};
        animation: fade-left-out 0.5s ${time} ease-in-out forwards;
      `;
    }
    if (props.sideRight) {
      switch (props.num) {
        case 1:
          color = "#003091";
          break;
        case 2:
          color = "#0033CC";
          break;
        case 3:
          color = "#0066FF";
          break;
        default:
          break;
      }
      return css`
        right: -72%;
        top: ${props.top};
        background-color: ${color};
        animation: fade-right-out 0.5s ${time} ease-in-out forwards;
      `;
    }
  }}
  &.animation {
    ${(props) => {
      if (props.sideLeft) {
        switch (props.num) {
          case 1:
            return css`
              animation: fade-left 1.5s ease-in-out forwards;
            `;
            break;
          case 2:
            return css`
              animation: fade-left 1.5s 0.2s ease-in-out forwards;
            `;
            break;
          case 3:
            return css`
              animation: fade-left 1.5s 0.4s ease-in-out forwards;
            `;
            break;
          default:
            break;
        }
      }
      if (props.sideRight) {
        switch (props.num) {
          case 1:
            return css`
              animation: fade-right 1.5s ease-in-out forwards;
            `;
            break;
          case 2:
            return css`
              animation: fade-right 1.5s 0.2s ease-in-out forwards;
            `;
            break;
          case 3:
            return css`
              animation: fade-right 1.5s 0.4s ease-in-out forwards;
            `;
            break;
          default:
            break;
        }
      }
    }}
  }
  .text-container {
    font-size: 16px;
    color: #fff;
    margin: 0 5px;
    span {
      font-weight: bold;
    }
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .img-item {
      width: 80px;
      object-fit: contain;
      border-radius: 50%;
      box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.6);
    }
  }
  @media all and (max-width: 1000px) {
    width: 70%;
    padding: 5px;
    .text-container {
      font-size: 1.6vmin;
    }
    .img-container {
      width: 46%;
      .img-item {
        width: 100%;
      }
    }
    ${(props) => {
      let topPos;
      let width = "";
      if (props.sideLeft) {
        switch (props.num) {
          case 1:
            topPos = "-10%";
            break;
          case 2:
            topPos = "32%";
            width = "60%";
            break;
          case 3:
            width = "41%";
            break;
          default:
            break;
        }

        return css`
          left: -68%;
          top: ${topPos};
          .img-container {
            width: ${width};
          }
        `;
      }
      if (props.sideRight) {
        switch (props.num) {
          case 1:
            topPos = "-10%";
            break;
          case 2:
            topPos = "32%";
            width = "34%";
            break;
          case 3:
            topPos = "72%";
            width = "55%";
            break;
          default:
            break;
        }
        return css`
          right: -68%;
          top: ${topPos};
          .img-container {
            width: ${width};
          }
        `;
      }
    }}
  }
`;
function FarmItem(props) {
  const left = [
    {
      img: l1,
      text: "M???c l???i nhu???n t???i ??a ?????t t???i <span>400%</span> cho m???t l???n ?????u t??",
    },
    {
      img: l2,
      text: "Sau khi k???t th??c k??? h???n, nh?? ?????u t?? s??? ???????c <span>ho??n c??? v???n l???n l???i</span>",
    },
    {
      img: l3,
      text: "Kh??? n??ng r??t ti???n nhanh g???n ch??? trong <span>48 gi???</span>",
    },
  ];

  const right = [
    {
      img: r1,
      text: "Chi ph?? <span>?????u t?? th???p</span> v?? <span>t??ng doanh thu</span> nhanh ch??ng",
    },
    {
      img: r2,
      text: "?????m b???o <span>l???i nhu???n cao, r??? ro th???p</span>",
    },
    {
      img: r3,
      text: "Nh???n l???i nhu???n trong v??ng <span>5 ng??y</span> sau khi n??ng c???p g??i ?????u t??",
    },
  ];

  const createMarkup = () => {
    if (props.sideLeft) {
      return { __html: left[props.num - 1].text };
    }
    if (props.sideRight) {
      return { __html: right[props.num - 1].text };
    }
  };

  const handleImg = () => {
    if (props.sideLeft) {
      return left[props.num - 1].img;
    }
    if (props.sideRight) {
      return right[props.num - 1].img;
    }
  };
  if (props.sideLeft) {
    return (
      <FarmItemBlock
        sideLeft={props.sideLeft}
        top={props.top}
        num={props.num}
        className={`${props.isAt ? "animation" : ""}`}
      >
        <div className="text-container">
          <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
        <div className="img-container">
          <img className="img-item" src={handleImg()} alt="" />
        </div>
      </FarmItemBlock>
    );
  }
  if (props.sideRight) {
    return (
      <FarmItemBlock
        sideRight={props.sideRight}
        top={props.top}
        num={props.num}
        className={`${props.isAt ? "animation" : ""}`}
      >
        <div className="img-container">
          <img className="img-item" src={handleImg()} alt="" />
        </div>
        <div className="text-container">
          <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
      </FarmItemBlock>
    );
  }
}

export default FarmItem;
