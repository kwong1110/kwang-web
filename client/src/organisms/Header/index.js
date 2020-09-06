import React from "react";
import logo from "../../images/logo.svg";
import { useHistory } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import * as S from "./style";

function Header() {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const [scrolling, firstScroll] = useScroll();

  return (
    <S.StyledHeader scrolling={scrolling} firstScroll={firstScroll}>
      <S.NavDiv>
        <S.SideDiv>
          <S.MainLogo src={logo} alt="logo" onClick={goHome} />
        </S.SideDiv>
        <S.MenuDiv>
          <S.Anchor href="/about">About</S.Anchor>
          <S.Anchor href="/project">Project</S.Anchor>
          <S.Anchor href="/myNote">MyNote</S.Anchor>
          <S.Anchor href="/contact">Contact</S.Anchor>
        </S.MenuDiv>
      </S.NavDiv>
    </S.StyledHeader>
  );
}

export default Header;
