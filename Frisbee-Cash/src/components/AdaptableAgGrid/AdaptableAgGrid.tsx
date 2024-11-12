import * as React from "react";
import { useMemo } from "react";
import { GridOptions } from "@ag-grid-community/core";
import { LicenseManager } from "@ag-grid-enterprise/core";
import {
  Adaptable,
  AdaptableApi,
  AdaptableButton,
  AdaptableOptions,
  CustomToolbarButtonContext,
  CustomToolPanelButtonContext,
  ToolPanelButtonContext,
} from "@adaptabletools/adaptable-react-aggrid";
import { rowData, WebFramework } from "./rowData";
import { columnDefs, defaultColDef } from "./columnDefs";
import { ADAPTABLE_LICENSE_KEY } from "../../main";
import { agGridModules } from "../../utils/grid/aggridconfig/agGridModules";

const CONFIG_REVISION = 1;

export const AdaptableAgGrid = () => {
  const gridOptions = useMemo<GridOptions<WebFramework>>(
    () => ({
      defaultColDef,
      columnDefs,
      rowData,
      sideBar: true,
      statusBar: {
        statusPanels: [
          { statusPanel: "agTotalRowCountComponent", align: "left" },
          { statusPanel: "agFilteredRowCountComponent" },
          {
            key: "Center Panel",
            statusPanel: "AdaptableStatusPanel",
            align: "center",
          },
        ],
      },

      suppressMenuHide: true,
      enableRangeSelection: true,
      enableCharts: true,
    }),
    []
  );
  const adaptableOptions = useMemo<AdaptableOptions<WebFramework>>(
    () => ({
      licenseKey: ADAPTABLE_LICENSE_KEY,
      primaryKey: "id",
      userName: "Test User",
      adaptableId: "Adaptable React Demo",
      adaptableStateKey: "adaptable_react_demo",
      settingsPanelOptions: {},
      dashboardOptions: {
        customToolbars: [
          {
            name: "GithubRepo",
            title: "Github Repo",
            showConfigureButton: false,
            toolbarButtons: [
              {
                label: "See Source Code",
                buttonStyle: {
                  variant: "raised",
                  tone: "info",
                },
                icon: {
                  src: "https://www.pngkey.com/png/full/178-1787243_github-icon-png-github-icon-white-png.png",
                  style: {
                    width: 24,
                    height: 24,
                  },
                },
                onClick: () => {
                  (window as any)
                    ?.open(
                      "https://github.com/AdaptableTools/example-adaptable-react-aggrid",
                      "_blank"
                    )
                    .focus();
                },
              },
            ],
          },
          {
            name: "CustomSettingsPanel",
            title: "Custom Settings Panel",
            showConfigureButton: false,
            toolbarButtons: [
              {
                label: "Open Custom Settings Panel",
                buttonStyle: {
                  variant: "raised",
                  tone: "accent",
                },
                onClick: (
                  _button: AdaptableButton<CustomToolbarButtonContext>,
                  context: CustomToolbarButtonContext
                ) => {
                  context.adaptableApi.settingsPanelApi.openCustomSettingsPanel(
                    "Custom Settings"
                  );
                },
              },
            ],
          },
        ],
      },
      toolPanelOptions: {
        // CUSTOM TOOLPANEL COMPONENT
        // rendered as a Button in the heading of the tool panel section
        customButtons: [
          {
            label: "Grid Filter Popup",
            icon: {
              src: "https://img.icons8.com/glyph-neue/64/000000/zoom-in.png",
            },
            buttonStyle: {
              variant: "outlined",
              // tone: 'accent',
            },
            onClick: (
              _button: AdaptableButton<ToolPanelButtonContext>,
              context: ToolPanelButtonContext
            ) => {
              context.adaptableApi.gridFilterApi.openUIEditorForGridFilter(
                'CONTAINS([language],"type")'
              );
            },
          },
        ],
      },
      predefinedConfig: {
        Dashboard: {
          Revision: CONFIG_REVISION,
          Tabs: [
            {
              Name: "Welcome",
              Toolbars: [
                "GithubRepo",
                "CustomSettingsPanel",
                "CustomQuickSearch",
              ],
            },
          ],
        },
        StatusBar: {
          Revision: CONFIG_REVISION,
          StatusBars: [
            {
              Key: "Center Panel",
              StatusBarPanels: ["Theme", "Layout"],
            },
          ],
        },
      },
    }),
    []
  );

  const adaptableApiRef = React.useRef<AdaptableApi>();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ marginBottom: 20 }}></div>
      <Adaptable.Provider
        gridOptions={gridOptions}
        adaptableOptions={adaptableOptions}
        modules={[...agGridModules]}
        onAdaptableReady={({ adaptableApi }) => {
          // save a reference to adaptable api
          adaptableApiRef.current = adaptableApi;
        }}
      >
        <div style={{ display: "flex", flexFlow: "column", height: "100vh" }}>
          <Adaptable.UI style={{ flex: "none" }} />
          <Adaptable.AgGridReact className="ag-theme-alpine" />
        </div>
      </Adaptable.Provider>
    </div>
  );
};
