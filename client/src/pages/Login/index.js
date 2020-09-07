import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import { SubTitle } from "../../organisms";
import { Input, Btn, DefaultDiv } from "../../components";
import useInputs from "../../hooks/useInputs";
import { loginUser } from "../../modules/actions/user";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, onChange, reset] = useInputs(initialState);
  const { email, password } = form;

  return (
    <DefaultDiv>
      <S.loginForm onSubmit={loginHandler}>
        <SubTitle titleName={Login} />
        <Input
          name="email"
          value={email}
          onChange={onChange}
          placeholder="아이디(이메일)를 입력해주세요."
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요."
        />
        <Btn fullWidth type="submit">
          로그인
        </Btn>
      </S.loginForm>
    </DefaultDiv>
  );
}

export default Login;
