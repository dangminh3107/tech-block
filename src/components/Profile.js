import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 1.5s;
  pointer-events: none;
  opacity: 0;
  transform: translateX(1000%);
  img {
    max-width: 180px;
    object-fit: contain;
    filter: drop-shadow(5px 5px 5px #ccc);
  }
  p {
    margin-top: 20px;
    max-width: 210px;
    font-size: 13px;
    text-align: center;
    font-weight: 500;
    color: #003091;
  }
  &.animation {
    pointer-events: unset;
    opacity: 1;
    transform: translateX(0);
  }
`;

function Profile(props) {
  return (
    <ProfileStyled
      num={props.num}
      className={`${props.isAt ? "animation" : ""}`}
    >
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </ProfileStyled>
  );
}

export default Profile;
