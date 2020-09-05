import React from "react";
import * as S from "./style";
import { GoPlus, GoTrashcan } from "react-icons/go";

function iconHandler(icon) {
  switch (icon) {
    case "plus":
      return <GoPlus />;
    case "delete":
      return <GoTrashcan />;
    default:
      return;
  }
}

function Btn({ children, color, size, outline, fullWidth, icon, ...rest }) {
  if (icon) {
    return (
      <S.IconBtn color={color} outline={outline}>
        {iconHandler(icon)}
      </S.IconBtn>
    );
  }
  return (
    <S.StyledBtn
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </S.StyledBtn>
  );
}

Btn.defaultProps = {
  color: "primary",
  size: "medium",
  fullWidth: false,
  outline: false,
};

export default Btn;
