import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { getMsalConfig, msalInstance } from "./authConfig";

//export const msalInstance = new PublicClientApplication(getMsalConfig());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// 2024/10/23
// <StrictMode> : https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/3418
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
