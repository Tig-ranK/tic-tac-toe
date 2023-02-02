import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
   <StrictMode>
      <GlobalStyle />
      <App />
   </StrictMode>
);
