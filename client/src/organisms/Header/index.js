import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./style";
import { Btn } from "../../components";
import useScroll from "../../hooks/useScroll";
import { logoutUser } from "../../modules/actions/user";

import logo from "../../images/logo.svg";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);

  const [scrolling, firstScroll] = useScroll();
  const [isLogout, setIsLogout] = useState(false);

  const goHome = () => {
    history.push("/");
  };

  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        alert("로그아웃 되었습니다!");
        setIsLogout(true);
        goHome();
      } else {
        alert(response.payload.message);
      }
    });
  };

  const scrollReset = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <S.StyledHeader scrolling={scrolling} firstScroll={firstScroll}>
      <S.NavDiv>
        <S.SideDiv>
          <S.MainLogo src={logo} alt="logo" onClick={goHome} />
        </S.SideDiv>
        <S.MenuDiv scrolling={scrolling} onClick={scrollReset}>
          <S.MenuName>
            <Link to="/about">About</Link>
          </S.MenuName>
          <S.MenuName>
            <Link to="/posts/project">Project</Link>
          </S.MenuName>
          <S.MenuName>
            <Link to="/posts/mynote">Mynote</Link>
          </S.MenuName>
          <S.MenuName>
            <Link to="/contact">Contact</Link>
          </S.MenuName>
          {userData && userData.isAuth && !isLogout && (
            <S.SideDiv>
              <Btn size="small" onClick={logoutHandler}>
                로그아웃
              </Btn>
            </S.SideDiv>
          )}
        </S.MenuDiv>
      </S.NavDiv>
    </S.StyledHeader>
  );
}

export default React.memo(Header);
