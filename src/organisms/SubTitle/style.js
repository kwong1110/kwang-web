import styled from "styled-components";
import theme from "../../commons/Themes";

export const SubTitle = styled.h3`
  ${theme.interval.bottomLine};
  letter-spacing: 0.2rem;
  color: ${theme.palette.emphasis[2]};
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 3px solid ${theme.palette.emphasis[0]};
`;
