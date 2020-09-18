import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../modules/actions/user";

export default function (SpecificComponent, option, adminRoute = null) {
  // null  => 아무나 출입이 가능한 페이지
  // true  => 로그인한 유저만 출입이 가능한 페이지
  // false => 로그인한 유저는 출입 불가한 페이지

  function AuthenticationCheck(props, { ...rest }) {
    // console.log(props);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            alert("로그인이 필요합니다.");
            props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            // 관리자 접근페이지에 일반회원 접근.
            alert("관리자만 접근 가능합니다.");
            props.history.push("/");
          }
          if (!option && option !== null) {
            // 로그인 후 접근
            alert("이미 로그인이 되어있습니다.");
            props.history.push("/");
          }
        }
      });
    }, [props.history, dispatch]);

    return <SpecificComponent props={props} {...rest} />;
  }

  return AuthenticationCheck;
}
