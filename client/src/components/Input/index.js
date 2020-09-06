import React from "react";
import * as S from "./style";

function Input({ type, name, value, onChange, placeholder }) {
  return (
    <S.Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></S.Input>
  );
}

Input.defaultProps = {
  type: "text",
};

export default Input;
