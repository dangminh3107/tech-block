import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    &::-webkit-scrollbar {
      background: linear-gradient(to right, #87898B, #646566);
      border-radius: 5px;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 5px;
      border: 5px solid transparent;
      width: 10px;
    }
    &::-webkit-scrollbar-track{
      border-radius: 5px;
    }
    &::-webkit-scrollbar-corner {
      border-radius: 5px;
    }
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    overflow-y: overlay;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
  }

  body {
    font-size: 12px;
  }

  @keyframes fade-left {
    0% {
      opacity: 0;
      transform: translateX(-150%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fade-right {
    0% {
      opacity: 0;
      transform: translateX(150%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fade-left-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-150%);
    }
  }
  @keyframes fade-right-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(150%);
    }
  }
  @keyframes rotate360 {
    0% {
      transform: rotate(0);
      transform-origin: 50%;
    }
    100% {
      transform: rotate(360deg);
      transform-origin: 50%;
    }
  }
`;
