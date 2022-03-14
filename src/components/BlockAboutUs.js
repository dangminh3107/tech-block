import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import profile1 from "../assets/images/mockup/profile-1.png";
import profile2 from "../assets/images/mockup/profile-2.png";
import profile3 from "../assets/images/mockup/profile-3.png";
import background9 from "../assets/images/background/bg-9.png";
import Profile from "./Profile";

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  h1 {
    transform: translateX(-150%);
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 5px;
    transition: all 1.5s;
    color: #003091;
    padding: 100px 0 20px;
    &.animation {
      transform: translateX(0);
    }
    @media (max-width: 1000px) {
      & {
        font-size: 4vw;
        text-align: center;
      }
    }
  }
  .content {
    width: 100%;
    background-image: url(${background9});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: space-around;
    padding: 50px 250px;
    align-items: center;
    position: relative;
    overflow: hidden;
    @media (max-width: 719px) {
      & {
        padding: 50px;
        justify-content: center;
      }
    }
  }
`;

function BlockAboutUs(props) {
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
    <AboutUs ref={thisRef}>
      <h1 className={`${isAt ? "animation" : ""}`}>NHÀ ĐẦU TƯ NÓI GÌ VỀ CHÚNG TÔI</h1>
      <div className="content">
        <Profile
          img={profile1}
          text={
            "Với lộ trình rõ ràng, tôi nghĩ rằng giá trị của Techblock sẽ phát triển hơn trong tương lai"
          }
          num={1}
          isAt={isAt}
        />
        <Profile
          img={profile2}
          text={
            "Techblock là một nền tảng công nghệ vô cùng tuyệt vời. Tôi rất yên tâm khi đầu tư vào dự án này."
          }
          num={2}
          isAt={isAt}
        />
        <Profile
          img={profile3}
          text={
            "Hệ sinh thái của dự án Techblock vô cùng đa dạng. Tôi cảm thấy đây là một dự án vô cùng tiềm năng để đầu tư"
          }
          num={3}
          isAt={isAt}
        />
      </div>
    </AboutUs>
  );
}

export default BlockAboutUs;
