import React, { useState, memo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalNav = styled.div`
  z-index: -99;
  opacity: 0;
  position: fixed;
  @media (max-width: 916px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -99;
    opacity: 0;
    .side-bar {
      position: absolute;
      top: 0;
      left: -100%;
      bottom: 0;
      width: 40%;
      font-size: 2.4vmin;
      font-weight: 500;
      background: #fff;
      transition: all 0.4s;
      color: #666666d9;
      display: flex;
      justify-content: flex-start;
      ul {
        list-style: none;
        padding: 40px 10px 0;
        li {
          transition: all 0.2s;
          padding: 15px;
          cursor: pointer;
          &:hover {
            color: #000;
            font-weight: bold;
          }
        }
      }
      &.active{
        left: 0;
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: 0;
      background: transparent;
      border: none;
      outline: none;
      padding: 10px 20px 10px 10px;
      font-size: 25px;
      color: #666666d9;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        color: #000;
      }
    }
    &.active {
      z-index: 99;
      opacity: 1;
    }
  }
`;

function ModalNavbar(props) {
  const handleClickClose = () => props.handleDeactive();

  return (
    <ModalNav className={`${props.isActive ? "active" : ""}`} onClick={handleClickClose}>
      <div className={`side-bar ${props.isActive ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>NEWS</li>
          <li>Digital banking</li>
          <li>Roadmap</li>
          <li>Future Trend</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <button className="close" onClick={handleClickClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </ModalNav>
  );
}

export default memo(ModalNavbar);
