import React from "react";
import "./styles/App.scss";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { HomesGrid } from "./pages/HomesGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <About />
        <HomesGrid />
        <section className="section-four"></section>
      </div>
    </div>
  );
}

export default App;
