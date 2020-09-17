import React from "react";
import theme from "../commons/Themes";
import styled from "styled-components";

const StyledDiv = styled.div`
  ${theme.interval.box};
  display: flex;
  border-radius: 10px;
  ${theme.boxShadow};
`;

function ShadowDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ShadowDiv;
