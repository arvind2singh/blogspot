import React from "react";
import {
  BrowserRouter,
  Switch
} from "react-router-dom";
import Router from'./pages/router';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router />
      </Switch>
      </BrowserRouter>
  )
}

export default App;
