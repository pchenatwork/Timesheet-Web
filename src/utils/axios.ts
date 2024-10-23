import { InteractionRequiredAuthError } from "@azure/msal-browser";
import axios from "axios";
import { getScopes, msalInstance } from "../authConfig";
//import { msalInstance } from "index";
//import { getImpersonationId, isImpersonating } from "./impersonationUtilities";
//import { processError } from "./processError";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
});

const getAccessToken = async () => {
  const request = {
    scopes: getScopes(),
    account: msalInstance.getAllAccounts()[0],
  };
  try {
    return (await msalInstance.acquireTokenSilent(request)).accessToken;
  } catch (silentError) {
    if (silentError instanceof InteractionRequiredAuthError) {
      try {
        await msalInstance.acquireTokenRedirect(request);
      } catch (redirectError) {
        //processError(redirectError);
        alert(`processError(redirectError);`);
      }
    } else {
      //processError(silentError);
      alert(`processError(silentError);;`);
    }
  }
  return null;
};

instance.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers["Timezone-Offset"] = new Date().getTimezoneOffset();
      const accessToken = await getAccessToken();
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        /*
        if (isImpersonating()) {
          con
          */
      }
    }
    return config;
  },
  async (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fileStreamTimeout = 60000;

export default instance;
