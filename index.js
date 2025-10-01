import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

// debug helper: visible in the browser console when the bundle runs
console.log("index.js loaded");

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
