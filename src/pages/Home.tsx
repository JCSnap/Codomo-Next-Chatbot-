import React from "react";
import Navbar from "./Navbar";
import Help from "./Help";
import Quote from "./Quote";
import Mission from "./Mission";
import Values from "./Values";
import styled from "styled-components";
import Image from "next/image";

const PerspectiveWrapper = styled.div`
  perspective: 2px;
  height: 1000px;
  overflow-y: auto;
  width: 100%;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(../assets/backdrop.png);
  background-size: cover;
  background-position: 0%;
  background-attachment: fixed;
  background-repeat: repeat;
  padding-top: 100px;
  transform: translateZ(-1px) scale(1.5);
  z-index: -1;
  height: 100%;
`;

const TopLayer = styled.div`
  transform: translateZ(0) scale(1);
`;

function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <Help />
      <PerspectiveWrapper>
        <Backdrop />
        <TopLayer>
          <Quote />
          <Mission />
          <Values />
        </TopLayer>
      </PerspectiveWrapper>
    </div>
  );
}

export default Home;
