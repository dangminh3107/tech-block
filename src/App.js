import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobalStyles } from "./GlobalStyles";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BlockIntro from "./components/BlockIntro";
import CardIntro from "./components/CardIntro";
import cardImg1 from "./assets/images/mockup/img-1.png";
import cardImg2 from "./assets/images/mockup/img-2.png";
import cardImg3 from "./assets/images/mockup/img-3.png";
import BlockCompany from "./components/BlockCompany";
import BlockTrailer from "./components/BlockTrailer";
import BlockEcosystem from "./components/BlockEcosystem";
import BlockFarming from "./components/BlockFarming";
import BlockDateRelease from "./components/BlockDateRelease";
import BlockTokenNomics from "./components/BlockTokenNomics";
import BlockRoadmap from "./components/BlockRoadmap";
import BlockReason from "./components/BlockReason";
import BlockAboutUs from "./components/BlockAboutUs";
import Footer from "./components/Footer";
import ModalNavbar from "./components/ModalNavbar";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [pos, setPos] = useState("");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleActive = (status) => {
    if (status) setIsActive(true);
  };

  const handleDeactive = (status) => {
    setIsActive(false);
  };

  const handleSroll = (e) => {
    setPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Navbar getActive={handleActive} pos={pos} />
      <Home />
      <BlockIntro>
        <CardIntro
          card={cardImg1}
          intro={
            "Là một quỹ công nghệ với mục đích xây dựng các ứng dụng phi tập trung nhằm mang đến những nền tảng đầu tư uy tín và minh bạch"
          }
        />
        <CardIntro
          card={cardImg2}
          intro={
            "Bên cạnh đó <span>Tech Block</span> cũng cho ra mắt <span>Tech Token</span> với mục đích mang lại lợi nhuận cho nhà đầu tư cũng như là tiền đề để phát triển công nghệ tương lai"
          }
        />
        <CardIntro
          card={cardImg3}
          intro={
            "Đội ngũ <span>Tech Block</span> cũng mang đến lộ trình phát triển rõ ràng nhầm khẳng định sự uy tín và chuyên nghiệp mà <span>Tech Block</span> mang lại"
          }
        />
      </BlockIntro>
      <BlockCompany pos={pos} />
      <BlockTrailer pos={pos} />
      <BlockEcosystem pos={pos} />
      <BlockFarming pos={pos} />
      <BlockDateRelease />
      <BlockTokenNomics />
      <BlockRoadmap />
      <BlockReason pos={pos} />
      <BlockAboutUs pos={pos} />
      <Footer />
      <ModalNavbar isActive={isActive} handleDeactive={handleDeactive} />
    </div>
  );
}

export default App;
