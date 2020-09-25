import React from "react";
import theme from "../commons/Themes";
import styled from "styled-components";

export const StyledShadowDiv = styled.div`
  ${theme.interval.box};
  ${theme.boxShadow};
  display: flex;
  border-radius: 10px;
`;

function ShadowDiv({ children }) {
  return <StyledShadowDiv>{children}</StyledShadowDiv>;
}

export default ShadowDiv;
