import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10rem;
  background-color: rgba(255 255 255 0.9);
  backdrop-filter: blur(2px);
  ${({ scrolling }) =>
    scrolling &&
    css`
      height: auto;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
    `};
`;

export const NavDiv = styled.div`
  display: flex;
  height: inherit;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.bodySize.maxWidth};
  margin: ${({ theme }) => theme.bodySize.margin};
  padding: ${({ theme }) => theme.bodySize.padding};
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 5rem;
  cursor: pointer;
`;

export const Anchor = styled.a`
  & + & {
    margin-left: 3rem;
  }
`;
