import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      {/* App.tsx 진입 */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
