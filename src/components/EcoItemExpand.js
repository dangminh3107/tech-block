import React, { useState } from "react";
import styled, { css } from "styled-components";
import r1Full from "../assets/images/mockup/diverse/r1.png";
import r2Full from "../assets/images/mockup/diverse/r2.png";
import r3Full from "../assets/images/mockup/diverse/r3.png";
import r4Full from "../assets/images/mockup/diverse/r4.png";
import l1Full from "../assets/images/mockup/diverse/l1.png";
import l2Full from "../assets/images/mockup/diverse/l2.png";
import l3Full from "../assets/images/mockup/diverse/l3.png";
import l4Full from "../assets/images/mockup/diverse/l4.png";

const EcoExpand = styled.div`
  position: absolute;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.4s;
  opacity: 0;
  ${(props) => {
    let time;
    switch (props.img) {
      case 1:
        time = "0s";
        break;
      case 2:
        time = "0.2s";
        break;
      case 3:
        time = "0.4s";
        break;
      case 4:
        time = "0.6s";
        break;
      default:
        break;
    }
    if (props.sideLeft)
      return css`
        left: -86%;
        width: 85%;
        top: ${props.top};
        animation: fade-left-out 0.5s ${time} ease-in-out forwards;
      `;
    if (props.sideRight)
      return css`
        right: -86%;
        width: 85%;
        top: ${props.top};
        animation: fade-right-out 0.5s ${time} ease-in-out forwards;
      `;
  }}
  &.animation {
    ${(props) => {
      if (props.sideLeft) {
        switch (props.img) {
          case 1:
            return css`
              animation: fade-left 1s ease-in-out forwards;
            `;
          case 2:
            return css`
              animation: fade-left 1s 0.2s ease-in-out forwards;
            `;
          case 3:
            return css`
              animation: fade-left 1s 0.4s ease-in-out forwards;
            `;
          case 4:
            return css`
              animation: fade-left 1s 0.6s ease-in-out forwards;
            `;
          default:
            break;
        }
      }
      if (props.sideRight) {
        switch (props.img) {
          case 1:
            return css`
              animation: fade-right 1s ease-in-out forwards;
            `;
          case 2:
            return css`
              animation: fade-right 1s 0.2s ease-in-out forwards;
            `;
          case 3:
            return css`
              animation: fade-right 1s 0.4s ease-in-out forwards;
            `;
          case 4:
            return css`
              animation: fade-right 1s 0.6s ease-in-out forwards;
            `;
          default:
            break;
        }
      }
    }}
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

function EcoItemExpand(props) {
  const left = [l1Full, l2Full, l3Full, l4Full];
  const right = [r1Full, r2Full, r3Full, r4Full];

  const handleImgExpand = () => {
    if (props.sideLeft) {
      return left[props.img - 1];
    }
    if (props.sideRight) {
      return right[props.img - 1];
    }
  };
  return (
    <EcoExpand
      sideLeft={props.sideLeft}
      sideRight={props.sideRight}
      top={props.top}
      img={props.img}
      className={`${props.isAt ? "animation" : ""}`}
    >
      <img className="img" src={handleImgExpand()} alt="" />
    </EcoExpand>
  );
}

export default EcoItemExpand;
