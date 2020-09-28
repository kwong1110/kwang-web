import styled from "styled-components";
import theme from "../../commons/Themes";

export const AboutBox = styled.div`
  ${theme.interval.pageBottom};
`;

export const ProfileBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ProfileImg = styled.img`
  width: auto;
  box-shadow: 0px 6px 3px -2px ${theme.palette.secondary};
`;

export const SkillImg = styled.img`
  width: auto;
  height: 5rem;
  & + & {
    margin-left: 1rem;
  }
`;

export const SubTitle2 = styled.h4`
  margin: 1rem;
  color: ${theme.palette.decoGray[2]};
  text-align: center;
`;

export const KeywardBox = styled.div`
  width: 100%;
  height: auto;
  ${theme.interval.atom};
`;

export const Keyward = styled.div`
  display: inline;
  position: relative;
  left: 55px;
  padding: 0.7rem;
  border-radius: 10px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${theme.palette.secondary};
  text-align: center;
  box-shadow: 0px 7px 17px rgba(0, 21, 64, 0.13);
  /* 스크롤 시 메뉴바 뒤에 오기 위함. */
  z-index: -1;
`;

export const KeywardContant = styled.div`
  position: relative;
  white-space: pre;
  line-height: 150%;
  font-size: 1.05rem;
  top: -10px;
  left: 0px;
  padding: 2.5rem 1.2rem 1.2rem 1.2rem;
  border: 3px solid ${theme.palette.secondary};
  border-radius: 10px;
  box-shadow: 0px 7px 17px rgba(0, 21, 64, 0.13);
  z-index: -2;
`;
