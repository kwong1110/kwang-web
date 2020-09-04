import React from "react";
import { Route } from "react-router-dom";
import { Main, About, Project, MyNote, Contact } from "./pages";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./organisms";
import theme from "./commons/Themes";

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
        <Route path="/" component={Main} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Project" component={Project} exact />
        <Route path="/MyNote" component={MyNote} exact />
        <Route path="/Contact" component={Contact} exact />
      </Contant>
    </ThemeProvider>
  );
}

export default App;
