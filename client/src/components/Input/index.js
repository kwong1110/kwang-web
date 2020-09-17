import React from "react";
import * as S from "./style";

function Input({ type, name, value, ...rest }) {
  return (
    <S.StyledInput
      type={type}
      name={name}
      value={value}
      {...rest}
      autocomplete="off"
    ></S.StyledInput>
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
