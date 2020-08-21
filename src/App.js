import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import MyNote from "./pages/MyNote";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/MyNote" component={MyNote} exact />
    </>
  );
}

export default App;
