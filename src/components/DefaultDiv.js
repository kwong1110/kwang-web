import React from "react";
import theme from "../commons/Themes";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.interval.box};
`;

function DefaultDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default DefaultDiv;
