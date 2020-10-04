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
    const startPoint = -(width * 3);

    gsap.fromTo(
      ".firstCloud",
      { x: gsap.utils.random(width - width * 0.25, width, 200, true) },
      { x: width * 2.5, duration: cloudDuration, ease: "none", inherit: false }
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
      startAt: startPoint,
      duration: cloudDuration,
    });

    const t1 = gsap.timeline({ repeat: -1 });
    const t2 = gsap.timeline({ repeat: -1 });
    const t3 = gsap.timeline({ repeat: -1 });
    const t4 = gsap.timeline({ repeat: -1 });
    const t5 = gsap.timeline({ repeat: -1 });

    t1.fromTo(
      ".cloudGroup1",
      { x: gsap.utils.random(startPoint, startPoint - 200, true) },
      { x: width * 1.5 }
    ).fromTo(
      ".cloudGroup2",
      { x: gsap.utils.random(startPoint, startPoint - 200, true) },
      { x: width * 1.5 },
      "<-20"
    );
    t3.fromTo(
      ".cloudGroup3",
      { x: gsap.utils.random(startPoint, startPoint - 200, true) },
      { x: width * 1.5 }
    );
    t4.fromTo(
      ".randomCloud1",
      {
        x: startPoint,
        scale: gsap.utils.random(0.5, 1.5, true),
      },
      { x: width * 1.5 }
    );
    t5.fromTo(
      ".randomCloud2",
      {
        x: startPoint,
        scale: gsap.utils.random(0.5, 1.5, true),
      },
      { x: width * 1.5 }
    );
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
        <S.CloudImg className="firstCloud" src={cloud6} />
        <S.CloudImg className="firstCloud" src={cloud4} />
        <S.CloudImg className="firstCloud" src={cloud1} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="firstCloud" src={cloud8} />
        <S.CloudImg className="firstCloud" src={cloud7} />
        <S.CloudImg className="firstCloud" src={cloud9} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup1" src={cloud4} />
        <S.CloudImg className="cloudGroup1" src={cloud10} />
        <S.CloudImg className="cloudGroup1" src={cloud8} />
        <S.CloudImg className="cloudGroup1" src={cloud1} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup1" src={cloud5} />
        <S.CloudImg className="cloudGroup1" src={cloud4} />
        <S.CloudImg className="cloudGroup1" src={cloud3} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="cloudGroup2" src={cloud6} />
        <S.CloudImg className="cloudGroup2" src={cloud7} />
        <S.CloudImg className="cloudGroup2" src={cloud10} />
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
        <S.CloudImg className="randomCloud1" src={cloud5} />
        <S.CloudImg className="cloudGroup3" src={empty} />
        <S.CloudImg className="randomCloud1" src={cloud7} />
      </S.CloudCloumn>
      <S.CloudCloumn>
        <S.CloudImg className="randomCloud2" src={cloud6} />
        <S.CloudImg className="randomCloud2" src={cloud10} />
      </S.CloudCloumn>
    </S.MAbox>
  );
}

export default MainAnimation;
