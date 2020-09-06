import React from "react";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import theme from "./commons/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./organisms";
import { Main, About, Project, MyNote, Contact, Login } from "./pages";

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
          <Route path="/" component={Main} exact />
          <Route path="/about" component={About} exact />
          <Route path="/project" component={Project} exact />
          <Route path="/myNote" component={MyNote} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/login" component={Login} exact />
        </Contant>
      </ThemeProvider>
    </Router>
  );
}

export default App;
