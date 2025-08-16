import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { BrowserRouter } from "react-router";
import GlobalStyle from "@/styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
        <GlobalStyle />
        {/* App.tsx 진입 */}
        <App />
      </BrowserRouter>
  </ThemeProvider>
  </StrictMode>
);
