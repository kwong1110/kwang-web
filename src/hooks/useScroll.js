import { useState, useEffect } from "react";

function useScroll() {
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement; // 현재 스크롤바 위치
      scrollTop > 50 ? setScrolling(1) : setScrolling(0);
    });
  }, [scrolling]);

  return scrolling;
}

export default useScroll;
