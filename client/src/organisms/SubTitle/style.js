import styled from "styled-components";
import theme from "../../commons/Themes";

export const StyledSubTitle = styled.h3`
  ${theme.interval.bottomLine};
  color: ${theme.palette.emphasis[2]};
  border-bottom: 3px solid ${theme.palette.emphasis[0]};
`;

export const StyledActionSubTitle = styled.h4`
  ${theme.interval.bottomLine};
  color: ${theme.palette.emphasis[1]};
  border-bottom: 3px solid ${theme.palette.emphasis[0]};
`;
