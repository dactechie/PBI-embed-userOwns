// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope Base of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes

// URL used for initiating authorization request
export const authorityUrl: string = "https://login.microsoftonline.com/5cb57d47-3715-4e2c-8caa-5ede443812a9/";
// click on endpoints here : https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Overview/appId/536d26d2-2982-4ae0-912a-004cdc8f94e6/isMSAApp~/false

// End point URL for Power BI API
export const powerBiApiUrl: string = "https://api.powerbi.com/";

// Scope for securing access token
export const scopeBase: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "536d26d2-2982-4ae0-912a-004cdc8f94e6";

// Id of the workspace where the report is hosted
export const workspaceId: string = "1e0a5412-0a3d-4f2c-be06-8bc26c350c7a";

// Id of the report to be embedded
export const reportId: string = "e4666cb9-579e-4e4f-9264-cb06dcdec0d8";
