import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255 255 255 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.bodySize.maxWidth};
  margin: ${({ theme }) => theme.bodySize.margin};
  padding: ${({ theme }) => theme.bodySize.padding};
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideDiv = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
const MainLogo = styled.img`
  width: auto;
  height: 5rem;
  cursor: pointer;
`;

const Anchor = styled.a`
  & + & {
    margin-left: 3rem;
  }
`;

function Header({ history, theme }) {
  const goHome = () => {
    history.push("/");
  };
  return (
    <StyledHeader theme={theme}>
      <NavDiv>
        <SideDiv>
          <MainLogo src={logo} alt="logo" onClick={goHome} />
        </SideDiv>
        <MenuDiv>
          <Anchor href="/">Project</Anchor>
          <Anchor href="/MyNote">MyNote</Anchor>
          <Anchor href="/">Contact</Anchor>
        </MenuDiv>
        <SideDiv>
          <MainLogo src={logo} alt="logo" />
        </SideDiv>
      </NavDiv>
    </StyledHeader>
  );
}

export default withRouter(Header);
