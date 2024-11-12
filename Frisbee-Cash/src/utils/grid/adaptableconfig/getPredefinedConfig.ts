import {
  PredefinedConfig,
  TeamSharingOptions,
} from "@adaptabletools/adaptable-react-aggrid";
import { ColDef, ColGroupDef } from "@ag-grid-community/core";
import { CONFIG_REVISION } from "../gridRevisionNumber";
import { DASHBOARD_MODULE_BUTTONS } from "./gridConfigConstants";

const extractColumnFields = (columns: (ColDef | ColGroupDef)[]): string[] => {
  const fields: string[] = [];

  columns.forEach((col) => {
    if ("children" in col && col.children) {
      fields.push(...extractColumnFields(col.children));
    } else if ("field" in col && col.field) {
      fields.push(col.field);
    }
  });

  return fields;
};

const getPredefinedConfig = (
  columns: (ColDef | ColGroupDef)[]
): PredefinedConfig | undefined => {
  if (columns.length === 0) {
    return undefined;
  }

  const columnFields = extractColumnFields(columns);

  const predefinedConfig: PredefinedConfig = {
    Dashboard: {
      Revision: CONFIG_REVISION,
      DashboardTitle: " ",
      Tabs: [
        {
          Name: "Layouts",
          Toolbars: ["Layout"],
        },
      ],
      ModuleButtons: DASHBOARD_MODULE_BUTTONS,
    },
    StatusBar: {
      Revision: CONFIG_REVISION,
      StatusBars: [
        {
          Key: "Center Panel",
          StatusBarPanels: ["Theme"],
        },
      ],
    },
    Layout: {
      Revision: CONFIG_REVISION,
      CurrentLayout: "Default",
      Layouts: [
        {
          Name: "Default",
          Columns: columnFields,
        },
      ],
    },
  };

  return predefinedConfig;
};

export const commonTeamSharingOptions = (
  adaptableId: string
): TeamSharingOptions => ({
  enableTeamSharing: true,
  loadSharedEntities: async () => {
    const data = localStorage.getItem(adaptableId);
    if (!data) {
      return [];
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },
  persistSharedEntities: (entries) => {
    localStorage.setItem(adaptableId, JSON.stringify(entries));
    return Promise.resolve();
  },
});

export default getPredefinedConfig;
