import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const Hats = () => {
  return <div>Hats Component</div>
}

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </switch>
    </div>
  );
}

export default App;
