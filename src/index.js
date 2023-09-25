import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MathJaxContext } from "better-react-mathjax";
const root = ReactDOM.createRoot(document.getElementById("root"));
const config = {
  "fast-preview": {
    disabled: true,
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  messageStyle: "none",
};
root.render(
  <React.StrictMode>
    <MathJaxContext
      config={config}
      version={2}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <App />
    </MathJaxContext>
  </React.StrictMode>
);
