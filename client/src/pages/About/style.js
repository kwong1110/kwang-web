import styled from "styled-components";
import theme from "../../commons/Themes";

export const AboutBox = styled.div`
  ${theme.interval.pageBottom};
`;

export const ProfileBox = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & + & {
    margin-left: 5.5rem;
  }
`;
export const ProfileImg = styled.img`
  width: auto;
  box-shadow: 0px 6px 3px -2px ${theme.palette.secondary};
`;

export const SkillImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  & + & {
    margin-left: 1.8rem;
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
  top: 0.5rem;
  left: 5rem;
  padding: 0.6rem 0.9rem 0.6rem 0.9rem;
  border-radius: 10px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${theme.palette.secondary};
  text-align: center;
  box-shadow: 0px 7px 17px rgba(0, 21, 64, 0.13);
  /* 스크롤 시 메뉴바 뒤에 오기 위함. */
  z-index: 1;
`;

export const DashedBox = styled.div`
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  line-height: 150%;
  font-size: 1.05rem;
  border: 3px dashed ${theme.palette.secondary};
  border-radius: 10px;
  box-shadow: 0px 7px 17px rgba(0, 21, 64, 0.13);
  z-index: -1;
`;

export const KeywardContant = styled(DashedBox)`
  white-space: pre;
  overflow: auto;
`;

export const SkillBox = styled(DashedBox)`
  display: flex;
`;
