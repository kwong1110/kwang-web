import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  justify-content: space-between;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: repeat(2, 49%);
`;
