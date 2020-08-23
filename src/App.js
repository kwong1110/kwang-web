import React from "react";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import MyNote from "./pages/MyNote";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./containers";

const bodySize = {
  margin: "auto",
  padding: "0 1.5rem 0 1.5rem",
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
        <Route path="/MyNote" component={MyNote} exact />
      </Contant>
    </ThemeProvider>
  );
}

export default App;
