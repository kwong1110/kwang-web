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

  const user = useSelector((state) => state.user);

  const [scrolling, firstScroll] = useScroll();
  const [IsLogout, setIsLogout] = useState(false);

  const goHome = () => {
    history.push("/");
  };

  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        alert("로그아웃 되었습니다!");
        setIsLogout(true);
      } else {
        alert(response.payload.message);
      }
    });
  };

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
          {user.userData && user.userData.isAuth && !IsLogout && (
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

export default Header;
