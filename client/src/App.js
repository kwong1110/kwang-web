import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import theme from "./commons/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./organisms";
import {
  Main,
  About,
  Project,
  MyNote,
  Contact,
  Login,
  NotFound,
} from "./pages";

const history = createBrowserHistory();

const Contant = styled.div`
  margin: ${theme.bodySize.margin};
  padding: ${theme.bodySize.padding};
  padding-top: 9rem;
  max-width: ${theme.bodySize.maxWidth};
`;

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Header />
        <Contant>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/about" component={About} exact />
            <Route path="/project" component={Project} exact />
            <Route path="/myNote" component={MyNote} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/login" component={Login} exact />
            <Route component={NotFound} />
          </Switch>
        </Contant>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const auth = {
  isAuthenticated: false,
  AuthenticationCheck() {},
};

function AuthenticationCheck() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth()).then((response) => {
      response.payload.isAuth;
      response.payload.isAdmin;
    });
  }, [dispatch]);

  return;
}

const logoutHandler = () => {
  axios.get("/api/users/logout").then((response) => {
    if (response.data.success) {
      alert("로그아웃 되었습니다!");
      history.push("/");
    } else {
      alert("로그아웃 실패!");
    }
  });
};

const loginHandler = (event) => {
  const dispatch = useDispatch();
  event.preventDefault();

  const body = {
    email: email,
    password: password,
  };

  dispatch(loginUser(body)).then((response) => {
    // console.log(response);
    if (response.payload.loginSuccess) {
      reset();
      history.push("/");
    } else {
      alert(response.payload.message);
    }
  });
};
