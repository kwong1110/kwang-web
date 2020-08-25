import React from "react";
import { Route } from "react-router-dom";
import { Main, About, Project, MyNote, Contact } from "./pages";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./containers";

const bodySize = {
  margin: "auto",
  padding: "0 4rem 0 4rem",
  maxWidth: "85rem",
};

const Contant = styled.div`
  margin: ${bodySize.margin};
  padding: ${bodySize.padding};
  padding-top: 11rem;
  max-width: ${bodySize.maxWidth};
`;

function App() {
  return (
    <ThemeProvider theme={{ bodySize }}>
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
