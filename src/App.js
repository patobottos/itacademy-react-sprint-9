import "./styles/index.css";
import React from "react";
import Provider from "./application/Provider";
import Router from "./application/router";

const App = () => {
  return (
    <div className="App">
      <Provider>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
