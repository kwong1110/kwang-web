import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import useInputs from "../../hooks/useInputs";
import { loginUser } from "../../modules/actions/user";
import { SubTitle } from "../../organisms";
import { Input, Btn, DefaultDiv } from "../../components";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, onChange, reset] = useInputs(initialState);
  const { email, password } = form;

  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    dispatch(loginUser(data)).then((response) => {
      // console.log(response);
      if (response.payload.success) {
        reset();
        history.push("/");
      } else {
        alert(response.payload.message);
      }
    });
  };
  return (
    <DefaultDiv>
      <S.LoginForm onSubmit={loginHandler}>
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
      </S.LoginForm>
    </DefaultDiv>
  );
}

export default Login;
