import React from "react";
import logo from "../../images/logo.svg";
import { withRouter } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

import * as S from "./style";

function Header({ history, theme }) {
  const goHome = () => {
    history.push("/");
  };

  const scrolling = useScroll();

  return (
    <S.StyledHeader theme={theme} scrolling={scrolling}>
      <S.NavDiv>
        <S.SideDiv>
          <S.MainLogo src={logo} alt="logo" onClick={goHome} />
        </S.SideDiv>
        <S.MenuDiv>
          <S.Anchor href="/">Project</S.Anchor>
          <S.Anchor href="/MyNote">MyNote</S.Anchor>
          <S.Anchor href="/">Contact</S.Anchor>
        </S.MenuDiv>
        <S.SideDiv>
          <S.MainLogo src={logo} alt="logo" />
        </S.SideDiv>
      </S.NavDiv>
    </S.StyledHeader>
  );
}

export default withRouter(Header);
