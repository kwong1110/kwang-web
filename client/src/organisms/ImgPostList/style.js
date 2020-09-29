import styled from "styled-components";
import theme from "../../commons/Themes";

export const GridContainer = styled.div`
  display: grid;
  justify-content: space-between;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: repeat(4, 24%);
  ${theme.interval.pageBottom};
`;
