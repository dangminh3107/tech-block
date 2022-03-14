import React from 'react'
import background2 from '../assets/images/background/bg-2.png'
import styled from 'styled-components'

const BlockIntro1 = styled.div`
  min-height: 600px;
  background-image: url(${background2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backdrop-filter: brightness(0.85);
  position: relative;
  .block-content-1 {
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    position: absolute;
    top: -10%;
    width: 100%;
  }
  @media all and (max-width: 1060px) {
    .block-content-1 {
      position: relative;
      top: -50px;
    }
  }
`;

function BlockIntro(props) {
  return (
    <BlockIntro1 data-aos="fade-right">
      <div className="block-content-1">
        {props.children}
      </div>
    </BlockIntro1>
  )
}

export default BlockIntro