import { useState, useEffect } from "react";

function useScroll() {
  const [firstScroll, setFirstScroll] = useState(0); // 스크롤이 일어나기전에는 animation효과를 안주기 위함.
  const [scrolling, setScrolling] = useState(0);
  const onScroll = () => {
    const { scrollTop } = document.documentElement; // 현재 스크롤바 위치
    scrollTop > 50 ? setScrolling(1) : setScrolling(0);
    setFirstScroll(1);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return [scrolling, firstScroll];
}

export default useScroll;
