import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const redirectedPath = new URLSearchParams(window.location.search).get("p");

if (redirectedPath) {
  window.history.replaceState(null, "", redirectedPath);
}

createRoot(document.getElementById("root")!).render(<App />);
