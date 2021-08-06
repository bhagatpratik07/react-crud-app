import React from "react";
import Create from "./components/create";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Crud Applications</h2>
        <div>
          <Route path="/create" component={Create} />
          <div>
            <Route path="/read" component={Read} />
          </div>

          <Route path="/update" component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;
