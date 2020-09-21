import React from "react";
import theme from "../commons/Themes";
import styled from "styled-components";

const StyledDiv = styled.div`
  ${theme.interval.box};
  ${theme.boxShadow};
  display: flex;
  border-radius: 10px;
`;

function ShadowDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ShadowDiv;
