import React from "react";
import ReactDOM from "react-dom/client";
import { LicenseManager } from "@ag-grid-enterprise/core";
import "@adaptabletools/adaptable-react-aggrid/base.css";
import "@adaptabletools/adaptable-react-aggrid/index.css";
import "@adaptabletools/adaptable-react-aggrid/themes/dark.css";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import App from "./App";

LicenseManager.setLicenseKey("aggrid license here");
export const ADAPTABLE_LICENSE_KEY = "adaptable license here";

export let config: any;

const loadGlobals = async (): Promise<void> => {
  const mockFetchConfig = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Config loaded");
        resolve();
      }, 1000);
    });
  };

  config = await mockFetchConfig();
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

loadGlobals().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
