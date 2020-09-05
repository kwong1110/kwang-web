import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import theme from "../../commons/Themes";

const colorStyles = css`
  ${({ color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.2, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.8rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

export const StyledBtn = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  & + & {
    ${theme.interval.btn};
  }

  ${sizeStyles}
  ${colorStyles}
  ${fullWidthStyle}
`;

export const IconBtn = styled.button`
  display: inline-flex;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  & + & {
    ${theme.interval.btn};
  }

  ${colorStyles}
`;
