import React from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import roadmap from "../assets/images/mockup/roadmap2.png";

const RoadMap = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: 10px;
    color: #003091;
    padding: 100px 0 50px;
    @media (max-width: 1000px) {
      & {
        font-size: 4.5vw;
      }
    }
  }
  img {
    flex: 1;
    width: 100%;
    object-fit: contain;
  }
`;

function BlockRoadmap() {
  return (
    <RoadMap>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        ROADMAP
      </h1>
      <img src={roadmap} alt="" data-aos="fade-up" data-aos-duration="1600" />
    </RoadMap>
  );
}

export default BlockRoadmap;
