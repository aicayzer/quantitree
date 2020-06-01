import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import XML from "./sitemap.xml";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path={"/sitemap.xml"} component={XML} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
