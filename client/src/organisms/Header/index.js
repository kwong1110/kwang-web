import React from "react";
import logo from "../../images/logo.svg";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import useScroll from "../../hooks/useScroll";
import * as S from "./style";
import { Btn } from "../../components";

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
          <S.MenuName>
            <Link to="/about">About</Link>
          </S.MenuName>
          <S.MenuName>
            <Link to="/project">Project</Link>
          </S.MenuName>
          <S.MenuName>
            <Link to="/mynote">Mynote</Link>
          </S.MenuName>
          <S.MenuName>
            <Link to="/contact">Contact</Link>
          </S.MenuName>
          <S.SideDiv>
            <Btn size="small" onClick={logoutHandler}>
              로그아웃
            </Btn>
          </S.SideDiv>
        </S.MenuDiv>
      </S.NavDiv>
    </S.StyledHeader>
  );
}

export default React.memo(Header);
