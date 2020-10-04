import styled from "styled-components";

export const MAbox = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #aee3fc 80%, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CloudCloumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloudImg = styled.img`
  width: auto;
  height: auto;
  & + & {
    margin-top: 5%;
  }
`;

export const CloudTitleImg = styled(CloudImg)`
  position: absolute;
  z-index: 98;
`;
