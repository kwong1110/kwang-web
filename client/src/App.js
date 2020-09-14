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
} from "./pages";

const Contant = styled.div`
  margin: ${theme.bodySize.margin};
  padding: ${theme.bodySize.padding};
  padding-top: 9rem;
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
          <Route path="/:create" component={PostCreate} />
          <Route component={NotFound} />
        </Switch>
      </Contant>
    </ThemeProvider>
  );
}

export default App;
