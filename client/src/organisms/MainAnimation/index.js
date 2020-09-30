import React, { useEffect } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import bombFire from "../../images/bombFire.svg";
import bombCircle from "../../images/bombCircle.svg";

import gsap from "gsap";

const MAbox = styled.div`
  width: 100%;
  height: 103vh;
  background: linear-gradient(to bottom, #fff7f0 80%, #fff);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BombImg = styled.img`
  width: 100%;
`;

const BurnImg = styled.img`
  width: 100%;
  position: relative;
  top: 10px;
  left: 25px;
  z-index: -1;
`;

function MainAnimation() {
  const [width, height] = useWindowSize();

  const burn = () => {
    gsap.to(".burn", {
      x: -60,
      y: 60,
      duration: 2,
      delay: 2,
      ease: "slow",
    });
  };

  useEffect(() => {
    let bombWidth = 160;

    gsap.to(".bomb", {
      x: width * 0.5 - bombWidth * 0.5,
      rotation: 360,
      duration: 4,
      ease: "elastic.out(1, 0.5)",
      onComplate: burn(),
      // repeat: -1,
    });
  }, [width]);

  return (
    <MAbox>
      <div className="bomb">
        <BurnImg className="burn" src={bombFire} />
        <BombImg src={bombCircle} />
      </div>
    </MAbox>
  );
}

export default MainAnimation;
