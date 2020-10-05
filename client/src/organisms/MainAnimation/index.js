import React, { useEffect } from "react";
import * as S from "./style";
import useWindowSize from "../../hooks/useWindowSize";
import {
  cloud1,
  cloud2,
  cloud3,
  cloud4,
  cloud5,
  cloud6,
  cloud7,
  cloud8,
  cloud9,
  cloud10,
  empty,
  cloudTitle,
} from "../../images/clouds";

import gsap from "gsap";

function MainAnimation() {
  const [width] = useWindowSize();

  useEffect(() => {
    const cloudDuration = 40;
    const startPoint = -(width * 2);
    const endPoint = width * 1.8;
    gsap.fromTo(
      ".firstCloud",
      { x: gsap.utils.random(width * 1.75, width * 1.25, 200, true) },
      { x: width * 3.2, duration: 20, ease: "none", inherit: false }
    );
    gsap.fromTo(
      ".slowCloud",
      { x: gsap.utils.random(startPoint + 1500, startPoint + 1200, 200, true) },
      {
        x: width * 2.5,
        duration: 60,
        ease: "none",
        inherit: false,
        repeat: -1,
      }
    );
    gsap.to(".cloudTitle", {
      y: 17,
      duration: 2,
      repeat: -1,
      yoyo: true,
      inherit: false,
    });

    gsap.defaults({
      ease: "none",
      duration: cloudDuration,
    });

    const t1 = gsap.timeline({ repeat: -1 });
    const t2 = gsap.timeline({ repeat: -1 });
    const t3 = gsap.timeline({ repeat: -1 });
    const t4 = gsap.timeline({ repeat: -1 });
    const t5 = gsap.timeline({ repeat: -1 });

    t1.fromTo(
      ".cloudGroup1",
      { x: gsap.utils.random(startPoint, startPoint - 400, 400, true) },
      { x: endPoint }
    );
    t2.fromTo(
      ".cloudGroup2",
      { x: gsap.utils.random(startPoint, startPoint - 400, 400, true) },
      { x: endPoint }
    );
    t3.fromTo(
      ".cloudGroup3",
      { x: gsap.utils.random(startPoint, startPoint - 400, 400, true) },
      { x: endPoint }
    );
    t4.fromTo(".cloudGroup4", { x: startPoint - width * 0.5 }, { x: endPoint });
    t5.fromTo(".cloudGroup5", { x: startPoint - width * 1 }, { x: endPoint });
  }, [width]);

  return (
    <S.MAbox>
      <S.CloudTitleImg className="cloudTitle" src={cloudTitle} />
      <S.CloudCloumn>
        <S.CloudImg className="firstCloud" src={cloud9} />
        <S.CloudImg className="firstCloud" src={empty} />
        <S.CloudImg className="firstCloud" src={cloud2} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="firstCloud" src={cloud5} />
        <S.CloudImg className="firstCloud" src={empty} />
        <S.CloudImg className="firstCloud" src={cloud4} />
        <S.CloudImg className="firstCloud" src={cloud1} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="firstCloud" src={cloud8} />
        <S.CloudImg className="firstCloud" src={cloud7} />
        <S.CloudImg className="firstCloud" src={empty} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="slowCloud" src={cloud10} />
        <S.CloudImg className="slowCloud" src={cloud7} />
        <S.CloudImg className="slowCloud" src={empty} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="slowCloud" src={cloud3} />
        <S.CloudImg className="slowCloud" src={cloud10} />
        <S.CloudImg className="slowCloud" src={empty} />
        <S.CloudImg className="slowCloud" src={cloud1} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="slowCloud" src={cloud7} />
        <S.CloudImg className="slowCloud" src={empty} />
        <S.CloudImg className="slowCloud" src={cloud5} />
        <S.CloudImg className="slowCloud" src={cloud2} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup1" src={cloud4} />
        <S.CloudImg className="cloudGroup1" src={cloud10} />
        <S.CloudImg className="cloudGroup1" src={cloud8} />
        <S.CloudImg className="cloudGroup1" src={empty} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup1" src={cloud5} />
        <S.CloudImg className="cloudGroup1" src={empty} />
        <S.CloudImg className="cloudGroup1" src={cloud3} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup2" src={cloud4} />
        <S.CloudImg className="cloudGroup2" src={cloud6} />
        <S.CloudImg className="cloudGroup2" src={cloud7} />
        <S.CloudImg className="cloudGroup2" src={empty} />
        <S.CloudImg className="cloudGroup2" src={cloud2} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup2" src={empty} />
        <S.CloudImg className="cloudGroup2" src={cloud7} />
        <S.CloudImg className="cloudGroup2" src={empty} />
        <S.CloudImg className="cloudGroup2" src={cloud2} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup3" src={cloud4} />
        <S.CloudImg className="cloudGroup3" src={cloud9} />
        <S.CloudImg className="cloudGroup3" src={cloud1} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup3" src={cloud8} />
        <S.CloudImg className="cloudGroup3" src={cloud5} />
        <S.CloudImg className="cloudGroup3" src={empty} />
        <S.CloudImg className="cloudGroup3" src={cloud3} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup4" src={cloud5} />
        <S.CloudImg className="cloudGroup4" src={empty} />
        <S.CloudImg className="cloudGroup4" src={cloud1} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup5" src={cloud6} />
        <S.CloudImg className="cloudGroup5" src={cloud7} />
        <S.CloudImg className="cloudGroup4" src={empty} />
        <S.CloudImg className="cloudGroup4" src={empty} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup4" src={cloud3} />
        <S.CloudImg className="cloudGroup4" src={empty} />
        <S.CloudImg className="cloudGroup5" src={cloud4} />
        <S.CloudImg className="cloudGroup5" src={cloud2} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup5" src={cloud6} />
        <S.CloudImg className="cloudGroup5" src={cloud10} />
        <S.CloudImg className="cloudGroup4" src={empty} />
      </S.CloudCloumn>
    </S.MAbox>
  );
}

export default MainAnimation;
