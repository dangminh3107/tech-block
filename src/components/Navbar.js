import React, { useState, useRef, useEffect, useCallback } from "react";
import logo from "../assets/images/logo/logo.png";
import menu from "../assets/images/icon/menu.png";
import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  width: 100%;
  font-size: 16px;
  display: flex;
  min-height: 50px;
  background: rgba(3, 26, 85, 0.8);
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  border-bottom: 2px solid #494c84;
  z-index: 99;
  transition: all 0.5s linear;
  &.animation {
    transform: translateY(0);
  }
  &.remove-animation {
    transform: translateY(-100%);
  }
  .menu {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    cursor: pointer;
    transform: translateX(50%);
    display: none;
    img {
      width: 100%;
      object-fit: contain;
    }
    @media (max-width: 916px) {
      display: block;
    }
  }
  .nav-logo {
    cursor: pointer;
    img {
      width: 40px;
      object-fit: contain;
    }
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    .nav-item-list {
      margin-right: 100px;
      list-style: none;
      display: flex;
      color: #fff;
      li {
        padding: 0 30px;
        cursor: pointer;
        transition: all 0.4s;
      }

      li:hover {
        text-shadow: 5px 5px 3px #031a55;
        transform: translateX(-1px) translateY(-1px);
      }
      @media (min-width: 917px) and (max-width: 1080px) {
        margin-right: 0;
        li {
          padding: 0 15px;
        }
      }
      @media (max-width: 916px) {
        display: none;
      }
    }
    .nav-sign {
      button {
        padding: 8px 30px;
        border: none;
        border-radius: 3px;
        margin: 0 10px;
        box-shadow: 5px 5px 3px #031a55;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.4s;
      }

      button:hover {
        transform: translateX(-1px) translateY(-1px);
      }

      .nav-sign-in {
        background-color: #0086ff;
        color: #fff;
      }
      @media (min-width: 917px) and (max-width: 1080px) {
        & {
          display: flex;
        }
      }
      @media (max-width: 916px) {
        display: none;
      }
    }
  }

  @media (max-width: 916px) {
    flex-direction: column;
  }
`;

function Navbar(props) {
  const [isAt, setIsAt] = useState(false);
  const [y, setY] = useState(props.pos);
  const thisRef = useRef();

  const handleNavbar = useCallback(
    (e) => {
      const window = e.currentTarget;
      // let navHeight = Math.floor(thisRef.current.getBoundingClientRect().height);
      if (y > window.scrollY) {
        setIsAt(true);
      } else if (y < window.scrollY && y > 0) {
        setIsAt(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(props.pos);
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [handleNavbar]);

  const handleClickMenu = () => {
    props.getActive(true);
  };

  const handleClass = () => {
    let navHeight = Math.floor(thisRef.current?.getBoundingClientRect().height);
    if (isAt && props.pos > 0) return "animation";
    if (!isAt && props.pos > 68) return "remove-animation";
    if (!isAt && props.pos <= 68) return "";
  };
  return (
    <Nav ref={thisRef} className={handleClass()}>
      <div className="menu" onClick={handleClickMenu}>
        <img src={menu} alt="" className="menu" />
      </div>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-item">
        <ul className="nav-item-list">
          <li>NEWS</li>
          <li>Digital banking</li>
          <li>Roadmap</li>
          <li>Future Trend</li>
        </ul>
        <div className="nav-sign">
          <button className="nav-sign-in">Sign In</button>
          <button className="nav-sign-up">Sign Up</button>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
