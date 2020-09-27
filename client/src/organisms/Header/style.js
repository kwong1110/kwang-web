import styled, { keyframes, css } from "styled-components";
import theme from "../../commons/Themes";

const downMove = keyframes`
    from {
      height: 8rem;
    }
    to {
      height: 4.5rem;
    }
`;

const upMove = keyframes`
    from {
      height: 4.5rem;
    }
    to {
      height: 8rem;
    }
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  background-color: rgba(255 255 255 0.9);
  backdrop-filter: blur(3px);
  z-index: 99;

  animation-name: ${upMove};
  /* 첫 스크롤 시에는 애니메이션이 없도록 name만 따로 빼주었다.*/
  /* firstScroll이 없을 경우엔 첫 렌더링 시에도 animation이 발동하고 */
  /* name과 같이 firstscroll && 안에 넣어주게되면 첫animation시 깜빡임이 발생. */

  ${({ firstScroll }) =>
    firstScroll &&
    css`
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    `}

  ${({ scrolling }) =>
    scrolling &&
    css`
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
      animation-name: ${downMove};
    `};
`;

export const NavDiv = styled.div`
  display: flex;
  height: inherit;
  justify-content: space-between;
  max-width: ${theme.bodySize.maxWidth};
  margin: ${theme.bodySize.margin};
  padding: ${theme.bodySize.padding};
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.decoGray[3]};
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.05rem;

  ${({ scrolling }) =>
    scrolling &&
    css`
      font-weight: 500;
    `};
`;

export const SideDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const MainLogo = styled.img`
  width: auto;
  height: 2.5rem;
  cursor: pointer;
`;

export const MenuLink = styled.div`
  padding: 0.5rem;
  border-bottom: ${theme.palette.backPrimary};
  ${theme.interval.menu};

  &:hover {
    font-weight: 500;
    border-bottom: 5px solid ${theme.palette.backPrimary};
    border-radius: 5px;
    transition: all linear 0.3s;
  }
  &:not(:hover) {
    transition: all linear 0.5s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 500;
      border-radius: 5px;
      border-bottom: 5px solid ${theme.palette.backPrimary};
    `};
`;
