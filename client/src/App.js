import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import theme from "./commons/Themes";
import styled, { ThemeProvider } from "styled-components";
import Auth from "./hoc/auth";
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
            <Route path="/" component={Auth(Main, null)} exact />
            <Route path="/about" component={Auth(About, null)} exact />
            <Route
              path="/posts/project"
              component={Auth(Project, null)}
              exact
            />
            <Route path="/posts/myNote" component={Auth(MyNote, null)} exact />
            <Route path="/contact" component={Auth(Contact, null)} exact />
            <Route path="/login" component={Auth(Login, false)} exact />
            <Route component={NotFound} />
          </Switch>
        </Contant>
      </ThemeProvider>
    </Router>
  );
}

export default App;
