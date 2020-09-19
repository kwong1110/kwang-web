import React from "react";
import { Route, Switch } from "react-router-dom";
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
  PostCreate,
  PostEdit,
} from "./pages";

const Contant = styled.div`
  margin: ${theme.bodySize.margin};
  margin-top: 8rem;
  padding: ${theme.bodySize.padding};
  max-width: ${theme.bodySize.maxWidth};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Contant>
        <Switch>
          <Route path="/" component={Auth(Main, null)} exact />
          <Route path="/about" component={Auth(About, null)} exact />
          <Route path="/posts/project" component={Auth(Project, null)} exact />
          <Route path="/posts/mynote" component={Auth(MyNote, null)} exact />
          <Route path="/contact" component={Auth(Contact, null)} exact />
          <Route path="/login" component={Auth(Login, false)} exact />
          <Route
            path="/posts/:type/create"
            component={Auth(PostCreate, true)}
            exact
          />
          <Route
            path="/posts/:type/edit/:pNo"
            component={Auth(PostEdit, true)}
            exact
          />
          <Route path="*" component={Auth(NotFound, null)} />
        </Switch>
      </Contant>
    </ThemeProvider>
  );
}

export default App;
