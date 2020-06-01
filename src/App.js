import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
