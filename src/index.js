import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GraduateContextProvider } from "./context/graduate-context";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GraduateContextProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </GraduateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
