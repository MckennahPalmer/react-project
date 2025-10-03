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

// helper to show mounting status or errors on the page (for users without DevTools)
function ensureStatusContainer() {
  var id = "react-status-container";
  var el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    el.style.position = "fixed";
    el.style.right = "12px";
    el.style.top = "12px";
    el.style.zIndex = 9999;
    el.style.padding = "8px 12px";
    el.style.borderRadius = "6px";
    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
    el.style.fontFamily = "system-ui, -apple-system, sans-serif";
    el.style.fontSize = "13px";
    document.body.appendChild(el);
  }
  return el;
}

window.addEventListener("error", function (ev) {
  try {
    var c = ensureStatusContainer();
    c.style.background = "#ffdddd";
    c.style.color = "#600";
    c.textContent =
      "Runtime error: " + (ev && ev.message ? ev.message : ev.toString());
  } catch (e) {
    /* ignore */
  }
});

try {
  var rootEl = document.getElementById("root");
  ReactDOM.render(<App />, rootEl);
  try {
    var c = ensureStatusContainer();
    c.style.background = "#ddffdd";
    c.style.color = "#060";
    c.textContent = "React mounted ✔️";
  } catch (e) {
    /* ignore */
  }
} catch (e) {
  try {
    if (rootEl)
      rootEl.innerHTML =
        '<pre style="white-space:pre-wrap;color:#900">Render failed: ' +
        (e && e.stack ? e.stack : e) +
        "</pre>";
    var c = ensureStatusContainer();
    c.style.background = "#ffdddd";
    c.style.color = "#600";
    c.textContent = "Render failed: " + (e && e.message ? e.message : e);
  } catch (err) {
    /* ignore */
  }
}
