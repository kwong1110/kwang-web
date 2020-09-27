import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
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

  const currentPath = useLocation().pathname;

  const menus = [
    { name: "About", path: "/about" },
    { name: "Project", path: "/posts/project" },
    { name: "Mynote", path: "/posts/mynote" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <S.StyledHeader scrolling={scrolling} firstScroll={firstScroll}>
      <S.NavDiv>
        <S.SideDiv>
          <S.MainLogo src={logo} alt="logo" onClick={goHome} />
        </S.SideDiv>
        <S.MenuDiv scrolling={scrolling} onClick={scrollReset}>
          {menus.map((menu, index) => {
            return (
              <Link to={menu.path} key={index}>
                <S.MenuLink isActive={currentPath === menu.path ? true : false}>
                  {menu.name}
                </S.MenuLink>
              </Link>
            );
          })}
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
