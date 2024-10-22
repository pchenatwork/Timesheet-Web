// Ref : https://learn.microsoft.com/en-us/entra/external-id/customers/tutorial-single-page-app-react-sign-in-prepare-app

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from '@azure/msal-browser';

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

const loggerCallback = (level: LogLevel, message: string, containsPii: boolean) => {
    if (containsPii) {
        return
    }
    switch (level) {
        case LogLevel.Error:
            console.error(message)
            return
        case LogLevel.Info:
            // console.info(message)
            return
        case LogLevel.Verbose:
            console.debug(message)
            return
        case LogLevel.Warning:
            console.warn(message)
            return
    }
}
const msalConfig_B2C = {
    auth: {
        clientId: process.env.REACT_APP_B2C_CLIENT_ID, // 'Enter_the_Application_Id_Here', // This is the ONLY mandatory field that you need to supply.
        authority: process.env.REACT_APP_B2C_AUTHORITY, // 'https://Enter_the_Tenant_Subdomain_Here.ciamlogin.com/', // Replace the placeholder with your tenant subdomain 
        redirectUri: process.env.REACT_APP_B2C_REDIRECT_URI, // '/', // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
        postLogoutRedirectUri: process.env.REACT_APP_B2C_POST_LOGOUT_REDIRECT_URI, // '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
        knownAuthorities: [process.env.REACT_APP_B2C_KNOWN_AUTHORITY],
    },
    cache: {
        cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: loggerCallback,
        },
    },
};

const msalConfig_AAD = {
    auth: {
        clientId: process.env.REACT_APP_AAD_CLIENT_ID as string,
        authority: process.env.REACT_APP_AAD_AUTHORITY,
        redirectUri: process.env.REACT_APP_AAD_REDIRECT_URI,
        postLogoutRedirectUri: process.env.REACT_APP_AAD_POST_LOGOUT_REDIRECT_URI,
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false
    },
    system: {
        loggerOptions: {
            loggerCallback: loggerCallback
        }
    }
};


const msalConfig_B2CPasswordReset = {
    auth: {
        ...msalConfig_B2C.auth,
        authority: process.env.REACT_APP_B2C_PASSWORD_RESET_AUTHORITY
    },
    cache: msalConfig_B2C.cache,
    system: msalConfig_B2C.system
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest_AAD = {
    scopes: (process.env.REACT_APP_AAD_SCOPES as string).split(',') , // [],
};
const loginRequest_B2C = {
    scopes: (process.env.REACT_APP_B2C_SCOPES as string).split(',')
}

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
// export const silentRequest = {
//     scopes: ["openid", "profile"],
//     loginHint: "example@domain.net"
// };

const getConfig = (aadConfig: any, b2cConfig: any): any => {
    switch (process.env.REACT_APP_IDENTITY_PROVIDER) {
        case 'AAD':
            return aadConfig
        case 'B2C':
            return b2cConfig
        default:
            throw new Error(`'${process.env.REACT_APP_IDENTITY_PROVIDER}' is not a recognized identity provider.`)
    }
}

export const getMsalConfig = () => getConfig(msalConfig_AAD, msalConfig_B2C)

export const getLoginRequest = () => getConfig(loginRequest_AAD, loginRequest_B2C)

export const getScopes = () => getConfig(loginRequest_AAD.scopes, loginRequest_B2C.scopes)

export const getB2CPasswordResetMsalConfig = () => msalConfig_B2CPasswordReset